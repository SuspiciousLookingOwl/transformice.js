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

___

### client

•  **client**: [Client](client.md)

___

### fingerprint

•  **fingerprint**: number

___

### host

•  **host**: string

___

### length

•  **length**: number

___

### name

•  **name**: string

___

### open

•  **open**: boolean

___

### port

•  **port**: number

___

### socket

•  **socket**: Socket

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: number

*Inherited from [Connection](connection.md).[defaultMaxListeners](connection.md#defaultmaxlisteners)*

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: unique symbol

*Inherited from [Connection](connection.md).[errorMonitor](connection.md#errormonitor)*

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

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### close

▸ **close**(): void

Close the connection.

**Returns:** void

___

### connect

▸ **connect**(`host`: string, `port`: number): void

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

**Returns:** Array<string \| symbol\>

___

### getMaxListeners

▸ **getMaxListeners**(): number

*Inherited from [Connection](connection.md).[getMaxListeners](connection.md#getmaxlisteners)*

**Returns:** number

___

### listenerCount

▸ **listenerCount**(`event`: string \| symbol): number

*Inherited from [Connection](connection.md).[listenerCount](connection.md#listenercount)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** number

___

### listeners

▸ **listeners**(`event`: string \| symbol): Function[]

*Inherited from [Connection](connection.md).[listeners](connection.md#listeners)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### off

▸ **off**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[off](connection.md#off)*

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

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |

**Returns:** Function[]

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: string \| symbol): this

*Inherited from [Connection](connection.md).[removeAllListeners](connection.md#removealllisteners)*

#### Parameters:

Name | Type |
------ | ------ |
`event?` | string \| symbol |

**Returns:** this

___

### removeListener

▸ **removeListener**(`event`: string \| symbol, `listener`: (...args: any[]) => void): this

*Inherited from [Connection](connection.md).[removeListener](connection.md#removelistener)*

#### Parameters:

Name | Type |
------ | ------ |
`event` | string \| symbol |
`listener` | (...args: any[]) => void |

**Returns:** this

___

### send

▸ **send**(`identifier`: [ValueOf](../globals.md#valueof)<*typeof* identifiers\>, `packet`: [ByteArray](bytearray.md), `method?`: [ValueOf](../globals.md#valueof)<*typeof* cipherMethods\>): void

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

#### Parameters:

Name | Type |
------ | ------ |
`n` | number |

**Returns:** this

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: EventEmitter, `event`: string \| symbol): number

*Inherited from [Connection](connection.md).[listenerCount](connection.md#listenercount)*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string \| symbol |

**Returns:** number
