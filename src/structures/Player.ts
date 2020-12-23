import Client from "../client";
import Base from "./Base";

/** Represents a player from the room. */
export default class Player extends Base {
	/**
	 * The player's name.
	 */
	name: string;

	constructor(client: Client, name = "") {
		super(client);
		this.name = name;
	}
}
