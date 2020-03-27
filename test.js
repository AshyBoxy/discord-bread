const Discord = require(".");

const client = new Discord.Client({
    "token": process.env.DISCORD_TOKEN
});

client.on("message", async (msg) => {
    if (msg.content == "!test") {
        msg.channel.send("Testing!");
    }

    msg.react("🍞").then(() => {
        msg.react("shinybread", "683288243008962561");
    });
});

client.on("connected", () => {
    console.log(`Online as ${client.tag}`);
});
