// Type definitions for discord-bread
// Project: discord-bread
// Definitions by: Ashton Barnard

/**
 * ClientOptions
*/
interface ClientOptions {
    /**
     * The token for the client
     */
    "token": string
}

/**
 * Client Class
 */
export class Client {
    /**
     * Client Class constructor
     * @param options The options for the client
     */
    constructor(options?: ClientOptions): Client;

    /**
     * The client's username
     */
    public username: string;
    /**
     * The client's discriminator
     */
    public discriminator: string;
    /**
     * The client's tag (username#discriminator)
     */
    public tag: string;
    /**
     * The client's id
     */
    public id: string;

    /**
     * Sends a message to a channel using it's ID
     * @param message The content of the message to send
     * @param channelID The ID of the channel to send to
     */
    public sendMessage(message: string, channelID: string): Promise<Message>;
    /**
     * Gets a channel by it's ID
     * @param channelID The ID of the channel to get
     */
    public getChannel(channelID: string): Promise<Channel>;

    public on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
    public once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
}

/**
 * Message Class
 */
export class Message {
    /**
     * Message Class constructor
     * @param messageData The data for the message
     * @param client The client to create the message using
     */
    constructor(messageData: Object, client: Client): Message;

    /**
     * The content of the message
     */
    public content: string;
    /**
     * The ID of the message
     */
    public id: string;

    /**
     * The channel the message is in
     */
    public channel: Channel;
    /**
     * The user that sent the message
     */
    public user: User;
    /**
     * Reacts to a message with a custom emoji using it's ID and name
     * @param emojiName The name of the emoji
     * @param emojiId The ID of the emoji
     */
    public react(emojiName: string, emojiId: string): Promise<void>;
    /**
     * Reacts to a message with a unicode emoji
     * @param emoji The emoji to react with
     */
    public react(emoji: string): Promise<void>;
    /**
     * Sends a message to the channel this message is in
     * @param message The content of the message to send
     */
    public sendChannel(message: string): Promise<Message>;
}

/**
 * Channel Class
 */
export class Channel {
    /**
     * Creates a new channel
     * @param channelData Data for the channel
     * @param client The client to make this channel using
     */
    constructor(channelData: Object, client: Client): Channel;

    /**
     * The channel's ID
     */
    public id: string;
    /**
     * The channel's name
     */
    public name: string;

    /**
     * Sends a message to this channel
     * @param message Content for the message
     */
    public send(message: string): Promise<Message>;
}

/**
 * User Class
 */
export class User {
    /**
     * Creates a new user
     * @param userData Data for the user
     * @param client The client to make this user with
     */
    constructor(userData: Object, client: Client): User;

    /**
     * The user's id
     */
    public id: string;
    /**
     * The user's username
     */
    public username: string;
    /**
     * The user's discriminator
     */
    public discriminator: string;
    /**
     * The user's tag (username#discriminator)
     */
    public tag: string;
    /**
     * true if the user is a bot
     */
    public bot: boolean;
}

/**
 * Events for the client
 */
interface ClientEvents {
    /**
     * Fired whenever a message is recieved
     */
    message: [Message]
    /**
     * Fired when the client connects
     */
    connected: []
}
