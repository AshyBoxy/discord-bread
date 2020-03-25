# discord-bread

## Installation

```npm i @ashyboxy/discord-bread```


## Example

```js
const Bread = require("@ashyboxy/discord-bread");

const client = new Bread.Client({
    "token": "Bot Token Here"
});

client.on("message", (msg) => {
    if(msg.content == "!ping") {
        msg.sendChannel("Pong!");
    }
});

client.on("connected", () => {
    console.log(`Online as ${client.tag}!`);
});

```
