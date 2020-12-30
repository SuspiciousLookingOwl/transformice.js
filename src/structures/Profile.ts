import { ValueOf, ByteArray } from "../utils";
import { genders } from "../enums";
import Client from "../client";
import { Player } from ".";

/** Represents player's profile from `/profile` command */
export default class Profile extends Player {
	id!: number;
	gender!: ValueOf<typeof genders>;
	registrationDate!: number;
	role!: number;
	tribeName!: string;
	soulmate!: string;
	saves!: {
		normal: number;
		hard: number;
		divine: number;
	};
	shamanCheese!: number;
	first!: number;
	cheese!: number;
	bootcamp!: number;
	titleId!: number;
	titles!: {
		id: number;
		star: number;
	}[];
	look!: string;
	level!: number;
	badges!: {
		id: number;
		quantity: number;
	}[];
	modeStatus!: {
		mode: number;
		progress: number;
		progressLimit: number;
		imageId: number;
	}[];
	orbId!: number;
	orbs!: number[];
	adventurePoints!: number;

	/**
	 * @hidden
	 */
	constructor(client: Client, player: Partial<Profile> = {}) {
		super(client);
		Object.assign(this, player);
	}

	/**
	 * Returns member data from a packet
	 *
	 * @hidden
	 */
	read(packet: ByteArray) {
		this.name = packet.readUTF();
		this.id = packet.readInt();
		this.registrationDate = packet.readInt();
		this.role = packet.readByte();

		this.gender = packet.readByte() as ValueOf<typeof genders>;
		this.tribeName = packet.readUTF();
		this.soulmate = packet.readUTF();

		const normal = packet.readInt();
		this.shamanCheese = packet.readInt();
		this.first = packet.readInt();
		this.cheese = packet.readInt();
		const hard = packet.readInt();
		this.bootcamp = packet.readInt();
		const divine = packet.readInt();

		this.saves = {
			normal,
			hard,
			divine,
		};

		this.titleId = packet.readShort();
		this.titles = [];
		const titleCount = packet.readShort();
		for (let i = 0; i < titleCount; i++) {
			this.titles.push({
				id: packet.readShort(),
				star: packet.readByte(),
			});
		}

		this.look = packet.readUTF();
		this.level = packet.readShort();

		this.badges = [];
		const badgeCount = packet.readShort() / 2;
		for (let i = 0; i < badgeCount; i++) {
			this.badges.push({
				id: packet.readShort(),
				quantity: packet.readShort(),
			});
		}

		this.modeStatus = [];
		const modeStatusCount = packet.readByte();
		for (let i = 0; i < modeStatusCount; i++) {
			this.modeStatus.push({
				mode: packet.readByte(),
				progress: packet.readInt(),
				progressLimit: packet.readInt(),
				imageId: packet.readShort(),
			});
		}

		this.orbId = packet.readByte();

		this.orbs = [];
		const orbCount = packet.readByte();
		for (let i = 0; i < orbCount; i++) {
			this.orbs.push(packet.readByte());
		}

		this.adventurePoints = packet.readInt();

		return this;
	}
}
