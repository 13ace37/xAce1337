const tmi = require('tmi.js');
const sql = require('sqlite3');

const {promisify} = require('util');
const readDir = promisify(require('fs').readdir);

const config = require('./config/client');

const client = new tmi.client(config.options);

client.config = config;

client.connect();

client.on("message", (channel, userstate, message, self) => {require('./events/message.js')(channel, userstate, message, self, client)});