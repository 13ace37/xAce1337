module.exports = function (channel, userstate, message, self, client) {
    if (self) return;
    if (userstate['message-type'] === 'whisper') return;
    
    if (message.startsWith(client.config.settings.prefix)) return require('../util/commandHandler.js')(channel, userstate, message, self, client);
};