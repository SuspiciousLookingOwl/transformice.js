module.exports = {
	title: "Transformice.js",
	tagline: "Transformice.js",
	url: "https://github.com/SuspiciousLookingOwl/transformice.js",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "SuspiciousLookingOwl", // Usually your GitHub org/user name.
	projectName: "Transformice.js", // Usually your repo name.
	themeConfig: {
		navbar: {
			title: "Transformice.js",
			items: [
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{
					href: "https://github.com/SuspiciousLookingOwl/transformice.js",
					label: "Source",
					position: "left",
				},
				{
					href: "http://npmjs.com/package/transformice.js",
					label: "NPM",
					position: "left",
				},
			],
		},
		footer: {
			style: "dark",
			copyright: `Copyright © ${new Date().getFullYear()}`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/SuspiciousLookingOwl/transformice.js/documentations",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	plugins: [
		[
			"docusaurus-plugin-typedoc",
			{
				inputFiles: ["../src/"],
				mode: "file",
				target: "ES5",
				downlevelIteration: true,
				allowSyntheticDefaultImports: true,
				excludePrivate: true,
			},
		],
		require.resolve("@cmfcmf/docusaurus-search-local"),
	],
};
