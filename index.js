// save your token in this file
const config = require("./config.json");

const axios = require("axios")

const henlo = require("./commands/henlo");
const history = require("./commands/history");
const info = require("./commands/info");
const mycoin = require("./commands/mycoin");
const help = require("./commands/help");
const author = require("./commands/author");

const Discord = require('discord.js');



const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

// login to Discord with your app's token
client.login(config.token);


client.on('message', async message => {
    console.log(message.content);
    const prefix = '!';
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'henlo') {
        henlo(message)
    } else if (command === 'server') {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (command === 'help') {
        help(message)
    } else if (command === 'history') {
        history(message)
    } else if (command === 'info') {
        info(message)
    } else if (command === 'mycoin') {
        mycoin(message)
    } else if (command === 'author') {
        mycoin(message)
    }
     


    return console.log('end')
});
