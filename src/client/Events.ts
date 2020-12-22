import { Connection, ByteArray, ValueOf } from "@utils";
import { Friend, Player, Room, RoomMessage, WhisperMessage } from "../structures";
import { languages } from "../enums";

interface ClientEvents {
	/**
	 * Emitted when a player left the room.
	 */
	roomPlayerLeft: (player: Player) => void;
	/**
	 * Emitted when a new old packet received.
	 */
	rawOldPacket: (connection: Connection, ccc: number, data: string[]) => void;
	/**
	 * Emitted when the client can login on the game.
	 */
	loginReady: () => void;
	/**
	 * Emitted when the client has logged in.
	 */
	logged: (nickname: string, pcode: number) => void;
	/**
	 * Emitted when the client is connected to the community platform.
	 */
	ready: () => void;
	/**
	 * Emitted when the client receives lua logs or errors from `#Lua` chat.
	 */
	luaLog: (log: string) => void;
	/**
	 * Emitted when a player sends a message in the room.
	 */
	roomMessage: (message: RoomMessage) => void;
	/**
	 * Emitted when the room is changed.
	 * @example
	 * client.on('roomChange', (before, after) => {
	 * 	console.log('The room changed from '+before.name+' to '+after.name);
	 * })
	 */
	roomChange: (before: Room, after: Room) => void;
	/**
	 * Emitted when the room playerList is updated.
	 */
	roomUpdate: (before: Player[], after: Player[]) => void;
	/**
	 * Emitted when the room playerList is updated.
	 */
	roomPlayerUpdate: (before: Player | undefined, after: Player) => void;
	/**
	 * Emitted when a new player has joined.
	 */
	roomPlayerJoin: (player: Player) => void;
	/**
	 * Emitted when a language is changed.characters or not.
	 */
	languageChange: (
		language: ValueOf<typeof languages>,
		country: string,
		readRight: boolean,
		readSpecialChar: boolean
	) => void;
	/**
	 * Emitted when a new packet received from main or bulle connection.
	 */
	rawPacket: (conn: Connection, ccc: number, packet: ByteArray) => void;
	/**
	 * Emitted when the client received the friend list
	 */
	friendList: (friends: Friend[], soulmateName: string | null) => void;
	/**
	 * Emitted when a player sends a whisper message to the client.
	 */
	whisper: (message: WhisperMessage) => void;
	/**
	 * Emitted when a new community platform packet received.
	 */
	rawTribulle: (code: number, packet: ByteArray) => void;
	/**
	 * Emitted when the client has disconnect.
	 */
	disconnect: () => void;
	/**
	 * Emitted when a connection is successfully connected.
	 */
	connect: (connection: Connection) => void;
}

export default ClientEvents;
