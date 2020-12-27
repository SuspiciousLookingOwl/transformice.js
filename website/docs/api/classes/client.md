---
id: "client"
title: "Class: Client"
sidebar_label: "Client"
---

Client interface for event intellisense support
Represents a client that connects to Transformice.

## Hierarchy

* EventEmitter

  ↳ **Client**

## Constructors

### constructor

\+ **new Client**(`name`: string, `password`: string, `options?`: [ClientOptions](../interfaces/clientoptions.md)): [Client](client.md)

*Overrides void*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`password` | string |
`options?` | [ClientOptions](../interfaces/clientoptions.md) |

**Returns:** [Client](client.md)

## Properties

### community

•  **community**: number

The client's community code.

___

### connectionTime

•  **connectionTime**: number

The connection time.

___

### language

•  **language**: [ValueOf](../globals.md#valueof)<*typeof* languages\>

The language suggested by the server.

___

### name

•  **name**: string

The client's name.

___

### onlinePlayers

•  **onlinePlayers**: number

The online players when the bot log.

___

### pcode

•  **pcode**: number

The client's temporary code.

___

### player

•  **player**: [Player](player.md)

The client's player.

___

### playerID

•  **playerID**: number

The client's ID.

___

### playingTime

•  **playingTime**: number

The client's playing time.

___

### room

•  **room**: [Room](room.md)

The client's room.

## Methods

### addFriend

▸ **addFriend**(`name`: string): Promise<void\>

Add a player to friend list

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** Promise<void\>

___

### disconnect

▸ **disconnect**(): void

Disconnects the client.

**Returns:** void

___

### getChannelPlayers

▸ **getChannelPlayers**(`channelName`: string): Promise<[Player](player.md)[]\>

Get player list inside a chat channel

#### Parameters:

Name | Type |
------ | ------ |
`channelName` | string |

**Returns:** Promise<[Player](player.md)[]\>

___

### getFriendList

▸ **getFriendList**(): Promise<[Friend](friend.md)[]\>

Get friend list

**Returns:** Promise<[Friend](friend.md)[]\>

___

### getTribe

▸ **getTribe**(`includeDisconnectedMember?`: boolean): Promise<[Tribe](tribe.md)\>

Get tribe data

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`includeDisconnectedMember` | boolean | true |

**Returns:** Promise<[Tribe](tribe.md)\>

___

### joinChannel

▸ **joinChannel**(`channelName`: string, `permanent?`: boolean): void

Join to a chat channel

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`channelName` | string | - |
`permanent` | boolean | true |

**Returns:** void

___

### joinRoom

▸ **joinRoom**(`name`: string, `isSalonAuto?`: boolean): void

Sends a request to the server to join a room with specific name.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string | - |
`isSalonAuto` | boolean | false |

**Returns:** void

___

### joinTribeHouse

▸ **joinTribeHouse**(): void

Joins the tribe house.

**Returns:** void

___

### leaveChannel

▸ **leaveChannel**(`channelName`: string): void

Leave a chat channel

#### Parameters:

Name | Type |
------ | ------ |
`channelName` | string |

**Returns:** void

___

### loadLua

▸ **loadLua**(`script`: string): void

Load a lua script in the room.

#### Parameters:

Name | Type |
------ | ------ |
`script` | string |

**Returns:** void

___

### on

▸ **on**<T\>(`event`: T, `listener`: ClientEvents[T]): this

*Overrides void*

Listens to a Client Event

#### Type parameters:

Name | Type |
------ | ------ |
`T` | keyof [ClientEvents](../interfaces/clientevents.md) |

#### Parameters:

Name | Type |
------ | ------ |
`event` | T |
`listener` | ClientEvents[T] |

**Returns:** this

___

### removeFriend

▸ **removeFriend**(`name`: string): Promise<void\>

Add a player to friend list

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** Promise<void\>

___

### requestFriendList

▸ **requestFriendList**(): void

Request friend list.

**Returns:** void

___

### requestTribe

▸ **requestTribe**(`includeDisconnectedMember?`: boolean): void

Request tribe data

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`includeDisconnectedMember` | boolean | true |

**Returns:** void

___

### requestWho

▸ **requestWho**(`channelName`: string): number

Request /who to a chat channel

#### Parameters:

Name | Type |
------ | ------ |
`channelName` | string |

**Returns:** number

___

### restart

▸ **restart**(): Promise<void\>

Restart the client

**Returns:** Promise<void\>

___

### run

▸ **run**(`tfmid`: string, `token`: string): Promise<void\>

Starts the client.

#### Parameters:

Name | Type |
------ | ------ |
`tfmid` | string |
`token` | string |

**Returns:** Promise<void\>

___

### sendChannelMessage

▸ **sendChannelMessage**(`channelName`: string, `message`: string): void

Sends a message to a chat channel

#### Parameters:

Name | Type |
------ | ------ |
`channelName` | string |
`message` | string |

**Returns:** void

___

### sendCommand

▸ **sendCommand**(`message`: string): void

Sends a server command.

**`example`** 
```js
client.sendCommand('mod');
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The command message (without the `/`). |

**Returns:** void

___

### sendRoomMessage

▸ **sendRoomMessage**(`message`: string): void

Sends a message to the client's room.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void

___

### sendTribeMessage

▸ **sendTribeMessage**(`message`: string): void

Sends a message to tribe

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** void

___

### sendWhisper

▸ **sendWhisper**(`name`: string, `message`: string): void

Sends a whisper message to a player.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`message` | string |

**Returns:** void
