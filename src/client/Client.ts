import fetch from "node-fetch";
import { EventEmitter } from "events";

import { ByteArray, Connection, SHAKikoo, ValueOf } from "../utils";
import { Player, Room, Friend, RoomMessage, WhisperMessage } from "../structures";
import * as enums from "../enums";
import { cipherMethods, identifiers, languages, oldIdentifiers } from "../enums";
import ClientEvents from "./Events";

/**
 * Client interface for event intellisense support
 */
declare interface Client {
	on<T extends keyof ClientEvents>(event: T, listener: ClientEvents[T]): this;
	emit<T extends keyof ClientEvents>(event: T, ...args: Parameters<ClientEvents[T]>): boolean;
}

/** Represents a client that connects to Transformice. */
class Client extends EventEmitter {
	static enums = enums;

	private loops: Partial<{ heartbeat: NodeJS.Timeout }>;
	private version: number;
	private connectionKey: string;
	private authClient: number;
	private authServer: number;
	private ports: number[];
	private host: string;
	private tribulleID: number;
	identificationKeys: number[];
	msgKeys: number[];

	/**
	 * The online players when the bot log.
	 */
	onlinePlayers: number;
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
	playerID: number;
	/**
	 * The client's nickname.
	 */
	nickname: string;
	/**
	 * The client's playing time.
	 */
	playingTime: number;
	/**
	 * The connection time.
	 */
	connectionTime: number;
	/**
	 * The client's community code.
	 */
	community: number;
	/**
	 * The language suggested by the server.
	 */
	language: string;
	/**
	 * The client's temporary code.
	 */
	pcode: number;
	main: Connection;
	bulle: Connection;

	constructor() {
		super();
		this.loops = {};
		this.version = 0;
		this.connectionKey = "";
		this.authClient = 0;
		this.identificationKeys = [];
		this.msgKeys = [];
		this.authServer = 0;
		this.ports = [];
		this.host = "";
		this.tribulleID = 0;
		this.onlinePlayers = 0;
		this.playerID = 0;
		this.nickname = "";
		this.playingTime = 0;
		this.connectionTime = 0;
		this.community = 0;
		this.language = "";
		this.pcode = 0;
		this.main = new Connection(this, "main");
		this.bulle = new Connection(this, "bulle");
	}

	/**
	 * Handles the old packets and emits events.
	 */
	private handleOldPacket(conn: Connection, ccc: number, data: string[]) {
		if (ccc == oldIdentifiers.roomPlayerLeft) {
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
	handlePacket(conn: Connection, packet: ByteArray) {
		const ccc = packet.readUnsignedShort();
		if (ccc == identifiers.oldPacket) {
			const data = packet.readUTF().split(String.fromCharCode(1));
			const a = data.splice(0, 1)[0];
			const ccc = (a.charCodeAt(0) << 8) | a.charCodeAt(1);
			this.handleOldPacket(conn, ccc, data);
		} else if (ccc == identifiers.handshakeOk) {
			this.onlinePlayers = packet.readUnsignedInt();
			this.language = packet.readUTF();
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

			if (this.bulle.open) this.bulle.close();

			this.bulle = new Connection(this, "bulle");
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
		} else if (ccc == identifiers.logged) {
			this.playerID = packet.readUnsignedInt();
			this.nickname = packet.readUTF();
			this.playingTime = packet.readUnsignedInt();
			this.connectionTime = new Date().getTime();
			this.community = packet.readByte();
			this.pcode = packet.readUnsignedInt();
			this.emit("logged", this.nickname, this.pcode);
		} else if (ccc == identifiers.bulle) {
			const code = packet.readUnsignedShort();

			if (code == 3) {
				this.emit("ready");
			} else {
				this.handleTribulle(code, packet);
			}
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
				const player = new Player().read(packet);
				this.room.playerList.push(player);
			}
			this.player = this.room.getPlayer(this.pcode) as Player;
			this.emit("roomUpdate", before, this.room.playerList);
		} else if (ccc == identifiers.roomNewPlayer) {
			const player = new Player().read(packet);
			if (this.room.getPlayer(player.pcode)) {
				this.emit("roomPlayerUpdate", this.room.getPlayer(player.pcode), player);
			} else {
				this.emit("roomPlayerJoin", player);
			}
			this.room.updatePlayer(player);
		} else if (ccc == identifiers.languageChange) {
			const language = packet.readUTF() as ValueOf<typeof languages>;
			const country = packet.readUTF();
			const readRight = packet.readBoolean();
			const readSpecialChar = packet.readBoolean();
			this.emit("languageChange", language, country, readRight, readSpecialChar);
		} else {
			//console.log(c, cc, packet.buffer);
		}
		this.emit("rawPacket", conn, ccc, packet);
	}

	/**
	 * Handles the community platform packets and emits events.
	 */
	private handleTribulle(code: number, packet: ByteArray) {
		if (code == 66) {
			const author = packet.readUTF();
			const community = packet.readUnsignedInt();
			const sentTo = packet.readUTF();
			const content = packet.readUTF();
			const message = new WhisperMessage(this, author, community, sentTo, content);
			this.emit("whisper", message);
		} else if (code == 34) {
			const friends = [];

			const soulmate = new Friend().read(packet, true); // soulmate
			const hasSoulmate = !(soulmate.id == 0 && soulmate.nickname == "");
			if (hasSoulmate) friends.push(soulmate);
			let totalFriends = packet.readUnsignedShort();

			while (totalFriends--) {
				friends.push(new Friend().read(packet, false));
			}
			this.emit("friendList", friends, hasSoulmate ? soulmate.nickname : null);
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
	 * Log in to the game.
	 */
	login(nickname: string, password: string, room = "1") {
		const p = new ByteArray().writeUTF(nickname).writeUTF(SHAKikoo(password));
		p.writeUTF("app:/TransformiceAIR.swf/[[DYNAMIC]]/2/[[DYNAMIC]]/4").writeUTF(room);
		p.writeUnsignedInt(
			parseInt((BigInt(this.authServer) ^ BigInt(this.authClient)).toString())
		);
		this.main.send(identifiers.loginSend, p, cipherMethods.xxtea);
	}

	/**
	 * Sends Handshake.
	 */
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

	/**
	 * Sets the language of the client.
	 * @param {enums.language} [id=enums.language.en] - The language iso code.
	 */
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
	 * Sends a message to the client's room.
	 * @param {String} message - The message.
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
	 * @param message - The command message (without the `/`).
	 * @example
	 * client.sendCommand('mod');
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
	sendWhisper(nickname: string, message: string) {
		this.sendTribullePacket(
			52,
			new ByteArray().writeUTF(nickname.toLowerCase()).writeUTF(message)
		);
	}

	/**
	 * Request friend list.
	 */
	requestFriendList() {
		this.sendTribullePacket(28, new ByteArray());
	}

	/**
	 * Sends a packet every 15 seconds to stay connected to the game.
	 */
	startHeartbeat() {
		this.main.send(identifiers.heartbeat, new ByteArray());
		this.loops.heartbeat = setInterval(() => {
			this.main.send(identifiers.heartbeat, new ByteArray());
			if (this.bulle.open) this.bulle.send(identifiers.heartbeat, new ByteArray());
		}, 1000 * 15);
	}

	/**
	 * Starts the client.
	 */
	async run(
		tfmid: string,
		token: string,
		nickname: string,
		password: string,
		language: ValueOf<typeof languages> = languages.en,
		room = "1"
	) {
		const response = await fetch(
			`https://api.tocuto.tk/get_transformice_keys.php?tfmid=${tfmid}&token=${token}`
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
				this.msgKeys = result.msg_keys;
				this.main = new Connection(this, "main");
				this.main.connect(this.host, this.ports[0]);
				this.main.on("connect", () => {
					this.sendHandshake(this.version, this.connectionKey);
				});
				this.on("loginReady", () => {
					this.setLanguage(language);
					this.login(nickname, password, room);
				});
			} else {
				if (result.internal_error_step == 2)
					throw new Error("The game might be in maintenance mode.");
				throw new Error("An internal error occur: " + result.internal_error_step);
			}
		} else {
			throw new Error("Can't get the keys : " + result.error);
		}
	}

	/**
	 * Disconnects the client.
	 */
	disconnect() {
		clearInterval(this.loops.heartbeat as NodeJS.Timeout);
		this.main.close();
		this.bulle.close();
		this.emit("disconnect");
	}
}

export default Client;
