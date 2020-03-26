const fetch = require("node-fetch");

class User {
    constructor(userData, client) {
        this.client = client;
        this.id = userData.id;
        this.username = userData.username;
        this.discriminator = userData.discriminator;
        this.tag = this.username + "#" + this.discriminator;
        this.bot = userData.bot || false;
    }
}

module.exports = User;
