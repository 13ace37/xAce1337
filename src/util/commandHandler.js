const {existsSync} = require("fs");

module.exports = function (channel, userstate, message, self, client) {
    
    let command = message.slice(client.config.settings.prefix.length).split(' ')[0]; //gets the command after the given prefix
    let args = message.slice(client.config.settings.prefix.length).split(' '); //gets all args+command
    args.shift(); //removes command from args

    if (!existsSync(`./src/cmds/${command}.js`)) return; //checks if command exists

    delete require.cache[`../cmds/${command}.js`];

    return require(`../cmds/${command}.js`)(channel, userstate, message, self, args, client); //launches command

};