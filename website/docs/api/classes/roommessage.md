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

___

### client

•  **client**: [Client](client.md)

*Inherited from [Message](message.md).[client](message.md#client)*

___

### content

•  **content**: string

*Inherited from [Message](message.md).[content](message.md#content)*

## Methods

### reply

▸ **reply**(`message`: string): void

Reply the author with a message.

**`example`** 
```js
client.on('roomMessage', (message) => {
	if (client.nickname == message.author.nickname)
		return;
	message.reply('Hello');
```
}

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
