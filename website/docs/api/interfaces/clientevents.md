---
id: "clientevents"
title: "Interface: ClientEvents"
sidebar_label: "ClientEvents"
---

## Hierarchy

* **ClientEvents**

## Properties

### connect

•  **connect**: (connection: [Connection](../classes/connection.md)) => void

*Defined in [src/client/Events.ts:86](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L86)*

Emitted when a connection is successfully connected.

___

### disconnect

•  **disconnect**: () => void

*Defined in [src/client/Events.ts:82](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L82)*

Emitted when the client has disconnect.

___

### friendList

•  **friendList**: (friends: [Friend](../classes/friend.md)[], soulmateName: string \| null) => void

*Defined in [src/client/Events.ts:70](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L70)*

Emitted when the client received the friend list

___

### languageChange

•  **languageChange**: (language: [ValueOf](../globals.md#valueof)<*typeof* languages\>, country: string, readRight: boolean, readSpecialChar: boolean) => void

*Defined in [src/client/Events.ts:57](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L57)*

Emitted when a language is changed.characters or not.

___

### logged

•  **logged**: (nickname: string, pcode: number) => void

*Defined in [src/client/Events.ts:21](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L21)*

Emitted when the client has logged in.

___

### loginReady

•  **loginReady**: () => void

*Defined in [src/client/Events.ts:17](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L17)*

Emitted when the client can login on the game.

___

### luaLog

•  **luaLog**: (log: string) => void

*Defined in [src/client/Events.ts:29](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L29)*

Emitted when the client receives lua logs or errors from `#Lua` chat.

___

### rawOldPacket

•  **rawOldPacket**: (connection: [Connection](../classes/connection.md), ccc: number, data: string[]) => void

*Defined in [src/client/Events.ts:13](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L13)*

Emitted when a new old packet received.

___

### rawPacket

•  **rawPacket**: (conn: [Connection](../classes/connection.md), ccc: number, packet: [ByteArray](../classes/bytearray.md)) => void

*Defined in [src/client/Events.ts:66](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L66)*

Emitted when a new packet received from main or bulle connection.

___

### rawTribulle

•  **rawTribulle**: (code: number, packet: [ByteArray](../classes/bytearray.md)) => void

*Defined in [src/client/Events.ts:78](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L78)*

Emitted when a new community platform packet received.

___

### ready

•  **ready**: () => void

*Defined in [src/client/Events.ts:25](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L25)*

Emitted when the client is connected to the community platform.

___

### roomChange

•  **roomChange**: (before: [Room](../classes/room.md), after: [Room](../classes/room.md)) => void

*Defined in [src/client/Events.ts:41](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L41)*

Emitted when the room is changed.

**`example`** 
client.on('roomChange', (before, after) => {
	console.log('The room changed from '+before.name+' to '+after.name);
})

___

### roomMessage

•  **roomMessage**: (message: [RoomMessage](../classes/roommessage.md)) => void

*Defined in [src/client/Events.ts:33](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L33)*

Emitted when a player sends a message in the room.

___

### roomPlayerJoin

•  **roomPlayerJoin**: (player: [Player](../classes/player.md)) => void

*Defined in [src/client/Events.ts:53](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L53)*

Emitted when a new player has joined.

___

### roomPlayerLeft

•  **roomPlayerLeft**: (player: [Player](../classes/player.md)) => void

*Defined in [src/client/Events.ts:9](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L9)*

Emitted when a player left the room.

___

### roomPlayerUpdate

•  **roomPlayerUpdate**: (before: [Player](../classes/player.md) \| undefined, after: [Player](../classes/player.md)) => void

*Defined in [src/client/Events.ts:49](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L49)*

Emitted when the room playerList is updated.

___

### roomUpdate

•  **roomUpdate**: (before: [Player](../classes/player.md)[], after: [Player](../classes/player.md)[]) => void

*Defined in [src/client/Events.ts:45](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L45)*

Emitted when the room playerList is updated.

___

### whisper

•  **whisper**: (message: [WhisperMessage](../classes/whispermessage.md)) => void

*Defined in [src/client/Events.ts:74](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Events.ts#L74)*

Emitted when a player sends a whisper message to the client.
