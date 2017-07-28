const Discord = require('discord.js');
const client = new Discord.Client();
client.config = require('./media/config.json');



process.on('unhandledRejection', err => {
    console.error(`Unhandled Rejection:\n${err.stack}`);
});
process.on('unhandledPromiseRejection', err => {
    console.error(`Unhandled Promise Rejection:\n${err.stack}`);
});

client.on('debug', console.log);
client.on('warn', console.warn);
client.on('error', console.error);

client.login(client.config.token);