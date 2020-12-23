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

*Defined in [src/client/Client.ts:101](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L101)*

**Returns:** [Client](client.md)

## Properties

### community

•  **community**: number

*Defined in [src/client/Client.ts:85](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L85)*

The client's community code.

___

### connectionTime

•  **connectionTime**: number

*Defined in [src/client/Client.ts:81](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L81)*

The connection time.

___

### language

•  **language**: string

*Defined in [src/client/Client.ts:89](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L89)*

The language suggested by the server.

___

### nickname

•  **nickname**: string

*Defined in [src/client/Client.ts:73](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L73)*

The client's nickname.

___

### onlinePlayers

•  **onlinePlayers**: number

*Defined in [src/client/Client.ts:57](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L57)*

The online players when the bot log.

___

### pcode

•  **pcode**: number

*Defined in [src/client/Client.ts:93](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L93)*

The client's temporary code.

___

### player

•  **player**: [Player](player.md)

*Defined in [src/client/Client.ts:65](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L65)*

The client's player.

___

### playerID

•  **playerID**: number

*Defined in [src/client/Client.ts:69](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L69)*

The client's ID.

___

### playingTime

•  **playingTime**: number

*Defined in [src/client/Client.ts:77](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L77)*

The client's playing time.

___

### room

•  **room**: [Room](room.md)

*Defined in [src/client/Client.ts:61](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L61)*

The client's room.

## Methods

### disconnect

▸ **disconnect**(): void

*Defined in [src/client/Client.ts:499](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L499)*

Disconnects the client.

**Returns:** void

___

### joinRoom

▸ **joinRoom**(`name`: string, `isSalonAuto?`: boolean): void

*Defined in [src/client/Client.ts:414](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L414)*

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

*Defined in [src/client/Client.ts:376](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L376)*

Joins the tribe house.

**Returns:** void

___

### loadLua

▸ **loadLua**(`script`: string): void

*Defined in [src/client/Client.ts:383](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L383)*

Load a lua script in the room.

#### Parameters:

Name | Type |
------ | ------ |
`script` | string |

**Returns:** void

___

### login

▸ **login**(`nickname`: string, `password`: string, `room?`: string): void

*Defined in [src/client/Client.ts:331](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L331)*

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

*Defined in [src/client/Client.ts:24](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L24)*

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

*Defined in [src/client/Client.ts:437](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L437)*

Request friend list.

**Returns:** void

___

### run

▸ **run**(`tfmid`: string, `token`: string, `nickname`: string, `password`: string, `language?`: [ValueOf](../globals.md#valueof)<*typeof* languages\>, `room?`: string): Promise<void\>

*Defined in [src/client/Client.ts:455](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L455)*

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

*Defined in [src/client/Client.ts:407](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L407)*

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

*Defined in [src/client/Client.ts:393](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L393)*

Sends a message to the client's room.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message.  |

**Returns:** void

___

### sendWhisper

▸ **sendWhisper**(`nickname`: string, `message`: string): void

*Defined in [src/client/Client.ts:427](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L427)*

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

*Defined in [src/client/Client.ts:444](https://github.com/SuspiciousLookingOwl/transformice.js/blob/647a173/src/client/Client.ts#L444)*

Sends a packet every 15 seconds to stay connected to the game.

**Returns:** void
