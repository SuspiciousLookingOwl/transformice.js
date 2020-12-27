---
id: "member"
title: "Class: Member"
sidebar_label: "Member"
---

Represents a tribe member

## Hierarchy

* [Player](player.md)

  ↳ **Member**

## Properties

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### gameId

•  **gameId**: number

the Game ID the player is playing

___

### gender

•  **gender**: [ValueOf](../globals.md#valueof)<*typeof* genders\>

The member's gender

___

### id

•  **id**: number

The member's id

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

### rankId

•  **rankId**: number

The rank id of the member

___

### roomName

•  **roomName**: string

The room name of the player (if they are online)

___

### tribe

•  **tribe**: [Tribe](tribe.md)

The member's tribe

## Accessors

### isConnected

• get **isConnected**(): boolean

If the player is connected

**Returns:** boolean

___

### rank

• get **rank**(): unknown

The rank of the member

**Returns:** unknown

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
