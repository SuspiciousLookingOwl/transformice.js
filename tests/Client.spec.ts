import "dotenv/config";
import waitForExpect from "wait-for-expect";
import { Client } from "../src";

// Extends env typing
declare const process: {
	env: {
		TFM_ID: string;
		TFM_TOKEN: string;

		USERNAME: string;
		PASSWORD: string;
	};
};

describe("Transformice Client", () => {
	const client = new Client(process.env.USERNAME, process.env.PASSWORD);

	it("should run", async () => {
		const connectCallback = jest.fn();
		client.on("connect", connectCallback);
		client.run(process.env.TFM_ID, process.env.TFM_TOKEN);

		await waitForExpect(() => {
			expect(connectCallback).toHaveBeenCalledTimes(1);
		}, 15 * 1000);
	});
});
