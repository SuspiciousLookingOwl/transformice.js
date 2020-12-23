import { decode } from "iconv-lite";

export default class ByteArray {
	buffer: Buffer;
	writePosition: number;
	readPosition: number;

	/**
	 * Constructor.
	 *
	 * @example
	 * ```js
	 * const packet = new ByteArray();
	 * ```
	 */
	constructor(buff?: Buffer | number[]) {
		this.buffer = Buffer.isBuffer(buff)
			? buff
			: Array.isArray(buff)
			? Buffer.from(buff)
			: Buffer.alloc(0);
		this.writePosition = this.buffer.length;
		this.readPosition = 0;
	}

	get length() {
		return this.buffer.length;
	}

	get [Symbol.toStringTag]() {
		return "ByteArray";
	}

	get bytesAvailable() {
		return this.length - this.readPosition;
	}

	/**
	 * Expands the buffer
	 */
	expand(value: number) {
		if (this.length - this.writePosition < value) {
			this.buffer = Buffer.concat([
				this.buffer,
				Buffer.alloc(value - (this.length - this.writePosition)),
			]);
		}
	}

	/**
	 * Adds data to the buffer.
	 */
	write(data: Buffer | string | SharedArrayBuffer | ByteArray) {
		let buffer;
		if (Buffer.isBuffer(data)) buffer = data;
		else if (Array.isArray(data) || typeof data === "string" || data instanceof String)
			buffer = Buffer.from(data);
		else if (data instanceof ByteArray) buffer = Buffer.from(data.buffer);
		else throw new Error("The value type must be buffer, bytearray, string or array");
		this.buffer = Buffer.concat([this.buffer, buffer]);
		this.writePosition += buffer.length;
		return this;
	}

	/**
	 * Clears the contents of the bytearray and resets the length and positions properties to 0.
	 */
	clear() {
		this.buffer = Buffer.alloc(0);
		this.writePosition = 0;
		this.readPosition = 0;
	}

	/**
	 * Reads a Boolean value from the byte stream.
	 */
	readBoolean() {
		return this.readByte() !== 0;
	}

	/**
	 * Reads a signed byte from the byte stream.
	 */
	readByte() {
		return this.buffer.readInt8(this.readPosition++);
	}

	/**
	 * Reads a signed 32-bit integer from the byte stream.
	 */
	readInt() {
		const value = this.buffer.readInt32BE(this.readPosition);
		this.readPosition += 4;
		return value;
	}

	/**
	 * Reads a signed 16-bit integer from the byte stream.
	 */
	readShort() {
		const value = this.buffer.readInt16BE(this.readPosition);
		this.readPosition += 2;
		return value;
	}

	/**
	 * Reads an unsigned byte from the byte stream.
	 */
	readUnsignedByte() {
		return this.buffer.readUInt8(this.readPosition++);
	}

	/**
	 * Reads an unsigned 32-bit integer from the byte stream.
	 */
	readUnsignedInt() {
		const value = this.buffer.readUInt32BE(this.readPosition);
		this.readPosition += 4;
		return value;
	}

	/**
	 * Reads an unsigned 16-bit integer from the byte stream.
	 */
	readUnsignedShort() {
		const value = this.buffer.readUInt16BE(this.readPosition);
		this.readPosition += 2;
		return value;
	}

	/**
	 * Reads a UTF-8 string from the byte stream.
	 */
	readUTF() {
		const size = this.readUnsignedShort();
		const value = this.buffer.subarray(this.readPosition, this.readPosition + size).toString();
		this.readPosition += size;
		return value;
	}

	toJSON() {
		return Object.assign({}, this.buffer.toJSON().data);
	}

	/**
	 * Converts the byte array to a string.
	 */
	toString() {
		return decode(this.buffer, "utf-8");
	}

	/**
	 * Writes a Boolean value.
	 */
	writeBoolean(value: boolean) {
		return this.writeByte(value ? 1 : 0);
	}

	/**
	 * Writes a byte to the byte stream.
	 */
	writeByte(value: number) {
		this.expand(1);
		this.buffer.writeInt8(value, this.writePosition++);
		return this;
	}

	/**
	 * Writes a sequence of length bytes from the specified byte array, bytes, starting offset bytes into the byte stream.
	 */
	writeBytes(bytes: ByteArray, offset = 0, length = 0) {
		if (length === 0) length = bytes.length - offset;
		this.expand(length);
		for (let i = 0; i < length; i++)
			this.buffer[i + this.writePosition] = bytes.buffer[i + offset];
		this.writePosition += length;
		return this;
	}

	/**
	 * Writes a 32-bit signed integer to the byte stream.
	 */
	writeInt(value: number) {
		this.expand(4);
		this.buffer.writeInt32BE(value, this.writePosition);
		this.writePosition += 4;
		return this;
	}

	/**
	 * Writes a 16-bit integer to the byte stream.
	 */
	writeShort(value: number) {
		this.expand(2);
		this.buffer.writeInt16BE(value, this.writePosition);
		this.writePosition += 2;
		return this;
	}

	/**
	 * Writes a unsigned byte to the byte stream.
	 */
	writeUnsignedByte(value: number) {
		this.expand(1);
		this.buffer.writeUInt8(value, this.writePosition++);
		return this;
	}

	/**
	 * Writes a 32-bit unsigned integer to the byte stream.
	 */
	writeUnsignedInt(value: number) {
		this.expand(4);
		this.buffer.writeUInt32BE(value, this.writePosition);
		this.writePosition += 4;
		return this;
	}

	/**
	 * Writes a 16-bit unsigned integer to the byte stream.
	 */
	writeUnsignedShort(value: number) {
		this.expand(2);
		this.buffer.writeUInt16BE(value, this.writePosition);
		this.writePosition += 2;
		return this;
	}

	/**
	 * Writes a UTF-8 string to the byte stream.
	 */
	writeUTF(value: string) {
		const size = Buffer.byteLength(value);
		this.writeUnsignedShort(size);
		this.write(Buffer.from(value, "utf8"));
		return this;
	}

	XXTEA(v: number[], n: number, k: number[]) {
		const cycles = parseInt((6 + 52 / n).toString());
		let sum = BigInt(0);
		let z = v[n - 1];
		for (let i = 0; i < cycles; i++) {
			sum = (sum + BigInt(0x9e3779b9)) & BigInt(0xffffffff);
			const e = (sum >> BigInt(2)) & BigInt(3);
			for (let p = 0; p < n; p++) {
				const y = v[parseInt(((BigInt(p) + BigInt(1)) % BigInt(n)).toString())];
				z = v[p] = parseInt(
					(
						(BigInt(v[p]) +
							((((BigInt(z) >> BigInt(5)) ^ (BigInt(y) << BigInt(2))) +
								((BigInt(y) >> BigInt(3)) ^ (BigInt(z) << BigInt(4)))) ^
								((BigInt(sum) ^ BigInt(y)) +
									(BigInt(
										k[
											parseInt(
												((BigInt(p) & BigInt(3)) ^ BigInt(e)).toString()
											)
										]
									) ^
										BigInt(z))))) &
						BigInt(0xffffffff)
					).toString()
				);
			}
		}
		for (let p = 0; p < n; p++) v[p] = +v[p];
		return v;
	}

	/**
	 * Cipher the packet with the XXTEA algorithm.
	 */
	blockCipher(keys: number[]) {
		const st = [...this.buffer];
		while (this.length < 8) {
			st.push(0);
		}

		let packet = new ByteArray(st);
		let chunks = [];
		let length = packet.length;

		for (let i = 0; i < 4 - (length % 4); i++) {
			packet.writeByte(0);
		}

		while (length > 0) {
			chunks.push(packet.readUnsignedInt());
			length -= 4;
		}

		packet = new ByteArray();
		chunks = this.XXTEA(chunks, chunks.length, keys);
		packet.writeShort(chunks.length);

		for (let i = 0; i < chunks.length; i++) {
			const chunk = chunks[i];
			packet.writeUnsignedInt(+chunk);
		}

		return packet;
	}

	/**
	 * Cipher the packet with the XOR algorithm.
	 */
	xorCipher(keys: number[], fingerprint: number) {
		const p = [];

		for (let i = 0; i < this.buffer.length; i++) {
			const byte = this.buffer[i];
			fingerprint++;
			p[i] = (byte ^ keys[fingerprint % 20]) & 255;
		}
		return new ByteArray(p);
	}
}
