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

\+ **new Client**(): [Client](client.md)

*Overrides void*

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

•  **language**: string

The language suggested by the server.

___

### nickname

•  **nickname**: string

The client's nickname.

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

### disconnect

▸ **disconnect**(): void

Disconnects the client.

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

### loadLua

▸ **loadLua**(`script`: string): void

Load a lua script in the room.

#### Parameters:

Name | Type |
------ | ------ |
`script` | string |

**Returns:** void

___

### login

▸ **login**(`nickname`: string, `password`: string, `room?`: string): void

Log in to the game.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`nickname` | string | - |
`password` | string | - |
`room` | string | "1" |

**Returns:** void

___

### on

▸ **on**<T\>(`event`: T, `listener`: ClientEvents[T]): this

*Overrides [Connection](connection.md).[on](connection.md#on)*

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

### requestFriendList

▸ **requestFriendList**(): void

Request friend list.

**Returns:** void

___

### run

▸ **run**(`tfmid`: string, `token`: string, `nickname`: string, `password`: string, `language?`: [ValueOf](../globals.md#valueof)<*typeof* languages\>, `room?`: string): Promise<void\>

Starts the client.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`tfmid` | string | - |
`token` | string | - |
`nickname` | string | - |
`password` | string | - |
`language` | [ValueOf](../globals.md#valueof)<*typeof* languages\> | languages.en |
`room` | string | "1" |

**Returns:** Promise<void\>

___

### sendCommand

▸ **sendCommand**(`message`: string): void

Sends a server command.

**`example`** 
client.sendCommand('mod');

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

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message.  |

**Returns:** void

___

### sendWhisper

▸ **sendWhisper**(`nickname`: string, `message`: string): void

Sends a whisper message to a player.

#### Parameters:

Name | Type |
------ | ------ |
`nickname` | string |
`message` | string |

**Returns:** void

___

### startHeartbeat

▸ **startHeartbeat**(): void

Sends a packet every 15 seconds to stay connected to the game.

**Returns:** void
