---
id: "roommessage"
title: "Class: RoomMessage"
sidebar_label: "RoomMessage"
---

Represents a room message.

## Hierarchy

* [Message](message.md)<[Player](player.md)\>

  ↳ **RoomMessage**

## Constructors

### constructor

\+ **new RoomMessage**(`client`: [Client](client.md), `author`: [Player](player.md), `content`: string): [RoomMessage](roommessage.md)

*Overrides [Message](message.md).[constructor](message.md#constructor)*

*Defined in [src/structures/RoomMessage.ts:5](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/RoomMessage.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`author` | [Player](player.md) |
`content` | string |

**Returns:** [RoomMessage](roommessage.md)

## Properties

### author

•  **author**: [Player](player.md)

*Inherited from [Message](message.md).[author](message.md#author)*

*Defined in [src/structures/Message.ts:7](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L7)*

___

### client

•  **client**: [Client](client.md)

*Inherited from [Message](message.md).[client](message.md#client)*

*Defined in [src/structures/Message.ts:5](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L5)*

___

### content

•  **content**: string

*Inherited from [Message](message.md).[content](message.md#content)*

*Defined in [src/structures/Message.ts:6](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L6)*

## Methods

### reply

▸ **reply**(`message`: string): void

*Defined in [src/structures/RoomMessage.ts:19](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/RoomMessage.ts#L19)*

Reply the author with a message.

**`example`** 
client.on('roomMessage', (message) => {
	if (client.nickname == message.author.nickname)
		return;
	message.reply('Hello');
}

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
