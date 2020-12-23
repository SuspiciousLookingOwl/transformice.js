import Client from "../client";
import Base from "./Base";

/** Represents a player from the room. */
export default class Player extends Base {
	/**
	 * The player's nickname.
	 */
	nickname: string;

	constructor(client: Client, nickname = "") {
		super(client);
		this.nickname = nickname;
	}
}
