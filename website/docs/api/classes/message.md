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

___

### client

•  **client**: [Client](client.md)

___

### content

•  **content**: string
