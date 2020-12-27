import Client from "../client";
import Base from "./Base";

/** Represents a player from the room. */
export default class Player extends Base {
	/**
	 * The player's name.
	 */
	name: string;

	/**
	 * @hidden
	 */
	constructor(client: Client, name = "") {
		super(client);
		this.name = name;
	}

	/**
	 * Send a whisper to the player
	 */
	whisper(message: string) {
		this.client.sendWhisper(this.name, message);
	}

	/**
	 * Add player to the friend list
	 */
	friend() {
		this.client.addFriend(this.name);
	}

	/**
	 * Remove player from the friend list
	 */
	unfriend() {
		this.client.removeFriend(this.name);
	}
}
