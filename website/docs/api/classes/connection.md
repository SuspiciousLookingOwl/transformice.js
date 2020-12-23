---
id: "connection"
title: "Class: Connection"
sidebar_label: "Connection"
---

Represents a client that connects to Transformice.

## Hierarchy

* EventEmitter

  ↳ **Connection**

## Constructors

### constructor

\+ **new Connection**(`client`: [Client](client.md), `name`: string): [Connection](connection.md)

*Overrides void*

*Defined in [src/utils/Connection.ts:19](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L19)*

Constructor.

**`example`** 
const conn = new Connection(client, 'connectionName');

#### Parameters:

Name | Type |
------ | ------ |
`client` | [Client](client.md) |
`name` | string |

**Returns:** [Connection](connection.md)

## Properties

### buffer

•  **buffer**: Buffer

*Defined in [src/utils/Connection.ts:15](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L15)*

___

### client

•  **client**: [Client](client.md)

*Defined in [src/utils/Connection.ts:10](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L10)*

___

### fingerprint

•  **fingerprint**: number

*Defined in [src/utils/Connection.ts:14](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L14)*

___

### host

•  **host**: string

*Defined in [src/utils/Connection.ts:18](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L18)*

___

### length

•  **length**: number

*Defined in [src/utils/Connection.ts:16](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L16)*

___

### name

•  **name**: string

*Defined in [src/utils/Connection.ts:11](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L11)*

___

### open

•  **open**: boolean

*Defined in [src/utils/Connection.ts:13](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L13)*

___

### port

•  **port**: number

*Defined in [src/utils/Connection.ts:19](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L19)*

___

### socket

•  **socket**: Socket

*Defined in [src/utils/Connection.ts:12](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L12)*

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

### close

▸ **close**(): void

*Defined in [src/utils/Connection.ts:120](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L120)*

Close the connection.

**Returns:** void

___

### connect

▸ **connect**(`host`: string, `port`: number): void

*Defined in [src/utils/Connection.ts:39](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L39)*

Connects the socket.

#### Parameters:

Name | Type |
------ | ------ |
`host` | string |
`port` | number |

**Returns:** void

___

### emit

▸ **emit**(`event`: string \| symbol, ...`args`: any[]): boolean

*Inherited from [Connection](connection.md).[emit](connection.md#emit)*

*Defined in website/node_modules/@types/node/events.d.ts:72*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`...args` | any[] |

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

▸ **on**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[on](connection.md#on)*

*Defined in website/node_modules/@types/node/events.d.ts:63*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

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

### send

▸ **send**(`identifier`: [ValueOf](../globals.md#valueof)<*typeof* identifiers\>, `packet`: [ByteArray](bytearray.md), `method?`: [ValueOf](../globals.md#valueof)<*typeof* cipherMethods\>): void

*Defined in [src/utils/Connection.ts:90](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/Connection.ts#L90)*

Sends a packet to the connection.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`identifier` | [ValueOf](../globals.md#valueof)<*typeof* identifiers\> | - | - |
`packet` | [ByteArray](bytearray.md) | - | The packet. |
`method` | [ValueOf](../globals.md#valueof)<*typeof* cipherMethods\> | cipherMethods.none | - |

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
