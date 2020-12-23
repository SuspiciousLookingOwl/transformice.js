import { Player } from ".";
import Client from "../client";
import Base from "./Base";

export default class Message<AuthorType extends Player | string> extends Base {
	content: string;
	author: AuthorType;

	constructor(client: Client, author: AuthorType, content: string) {
		super(client);
		this.content = content;
		this.author = author;
	}
}
