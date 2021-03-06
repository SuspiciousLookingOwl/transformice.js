---
id: "channelmessage"
title: "Class: ChannelMessage"
sidebar_label: "ChannelMessage"
---

Represents a Channel message.

## Hierarchy

* [Message](message.md)

  ↳ **ChannelMessage**

## Properties

### author

•  **author**: [Player](player.md)

*Inherited from [Message](message.md).[author](message.md#author)*

___

### channel

•  **channel**: [Channel](channel.md)

The Channel the message is sent to

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
client.on('channelMessage', (message) => {
	if (client.name === message.author.name)
		return;
	message.reply('Hello');
}
```

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
