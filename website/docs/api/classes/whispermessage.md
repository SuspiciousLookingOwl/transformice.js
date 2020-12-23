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

\+ **new WhisperMessage**(`client`: [Client](client.md), `author`: [Player](player.md), `community`: number, `sentTo`: string, `content`: string): [WhisperMessage](whispermessage.md)

*Overrides [Message](message.md).[constructor](message.md#constructor)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`author` | [Player](player.md) |
`community` | number |
`sentTo` | string |
`content` | string |

**Returns:** [WhisperMessage](whispermessage.md)

## Properties

### author

•  **author**: [Player](player.md)

*Inherited from [Message](message.md).[author](message.md#author)*

___

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### community

•  **community**: number

___

### content

•  **content**: string

*Inherited from [Message](message.md).[content](message.md#content)*

___

### sentTo

•  **sentTo**: string

The player name who sent to them.

## Methods

### reply

▸ **reply**(`message`: string): void

Reply the author with a whisper message

**`example`** 
```js
client.on('whisper', (message) => {
	if (client.name == message.author.name)
		return;
	message.reply('Hello');
}
```

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
