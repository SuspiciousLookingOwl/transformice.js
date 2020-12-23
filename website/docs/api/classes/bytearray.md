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

*Defined in [src/utils/ByteArray.ts:6](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L6)*

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

*Defined in [src/utils/ByteArray.ts:4](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L4)*

___

### readPosition

•  **readPosition**: number

*Defined in [src/utils/ByteArray.ts:6](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L6)*

___

### writePosition

•  **writePosition**: number

*Defined in [src/utils/ByteArray.ts:5](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L5)*

## Accessors

### [Symbol.toStringTag]

• get **[Symbol.toStringTag]**(): string

*Defined in [src/utils/ByteArray.ts:28](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L28)*

**Returns:** string

___

### bytesAvailable

• get **bytesAvailable**(): number

*Defined in [src/utils/ByteArray.ts:32](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L32)*

**Returns:** number

___

### length

• get **length**(): number

*Defined in [src/utils/ByteArray.ts:24](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L24)*

**Returns:** number

## Methods

### XXTEA

▸ **XXTEA**(`v`: number[], `n`: number, `k`: number[]): number[]

*Defined in [src/utils/ByteArray.ts:237](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L237)*

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

*Defined in [src/utils/ByteArray.ts:272](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L272)*

Cipher the packet with the XXTEA algorithm.

#### Parameters:

Name | Type |
------ | ------ |
`keys` | number[] |

**Returns:** [ByteArray](bytearray.md)

___

### clear

▸ **clear**(): void

*Defined in [src/utils/ByteArray.ts:66](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L66)*

Clears the contents of the bytearray and resets the length and positions properties to 0.

**Returns:** void

___

### expand

▸ **expand**(`value`: number): void

*Defined in [src/utils/ByteArray.ts:39](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L39)*

Expands the buffer

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** void

___

### readBoolean

▸ **readBoolean**(): boolean

*Defined in [src/utils/ByteArray.ts:75](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L75)*

Reads a Boolean value from the byte stream.

**Returns:** boolean

___

### readByte

▸ **readByte**(): number

*Defined in [src/utils/ByteArray.ts:82](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L82)*

Reads a signed byte from the byte stream.

**Returns:** number

___

### readInt

▸ **readInt**(): number

*Defined in [src/utils/ByteArray.ts:89](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L89)*

Reads a signed 32-bit integer from the byte stream.

**Returns:** number

___

### readShort

▸ **readShort**(): number

*Defined in [src/utils/ByteArray.ts:98](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L98)*

Reads a signed 16-bit integer from the byte stream.

**Returns:** number

___

### readUTF

▸ **readUTF**(): string

*Defined in [src/utils/ByteArray.ts:132](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L132)*

Reads a UTF-8 string from the byte stream.

**Returns:** string

___

### readUnsignedByte

▸ **readUnsignedByte**(): number

*Defined in [src/utils/ByteArray.ts:107](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L107)*

Reads an unsigned byte from the byte stream.

**Returns:** number

___

### readUnsignedInt

▸ **readUnsignedInt**(): number

*Defined in [src/utils/ByteArray.ts:114](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L114)*

Reads an unsigned 32-bit integer from the byte stream.

**Returns:** number

___

### readUnsignedShort

▸ **readUnsignedShort**(): number

*Defined in [src/utils/ByteArray.ts:123](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L123)*

Reads an unsigned 16-bit integer from the byte stream.

**Returns:** number

___

### toJSON

▸ **toJSON**(): number[]

*Defined in [src/utils/ByteArray.ts:139](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L139)*

**Returns:** number[]

___

### toString

▸ **toString**(): string

*Defined in [src/utils/ByteArray.ts:146](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L146)*

Converts the byte array to a string.

**Returns:** string

___

### write

▸ **write**(`data`: Buffer \| string \| SharedArrayBuffer \| [ByteArray](bytearray.md)): this

*Defined in [src/utils/ByteArray.ts:51](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L51)*

Adds data to the buffer.

#### Parameters:

Name | Type |
------ | ------ |
`data` | Buffer \| string \| SharedArrayBuffer \| [ByteArray](bytearray.md) |

**Returns:** this

___

### writeBoolean

▸ **writeBoolean**(`value`: boolean): this

*Defined in [src/utils/ByteArray.ts:153](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L153)*

Writes a Boolean value.

#### Parameters:

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** this

___

### writeByte

▸ **writeByte**(`value`: number): this

*Defined in [src/utils/ByteArray.ts:160](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L160)*

Writes a byte to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeBytes

▸ **writeBytes**(`bytes`: [ByteArray](bytearray.md), `offset?`: number, `length?`: number): this

*Defined in [src/utils/ByteArray.ts:169](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L169)*

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

*Defined in [src/utils/ByteArray.ts:181](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L181)*

Writes a 32-bit signed integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeShort

▸ **writeShort**(`value`: number): this

*Defined in [src/utils/ByteArray.ts:191](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L191)*

Writes a 16-bit integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeUTF

▸ **writeUTF**(`value`: string): this

*Defined in [src/utils/ByteArray.ts:230](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L230)*

Writes a UTF-8 string to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** this

___

### writeUnsignedByte

▸ **writeUnsignedByte**(`value`: number): this

*Defined in [src/utils/ByteArray.ts:201](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L201)*

Writes a unsigned byte to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeUnsignedInt

▸ **writeUnsignedInt**(`value`: number): this

*Defined in [src/utils/ByteArray.ts:210](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L210)*

Writes a 32-bit unsigned integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### writeUnsignedShort

▸ **writeUnsignedShort**(`value`: number): this

*Defined in [src/utils/ByteArray.ts:220](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L220)*

Writes a 16-bit unsigned integer to the byte stream.

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** this

___

### xorCipher

▸ **xorCipher**(`keys`: number[], `fingerprint`: number): [ByteArray](bytearray.md)

*Defined in [src/utils/ByteArray.ts:306](https://github.com/SuspiciousLookingOwl/transformice.js/blob/b80242a/src/utils/ByteArray.ts#L306)*

Cipher the packet with the XOR algorithm.

#### Parameters:

Name | Type |
------ | ------ |
`keys` | number[] |
`fingerprint` | number |

**Returns:** [ByteArray](bytearray.md)
