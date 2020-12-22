import { Player } from ".";
import Client from "../client";

export default class Message {
	client: Client;
	content: string;
	author: Player | string;

	constructor(client: Client, author: Player | string, content: string) {
		this.client = client;
		this.content = content;
		this.author = author;
	}
}
