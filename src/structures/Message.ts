import { Player } from ".";
import Client from "../client";

export default class Message<AuthorType extends Player | string> {
	client: Client;
	content: string;
	author: AuthorType;

	constructor(client: Client, author: AuthorType, content: string) {
		this.client = client;
		this.content = content;
		this.author = author;
	}
}
