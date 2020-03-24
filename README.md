# discord-bread

## Installation

```npm i git+https://github.com/AshyBoxy/discord-bread.git```


## Example

```js
const Bread = require(".");

const client = new Bread.Client({
    "token": "Bot Token Here"
});

client.on("message", async (msg) => {
    if(msg.content == "!ping") {
        msg.sendChannel("Pong!");
    }
});

client.on("connected", () => {
    console.log(`Online as ${client.tag}!`);
});

```
