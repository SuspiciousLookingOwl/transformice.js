---
id: "channelmessage"
title: "Class: ChannelMessage"
sidebar_label: "ChannelMessage"
---

Represents a Channel message.

## Hierarchy

* [Message](message.md)

  ↳ **ChannelMessage**

## Constructors

### constructor

\+ **new ChannelMessage**(`client`: [Client](client.md), `author`: [Player](player.md), `content`: string, `community`: number, `channelName`: string): [ChannelMessage](channelmessage.md)

*Overrides [Message](message.md).[constructor](message.md#constructor)*

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

___

### channelName

•  **channelName**: string

Channel name the message is sent to

___

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### community

•  **community**: number

Community of the author that sends the message

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
