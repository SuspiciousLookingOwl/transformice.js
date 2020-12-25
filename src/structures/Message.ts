import { Player } from ".";
import Client from "../client";
import Base from "./Base";

export default class Message extends Base {
	content: string;
	author: Player;

	/**
	 * @hidden
	 */
	constructor(client: Client, author: Player, content: string) {
		super(client);
		this.content = content;
		this.author = author;
	}
}
