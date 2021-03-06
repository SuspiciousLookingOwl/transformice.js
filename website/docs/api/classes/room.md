---
id: "room"
title: "Class: Room"
sidebar_label: "Room"
---

Represents a room.

## Hierarchy

* [Base](base.md)

  ↳ **Room**

## Properties

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

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

•  **playerList**: [RoomPlayer](roomplayer.md)[]

All of the [Player](player.md) that are in the room.

## Methods

### addPlayer

▸ **addPlayer**(`player`: [RoomPlayer](roomplayer.md)): void

Add player to player list

#### Parameters:

Name | Type |
------ | ------ |
`player` | [RoomPlayer](roomplayer.md) |

**Returns:** void

___

### getPlayer

▸ **getPlayer**(`name`: string): [RoomPlayer](roomplayer.md) \| undefined

Get a player by the pcode or name.

**`example`** 
```js
const player = client.room.getPlayer('Name#0000');
console.log(player.look);
```

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [RoomPlayer](roomplayer.md) \| undefined

▸ **getPlayer**(`pcode`: number): [RoomPlayer](roomplayer.md) \| undefined

#### Parameters:

Name | Type |
------ | ------ |
`pcode` | number |

**Returns:** [RoomPlayer](roomplayer.md) \| undefined

___

### sendMessage

▸ **sendMessage**(`message`: string): void

Sends a message to the room.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
