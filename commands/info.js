// const img = require("../image.json");
const axios = require("axios")

let info = async (message) => {
    let word = message.content.split(' ')[1];
    let page = await axios.get("https://api.bitkub.com/api/market/ticker")
    let symbol = await axios.get("https://api.bitkub.com/api/market/symbols")
    console.log(word)

    let coins = page.data
    let coin = coins[`THB_${word.toUpperCase()}`]
    console.log(coin)

    let name = symbol.data.result
    let coinName = "Unknown"
    name.forEach(element => {
        if (element.symbol === `THB_${word.toUpperCase()}`) {
          
            console.log(element.info)
            let film1234 = element.info.split(' ')
            coinName = film1234[film1234.length - 1]
        }
    });


    const embed = {
        "title": coinName,
        "description": "```"  + new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(coin.last) + "```",
        "color": 578404,
        "footer": {
            "text": "👏 "
        },
        "timestamp": Date(),
        "fields": [
            {
                "name": "24 H สูงสุด",
                "value": new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(coin.high24hr),
                "inline": true
            },
            {
                "name": "24 H ต่ำสุด",
                "value": new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(coin.low24hr),
                "inline": true
            }
        ]
    };
    message.channel.send({ embed });
}

module.exports = info