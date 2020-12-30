---
id: "profile"
title: "Class: Profile"
sidebar_label: "Profile"
---

Represents player's profile from `/profile` command

## Hierarchy

* [Player](player.md)

  ↳ **Profile**

## Properties

### adventurePoints

•  **adventurePoints**: number

___

### badges

•  **badges**: { id: number ; quantity: number  }[]

___

### bootcamp

•  **bootcamp**: number

___

### cheese

•  **cheese**: number

___

### client

•  **client**: [Client](client.md)

*Inherited from [Base](base.md).[client](base.md#client)*

___

### first

•  **first**: number

___

### gender

•  **gender**: [ValueOf](../globals.md#valueof)<*typeof* genders\>

___

### id

•  **id**: number

___

### level

•  **level**: number

___

### look

•  **look**: string

___

### modeStatus

•  **modeStatus**: { imageId: number ; mode: number ; progress: number ; progressLimit: number  }[]

___

### name

•  **name**: string

*Inherited from [Player](player.md).[name](player.md#name)*

The player's name.

___

### orbId

•  **orbId**: number

___

### orbs

•  **orbs**: number[]

___

### registrationDate

•  **registrationDate**: number

___

### role

•  **role**: number

___

### saves

•  **saves**: { divine: number ; hard: number ; normal: number  }

#### Type declaration:

Name | Type |
------ | ------ |
`divine` | number |
`hard` | number |
`normal` | number |

___

### shamanCheese

•  **shamanCheese**: number

___

### soulmate

•  **soulmate**: string

___

### titleId

•  **titleId**: number

___

### titles

•  **titles**: { id: number ; star: number  }[]

___

### tribeName

•  **tribeName**: string

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
