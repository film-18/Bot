// save your token in this file
const config = require("./config.json");

const axios = require("axios")

const henlo = require("./commands/henlo");
const history = require("./commands/history");
const info = require("./commands/info");
const mycoin = require("./commands/mycoin");
const help = require("./commands/help");
const author = require("./commands/author");
const addcoin = require("./commands/addcoin");
const removecoin = require("./commands/removecoin");

const Discord = require('discord.js');
const cron = require('node-cron');
const admin = require("./firebase");
const firestore = admin.firestore()

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
    } else if (command === 'help') {
        help(message)
    } else if (command === 'history') {
        history(message)
    } else if (command === 'info') {
        info(message)
    } else if (command === 'mycoin') {
        mycoin(message)
    } else if (command === 'author') {
        author(message)
    } else if (command === 'add') {
        addcoin(message)
    } else if (command === 'remove') {
        removecoin(message)
    }
     


    return console.log('end')
});

cron.schedule('0 59 23 * * *', async () => {
    let ticker = await axios.get("https://api.bitkub.com/api/market/ticker")
    firestore.collection('histories').add ({
        date : admin.firestore.Timestamp.now(),
        data : ticker.data
    })
    console
})
