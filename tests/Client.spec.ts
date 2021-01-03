import "dotenv/config";
import waitForExpect from "wait-for-expect";
import { Client } from "../src";

// Extends env typing
declare const process: {
	env: {
		TFM_ID: string;
		TFM_TOKEN: string;

		TFM_USERNAME: string;
		TFM_PASSWORD: string;
	};
};

describe("Transformice Client", () => {
	const client = new Client(process.env.TFM_USERNAME, process.env.TFM_PASSWORD, {
		autoReconnect: false,
	});

	it("should run", async () => {
		const ready = jest.fn();
		client.on("ready", ready);
		client.run(process.env.TFM_ID, process.env.TFM_TOKEN);

		await waitForExpect(() => {
			expect(ready).toHaveBeenCalledTimes(1);
		}, 15 * 1000);
	});

	it("should disconnect", async () => {
		const disconnectCallback = jest.fn();
		client.on("disconnect", disconnectCallback);
		client.disconnect();

		await waitForExpect(() => {
			expect(disconnectCallback).toHaveBeenCalledTimes(1);
		});
	});
});
