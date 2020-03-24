const fetch = require("node-fetch");

class Channel {
    constructor(channelData, client) {
        this.id = channelData.id;
        this.name = channelData.name;
        this.send = async (message) => {
            let data = await fetch(`https://discordapp.com/api/v6/channels/${channelData.id}/messages`, {
                "method": "POST", "body": JSON.stringify({
                    "content": message
                }),
                headers: { "Content-Type": "application/json", "Authorization": `Bot ${client._token}` }
            });
            data = await data.json();
            return data;
        }

    }

}

module.exports = Channel;
