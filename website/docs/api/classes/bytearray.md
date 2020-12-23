---
id: "bytearray"
title: "Class: ByteArray"
sidebar_label: "ByteArray"
---

## Hierarchy

* **ByteArray**

## Constructors

### constructor

\+ **new ByteArray**(`buff?`: Buffer \| number[]): [ByteArray](bytearray.md)

Constructor.

**`example`** 
const packet = new ByteArray();

#### Parameters:

Name | Type |
------ | ------ |
`buff?` | Buffer \| number[] |

**Returns:** [ByteArray](bytearray.md)

## Properties

### buffer

•  **buffer**: Buffer

___

### readPosition

•  **readPosition**: number

___

### writePosition

•  **writePosition**: number

## Accessors

### [Symbol.toStringTag]

• get **[Symbol.toStringTag]**(): string

**Returns:** string

___

### bytesAvailable

• get **bytesAvailable**(): number

**Returns:** number

___

### length

• get **length**(): number

**Returns:** number

## Methods

### XXTEA

▸ **XXTEA**(`v`: number[], `n`: number, `k`: number[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`v` | number[] |
`n` | number |
`k` | number[] |

**Returns:** number[]

___

### blockCipher

▸ **blockCipher**(`keys`: number[]): [ByteArray](bytearray.md)

Cipher the packet with the XXTEA algorithm.

#### Parameters:

Name | Type |
------ | ------ |
`keys` | number[] |

**Returns:** [ByteArray](bytearray.md)

___

### clear

▸ **clear**(): void

Clears the contents of the bytearray and resets the length and positions properties to 0.

**Returns:** void

___

### expand

▸ **expand**(`value`: number): void

Expands the buffer

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** void

___

### readBoolean

▸ **readBoolean**(): boolean

Reads a Boolean value from the byte stream.

**Returns:** boolean

___

### readByte

▸ **readByte**(): number

Reads a signed byte from the byte stream.

**Returns:** number

___

### readInt

▸ **readInt**(): number

Reads a signed 32-bit integer from the byte stream.

**Returns:** number

___

### readShort

▸ **readShort**(): number

Reads a signed 16-bit integer from the byte stream.

**Returns:** number

___

### readUTF

▸ **readUTF**(): string

Reads a UTF-8 string from the byte stream.

**Returns:** string

___

### readUnsignedByte

▸ **readUnsignedByte**(): number

Reads an unsigned byte from the byte stream.

**Returns:** number

___

### readUnsignedInt

▸ **readUnsignedInt**(): number

Reads an unsigned 32-bit integer from the byte stream.

**Returns:** number

___

### readUnsignedShort

▸ **readUnsignedShort**(): number

Reads an unsigned 16-bit integer from the byte stream.

**Returns:** number

___

### toJSON

▸ **toJSON**(): number[]

**Returns:** number[]

___

### toString

▸ **toString**(): string

Converts the byte array to a string.

**Returns:** string

___

### write

▸ **write**(`data`: Buffer \| string \| SharedArrayBuffer \| [ByteArray](bytearray.md)): this

Adds data to the buffer.

#### Parameters:

Name | Type |
------ | ------ |
`data` | Buffer \| string \| SharedArrayBuffer \| [ByteArray](bytearray.md) |

**Returns:** this

___

### writeBoolean

▸ **writeBoolean**(`value`: boolean): this

Writes a Boolean value.

#### Parameters:

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** this

___

### writeByte

▸ **writeByte**(`value`: number): this

Writes a byte to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeBytes

▸ **writeBytes**(`bytes`: [ByteArray](bytearray.md), `offset?`: number, `length?`: number): this

Writes a sequence of length bytes from the specified byte array, bytes, starting offset bytes into the byte stream.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`bytes` | [ByteArray](bytearray.md) | - |
`offset` | number | 0 |
`length` | number | 0 |

**Returns:** this

___

### writeInt

▸ **writeInt**(`value`: number): this

Writes a 32-bit signed integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeShort

▸ **writeShort**(`value`: number): this

Writes a 16-bit integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeUTF

▸ **writeUTF**(`value`: string): this

Writes a UTF-8 string to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** this

___

### writeUnsignedByte

▸ **writeUnsignedByte**(`value`: number): this

Writes a unsigned byte to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeUnsignedInt

▸ **writeUnsignedInt**(`value`: number): this

Writes a 32-bit unsigned integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeUnsignedShort

▸ **writeUnsignedShort**(`value`: number): this

Writes a 16-bit unsigned integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### xorCipher

▸ **xorCipher**(`keys`: number[], `fingerprint`: number): [ByteArray](bytearray.md)

Cipher the packet with the XOR algorithm.

#### Parameters:

Name | Type |
------ | ------ |
`keys` | number[] |
`fingerprint` | number |

**Returns:** [ByteArray](bytearray.md)
