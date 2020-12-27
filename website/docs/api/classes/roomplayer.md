---
id: "roomplayer"
title: "Class: RoomPlayer"
sidebar_label: "RoomPlayer"
---

Represents a player from the room.

## Hierarchy

* [Player](player.md)

  ↳ **RoomPlayer**

## Properties

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### facingRight

•  **facingRight**: boolean

Whether or not the player is facing right.

___

### gender

•  **gender**: number

The player's gender.

___

### hasCheese

•  **hasCheese**: boolean

Whether or not the player has a cheese.

___

### isDead

•  **isDead**: boolean

Whether or not the player is dead.

___

### isJumping

•  **isJumping**: boolean

Whether or not the player is in the air.

___

### isShaman

•  **isShaman**: boolean

Whether or not the player is shaman.

___

### isVampire

•  **isVampire**: boolean

Whether or not the player is vampire.

___

### look

•  **look**: string

The current items and customisation of the player’s outfit as `1;0,0,0,0,0,0,0,0,0`.

___

### mouseColor

•  **mouseColor**: number

The player's mouse color.

___

### movingLeft

•  **movingLeft**: boolean

Whether or not the player is moving left.

___

### movingRight

•  **movingRight**: boolean

Whether or not the player is moving right.

___

### name

•  **name**: string

*Inherited from [Player](player.md).[name](player.md#name)*

The player's name.

___

### nameColor

•  **nameColor**: number

The player's name color, By default : `-1`.

___

### pcode

•  **pcode**: number

The player's temporary code.

___

### score

•  **score**: number

The player's score.

___

### shamanColor

•  **shamanColor**: number

The player's shaman color.

___

### title

•  **title**: number

The player's title ID.

___

### titleStars

•  **titleStars**: number

How many stars in the title.

___

### vx

•  **vx**: number

The player’s X velocity.

___

### vy

•  **vy**: number

The player’s Y velocity.

___

### x

•  **x**: number

The player’s X coordinate.

___

### y

•  **y**: number

The player’s Y coordinate.

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
