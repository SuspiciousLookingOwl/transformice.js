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

*Defined in [src/client/Client.ts:71](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L71)*

**Returns:** [Client](client.md)

## Properties

### bulle

•  **bulle**: [Connection](connection.md)

*Defined in [src/client/Client.ts:71](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L71)*

___

### community

•  **community**: number

*Defined in [src/client/Client.ts:61](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L61)*

The client's community code.

___

### connectionTime

•  **connectionTime**: number

*Defined in [src/client/Client.ts:57](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L57)*

The connection time.

___

### identificationKeys

•  **identificationKeys**: number[]

*Defined in [src/client/Client.ts:27](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L27)*

___

### language

•  **language**: string

*Defined in [src/client/Client.ts:65](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L65)*

The language suggested by the server.

___

### main

•  **main**: [Connection](connection.md)

*Defined in [src/client/Client.ts:70](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L70)*

___

### msgKeys

•  **msgKeys**: number[]

*Defined in [src/client/Client.ts:28](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L28)*

___

### nickname

•  **nickname**: string

*Defined in [src/client/Client.ts:49](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L49)*

The client's nickname.

___

### onlinePlayers

•  **onlinePlayers**: number

*Defined in [src/client/Client.ts:33](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L33)*

The online players when the bot log.

___

### pcode

•  **pcode**: number

*Defined in [src/client/Client.ts:69](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L69)*

The client's temporary code.

___

### player

•  **player**: [Player](player.md)

*Defined in [src/client/Client.ts:41](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L41)*

The client's player.

___

### playerID

•  **playerID**: number

*Defined in [src/client/Client.ts:45](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L45)*

The client's ID.

___

### playingTime

•  **playingTime**: number

*Defined in [src/client/Client.ts:53](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L53)*

The client's playing time.

___

### room

•  **room**: [Room](room.md)

*Defined in [src/client/Client.ts:37](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L37)*

The client's room.

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [Connection](connection.md).[defaultMaxListeners](connection.md#defaultmaxlisteners)*

*Defined in website/node_modules/@types/node/events.d.ts:45*

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: unique symbol

*Inherited from [Connection](connection.md).[errorMonitor](connection.md#errormonitor)*

*Defined in website/node_modules/@types/node/events.d.ts:55*

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

## Methods

### addListener

▸ **addListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[addListener](connection.md#addlistener)*

*Defined in website/node_modules/@types/node/events.d.ts:62*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### disconnect

▸ **disconnect**(): void

*Defined in [src/client/Client.ts:425](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L425)*

Disconnects the client.

**Returns:** void

___

### emit

▸ **emit**<T\>(`event`: T, ...`args`: Parameters<ClientEvents[T]\>): boolean

*Overrides [Connection](connection.md).[emit](connection.md#emit)*

*Defined in [src/client/Client.ts:14](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L14)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | keyof [ClientEvents](../interfaces/clientevents.md) |

#### Parameters:

Name | Type |
------ | ------ |
`event` | T |
`...args` | Parameters<ClientEvents[T]\> |

**Returns:** boolean

___

### eventNames

▸ **eventNames**(): Array<string \| symbol\>

*Inherited from [Connection](connection.md).[eventNames](connection.md#eventnames)*

*Defined in website/node_modules/@types/node/events.d.ts:77*

**Returns:** Array<string \| symbol\>

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [Connection](connection.md).[getMaxListeners](connection.md#getmaxlisteners)*

*Defined in website/node_modules/@types/node/events.d.ts:69*

**Returns:** number

___

### handlePacket

▸ **handlePacket**(`conn`: [Connection](connection.md), `packet`: [ByteArray](bytearray.md)): void

*Defined in [src/client/Client.ts:114](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L114)*

Handles the known packets and emits events.

#### Parameters:

Name | Type |
------ | ------ |
`conn` | [Connection](connection.md) |
`packet` | [ByteArray](bytearray.md) |

**Returns:** void

___

### joinRoom

▸ **joinRoom**(`name`: string, `isSalonAuto?`: boolean): void

*Defined in [src/client/Client.ts:340](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L340)*

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

*Defined in [src/client/Client.ts:302](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L302)*

Joins the tribe house.

**Returns:** void

___

### listenerCount

▸ **listenerCount**(`event`: string \| symbol): number

*Inherited from [Connection](connection.md).[listenerCount](connection.md#listenercount)*

*Defined in website/node_modules/@types/node/events.d.ts:73*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [Connection](connection.md).[listeners](connection.md#listeners)*

*Defined in website/node_modules/@types/node/events.d.ts:70*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### loadLua

▸ **loadLua**(`script`: string): void

*Defined in [src/client/Client.ts:309](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L309)*

Load a lua script in the room.

#### Parameters:

Name | Type |
------ | ------ |
`script` | string |

**Returns:** void

___

### login

▸ **login**(`nickname`: string, `password`: string, `room?`: string): void

*Defined in [src/client/Client.ts:257](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L257)*

Log in to the game.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`nickname` | string | - |
`password` | string | - |
`room` | string | "1" |

**Returns:** void

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[off](connection.md#off)*

*Defined in website/node_modules/@types/node/events.d.ts:66*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### on

▸ **on**<T\>(`event`: T, `listener`: ClientEvents[T]): this

*Overrides [Connection](connection.md).[on](connection.md#on)*

*Defined in [src/client/Client.ts:13](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L13)*

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

### once

▸ **once**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[once](connection.md#once)*

*Defined in website/node_modules/@types/node/events.d.ts:64*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependListener

▸ **prependListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[prependListener](connection.md#prependlistener)*

*Defined in website/node_modules/@types/node/events.d.ts:75*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### prependOnceListener

▸ **prependOnceListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[prependOnceListener](connection.md#prependoncelistener)*

*Defined in website/node_modules/@types/node/events.d.ts:76*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### rawListeners

▸ **rawListeners**(`event`: string \| symbol): Function[]

*Inherited from [Connection](connection.md).[rawListeners](connection.md#rawlisteners)*

*Defined in website/node_modules/@types/node/events.d.ts:71*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [Connection](connection.md).[removeAllListeners](connection.md#removealllisteners)*

*Defined in website/node_modules/@types/node/events.d.ts:67*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[removeListener](connection.md#removelistener)*

*Defined in website/node_modules/@types/node/events.d.ts:65*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### requestFriendList

▸ **requestFriendList**(): void

*Defined in [src/client/Client.ts:363](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L363)*

Request friend list.

**Returns:** void

___

### run

▸ **run**(`tfmid`: string, `token`: string, `nickname`: string, `password`: string, `language?`: [ValueOf](../globals.md#valueof)<*typeof* languages\>, `room?`: string): Promise<void\>

*Defined in [src/client/Client.ts:381](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L381)*

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

*Defined in [src/client/Client.ts:333](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L333)*

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

*Defined in [src/client/Client.ts:319](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L319)*

Sends a message to the client's room.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message.  |

**Returns:** void

___

### sendWhisper

▸ **sendWhisper**(`nickname`: string, `message`: string): void

*Defined in [src/client/Client.ts:353](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L353)*

Sends a whisper message to a player.

#### Parameters:

Name | Type |
------ | ------ |
`nickname` | string |
`message` | string |

**Returns:** void

___

### setMaxListeners

▸ **setMaxListeners**(`n`: number): this

*Inherited from [Connection](connection.md).[setMaxListeners](connection.md#setmaxlisteners)*

*Defined in website/node_modules/@types/node/events.d.ts:68*

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### startHeartbeat

▸ **startHeartbeat**(): void

*Defined in [src/client/Client.ts:370](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/client/Client.ts#L370)*

Sends a packet every 15 seconds to stay connected to the game.

**Returns:** void

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

*Inherited from [Connection](connection.md).[listenerCount](connection.md#listenercount)*

*Defined in website/node_modules/@types/node/events.d.ts:44*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** number
