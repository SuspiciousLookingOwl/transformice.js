import { ByteArray, ValueOf } from "../utils";
import { RoomPlayer, Base } from ".";
import Client from "../client";
import { identifiers, cipherMethods, languages } from "../enums";

/** Represents a room. */
export default class Room extends Base {
	/**
	 * The room name.
	 */
	name: string;
	/**
	 * All of the {@link Player} that are in the room.
	 */
	playerList: RoomPlayer[];
	/**
	 * Whether or not the room is a public.
	 */
	isPublic: boolean;
	/**
	 * The room language.
	 */
	language: ValueOf<typeof languages>;
	/**
	 * Whether or not the room is a tribe house.
	 */
	isTribeHouse: boolean;

	constructor(
		client: Client,
		isPublic: boolean,
		name: string,
		language: ValueOf<typeof languages>
	) {
		super(client);
		this.client = client;
		this.name = name;
		this.playerList = [];
		this.isPublic = isPublic;
		this.language = language;
		this.isTribeHouse = name.charCodeAt(1) === 3;
	}

	/**
	 * Get a player by the pcode or name.
	 *
	 * @example
	 * ```js
	 * const player = client.room.getPlayer('Name#0000');
	 * console.log(player.look);
	 * ```
	 */
	getPlayer(name: string): RoomPlayer | undefined;
	getPlayer(pcode: number): RoomPlayer | undefined;
	getPlayer(value: string | number) {
		if (typeof value === "number") return this.playerList.find((p) => p.pcode === value);
		else if (typeof value === "string") return this.playerList.find((p) => p.name === value);
	}

	/**
	 * Removes player the player from room playerList.
	 *
	 * @hidden
	 */
	removePlayer(player: RoomPlayer) {
		const index = this.playerList.findIndex((p) => (p.pcode = player.pcode));
		if (index === -1) return;
		return this.playerList.splice(index, 1)[0];
	}

	/**
	 * Adds or updates the player in room playerList.
	 *
	 * @hidden
	 */
	updatePlayer(player: RoomPlayer) {
		let playerToUpdate = this.getPlayer(player.pcode);
		playerToUpdate = player;
		return playerToUpdate;
	}

	/**
	 * Sends a message to the room.
	 */
	sendMessage(message: string) {
		this.client.bulle.send(
			identifiers.roomMessage,
			new ByteArray().writeUTF(message),
			cipherMethods.xor
		);
	}
}
