// Type definitions for discord-bread
// Project: discord-bread
// Definitions by: Ashton Barnard

interface ClientOptions {
    "token": string
}

export class Client {
    constructor(options?: ClientOptions);

    public username: string;
    public discriminator: string;
    public tag: string;
    public id: string;

    public sendMessage(message: any, channelID: string): Promise<Message>;
    public getChannel(channelID: string): Promise<Channel>;

    public on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    public once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
}

export class Message {
    constructor(messageData: Object, client: Client);
    public content: string;
    public channel: Channel;
    public id: string;

    public sendChannel(message: string): Promise<Message>;
}

export class Channel {
    constructor(channelData: Object, client: Client);

    public id: string;
    public name: string;

    public send(message: string): Promise<Message>;
}

interface ClientEvents {
    message: [Message]
    connected: []
}
