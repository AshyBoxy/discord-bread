// Type definitions for idk-help
// Project: idk-help
// Definitions by: Ashton Barnard

interface ClientOptions {
    "token": string
}

export class Client {
    constructor(options?: ClientOptions);
    private _token: string;

    public username: string;
    public discriminator: string;
    public tag: string;
    public id: string;

    public async sendMessage(message: any, channelID: string): Message;
    public async getChannel(channelID: string): Promise<Channel>;

    public on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    public once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
}

export class Message {
    constructor(messageData: Object, client: Client);
    public content: string;
    public channel: Channel;
    public id: string;

    public async sendChannel(message: string): Message;
}

export class Channel {
    constructor(channelData: Object, client: Client);

    public id: string;
    public name: string;

    public async send(message: string): Message;
}

interface ClientEvents {
    message: [Message]
    connected: []
}