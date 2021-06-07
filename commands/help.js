let help = (message) => {
    const embed = {
        "title": "✌ " + "HELP",
        "description": "```"  + new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(coin.last) + "```",
        "color": 12943359,
        "footer": {
            "text": "👏 "
        },
        "timestamp": Date(),
        "fields": [
            {
                "name": "<:24 H สูงสุด>",
                "value": new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(coin.high24hr),
                "inline": true
            },
            {
                "name": "<:24 H ต่ำสุด>",
                "value": new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(coin.low24hr),
                "inline": true
            }
        ]
    };
    message.channel.send({ embed });
}
module.exports = help