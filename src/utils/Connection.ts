import net from "net";
import { EventEmitter } from "events";

import { ByteArray, ValueOf } from ".";
import { cipherMethods, identifiers } from "../enums";
import Client from "../client";

/** Represents a client that connects to Transformice. */
export default class Connection extends EventEmitter {
	client: Client;
	name: string;
	socket!: net.Socket;
	open: boolean;
	fingerprint: number;
	buffer: Buffer;
	length: number;

	host!: string;
	port!: number;

	/**
	 * Constructor.
	 * @example
	 * const conn = new Connection(client, 'connectionName');
	 */
	constructor(client: Client, name: string) {
		super();
		this.client = client;
		this.name = name;
		this.open = false;
		this.fingerprint = 0;
		this.buffer = Buffer.alloc(0);
		this.length = 0;
	}

	/**
	 * Connects the socket.
	 */
	connect(host: string, port: number) {
		this.host = host;
		this.port = port;
		this.socket = net.createConnection({ port: port, host: host }, () => {
			this.open = true;
			this.socket.on("data", (data) => {
				this.buffer = Buffer.concat([this.buffer, data]);
				while (this.buffer.length > this.length) {
					if (this.length == 0) {
						for (let i = 0; i < 5; i++) {
							const byte = this.buffer.slice(0, 1)[0];
							this.buffer = this.buffer.slice(1);
							this.length |= (byte & 127) << (i * 7);

							if (!(byte & 0x80)) break;
						}
					}

					if (this.buffer.length >= this.length) {
						this.client.handlePacket(
							this,
							new ByteArray(this.buffer.slice(0, this.length))
						);
						this.buffer = this.buffer.slice(this.length);
						this.length = 0;
					}
				}
			});

			this.socket.on("close", () => {
				if (this.name == "main") this.client.disconnect();
			});

			this.socket.on("error", (err) => {
				throw err;
			});

			/**
			 * Emitted when the connection is successfully connected.
			 * @event Connection#connect
			 */
			this.emit("connect");
			this.client.emit("connect", this);
		});
	}

	/**
	 * Sends a packet to the connection.
	 * @param {ByteArray} packet - The packet.
	 * @param {enums.cipherMethod} [method=enums.cipherMethod.none] - The algorithm method to cipher the packet with it.
	 */
	send(
		identifier: ValueOf<typeof identifiers>,
		packet: ByteArray,
		method: ValueOf<typeof cipherMethods> = cipherMethods.none
	) {
		if (method == cipherMethods.xor) {
			packet = packet.xorCipher(this.client.msgKeys, this.fingerprint);
		} else if (method == cipherMethods.xxtea) {
			packet = packet.blockCipher(this.client.identificationKeys);
		}
		packet = new ByteArray().writeUnsignedShort(identifier).writeBytes(packet);
		const m = new ByteArray();
		let size = packet.length;
		let sizeType = size >>> 7;

		while (sizeType !== 0) {
			m.writeUnsignedByte((size & 0x7f) | 0x80);
			size = sizeType;
			sizeType >>>= 7;
		}
		m.writeUnsignedByte(size & 0x7f);
		m.writeByte(this.fingerprint);
		m.writeBytes(packet);
		this.socket.write(m.buffer);
		this.fingerprint = (this.fingerprint + 1) % 100;
	}

	/**
	 * Close the connection.
	 */
	close() {
		if (this.open) {
			this.open = false;
			this.socket.destroy();
		}
	}
}
