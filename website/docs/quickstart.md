---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
slug: /
---

## Installation 
```
npm i transformice.js
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

client.run("tfm_id", "token");
```

## Quick Links
- [Client API](api/classes/client)
- [Client Events](api/interfaces/clientevents)
- [Enums](api/globals#variables-1)