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

Emitted when client joined a chat channel

___

### channelLeave

•  **channelLeave**: (channelName: string) => void

Emitted when client left a chat channel

___

### channelMessage

•  **channelMessage**: (channelMessage: [ChannelMessage](../classes/channelmessage.md)) => void

Emitted when a message is sent to a channel

___

### channelWho

•  **channelWho**: (channelName: string, players: [Player](../classes/player.md)[], fingerprint: number) => void

Emitted when received /who result

___

### connect

•  **connect**: (connection: Connection) => void

Emitted when a connection is successfully connected.

___

### connectionError

•  **connectionError**: (err: Error) => void

Emitted when connection failed

___

### disconnect

•  **disconnect**: () => void

Emitted when the client has disconnect.

___

### friendAdd

•  **friendAdd**: (friend: [Player](../classes/player.md)) => void

Emitted when a friend is added to friend list

___

### friendConnect

•  **friendConnect**: (name: string) => void

Emitted when a friend is connected

___

### friendDisconnect

•  **friendDisconnect**: (name: string) => void

Emitted when a friend is disconnected

___

### friendList

•  **friendList**: (friends: [Friend](../classes/friend.md)[]) => void

Emitted when the client received the friend list

___

### friendRemove

•  **friendRemove**: (friend: [Player](../classes/player.md)) => void

Emitted when a friend is removed from friend list

___

### friendUpdate

•  **friendUpdate**: (friend: [Friend](../classes/friend.md)) => void

Emitted when friend state is changed (e.g. room, gender)

___

### languageChange

•  **languageChange**: (language: [ValueOf](../globals.md#valueof)<*typeof* languages\>, country: string, readRight: boolean, readSpecialChar: boolean) => void

Emitted when a language is changed.characters or not.

___

### login

•  **login**: (name: string, pcode: number) => void

Emitted when the client has logged in.

___

### loginError

•  **loginError**: (code: number, error1: string, error2: string) => void

Emitted when the client failed to log in.

___

### loginReady

•  **loginReady**: () => void

Emitted when the client can login on the game.

___

### luaLog

•  **luaLog**: (log: string) => void

Emitted when the client receives lua logs or errors from `#Lua` chat.

___

### profile

•  **profile**: (profile: [Profile](../classes/profile.md)) => void

Emitted when data received from /profile

___

### rawOldPacket

•  **rawOldPacket**: (connection: Connection, ccc: number, data: string[]) => void

Emitted when a new old packet received.

___

### rawPacket

•  **rawPacket**: (conn: Connection, ccc: number, packet: ByteArray) => void

Emitted when a new packet received from main or bulle connection.

___

### rawTribulle

•  **rawTribulle**: (code: number, packet: ByteArray) => void

Emitted when a new community platform packet received.

___

### ready

•  **ready**: () => void

Emitted when the client is connected to the community platform.

___

### restart

•  **restart**: () => void

Emitted when client is attempting to restart the connection

___

### roomChange

•  **roomChange**: (after: [Room](../classes/room.md), before: [Room](../classes/room.md)) => void

Emitted when the room is changed.

**`example`** 
```js
client.on('roomChange', (after, before) => {
	console.log('The room changed from '+before.name+' to '+after.name);
})
```

___

### roomMessage

•  **roomMessage**: (message: [RoomMessage](../classes/roommessage.md)) => void

Emitted when a player sends a message in the room.

___

### roomPlayerDie

•  **roomPlayerDie**: (player: [RoomPlayer](../classes/roomplayer.md)) => void

Emitted when a player dies

___

### roomPlayerEnterHole

•  **roomPlayerEnterHole**: (player: [RoomPlayer](../classes/roomplayer.md), order: number, time: number) => void

Emitted when a player enters the hole

___

### roomPlayerGetCheese

•  **roomPlayerGetCheese**: (player: [RoomPlayer](../classes/roomplayer.md)) => void

Emitted when a player get the cheese

___

### roomPlayerJoin

•  **roomPlayerJoin**: (player: [RoomPlayer](../classes/roomplayer.md)) => void

Emitted when a new player has joined.

___

### roomPlayerLeave

•  **roomPlayerLeave**: (player: [Player](../classes/player.md)) => void

Emitted when a player left the room.

___

### roomPlayerUpdate

•  **roomPlayerUpdate**: (after: [RoomPlayer](../classes/roomplayer.md), before: [RoomPlayer](../classes/roomplayer.md) \| undefined) => void

Emitted when the room playerList is updated.

___

### roomPlayersUpdate

•  **roomPlayersUpdate**: (after: [RoomPlayer](../classes/roomplayer.md)[], before: [RoomPlayer](../classes/roomplayer.md)[]) => void

Emitted when the room playerList is updated.

___

### tribe

•  **tribe**: (tribe: [Tribe](../classes/tribe.md) \| null) => void

Emitted when tribe information received

___

### tribeMemberConnect

•  **tribeMemberConnect**: (name: string) => void

Emitted when a tribe member connected

___

### tribeMemberDisconnect

•  **tribeMemberDisconnect**: (name: string) => void

Emitted when a tribe member disconnected

___

### tribeMemberUpdate

•  **tribeMemberUpdate**: (member: [Member](../classes/member.md)) => void

Emitted when a tribe member updated

___

### tribeMessage

•  **tribeMessage**: (message: [Message](../classes/message.md)) => void

Emitted when a tribe message is received

___

### whisper

•  **whisper**: (message: [WhisperMessage](../classes/whispermessage.md)) => void

Emitted when a player sends a whisper message to the client.
