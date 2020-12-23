import { Player, Message } from ".";
import Client from "../client";

/** Represents a room message. */
export default class RoomMessage extends Message {
	constructor(client: Client, author: Player, content: string) {
		super(client, author, content);
	}

	/**
	 * Reply the author with a message.
	 *
	 * @example
	 * ```js
	 * client.on('roomMessage', (message) => {
	 * 	if (client.name == message.author.name)
	 * 		return;
	 * 	message.reply('Hello');
	 * ```
	 * }
	 */
	reply(message: string) {
		this.client.sendRoomMessage(`@${this.author.name} ${message}`);
	}
}
