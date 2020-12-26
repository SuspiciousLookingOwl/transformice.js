import { ByteArray } from "../utils";
import Client from "../client";
import Base from "./Base";

/** Represents a tribe rank. */
export default class Rank extends Base {
	/**
	 * The rank's id
	 */
	id!: number;
	/**
	 * The rank's name
	 */
	name!: string;
	/**
	 * The rank's permission
	 */
	permission!: number;

	/**
	 * @hidden
	 */
	constructor(client: Client, rank: Partial<Rank> = {}) {
		super(client);
		Object.assign(this, rank);
	}

	/**
	 * Returns tribe data from a packet
	 *
	 * @hidden
	 */
	read(packet: ByteArray) {
		this.name = packet.readUTF();
		this.permission = packet.readInt();

		return this;
	}
}
