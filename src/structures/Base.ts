import Client from "../client";

/** Represents a Base class that will be inherited by all other structure classes. */
export default class Base {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}
}
