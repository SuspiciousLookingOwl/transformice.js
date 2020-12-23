---
id: "room"
title: "Class: Room"
sidebar_label: "Room"
---

Represents a room.

## Hierarchy

* **Room**

## Constructors

### constructor

\+ **new Room**(`client`: [Client](client.md), `isPublic`: boolean, `name`: string, `language`: [ValueOf](../globals.md#valueof)<*typeof* languages\>): [Room](room.md)

*Defined in [src/structures/Room.ts:31](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`isPublic` | boolean |
`name` | string |
`language` | [ValueOf](../globals.md#valueof)<*typeof* languages\> |

**Returns:** [Room](room.md)

## Properties

### client

•  **client**: [Client](client.md)

*Defined in [src/structures/Room.ts:11](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L11)*

The client.

___

### isPublic

•  **isPublic**: boolean

*Defined in [src/structures/Room.ts:23](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L23)*

Whether or not the room is a public.

___

### isTribeHouse

•  **isTribeHouse**: boolean

*Defined in [src/structures/Room.ts:31](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L31)*

Whether or not the room is a tribe house.

___

### language

•  **language**: [ValueOf](../globals.md#valueof)<*typeof* languages\>

*Defined in [src/structures/Room.ts:27](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L27)*

The room language.

___

### name

•  **name**: string

*Defined in [src/structures/Room.ts:15](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L15)*

The room name.

___

### playerList

•  **playerList**: [Player](player.md)[]

*Defined in [src/structures/Room.ts:19](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L19)*

All of the [Player](player.md) that are in the room.

## Methods

### getPlayer

▸ **getPlayer**(`nickName`: string): [Player](player.md) \| undefined

*Defined in [src/structures/Room.ts:53](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L53)*

Get a player by the pcode or nickname.

**`example`** 
const player = client.room.getPlayer('Name#0000');
console.log(player.look);

#### Parameters:

Name | Type |
------ | ------ |
`nickName` | string |

**Returns:** [Player](player.md) \| undefined

▸ **getPlayer**(`pcode`: number): [Player](player.md) \| undefined

*Defined in [src/structures/Room.ts:54](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L54)*

#### Parameters:

Name | Type |
------ | ------ |
`pcode` | number |

**Returns:** [Player](player.md) \| undefined

___

### sendMessage

▸ **sendMessage**(`message`: string): void

*Defined in [src/structures/Room.ts:86](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Room.ts#L86)*

Sends a message to the room.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
