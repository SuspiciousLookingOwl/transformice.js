---
id: "channelmessage"
title: "Class: ChannelMessage"
sidebar_label: "ChannelMessage"
---

Represents a Channel message.

## Hierarchy

* [Message](message.md)<[Player](player.md)\>

  ↳ **ChannelMessage**

## Constructors

### constructor

\+ **new ChannelMessage**(`client`: [Client](client.md), `author`: [Player](player.md), `content`: string, `community`: number, `channelName`: string): [ChannelMessage](channelmessage.md)

*Overrides [Message](message.md).[constructor](message.md#constructor)*

*Defined in [src/structures/ChannelMessage.ts:13](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/ChannelMessage.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`author` | [Player](player.md) |
`content` | string |
`community` | number |
`channelName` | string |

**Returns:** [ChannelMessage](channelmessage.md)

## Properties

### author

•  **author**: [Player](player.md)

*Inherited from [Message](message.md).[author](message.md#author)*

*Defined in [src/structures/Message.ts:7](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L7)*

___

### channelName

•  **channelName**: string

*Defined in [src/structures/ChannelMessage.ts:13](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/ChannelMessage.ts#L13)*

Channel name the message is sent to

___

### client

•  **client**: [Client](client.md)

*Inherited from [Message](message.md).[client](message.md#client)*

*Defined in [src/structures/Message.ts:5](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L5)*

___

### community

•  **community**: number

*Defined in [src/structures/ChannelMessage.ts:9](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/ChannelMessage.ts#L9)*

Community of the author that sends the message

___

### content

•  **content**: string

*Inherited from [Message](message.md).[content](message.md#content)*

*Defined in [src/structures/Message.ts:6](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L6)*

## Methods

### reply

▸ **reply**(`message`: string): void

*Defined in [src/structures/ChannelMessage.ts:38](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/ChannelMessage.ts#L38)*

Reply the author with a message.

**`example`** 
```js
client.on('roomMessage', (message) => {
	if (client.nickname == message.author.nickname)
		return;
	message.reply('Hello');
}
```

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
