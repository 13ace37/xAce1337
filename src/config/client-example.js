//Client Config --

const config = {

    //Client Login

    options: {
        options: {
            debug: true
        },
        connection: {
            reconnect: true,
            secure: true
        },
        identity: {
            username: "", //twitch login username
            password: "oauth:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", //twitch oauth token (not password!)
        },
        channels: [ "" ] //array of channels
        
    },

    //Default Settings
        /*
        only for first startup/database reset.
        settings can be changed either throught the chat or the database 
        */

    settings: {
        prefix: '!',
        color: '',
    }

};

module.exports = config;