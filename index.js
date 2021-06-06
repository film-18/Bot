// save your token in this file
const config = require("./config.json");

const axios = require("axios")
// require the discord.js module
const Discord = require('discord.js');

const img = require("./image.json");

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
    } else if (command === 'server') {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (command === 'help') {
        message.channel.send('!fm name coin');
    } else if (command === 'fm') {
        let word = message.content.split(' ')[1];
        let page = await axios.get("https://api.lunarcrush.com/v2?data=assets&key=2ywt4zlvbnv50s36bv6uyj&symbol=" + word)
        console.log(word)

        let x = page.data.data[0].name
        let pic = img.filter(element => {
            if (element.name === x) {
                return element.url
            }
        })
        console.log(pic.url);

        // let botMes = ""
        // x.forEach(element => {
        //     botMes += ("```High = " + element.high + "," + "Low = " + element.low + "```\n" + "❤");

        // });
        // message.channel.send(botMes);
        const embed = {
            "title": "Crytocurrency",
            "description": "```" + x + "```",
            "url": "https://discordapp.com",
            "color": 578404,
            "timestamp": "2021-06-06T09:54:36.810Z",
            "footer": {
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "footer text"
            },
            "thumbnail": {
                "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "image": {
                "url": pic[0].url
            },
            "author": {
                "name": "author name",
                "url": "https://discordapp.com",
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "fields": [
                {
                    "name": "❤",
                    "value": x
                },
                {
                    "name": "<:thonkang:219069250692841473>",
                    "value": "these last two",
                    "inline": true
                },
                {
                    "name": "<:thonkang:219069250692841473>",
                    "value": "are inline fields",
                    "inline": true
                }
            ]
        };
        message.channel.send({ embed });


    }


    return console.log('end')
});
