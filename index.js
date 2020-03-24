const EventEmitter = require("events");
const fetch = require("node-fetch"),
    WebSocket = require("ws");

const Message = require("./classes/message"),
    Channel = require("./classes/channel");

let connected = false;

class Client extends EventEmitter {
    constructor(options) {
        super();
        this._token = options.token;
        fetch(`https://discordapp.com/api/v6/gateway`).then((x) => x.json()).then((data) => {
            const ws = new WebSocket(`${data.url}/?v=6&encoding=json`);

            ws.on("message", async (data) => {
                data = JSON.parse(data);

                if (data.t == "MESSAGE_CREATE") {
                    let message = new Message(data.d, this);
                    await message.init();
                    this.emit("message", message);
                }

                if (!connected) {
                    setInterval(() => {
                        ws.send(JSON.stringify({
                            "op": 1,
                            "d": data.s
                        }));
                    }, data.d.heartbeat_interval);
                    ws.send(JSON.stringify({
                        "op": 2,
                        "d": {
                            "token": this._token,
                            "properties": {
                                "$os": "linux",
                                "$browser": "ashyboxy_test",
                                "$device": "ashyboxy_test"
                            }
                        }
                    }));
                    connected = true;
                    fetch("https://discordapp.com/api/v6/users/@me", {
                        "headers": { "Authorization": `Bot ${this._token}` }
                    }).then((x) => x.json()).then((clientData) => {
                        this.username = clientData.username;
                        this.discriminator = clientData.discriminator;
                        this.tag = clientData.username + "#" + clientData.discriminator;
                        this.id = clientData.id;

                        this.emit("connected");
                    })
                }
            });
        });
    }

    async sendMessage(message, channelID) {
        let data = await fetch(`https://discordapp.com/api/v6/channels/${channelID}/messages`, {
            "method": "POST", "body": JSON.stringify({
                "content": message
            }),
            headers: { "Content-Type": "application/json", "Authorization": `Bot ${this._token}` }
        });
        data = await data.json();
        return new Message(data, this);
    }

    async getChannel(channelID) {
        let data = await fetch(`https://discordapp.com/api/v6/channels/${channelID}`, {
            "headers": { "Authorization": `Bot ${this._token}` }
        });
        data = await data.json();
        return new Channel(data, this);
    }

}

exports.Client = Client;
exports.Message = Message;
