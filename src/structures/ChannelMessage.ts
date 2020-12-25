import { Player, Message, Channel } from ".";
import Client from "../client";

/** Represents a Channel message. */
export default class ChannelMessage extends Message {
	/**
	 * Community of the author that sends the message
	 */
	community: number;
	/**
	 * The Channel the message is sent to
	 */
	channel: Channel;

	/**
	 * @hidden
	 */
	constructor(
		client: Client,
		author: Player,
		content: string,
		community: number,
		channel: Channel
	) {
		super(client, author, content);
		this.community = community;
		this.channel = channel;
	}

	/**
	 * Reply the author with a message.
	 *
	 * @example
	 * ```js
	 * client.on('roomMessage', (message) => {
	 * 	if (client.name === message.author.name)
	 * 		return;
	 * 	message.reply('Hello');
	 * }
	 * ```
	 */
	reply(message: string) {
		this.client.sendRoomMessage(`@${this.author.name} ${message}`);
	}
}
