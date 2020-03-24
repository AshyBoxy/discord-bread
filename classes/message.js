const fetch = require("node-fetch");

const Channel = require("./channel");

class Message {
    constructor(messageData, client) {
        this.client = client;
        this.content = messageData.content;
        this.id = messageData.id;
        this.channel = messageData.channel_id;
        this.sendChannel = async (message) => {
            let data = await fetch(`https://discordapp.com/api/v6/channels/${messageData.channel_id}/messages`, {
                "method": "POST", "body": JSON.stringify({
                    "content": message
                }),
                headers: { "Content-Type": "application/json", "Authorization": `Bot ${client._token}` }
            });
            data = await data.json();
            return data;
        }

    }

    async init() {
        this.channel = await this.client.getChannel(this.channel);
        return true;
    }

}

module.exports = Message;
