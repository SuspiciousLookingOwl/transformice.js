import { Connection, ByteArray, ValueOf } from "../utils";
import {
	ChannelMessage,
	Friend,
	Message,
	Player,
	Room,
	RoomMessage,
	RoomPlayer,
	WhisperMessage,
} from "../structures";
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
	login: (name: string, pcode: number) => void;
	/**
	 * Emitted when the client failed to log in.
	 */
	loginError: (code: number, error1: string, error2: string) => void;
	/**
	 * Emitted when connection failed
	 */
	connectionError: (err: Error) => void;
	/**
	 * Emitted when client is attempting to restart the connection
	 */
	restart: () => void;
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
	 *
	 * @example
	 * ```js
	 * client.on('roomChange', (before, after) => {
	 * 	console.log('The room changed from '+before.name+' to '+after.name);
	 * })
	 * ```
	 */
	roomChange: (before: Room, after: Room) => void;
	/**
	 * Emitted when the room playerList is updated.
	 */
	roomUpdate: (before: RoomPlayer[], after: RoomPlayer[]) => void;
	/**
	 * Emitted when the room playerList is updated.
	 */
	roomPlayerUpdate: (before: RoomPlayer | undefined, after: RoomPlayer) => void;
	/**
	 * Emitted when a new player has joined.
	 */
	roomPlayerJoin: (player: RoomPlayer) => void;
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
	friendList: (friends: Friend[]) => void;
	/**
	 * Emitted when a friend is connected
	 */
	friendConnect: (name: string) => void;
	/**
	 * Emitted when a friend is disconnected
	 */
	friendDisconnect: (name: string) => void;
	/**
	 * Emitted when friend state is changed (e.g. room, gender)
	 */
	friendUpdate: (friend: Friend) => void;
	/**
	 * Emitted when received /who result
	 */
	channelWho: (players: Player[]) => void;
	/**
	 * Emitted when client joined a chat channel
	 */
	channelJoin: (channelName: string) => void;
	/**
	 * Emitted when client left a chat channel
	 */
	channelLeave: (channelName: string) => void;
	/**
	 * Emitted when a message is sent to a channel
	 */
	channelMessage: (channelMessage: ChannelMessage) => void;
	/**
	 * Emitted when a tribe message is received
	 */
	tribeMessage: (message: Message) => void;
	/**
	 * Emitted when a tribe member connected
	 */
	tribeMemberConnect: (name: string) => void;
	/**
	 * Emitted when a tribe member disconnected
	 */
	tribeMemberDisconnect: (name: string) => void;
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
