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

•  **channelWho**: (players: [Player](../classes/player.md)[]) => void

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

•  **roomChange**: (before: [Room](../classes/room.md), after: [Room](../classes/room.md)) => void

Emitted when the room is changed.

**`example`** 
```js
client.on('roomChange', (before, after) => {
	console.log('The room changed from '+before.name+' to '+after.name);
})
```

___

### roomMessage

•  **roomMessage**: (message: [RoomMessage](../classes/roommessage.md)) => void

Emitted when a player sends a message in the room.

___

### roomPlayerJoin

•  **roomPlayerJoin**: (player: [RoomPlayer](../classes/roomplayer.md)) => void

Emitted when a new player has joined.

___

### roomPlayerLeft

•  **roomPlayerLeft**: (player: [Player](../classes/player.md)) => void

Emitted when a player left the room.

___

### roomPlayerUpdate

•  **roomPlayerUpdate**: (before: [RoomPlayer](../classes/roomplayer.md) \| undefined, after: [RoomPlayer](../classes/roomplayer.md)) => void

Emitted when the room playerList is updated.

___

### roomUpdate

•  **roomUpdate**: (before: [RoomPlayer](../classes/roomplayer.md)[], after: [RoomPlayer](../classes/roomplayer.md)[]) => void

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
