---
id: "globals"
title: "transformice.js"
sidebar_label: "Globals"
---

## Index

### Classes

* [Base](classes/base.md)
* [Channel](classes/channel.md)
* [ChannelMessage](classes/channelmessage.md)
* [Client](classes/client.md)
* [Friend](classes/friend.md)
* [Member](classes/member.md)
* [Message](classes/message.md)
* [Player](classes/player.md)
* [Profile](classes/profile.md)
* [Rank](classes/rank.md)
* [Room](classes/room.md)
* [RoomMessage](classes/roommessage.md)
* [RoomPlayer](classes/roomplayer.md)
* [Tribe](classes/tribe.md)
* [WhisperMessage](classes/whispermessage.md)

### Interfaces

* [ClientEvents](interfaces/clientevents.md)
* [ClientOptions](interfaces/clientoptions.md)

### Type aliases

* [ValueOf](globals.md#valueof)

### Variables

* [emotes](globals.md#emotes)
* [games](globals.md#games)
* [genders](globals.md#genders)
* [languages](globals.md#languages)
* [roles](globals.md#roles)
* [roomModes](globals.md#roommodes)
* [smiles](globals.md#smiles)
* [whisperStates](globals.md#whisperstates)

### Functions

* [Identifier](globals.md#identifier)

### Object literals

* [communities](globals.md#communities)

## Type aliases

### ValueOf

Ƭ  **ValueOf**<T\>: T[keyof T]

#### Type parameters:

Name |
------ |
`T` |

## Variables

### emotes

• `Const` **emotes**: object = { dance: 0, laugh: 1, cry: 2, kiss: 3, angry: 4, clap: 5, sleep: 6, facepaw: 7, sit: 8, confetti: 9, flag: 10, marshmallow: 11, selfie: 12, highfive: 13, highfive\_1: 14, highfive\_2: 15, partyhorn: 16, hug: 17, hug\_1: 18, hug\_2: 19, jigglypuff: 20, kissing: 21, kissing\_1: 22, kissing\_2: 23, carnaval: 24, rockpaperscissors: 25, rockpaperscissors\_1: 26, rockpaperscissor\_2: 27,} as const

The ids of all emotes

#### Type declaration:

Name | Type |
------ | ------ |
`angry` | 4 |
`carnaval` | 24 |
`clap` | 5 |
`confetti` | 9 |
`cry` | 2 |
`dance` | 0 |
`facepaw` | 7 |
`flag` | 10 |
`highfive` | 13 |
`highfive_1` | 14 |
`highfive_2` | 15 |
`hug` | 17 |
`hug_1` | 18 |
`hug_2` | 19 |
`jigglypuff` | 20 |
`kiss` | 3 |
`kissing` | 21 |
`kissing_1` | 22 |
`kissing_2` | 23 |
`laugh` | 1 |
`marshmallow` | 11 |
`partyhorn` | 16 |
`rockpaperscissor_2` | 27 |
`rockpaperscissors` | 25 |
`rockpaperscissors_1` | 26 |
`selfie` | 12 |
`sit` | 8 |
`sleep` | 6 |

___

### games

• `Const` **games**: object = { unknown: 0, none: 1, transformice: 4, fortoresse: 6, bouboum: 7, nekodancer: 15, deadmaze: 17,} as const

The ids of all Atelier801's games.

#### Type declaration:

Name | Type |
------ | ------ |
`bouboum` | 7 |
`deadmaze` | 17 |
`fortoresse` | 6 |
`nekodancer` | 15 |
`none` | 1 |
`transformice` | 4 |
`unknown` | 0 |

___

### genders

• `Const` **genders**: object = { none: 0, female: 1, male: 2,} as const

The ids of all the genders.

#### Type declaration:

Name | Type |
------ | ------ |
`female` | 1 |
`male` | 2 |
`none` | 0 |

___

### languages

• `Const` **languages**: object = { es: "es", af: "af", az: "az", id: "id", ms: "ms", bi: "bi", bs: "bs", ca: "ca", ny: "ny", da: "da", de: "de", et: "et", na: "na", en: "en", to: "to", mg: "mg", fr: "fr", sm: "sm", hr: "hr", it: "it", mh: "mh", kl: "kl", rn: "rn", rw: "rw", sw: "sw", ht: "ht", lv: "lv", lt: "lt", lb: "lb", hu: "hu", mt: "mt", nl: "nl", no: "no", uz: "uz", pl: "pl", pt: "pt", br: "br", ro: "ro", qu: "qu", st: "st", tn: "tn", sq: "sq", ss: "ss", sk: "sk", sl: "sl", so: "so", fi: "fi", sv: "sv", tl: "tl", vi: "vi", tk: "tk", tr: "tr", fj: "fj", wo: "wo", yo: "yo", is: "is", cs: "cs", el: "el", be: "be", ky: "ky", mn: "mn", ru: "ru", sr: "sr", tg: "tg", uk: "uk", bg: "bg", kk: "kk", hy: "hy", he: "he", ur: "ur", ar: "ar", fa: "fa", dv: "dv", ne: "ne", hi: "hi", bn: "bn", ta: "ta", th: "th", lo: "lo", dz: "dz", my: "my", ka: "ka", ti: "ti", am: "am", km: "km", cn: "cn", zh: "zh", ja: "ja", ko: "ko",} as const

The available communities based on the languages.

#### Type declaration:

Name | Type |
------ | ------ |
`af` | &#34;af&#34; |
`am` | &#34;am&#34; |
`ar` | &#34;ar&#34; |
`az` | &#34;az&#34; |
`be` | &#34;be&#34; |
`bg` | &#34;bg&#34; |
`bi` | &#34;bi&#34; |
`bn` | &#34;bn&#34; |
`br` | &#34;br&#34; |
`bs` | &#34;bs&#34; |
`ca` | &#34;ca&#34; |
`cn` | &#34;cn&#34; |
`cs` | &#34;cs&#34; |
`da` | &#34;da&#34; |
`de` | &#34;de&#34; |
`dv` | &#34;dv&#34; |
`dz` | &#34;dz&#34; |
`el` | &#34;el&#34; |
`en` | &#34;en&#34; |
`es` | &#34;es&#34; |
`et` | &#34;et&#34; |
`fa` | &#34;fa&#34; |
`fi` | &#34;fi&#34; |
`fj` | &#34;fj&#34; |
`fr` | &#34;fr&#34; |
`he` | &#34;he&#34; |
`hi` | &#34;hi&#34; |
`hr` | &#34;hr&#34; |
`ht` | &#34;ht&#34; |
`hu` | &#34;hu&#34; |
`hy` | &#34;hy&#34; |
`id` | &#34;id&#34; |
`is` | &#34;is&#34; |
`it` | &#34;it&#34; |
`ja` | &#34;ja&#34; |
`ka` | &#34;ka&#34; |
`kk` | &#34;kk&#34; |
`kl` | &#34;kl&#34; |
`km` | &#34;km&#34; |
`ko` | &#34;ko&#34; |
`ky` | &#34;ky&#34; |
`lb` | &#34;lb&#34; |
`lo` | &#34;lo&#34; |
`lt` | &#34;lt&#34; |
`lv` | &#34;lv&#34; |
`mg` | &#34;mg&#34; |
`mh` | &#34;mh&#34; |
`mn` | &#34;mn&#34; |
`ms` | &#34;ms&#34; |
`mt` | &#34;mt&#34; |
`my` | &#34;my&#34; |
`na` | &#34;na&#34; |
`ne` | &#34;ne&#34; |
`nl` | &#34;nl&#34; |
`no` | &#34;no&#34; |
`ny` | &#34;ny&#34; |
`pl` | &#34;pl&#34; |
`pt` | &#34;pt&#34; |
`qu` | &#34;qu&#34; |
`rn` | &#34;rn&#34; |
`ro` | &#34;ro&#34; |
`ru` | &#34;ru&#34; |
`rw` | &#34;rw&#34; |
`sk` | &#34;sk&#34; |
`sl` | &#34;sl&#34; |
`sm` | &#34;sm&#34; |
`so` | &#34;so&#34; |
`sq` | &#34;sq&#34; |
`sr` | &#34;sr&#34; |
`ss` | &#34;ss&#34; |
`st` | &#34;st&#34; |
`sv` | &#34;sv&#34; |
`sw` | &#34;sw&#34; |
`ta` | &#34;ta&#34; |
`tg` | &#34;tg&#34; |
`th` | &#34;th&#34; |
`ti` | &#34;ti&#34; |
`tk` | &#34;tk&#34; |
`tl` | &#34;tl&#34; |
`tn` | &#34;tn&#34; |
`to` | &#34;to&#34; |
`tr` | &#34;tr&#34; |
`uk` | &#34;uk&#34; |
`ur` | &#34;ur&#34; |
`uz` | &#34;uz&#34; |
`vi` | &#34;vi&#34; |
`wo` | &#34;wo&#34; |
`yo` | &#34;yo&#34; |
`zh` | &#34;zh&#34; |

___

### roles

• `Const` **roles**: object = { normal: 0, moderator: 5, administrator: 10, mapcrew: 11, funcorp: 13,} as const

The ids of all the staff roles.

#### Type declaration:

Name | Type |
------ | ------ |
`administrator` | 10 |
`funcorp` | 13 |
`mapcrew` | 11 |
`moderator` | 5 |
`normal` | 0 |

___

### roomModes

• `Const` **roomModes**: object = { normal: 1, bootcamp: 2, vanilla: 3, survivor: 8, racing: 9, music: 10, defilante: 11, village: 16, module: 18,} as const

The ids of all the room modes.

#### Type declaration:

Name | Type |
------ | ------ |
`bootcamp` | 2 |
`defilante` | 11 |
`module` | 18 |
`music` | 10 |
`normal` | 1 |
`racing` | 9 |
`survivor` | 8 |
`vanilla` | 3 |
`village` | 16 |

___

### smiles

• `Const` **smiles**: object = { smiley: 0, sad: 1, tongue: 2, angry: 3, laugh: 4, shades: 5, blush: 6, sweatdrop: 7, derp: 8, OMG: 9,} as const

the ids of all the smiles.

#### Type declaration:

Name | Type |
------ | ------ |
`OMG` | 9 |
`angry` | 3 |
`blush` | 6 |
`derp` | 8 |
`laugh` | 4 |
`sad` | 1 |
`shades` | 5 |
`smiley` | 0 |
`sweatdrop` | 7 |
`tongue` | 2 |

___

### whisperStates

• `Const` **whisperStates**: object = { enabled: 1, disabledPublic: 2, disabledAll: 3,} as const

The ids of all the whisper states.

#### Type declaration:

Name | Type |
------ | ------ |
`disabledAll` | 3 |
`disabledPublic` | 2 |
`enabled` | 1 |

## Functions

### Identifier

▸ `Const`**Identifier**(`c`: number, `cc`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`c` | number |
`cc` | number |

**Returns:** number

## Object literals

### communities

▪ `Const` **communities**: object

Game's communities

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`ar` | number | 15 |
`bg` | number | 24 |
`br` | number | 3 |
`cn` | number | 5 |
`cz` | number | 21 |
`de` | number | 13 |
`e2` | number | 14 |
`en` | number | 0 |
`es` | number | 4 |
`et` | number | 29 |
`fi` | number | 20 |
`fr` | number | 1 |
`he` | number | 26 |
`hr` | number | 23 |
`hu` | number | 9 |
`id` | number | 12 |
`int` | number | 0 |
`it` | number | 27 |
`jp` | number | 18 |
`lt` | number | 17 |
`lv` | number | 25 |
`nl` | number | 10 |
`ph` | number | 16 |
`pl` | number | 8 |
`pt` | number | 31 |
`ro` | number | 11 |
`ru` | number | 2 |
`tr` | number | 6 |
`vk` | number | 7 |
`xx` | number | 0 |
