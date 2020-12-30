---
id: "player"
title: "Class: Player"
sidebar_label: "Player"
---

Represents a player from the room.

## Hierarchy

* [Base](base.md)

  ↳ **Player**

  ↳↳ [Friend](friend.md)

  ↳↳ [RoomPlayer](roomplayer.md)

  ↳↳ [Profile](profile.md)

  ↳↳ [Member](member.md)

## Properties

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### name

•  **name**: string

The player's name.

## Methods

### friend

▸ **friend**(): void

Add player to the friend list

**Returns:** void

___

### unfriend

▸ **unfriend**(): void

Remove player from the friend list

**Returns:** void

___

### whisper

▸ **whisper**(`message`: string): void

Send a whisper to the player

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
