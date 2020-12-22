import ByteArray from "@utils/ByteArray";

/** Represents a player from the room. */
export default class Player {
	/**
	 * The player's nickname.
	 */
	nickname: string;
	/**
	 * The player's gender.
	 */
	gender: number;
	/**
	 * The current items and customisation of the player’s outfit as `1;0,0,0,0,0,0,0,0,0`.
	 */
	look: string;
	/**
	 * The player's temporary code.
	 */
	pcode: number;
	/**
	 * The player's title ID.
	 */
	title: number;
	/**
	 * How many stars in the title.
	 */
	titleStars: number;
	/**
	 * Whether or not the player has a cheese.
	 */
	hasCheese: boolean;
	/**
	 * Whether or not the player is dead.
	 */
	isDead: boolean;
	/**
	 * Whether or not the player is shaman.
	 */
	isShaman: boolean;
	/**
	 * Whether or not the player is vampire.
	 */
	isVampire: boolean;
	/**
	 * The player's score.
	 */
	score: number;
	/**
	 * The player's mouse color.
	 */
	mouseColor: number;
	/**
	 * The player's name color, By default : `-1`.
	 */
	nameColor: number;
	/**
	 * The player's shaman color.
	 */
	shamanColor: number;
	/**
	 * Whether or not the player is facing right.
	 */
	facingRight: boolean;
	/**
	 * Whether or not the player is moving left.
	 */
	movingLeft: boolean;
	/**
	 * Whether or not the player is moving right.
	 */
	movingRight: boolean;
	/**
	 * The player’s X coordinate.
	 */
	x: number;
	/**
	 * The player’s Y coordinate.
	 */
	y: number;
	/**
	 * The player’s X velocity.
	 */
	vx: number;
	/**
	 * The player’s Y velocity.
	 */
	vy: number;
	/**
	 * Whether or not the player is in the air.
	 */
	isJumping: boolean;

	constructor() {
		this.nickname = "";
		this.gender = 0;
		this.look = "";
		this.pcode = 0;
		this.title = 0;
		this.titleStars = 0;
		this.hasCheese = false;
		this.isDead = false;
		this.isShaman = false;
		this.isVampire = false;
		this.score = 0;
		this.mouseColor = 0;
		this.nameColor = -1;
		this.shamanColor = 0;
		this.facingRight = true;
		this.movingLeft = false;
		this.movingRight = false;

		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.isJumping = false;
	}

	/**
	 * Reads player data from a packet.
	 */
	read(packet: ByteArray) {
		this.nickname = packet.readUTF();
		this.pcode = packet.readUnsignedInt();
		this.isShaman = packet.readBoolean();
		this.isDead = packet.readBoolean();
		this.score = packet.readUnsignedShort();
		this.hasCheese = packet.readBoolean();
		this.title = packet.readUnsignedShort();
		this.titleStars = packet.readByte() - 1;
		this.gender = packet.readByte();

		packet.readUTF(); // Unknown string
		this.look = packet.readUTF();
		packet.readBoolean(); // Unknown boolean
		this.mouseColor = packet.readUnsignedInt();
		this.shamanColor = packet.readUnsignedInt();
		packet.readUnsignedInt(); // Unknown int
		const color = packet.readUnsignedInt();
		this.nameColor = color == 0xffffffff ? -1 : color;
		return this;
	}
}
