const Discord = require(".");

const client = new Discord.Client({
    "token": process.env.DISCORD_TOKEN
});

client.on("message", async (msg) => {
    if (msg.content == ",example") {
        msg.sendChannel("Example command!");
    }

    if (msg.content.startsWith(",channel")) {
        console.log(msg);
    }
});

client.on("connected", () => {
    console.log(`Online as ${client.tag}`);
});
