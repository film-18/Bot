// save your token in this file
const config = require("./config.json");

const axios = require("axios")
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

// login to Discord with your app's token
client.login(config.token);

// listening a message



client.on('message', async message => {	
    console.log(message.content);
    const prefix = '!';
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    
    if (command === 'henlo') {
        message.channel.send('boop! beep!');
    } else if (command === 'E-no') {
        message.channel.send('eiei');
    } else if (command === 'server') {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (command === 'help') {
        message.channel.send('Henlo Calendar');
    } else if (command === 'film') {
        let word = message.content.split(' ')[1];
        let page = await axios.get("https://api.lunarcrush.com/v2?data=assets&key=2ywt4zlvbnv50s36bv6uyj&symbol=" + word)
        console.log(word)

        let x = page.data.data[0].timeSeries
        let botMes = ""
        x.forEach(element => {
            botMes += ("```High = " + element.high + "," + "Low = " + element.low + "```\n");
            
        });
        message.channel.send(botMes);
        

    }


    return console.log('end')
});
