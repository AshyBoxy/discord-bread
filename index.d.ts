// Type definitions for discord-bread
// Project: discord-bread
// Definitions by: Ashton Barnard

interface ClientOptions {
    "token": string
}

export class Client {
    constructor(options?: ClientOptions): Client;

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
    constructor(messageData: Object, client: Client): Message;
    public content: string;
    public id: string;

    public channel: Channel;
    public user: User;

    public react(emojiName: string, emojiId: string): Promise<void>;
    public react(emoji: string): Promise<void>;
    public sendChannel(message: string): Promise<Message>;
}

export class Channel {
    constructor(channelData: Object, client: Client): Channel;

    public id: string;
    public name: string;

    public send(message: string): Promise<Message>;
}

export class User {
    constructor(userData: Object, client: Client): User;

    public id: string;
    public username: string;
    public discriminator: string;
    public tag: string;
    public bot: boolean;
}

interface ClientEvents {
    message: [Message]
    connected: []
}
