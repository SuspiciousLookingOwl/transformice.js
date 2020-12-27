---
id: "index"
title: "transformice.js"
slug: "/api"
sidebar_label: "README"
hide_title: true
---

# Transformice.js (WIP)

NodeJs Client for Transformice with full Typescript support.

[Read the docs](https://transformice-js.netlify.app/docs/) 

## Development

Clone the repository:

```
git clone https://github.com/SuspiciousLookingOwl/transformice.js
```

Install dependencies:

```
npm i
```

Watch and compile files:

```
npm run dev
```

## Example

```js
const { Client, enums } = require("transformice.js");

const client = new Client("username", "password", {
	language: enums.languages.en
});

client.on("roomMessage", (message) => {
	if (client.name === message.author.name) return;
	client.sendRoomMessage(message.author.look);
});

client.run("tfm_id", "token", );
```
