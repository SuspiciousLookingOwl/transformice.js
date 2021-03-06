---
id: "roommessage"
title: "Class: RoomMessage"
sidebar_label: "RoomMessage"
---

Represents a room message.

## Hierarchy

* [Message](message.md)

  ↳ **RoomMessage**

## Properties

### author

•  **author**: [Player](player.md)

*Inherited from [Message](message.md).[author](message.md#author)*

___

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

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
	if (client.name === message.author.name)
		return;
	message.reply('Hello');
```
}

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
