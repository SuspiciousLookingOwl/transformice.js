---
id: "friend"
title: "Class: Friend"
sidebar_label: "Friend"
---

Represents a friend from the friend list

## Hierarchy

* [Player](player.md)

  ↳ **Friend**

## Properties

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### community

•  **community**: number

The community of the player

___

### gender

•  **gender**: [ValueOf](../globals.md#valueof)<*typeof* genders\>

The player's gender

___

### hasAddedBack

•  **hasAddedBack**: boolean

If the player has added the client back

___

### id

•  **id**: number

The player's id

___

### isConnected

•  **isConnected**: boolean

If the player is connected

___

### isSoulmate

•  **isSoulmate**: boolean

If the player is the soulmate of the client

___

### lastConnection

•  **lastConnection**: number

The player's last connection time

___

### name

•  **name**: string

*Inherited from [Player](player.md).[name](player.md#name)*

The player's name.

___

### roomName

•  **roomName**: string

The room name of the player (if they are online)

## Methods

### friend

▸ **friend**(): void

*Inherited from [Player](player.md).[friend](player.md#friend)*

Add player to the friend list

**Returns:** void

___

### unfriend

▸ **unfriend**(): void

*Inherited from [Player](player.md).[unfriend](player.md#unfriend)*

Remove player from the friend list

**Returns:** void

___

### whisper

▸ **whisper**(`message`: string): void

*Inherited from [Player](player.md).[whisper](player.md#whisper)*

Send a whisper to the player

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void
