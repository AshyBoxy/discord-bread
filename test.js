const Discord = require(".");

const client = new Discord.Client({
    "token": process.env.DISCORD_TOKEN
});

client.on("message", async (msg) => {
    // console.log(msg.user);
    if (msg.user.id == client.id) return console.log(`Message "${msg.content}" was sent by me!`);
    if (msg.content == "!test") {
        msg.channel.send("Testing!");
    }
});

client.on("connected", () => {
    console.log(`Online as ${client.tag}`);
});
