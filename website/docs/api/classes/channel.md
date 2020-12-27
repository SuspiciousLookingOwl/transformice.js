---
id: "channel"
title: "Class: Channel"
sidebar_label: "Channel"
---

Represents a chat channel.

## Hierarchy

* [Base](base.md)

  ↳ **Channel**

## Constructors

### constructor

\+ **new Channel**(`client`: [Client](client.md), `name`: string): [Channel](channel.md)

*Overrides [Base](base.md).[constructor](base.md#constructor)*

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`name` | string |

**Returns:** [Channel](channel.md)

## Properties

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### name

•  **name**: string

The channel name

## Methods

### sendMessage

▸ **sendMessage**(`message`: string): void

Send a message to this channel

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
