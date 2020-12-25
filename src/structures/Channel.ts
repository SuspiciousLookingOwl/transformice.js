import Client from "../client";
import Base from "./Base";

/** Represents a Base class that will be inherited by all other structure classes. */
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
