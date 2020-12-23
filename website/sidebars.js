const typedocSidebar = require("./typedoc-sidebar.js");

module.exports = {
	sidebar: {
		General: ["quickstart"],
		Classes: typedocSidebar.find((t) => t.label === "Classes").items,
		Interfaces: typedocSidebar.find((t) => t.label === "Interfaces").items,
		Other: ["api/globals", "api/index"],
	},
};
