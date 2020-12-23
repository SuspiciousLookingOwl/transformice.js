---
id: "clientevents"
title: "Interface: ClientEvents"
sidebar_label: "ClientEvents"
---

## Hierarchy

* **ClientEvents**

## Properties

### channelJoin

•  **channelJoin**: (channelName: string) => void

*Defined in [src/client/Events.ts:98](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L98)*

Emitted when client joined a chat channel

___

### channelLeave

•  **channelLeave**: (channelName: string) => void

*Defined in [src/client/Events.ts:102](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L102)*

Emitted when client left a chat channel

___

### channelMessage

•  **channelMessage**: (channelMessage: [ChannelMessage](../classes/channelmessage.md)) => void

*Defined in [src/client/Events.ts:106](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L106)*

Emitted when a message is sent to a channel

___

### channelWho

•  **channelWho**: (players: [Player](../classes/player.md)[]) => void

*Defined in [src/client/Events.ts:94](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L94)*

Emitted when received /who result

___

### connect

•  **connect**: (connection: [Connection](../classes/connection.md)) => void

*Defined in [src/client/Events.ts:134](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L134)*

Emitted when a connection is successfully connected.

___

### disconnect

•  **disconnect**: () => void

*Defined in [src/client/Events.ts:130](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L130)*

Emitted when the client has disconnect.

___

### friendChange

•  **friendChange**: (friend: [Friend](../classes/friend.md)) => void

*Defined in [src/client/Events.ts:90](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L90)*

Emitted when friend state is changed (e.g. room, gender)

___

### friendConnect

•  **friendConnect**: (nickname: string) => void

*Defined in [src/client/Events.ts:82](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L82)*

Emitted when a friend is connected

___

### friendDisconnect

•  **friendDisconnect**: (nickname: string) => void

*Defined in [src/client/Events.ts:86](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L86)*

Emitted when a friend is disconnected

___

### friendList

•  **friendList**: (friends: [Friend](../classes/friend.md)[], soulmateName: string \| null) => void

*Defined in [src/client/Events.ts:78](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L78)*

Emitted when the client received the friend list

___

### languageChange

•  **languageChange**: (language: [ValueOf](../globals.md#valueof)<*typeof* languages\>, country: string, readRight: boolean, readSpecialChar: boolean) => void

*Defined in [src/client/Events.ts:65](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L65)*

Emitted when a language is changed.characters or not.

___

### logged

•  **logged**: (nickname: string, pcode: number) => void

*Defined in [src/client/Events.ts:29](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L29)*

Emitted when the client has logged in.

___

### loginReady

•  **loginReady**: () => void

*Defined in [src/client/Events.ts:25](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L25)*

Emitted when the client can login on the game.

___

### luaLog

•  **luaLog**: (log: string) => void

*Defined in [src/client/Events.ts:37](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L37)*

Emitted when the client receives lua logs or errors from `#Lua` chat.

___

### rawOldPacket

•  **rawOldPacket**: (connection: [Connection](../classes/connection.md), ccc: number, data: string[]) => void

*Defined in [src/client/Events.ts:21](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L21)*

Emitted when a new old packet received.

___

### rawPacket

•  **rawPacket**: (conn: [Connection](../classes/connection.md), ccc: number, packet: [ByteArray](../classes/bytearray.md)) => void

*Defined in [src/client/Events.ts:74](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L74)*

Emitted when a new packet received from main or bulle connection.

___

### rawTribulle

•  **rawTribulle**: (code: number, packet: [ByteArray](../classes/bytearray.md)) => void

*Defined in [src/client/Events.ts:126](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L126)*

Emitted when a new community platform packet received.

___

### ready

•  **ready**: () => void

*Defined in [src/client/Events.ts:33](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L33)*

Emitted when the client is connected to the community platform.

___

### roomChange

•  **roomChange**: (before: [Room](../classes/room.md), after: [Room](../classes/room.md)) => void

*Defined in [src/client/Events.ts:49](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L49)*

Emitted when the room is changed.

**`example`** 
client.on('roomChange', (before, after) => {
	console.log('The room changed from '+before.name+' to '+after.name);
})

___

### roomMessage

•  **roomMessage**: (message: [RoomMessage](../classes/roommessage.md)) => void

*Defined in [src/client/Events.ts:41](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L41)*

Emitted when a player sends a message in the room.

___

### roomPlayerJoin

•  **roomPlayerJoin**: (player: [Player](../classes/player.md)) => void

*Defined in [src/client/Events.ts:61](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L61)*

Emitted when a new player has joined.

___

### roomPlayerLeft

•  **roomPlayerLeft**: (player: [Player](../classes/player.md)) => void

*Defined in [src/client/Events.ts:17](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L17)*

Emitted when a player left the room.

___

### roomPlayerUpdate

•  **roomPlayerUpdate**: (before: [Player](../classes/player.md) \| undefined, after: [Player](../classes/player.md)) => void

*Defined in [src/client/Events.ts:57](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L57)*

Emitted when the room playerList is updated.

___

### roomUpdate

•  **roomUpdate**: (before: [Player](../classes/player.md)[], after: [Player](../classes/player.md)[]) => void

*Defined in [src/client/Events.ts:53](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L53)*

Emitted when the room playerList is updated.

___

### tribeMemberConnect

•  **tribeMemberConnect**: (nickname: string) => void

*Defined in [src/client/Events.ts:114](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L114)*

Emitted when a tribe member connected

___

### tribeMemberDisconnect

•  **tribeMemberDisconnect**: (nickname: string) => void

*Defined in [src/client/Events.ts:118](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L118)*

Emitted when a tribe member disconnected

___

### tribeMessage

•  **tribeMessage**: (message: [Message](../classes/message.md)<[Player](../classes/player.md)\>) => void

*Defined in [src/client/Events.ts:110](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L110)*

Emitted when a tribe message is received

___

### whisper

•  **whisper**: (message: [WhisperMessage](../classes/whispermessage.md)) => void

*Defined in [src/client/Events.ts:122](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Events.ts#L122)*

Emitted when a player sends a whisper message to the client.
