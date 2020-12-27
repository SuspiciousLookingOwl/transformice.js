import fetch from "node-fetch";
import { EventEmitter } from "events";

import { ByteArray, Connection, SHAKikoo, ValueOf } from "../utils";
import {
	Channel,
	ChannelMessage,
	Friend,
	Member,
	Message,
	Player,
	Room,
	RoomMessage,
	RoomPlayer,
	Tribe,
	WhisperMessage,
} from "../structures";
import { tribulle, cipherMethods, identifiers, languages, oldIdentifiers } from "../enums";
import ClientEvents from "./Events";

interface ClientOptions {
	/**
	 * Will try to auto reconnect when disconnected if set to true (Default: `true`)
	 */
	autoReconnect?: boolean;
	language?: ValueOf<typeof languages>;
}

/**
 * Client interface for event intellisense support
 */
declare interface Client {
	/**
	 * Listens to a Client Event
	 */
	on<T extends keyof ClientEvents>(event: T, listener: ClientEvents[T]): this;
	/** @hidden */
	emit<T extends keyof ClientEvents>(event: T, ...args: Parameters<ClientEvents[T]>): boolean;
}

/**
 * Represents a client that connects to Transformice.
 *
 * @noInheritDoc
 */
class Client extends EventEmitter {
	private version!: number;
	private connectionKey!: string;
	private authClient!: number;
	private authServer!: number;
	private ports!: number[];
	private host!: string;
	private tfmID!: string;
	private token!: string;
	private identificationKeys!: number[];
	private messageKeys!: number[];
	private main!: Connection;
	private bulle!: Connection;
	private loops: Partial<{ heartbeat: NodeJS.Timeout }>;
	private tribulleID: number;
	private password: string;
	private autoReconnect: boolean;

	/**
	 * The online players when the bot log.
	 */
	onlinePlayers!: number;
	/**
	 * The client's room.
	 */
	room!: Room;
	/**
	 * The client's player.
	 */
	player!: Player;
	/**
	 * The client's ID.
	 */
	playerID!: number;
	/**
	 * The client's name.
	 */
	name: string;
	/**
	 * The client's playing time.
	 */
	playingTime!: number;
	/**
	 * The connection time.
	 */
	connectionTime!: number;
	/**
	 * The client's community code.
	 */
	community!: number;
	/**
	 * The language suggested by the server.
	 */
	language!: ValueOf<typeof languages>;
	/**
	 * The client's temporary code.
	 */
	pcode!: number;

	constructor(name: string, password: string, options?: ClientOptions) {
		super();

		this.autoReconnect = options?.autoReconnect ?? true;
		this.language = options?.language || "en";

		this.loops = {};
		this.tribulleID = 0;
		this.name = name;
		this.password = password;
	}

	/**
	 *  Wait for specific event to be emitted
	 */
	private waitFor<T extends keyof ClientEvents>(eventName: T, timeout = 5000) {
		return new Promise<Parameters<ClientEvents[T]>>((resolve, reject) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const listener = (...args: any) => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				resolve(args);
			};

			this.once(eventName, listener);
			setTimeout(() => {
				this.removeListener(eventName, listener);
				reject(new Error("Timed out"));
			}, timeout);
		});
	}

	/**
	 * Handles the old packets and emits events.
	 */
	private handleOldPacket(conn: Connection, ccc: number, data: string[]) {
		if (ccc === oldIdentifiers.roomPlayerLeft) {
			const player = this.room.getPlayer(+data[0] as number);
			if (player) {
				this.room.removePlayer(player);
				this.emit("roomPlayerLeft", player);
			}
		}
		this.emit("rawOldPacket", conn, ccc, data);
	}

	/**
	 * Handles the known packets and emits events.
	 */
	private handlePacket(conn: Connection, packet: ByteArray) {
		const ccc = packet.readUnsignedShort();
		if (ccc == identifiers.oldPacket) {
			const data = packet.readUTF().split(String.fromCharCode(1));
			const a = data.splice(0, 1)[0];
			const ccc = (a.charCodeAt(0) << 8) | a.charCodeAt(1);
			this.handleOldPacket(conn, ccc, data);
		} else if (ccc == identifiers.handshakeOk) {
			this.onlinePlayers = packet.readUnsignedInt();
			this.language = packet.readUTF() as ValueOf<typeof languages>;
			packet.readUTF(); // country;
			this.authServer = packet.readUnsignedInt();

			this.setSystemInfo("en", "Linux", "LNX 29,0,0,140");
			this.startHeartbeat();
		} else if (ccc == identifiers.loginReady) {
			this.emit("loginReady");
		} else if (ccc == identifiers.fingerprint) {
			conn.fingerprint = packet.readByte();
		} else if (ccc == identifiers.bulleConnection) {
			const timestamp = packet.readUnsignedInt();
			const playerId = packet.readUnsignedInt();
			const pcode = packet.readUnsignedInt();
			const host = packet.readUTF();
			packet
				.readUTF()
				.split("-")
				.map((port) => ~~port); // port

			if (this.bulle && this.bulle.open) this.bulle.close();

			this.bulle = new Connection(this.identificationKeys, this.messageKeys);
			this.bulle.connect(host, this.ports[0]);
			this.bulle.on("connect", () => {
				this.bulle.send(
					identifiers.bulleConnection,
					new ByteArray()
						.writeUnsignedInt(timestamp)
						.writeUnsignedInt(playerId)
						.writeUnsignedInt(pcode)
				);
			});
		} else if (ccc == identifiers.loggedIn) {
			this.playerID = packet.readUnsignedInt();
			this.name = packet.readUTF();
			this.playingTime = packet.readUnsignedInt();
			this.connectionTime = new Date().getTime();
			this.community = packet.readByte();
			this.pcode = packet.readUnsignedInt();
			this.emit("login", this.name, this.pcode);
		} else if (ccc == identifiers.loginError) {
			this.emit("loginError", packet.readUnsignedByte(), packet.readUTF(), packet.readUTF());
		} else if (ccc == identifiers.bulle) {
			const code = packet.readUnsignedShort();
			this.handleTribulle(code, packet);
		} else if (ccc == identifiers.luaChatLog) {
			this.emit("luaLog", packet.readUTF());
		} else if (ccc == identifiers.roomMessage) {
			const player = this.room.getPlayer(packet.readUTF());
			if (!player) return;
			const content = packet.readUTF();
			const message = new RoomMessage(this, player, content);
			this.emit("roomMessage", message);
		} else if (ccc == identifiers.roomChange) {
			const before = this.room;
			const isPublic = packet.readBoolean(),
				name = packet.readUTF(),
				language = packet.readUTF() as ValueOf<typeof languages>;
			this.room = new Room(this, isPublic, name, language);
			this.emit("roomChange", before, this.room);
		} else if (ccc == identifiers.roomPlayerList) {
			const before = this.room.playerList;
			this.room.playerList = [];
			const length = packet.readUnsignedShort();
			for (let i = 0; i < length; i++) {
				const player = new RoomPlayer(this).read(packet);
				this.room.playerList.push(player);
			}
			this.player = this.room.getPlayer(this.pcode) as Player;
			this.emit("roomUpdate", before, this.room.playerList);
		} else if (ccc == identifiers.roomNewPlayer) {
			const player = new RoomPlayer(this).read(packet);
			if (this.room.getPlayer(player.pcode)) {
				this.emit("roomPlayerUpdate", this.room.getPlayer(player.pcode), player);
			} else {
				this.emit("roomPlayerJoin", player);
			}
		}
		this.emit("rawPacket", conn, ccc, packet);
	}

	/**
	 * Handles the community platform packets and emits events.
	 */
	private handleTribulle(code: number, packet: ByteArray) {
		if (code === tribulle.connect) {
			this.emit("ready");
		} else if (code == tribulle.whisperReceive) {
			const author = packet.readUTF();
			const community = packet.readUnsignedInt();
			const sentTo = packet.readUTF();
			const content = packet.readUTF();
			const message = new WhisperMessage(
				this,
				new Player(this, author),
				community,
				sentTo,
				content
			);
			this.emit("whisper", message);
		} else if (code == tribulle.friendList) {
			const friends = [];

			const soulmate = new Friend(this).read(packet, true); // soulmate
			const hasSoulmate = !(soulmate.id == 0 && soulmate.name == "");
			if (hasSoulmate) friends.push(soulmate);
			let totalFriends = packet.readUnsignedShort();

			while (totalFriends--) {
				friends.push(new Friend(this).read(packet, false));
			}
			this.emit("friendList", friends);
		} else if (code === tribulle.friendConnect) {
			this.emit("friendConnect", packet.readUTF());
		} else if (code === tribulle.friendDisconnect) {
			this.emit("friendDisconnect", packet.readUTF());
		} else if (code === tribulle.friendUpdate) {
			this.emit("friendUpdate", new Friend(this).read(packet, false));
		} else if (code === tribulle.channelWho) {
			packet.readUnsignedInt();
			packet.readUnsignedByte();
			const playerCount = packet.readUnsignedShort();
			const players: Player[] = [];
			for (let i = 0; i < playerCount; i++) {
				const player = new Player(this, packet.readUTF());
				players.push(player);
			}
			this.emit("channelWho", players);
		} else if (code === tribulle.channelLeave) {
			const channelName = packet.readUTF();
			this.emit("channelLeave", channelName);
		} else if (code === tribulle.channelJoin) {
			const channelName = packet.readUTF();
			this.emit("channelJoin", channelName);
		} else if (code === tribulle.channelMessage) {
			const author = new Player(this, packet.readUTF());
			const community = packet.readUnsignedInt();
			const channelName = packet.readUTF();
			const content = packet.readUTF();
			const message = new ChannelMessage(
				this,
				author,
				content,
				community,
				new Channel(this, channelName)
			);
			this.emit("channelMessage", message);
		} else if (code === tribulle.tribeMessage) {
			const author = new Player(this, packet.readUTF());
			const message = new Message(this, author, packet.readUTF());
			this.emit("tribeMessage", message);
		} else if (code === tribulle.tribeMemberUpdate) {
			this.emit("tribeMemberUpdate", new Member(this).read(packet));
		} else if (code === tribulle.tribeMemberConnect) {
			this.emit("tribeMemberConnect", packet.readUTF());
		} else if (code === tribulle.tribeMemberDisconnect) {
			this.emit("tribeMemberDisconnect", packet.readUTF());
		} else if (code === tribulle.tribeInitialReceive) {
			const result = packet.readByte();
			if (result == 17) {
				this.emit("tribe", null);
			}
		} else if (code === tribulle.tribeReceive) {
			this.emit("tribe", new Tribe(this).read(packet));
		}
		this.emit("rawTribulle", code, packet);
	}

	/**
	 * Sends a packet to the community platform (tribulle).
	 */
	private sendTribullePacket(code: number, packet: ByteArray) {
		this.tribulleID = (this.tribulleID % 0x100000000) + 1;
		const p = new ByteArray().writeShort(code).writeUnsignedInt(this.tribulleID);
		p.writeBytes(packet);
		this.main.send(identifiers.bulle, p, cipherMethods.xor);
	}

	/**
	 * Sends a packet every 15 seconds to stay connected to the game.
	 */
	private startHeartbeat() {
		this.main.send(identifiers.heartbeat, new ByteArray());
		this.loops.heartbeat = setInterval(() => {
			this.main.send(identifiers.heartbeat, new ByteArray());
			if (this.bulle && this.bulle.open)
				this.bulle.send(identifiers.heartbeat, new ByteArray());
		}, 1000 * 15);
	}

	private sendHandshake(version: number, key: string) {
		const p = new ByteArray();
		p.writeShort(version);
		p.writeUTF("en");
		p.writeUTF(key);
		p.writeUTF("Desktop").writeUTF("-").writeInt(0x1fbd);
		p.writeUTF("");
		p.writeUTF("ca26ba3ada3fc0aadba7d94e5677bee000333d8f46bab4c3cb32e615587e7212");
		p.writeUTF(
			"A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=t&PR=t&SP=f&SB=f&DEB=f&V=LNX 29,0,0,140&M=Adobe Linux&R=1920x1080&COL=color&AR=1.0&OS=Linux&ARCH=x86&L=en&IME=t&PR32=t&PR64=t&LS=en-US&PT=Desktop&AVD=f&LFD=f&WD=f&TLS=t&ML=5.1&DP=72"
		);
		p.writeInt(0).writeInt(0x1234).writeUTF("");
		this.main.send(identifiers.handshake, p);
	}

	private setLanguage(code: ValueOf<typeof languages> = languages.en) {
		if (typeof code !== "string") code = languages.en;
		const p = new ByteArray().writeUTF(code);
		this.main.send(identifiers.language, p);
	}

	private setSystemInfo(langue: string, sys: string, version: string) {
		const p = new ByteArray().writeUTF(langue).writeUTF(sys).writeUTF(version);
		this.main.send(identifiers.os, p);
	}

	/**
	 * Get Transformice API keys
	 */
	private async fetchKeys() {
		const response = await fetch(
			`https://api.tocuto.tk/get_transformice_keys.php?tfmid=${this.tfmID}&token=${this.token}`
		);
		const result = await response.json();
		if (result.success) {
			if (!result.internal_error) {
				this.version = result.version;
				this.connectionKey = result.connection_key;
				this.ports = result.ports;
				this.host = result.ip;
				this.authClient = result.auth_key;
				this.identificationKeys = result.identification_keys;
				this.messageKeys = result.msg_keys;
			} else {
				if (result.internal_error_step === 2)
					throw new Error("The game might be in maintenance mode.");
				throw new Error("An internal error occur: " + result.internal_error_step);
			}
		} else {
			throw new Error("Can't get the keys : " + result.error);
		}
	}

	/**
	 * Log in to the game.
	 */
	private login(name: string, password: string, room = "1") {
		const p = new ByteArray().writeUTF(name).writeUTF(SHAKikoo(password));
		p.writeUTF("app:/TransformiceAIR.swf/[[DYNAMIC]]/2/[[DYNAMIC]]/4").writeUTF(room);
		p.writeUnsignedInt(
			parseInt((BigInt(this.authServer) ^ BigInt(this.authClient)).toString())
		);
		this.main.send(identifiers.loginSend, p, cipherMethods.xxtea);
	}

	/**
	 * Connects and do handshake
	 */
	private connect() {
		if (this.main && this.main.open) return;
		this.main = new Connection(this.identificationKeys, this.messageKeys);
		this.main.on("data", (conn: Connection, packet: ByteArray) => {
			this.handlePacket(conn, packet);
		});
		this.main.once("connect", async () => {
			this.emit("connect", this.main);
			this.sendHandshake(this.version, this.connectionKey);
			this.once("loginError", async (code) => {
				if (code === 1 && this.autoReconnect) {
					this.restart();
				}
			});
			try {
				await this.waitFor("loginReady");
				this.setLanguage(this.language);
				this.login(this.name, this.password);
			} catch (err) {
				this.main.emit("error", err);
			}
		});
		this.main.once("close", () => {
			this.disconnect();
		});
		this.main.on("error", async (err: Error) => {
			this.emit("connectionError", err);
			if (this.autoReconnect) {
				await new Promise((r) => setTimeout(r, 5 * 1000));
				this.restart();
			} else {
				throw Error("Connection Closed");
			}
		});
		this.main.connect(this.host, this.ports[0]);
	}

	/**
	 * Disconnects the client.
	 */
	disconnect() {
		clearInterval(this.loops.heartbeat as NodeJS.Timeout);
		if (this.main) {
			this.main.close();
			this.main.removeAllListeners();
		}
		if (this.bulle) {
			this.bulle.close();
			this.bulle.removeAllListeners();
		}
		this.emit("disconnect");
	}
	/**
	 * Starts the client.
	 */
	async run(tfmid: string, token: string) {
		this.tfmID = tfmid;
		this.token = token;

		await this.fetchKeys();
		this.connect();
	}

	/**
	 * Restart the client
	 */
	async restart() {
		this.emit("restart");
		this.disconnect();
		this.connect();
	}

	/**
	 * Sends a message to tribe
	 */
	sendTribeMessage(message: string) {
		this.sendTribullePacket(tribulle.tribeSendMessage, new ByteArray().writeUTF(message));
	}

	/**
	 * Joins the tribe house.
	 */
	joinTribeHouse() {
		this.main.send(identifiers.joinTribeHouse, new ByteArray());
	}

	/**
	 * Load a lua script in the room.
	 */
	loadLua(script: string) {
		const length = Buffer.byteLength(script);
		const p = new ByteArray().writeUnsignedShort(length >> 8).writeUnsignedByte(length & 255);
		this.bulle.send(identifiers.loadLua, p);
	}

	/**
	 * Join to a chat channel
	 */
	joinChannel(channelName: string, permanent = true) {
		this.sendTribullePacket(
			tribulle.channelJoinRequest,
			new ByteArray().writeUTF(channelName).writeBoolean(permanent)
		);
	}

	/**
	 * Leave a chat channel
	 */
	leaveChannel(channelName: string) {
		this.sendTribullePacket(
			tribulle.channelLeaveRequest,
			new ByteArray().writeUTF(channelName)
		);
	}

	/**
	 * Sends a message to a chat channel
	 */
	sendChannelMessage(channelName: string, message: string) {
		this.sendTribullePacket(
			tribulle.channelSendMessage,
			new ByteArray().writeUTF(channelName).writeUTF(message)
		);
	}

	/**
	 * Sends a message to the client's room.
	 */
	sendRoomMessage(message: string) {
		this.bulle.send(
			identifiers.roomMessage,
			new ByteArray().writeUTF(message),
			cipherMethods.xor
		);
	}

	/**
	 * Sends a server command.
	 *
	 * @param message - The command message (without the `/`).
	 * @example
	 * ```js
	 * client.sendCommand('mod');
	 * ```
	 */
	sendCommand(message: string) {
		this.main.send(identifiers.command, new ByteArray().writeUTF(message), cipherMethods.xor);
	}

	/**
	 * Sends a request to the server to join a room with specific name.
	 */
	joinRoom(name: string, isSalonAuto = false) {
		this.main.send(
			identifiers.room,
			new ByteArray()
				.writeUTF("")
				.writeUTF(name)
				.writeByte(isSalonAuto ? 1 : 0)
		);
	}

	/**
	 * Sends a whisper message to a player.
	 */
	sendWhisper(name: string, message: string) {
		this.sendTribullePacket(
			tribulle.whisperSend,
			new ByteArray().writeUTF(name.toLowerCase()).writeUTF(message)
		);
	}

	/**
	 * Request friend list.
	 */
	requestFriendList() {
		this.sendTribullePacket(28, new ByteArray());
	}

	/**
	 * Get friend list
	 */
	async getFriendList() {
		this.requestFriendList();
		return (await this.waitFor("friendList"))[0];
	}

	/**
	 * Request tribe data
	 */
	requestTribe(includeDisconnectedMember = true) {
		this.sendTribullePacket(
			tribulle.tribeRequest,
			new ByteArray().writeBoolean(includeDisconnectedMember)
		);
	}

	/**
	 * Get tribe data
	 */
	async getTribe(includeDisconnectedMember = true) {
		this.requestTribe(includeDisconnectedMember);
		return (await this.waitFor("tribe"))[0];
	}
}

export default Client;
