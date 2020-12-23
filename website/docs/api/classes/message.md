---
id: "message"
title: "Class: Message<AuthorType>"
sidebar_label: "Message"
---

## Type parameters

Name | Type |
------ | ------ |
`AuthorType` | [Player](player.md) \| string |

## Hierarchy

* **Message**

  ↳ [ChannelMessage](channelmessage.md)

  ↳ [RoomMessage](roommessage.md)

  ↳ [WhisperMessage](whispermessage.md)

## Constructors

### constructor

\+ **new Message**(`client`: [Client](client.md), `author`: AuthorType, `content`: string): [Message](message.md)

*Defined in [src/structures/Message.ts:7](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`author` | AuthorType |
`content` | string |

**Returns:** [Message](message.md)

## Properties

### author

•  **author**: AuthorType

*Defined in [src/structures/Message.ts:7](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L7)*

___

### client

•  **client**: [Client](client.md)

*Defined in [src/structures/Message.ts:5](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L5)*

___

### content

•  **content**: string

*Defined in [src/structures/Message.ts:6](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/structures/Message.ts#L6)*
