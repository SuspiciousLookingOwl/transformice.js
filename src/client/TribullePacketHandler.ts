import Client from "./Client";
import {
	Channel,
	ChannelMessage,
	Friend,
	Member,
	Message,
	Player,
	Tribe,
	WhisperMessage,
} from "../structures";
import { tribulle } from "../enums";
import { ByteArray } from "../utils";

/**
 * @hidden
 */
interface TribullePacketIndex {
	[index: number]: (this: Client, packet: ByteArray) => void;
}

/**
 * @hidden
 */
class TribullePacketHandler {
	/* -------------------------------------------------------------------------- */
	/*                                   General                                  */
	/* -------------------------------------------------------------------------- */

	static [tribulle.connect](this: Client) {
		this.emit("ready");
	}

	/* -------------------------------------------------------------------------- */
	/*                                   Whisper                                  */
	/* -------------------------------------------------------------------------- */

	static [tribulle.whisperReceive](this: Client, packet: ByteArray) {
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
	}

	/* -------------------------------------------------------------------------- */
	/*                                   Friend                                   */
	/* -------------------------------------------------------------------------- */

	static [tribulle.friendList](this: Client, packet: ByteArray) {
		const friends = [];

		const soulmate = new Friend(this).read(packet, true); // soulmate
		const hasSoulmate = !(soulmate.id == 0 && soulmate.name == "");
		if (hasSoulmate) friends.push(soulmate);
		let totalFriends = packet.readUnsignedShort();

		while (totalFriends--) {
			friends.push(new Friend(this).read(packet, false));
		}
		this.emit("friendList", friends);
	}

	static [tribulle.friendAdd](this: Client, packet: ByteArray) {
		this.emit("friendAdd", new Player(this, packet.readUTF()));
	}

	static [tribulle.friendRemove](this: Client, packet: ByteArray) {
		this.emit("friendRemove", new Player(this, packet.readUTF()));
	}

	static [tribulle.friendConnect](this: Client, packet: ByteArray) {
		this.emit("friendConnect", packet.readUTF());
	}

	static [tribulle.friendDisconnect](this: Client, packet: ByteArray) {
		this.emit("friendDisconnect", packet.readUTF());
	}

	static [tribulle.friendUpdate](this: Client, packet: ByteArray) {
		this.emit("friendUpdate", new Friend(this).read(packet, false));
	}

	/* -------------------------------------------------------------------------- */
	/*                                Chat Channel                                */
	/* -------------------------------------------------------------------------- */

	static [tribulle.channelWho](this: Client, packet: ByteArray) {
		const fingerprint = packet.readUnsignedInt();
		packet.readUnsignedByte();
		const playerCount = packet.readUnsignedShort();
		const players: Player[] = [];
		for (let i = 0; i < playerCount; i++) {
			players.push(new Player(this, packet.readUTF()));
		}
		this.emit("channelWho", this.whoList[fingerprint], players, fingerprint);
	}

	static [tribulle.channelLeave](this: Client, packet: ByteArray) {
		const channelName = packet.readUTF();
		const index = this.channels.findIndex((c) => c === channelName);
		if (index >= 0) this.channels.slice(index, 1);
		this.emit("channelLeave", channelName);
	}

	static [tribulle.channelJoin](this: Client, packet: ByteArray) {
		const channelName = packet.readUTF();
		this.channels.push(channelName);
		this.emit("channelJoin", channelName);
	}

	static [tribulle.channelMessage](this: Client, packet: ByteArray) {
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
	}

	/* -------------------------------------------------------------------------- */
	/*                                    Tribe                                   */
	/* -------------------------------------------------------------------------- */

	static [tribulle.tribeMessage](this: Client, packet: ByteArray) {
		const author = new Player(this, packet.readUTF());
		const message = new Message(this, author, packet.readUTF());
		this.emit("tribeMessage", message);
	}

	static [tribulle.tribeMemberUpdate](this: Client, packet: ByteArray) {
		this.emit("tribeMemberUpdate", new Member(this).read(packet));
	}

	static [tribulle.tribeMemberConnect](this: Client, packet: ByteArray) {
		this.emit("tribeMemberConnect", packet.readUTF());
	}

	static [tribulle.tribeMemberDisconnect](this: Client, packet: ByteArray) {
		this.emit("tribeMemberDisconnect", packet.readUTF());
	}

	static [tribulle.tribeInitialReceive](this: Client, packet: ByteArray) {
		const result = packet.readByte();
		if (result == 17) {
			this.emit("tribe", null);
		}
	}

	static [tribulle.tribeReceive](this: Client, packet: ByteArray) {
		this.emit("tribe", new Tribe(this).read(packet));
	}
}

export default (TribullePacketHandler as unknown) as TribullePacketIndex;
