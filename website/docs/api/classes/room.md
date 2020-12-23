---
id: "room"
title: "Class: Room"
sidebar_label: "Room"
---

Represents a room.

## Hierarchy

* **Room**

## Constructors

### constructor

\+ **new Room**(`client`: [Client](client.md), `isPublic`: boolean, `name`: string, `language`: [ValueOf](../globals.md#valueof)<*typeof* languages\>): [Room](room.md)

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`isPublic` | boolean |
`name` | string |
`language` | [ValueOf](../globals.md#valueof)<*typeof* languages\> |

**Returns:** [Room](room.md)

## Properties

### client

•  **client**: [Client](client.md)

The client.

___

### isPublic

•  **isPublic**: boolean

Whether or not the room is a public.

___

### isTribeHouse

•  **isTribeHouse**: boolean

Whether or not the room is a tribe house.

___

### language

•  **language**: [ValueOf](../globals.md#valueof)<*typeof* languages\>

The room language.

___

### name

•  **name**: string

The room name.

___

### playerList

•  **playerList**: [Player](player.md)[]

All of the [Player](player.md) that are in the room.

## Methods

### getPlayer

▸ **getPlayer**(`nickName`: string): [Player](player.md) \| undefined

Get a player by the pcode or nickname.

**`example`** 
const player = client.room.getPlayer('Name#0000');
console.log(player.look);

#### Parameters:

Name | Type |
------ | ------ |
`nickName` | string |

**Returns:** [Player](player.md) \| undefined

▸ **getPlayer**(`pcode`: number): [Player](player.md) \| undefined

#### Parameters:

Name | Type |
------ | ------ |
`pcode` | number |

**Returns:** [Player](player.md) \| undefined

___

### sendMessage

▸ **sendMessage**(`message`: string): void

Sends a message to the room.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
