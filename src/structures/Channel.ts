import Client from "../client";
import Base from "./Base";

/** Represents a chat channel. */
export default class Channel extends Base {
	/**
	 * The channel name
	 */
	name: string;

	constructor(client: Client, name: string) {
		super(client);
		this.name = name;
	}
}
