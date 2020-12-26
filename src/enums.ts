const Identifier = (c: number, cc: number) => {
	return (c << 8) | cc;
};

/**
 * The identifiers of the packets.
 *
 * @hidden
 * */
export const identifiers = {
	oldPacket: Identifier(1, 1),
	bulle: Identifier(60, 3),
	bulleConnection: Identifier(44, 1),
	cafeData: Identifier(30, 40),
	cafeState: Identifier(30, 45),
	cafeLike: Identifier(30, 46),
	cafeLoadData: Identifier(30, 41),
	cafeNewTopic: Identifier(30, 44),
	cafeSendMessage: Identifier(30, 43),
	command: Identifier(6, 26),
	loggedIn: Identifier(26, 2),
	loginError: Identifier(26, 12),
	handshakeOk: Identifier(26, 3),
	emote: Identifier(8, 1),
	emoticon: Identifier(8, 5),
	heartbeat: Identifier(26, 26),
	handshake: Identifier(28, 1),
	loginReady: Identifier(28, 62),
	joinTribeHouse: Identifier(16, 1),
	loadLua: Identifier(29, 1),
	luaChatLog: Identifier(29, 6),
	loginSend: Identifier(26, 8),
	modList: Identifier(26, 5),
	os: Identifier(28, 17),
	fingerprint: Identifier(44, 22),
	room: Identifier(5, 38),
	roomList: Identifier(26, 35),
	roomMessage: Identifier(6, 6),
	roomChange: Identifier(5, 21),
	roomPlayerList: Identifier(144, 1),
	roomNewPlayer: Identifier(144, 2),
	language: Identifier(176, 1),
	languageChange: Identifier(176, 2),
	requestLanguage: Identifier(176, 5),
} as const;

/**
 * The identifiers of tribulle packet
 *
 * @hidden
 */
export const tribulle = {
	whisper: 66,
	friendConnect: 32,
	friendDisconnect: 33,
	friendList: 34,
	friendUpdate: 35,
	friendAdd: 36,
	friendRemove: 37,
	channelSendMessage: 52,
	channelWho: 59,
	channelJoin: 62,
	channelLeave: 63,
	channelMessage: 64,
	tribeSendMessage: 48,
	tribeMessage: 65,
	tribeMemberConnect: 88,
	tribeMemberDisconnect: 90,
	tribeMemberUpdate: 131,
	tribeRequest: 108,
	tribeInitialReceive: 109,
	tribeReceive: 130,
} as const;

/**
 * The old identifiers of the packets.
 *
 * @hidden
 */
export const oldIdentifiers = {
	roomPlayerLeft: Identifier(8, 7),
} as const;

/** The available communities based on the languages. */
export const languages = {
	es: "es",
	af: "af",
	az: "az",
	id: "id",
	ms: "ms",
	bi: "bi",
	bs: "bs",
	ca: "ca",
	ny: "ny",
	da: "da",
	de: "de",
	et: "et",
	na: "na",
	en: "en",
	to: "to",
	mg: "mg",
	fr: "fr",
	sm: "sm",
	hr: "hr",
	it: "it",
	mh: "mh",
	kl: "kl",
	rn: "rn",
	rw: "rw",
	sw: "sw",
	ht: "ht",
	lv: "lv",
	lt: "lt",
	lb: "lb",
	hu: "hu",
	mt: "mt",
	nl: "nl",
	no: "no",
	uz: "uz",
	pl: "pl",
	pt: "pt",
	br: "br",
	ro: "ro",
	qu: "qu",
	st: "st",
	tn: "tn",
	sq: "sq",
	ss: "ss",
	sk: "sk",
	sl: "sl",
	so: "so",
	fi: "fi",
	sv: "sv",
	tl: "tl",
	vi: "vi",
	tk: "tk",
	tr: "tr",
	fj: "fj",
	wo: "wo",
	yo: "yo",
	is: "is",
	cs: "cs",
	el: "el",
	be: "be",
	ky: "ky",
	mn: "mn",
	ru: "ru",
	sr: "sr",
	tg: "tg",
	uk: "uk",
	bg: "bg",
	kk: "kk",
	hy: "hy",
	he: "he",
	ur: "ur",
	ar: "ar",
	fa: "fa",
	dv: "dv",
	ne: "ne",
	hi: "hi",
	bn: "bn",
	ta: "ta",
	th: "th",
	lo: "lo",
	dz: "dz",
	my: "my",
	ka: "ka",
	ti: "ti",
	am: "am",
	km: "km",
	cn: "cn",
	zh: "zh",
	ja: "ja",
	ko: "ko",
} as const;

/** The ids of all emotes */
export const emotes = {
	dance: 0,
	laugh: 1,
	cry: 2,
	kiss: 3,
	angry: 4,
	clap: 5,
	sleep: 6,
	facepaw: 7,
	sit: 8,
	confetti: 9,
	flag: 10,
	marshmallow: 11,
	selfie: 12,
	highfive: 13,
	highfive_1: 14,
	highfive_2: 15,
	partyhorn: 16,
	hug: 17,
	hug_1: 18,
	hug_2: 19,
	jigglypuff: 20,
	kissing: 21,
	kissing_1: 22,
	kissing_2: 23,
	carnaval: 24,
	rockpaperscissors: 25,
	rockpaperscissors_1: 26,
	rockpaperscissor_2: 27,
} as const;

/** the ids of all the smiles. */
export const smiles = {
	smiley: 0,
	sad: 1,
	tongue: 2,
	angry: 3,
	laugh: 4,
	shades: 5,
	blush: 6,
	sweatdrop: 7,
	derp: 8,
	OMG: 9,
} as const;

/** The ids of all Atelier801's games. */
export const games = {
	unknown: 0,
	none: 1,
	transformice: 4,
	fortoresse: 6,
	bouboum: 7,
	nekodancer: 15,
	deadmaze: 17,
} as const;

/** The ids of all the genders. */
export const genders = {
	none: 0,
	female: 1,
	male: 2,
} as const;

/** The ids of all the staff roles. */
export const roles = {
	normal: 0,
	moderator: 5,
	administrator: 10,
	mapcrew: 11,
	funcorp: 13,
} as const;

/** The ids of all the room modes. */
export const roomModes = {
	normal: 1,
	bootcamp: 2,
	vanilla: 3,
	survivor: 8,
	racing: 9,
	music: 10,
	defilante: 11,
	village: 16,
	module: 18,
} as const;

/** The ids of all the whisper states. */
export const whisperStates = {
	enabled: 1,
	disabledPublic: 2,
	disabledAll: 3,
} as const;

/**
 * The ids of the cipher method.
 *
 * @hidden
 */
export const cipherMethods = {
	none: 0,
	xor: 1,
	xxtea: 2,
} as const;
