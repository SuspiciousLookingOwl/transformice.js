---
id: "whispermessage"
title: "Class: WhisperMessage"
sidebar_label: "WhisperMessage"
---

Represents a whisper message.

## Hierarchy

* [Message](message.md)

  ↳ **WhisperMessage**

## Constructors

### constructor

\+ **new WhisperMessage**(`client`: [Client](client.md), `author`: [Player](player.md) \| string, `community`: number, `sentTo`: string, `content`: string): [WhisperMessage](whispermessage.md)

*Overrides [Message](message.md).[constructor](message.md#constructor)*

*Defined in [src/structures/WhisperMessage.ts:10](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/structures/WhisperMessage.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`author` | [Player](player.md) \| string |
`community` | number |
`sentTo` | string |
`content` | string |

**Returns:** [WhisperMessage](whispermessage.md)

## Properties

### author

•  **author**: [Player](player.md) \| string

*Inherited from [Message](message.md).[author](message.md#author)*

*Defined in [src/structures/Message.ts:7](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/structures/Message.ts#L7)*

___

### client

•  **client**: [Client](client.md)

*Inherited from [Message](message.md).[client](message.md#client)*

*Defined in [src/structures/Message.ts:5](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/structures/Message.ts#L5)*

___

### community

•  **community**: number

*Defined in [src/structures/WhisperMessage.ts:10](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/structures/WhisperMessage.ts#L10)*

___

### content

•  **content**: string

*Inherited from [Message](message.md).[content](message.md#content)*

*Defined in [src/structures/Message.ts:6](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/structures/Message.ts#L6)*

___

### sentTo

•  **sentTo**: string

*Defined in [src/structures/WhisperMessage.ts:9](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/structures/WhisperMessage.ts#L9)*

The player name who sent to them.

## Methods

### reply

▸ **reply**(`message`: string): void

*Defined in [src/structures/WhisperMessage.ts:33](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/structures/WhisperMessage.ts#L33)*

Reply the author with a whisper message

**`example`** 
client.on('whisper', (message) => {
	if (client.nickname == message.author)
		return;
	message.reply('Hello');
}

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
