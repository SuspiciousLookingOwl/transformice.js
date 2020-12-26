import { Base, Member, Rank } from ".";
import Client from "../client";
import { ByteArray } from "../utils";

/** Represents a Tribe */
export default class Tribe extends Base {
	/**
	 * The tribe's id
	 */
	id: number;
	name: string;
	welcomeMessage: string;
	mapCode: number;
	members: Member[];
	ranks: unknown[];

	/**
	 * @hidden
	 */
	constructor(client: Client) {
		super(client);
		this.id = 0;
		this.name = "";
		this.welcomeMessage = "";
		this.mapCode = 0;
		this.members = [];
		this.ranks = [];
	}

	/**
	 * Returns tribe data from a packet
	 *
	 * @hidden
	 */
	read(packet: ByteArray) {
		this.id = packet.readInt();
		this.name = packet.readUTF();
		this.welcomeMessage = packet.readUTF();
		this.mapCode = packet.readInt();
		this.members = [];
		this.ranks = [];

		let length = packet.readShort();
		for (let i = 0; i < length; i++) {
			this.members.push(new Member(this.client, { tribe: this }).read(packet));
		}

		length = packet.readShort();
		for (let i = 0; i < length; i++) {
			this.ranks.push(new Rank(this.client, { id: i }).read(packet));
		}

		return this;
	}
}
