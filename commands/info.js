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
            coinName = film1234.slice(3).join(' ')
            
        }
    });

    if (coin) {
        const embed = {
            "title": coinName,
            "description": "```" + "THB " + coin.last + "```",
            "color": 7536522,
            "footer": {
                "text": "👏 "
            },
            "timestamp": Date(),
            "fields": [
                {
                    "name": "24 H สูงสุด",
                    "value": new Intl.NumberFormat('th-TH', { maximumSignificantDigits: 3 }).format(coin.high24hr),
                    "inline": true
                },
                {
                    "name": "24 H ต่ำสุด",
                    "value": new Intl.NumberFormat('th-TH', { maximumSignificantDigits: 3 }).format(coin.low24hr),
                    "inline": true
                }
            ]
        };
        message.channel.send({ embed });
    } else {
        const embed = {
            "title": "ไม่พบเหรียญนี้ค่ะ 😉",
            "color": 7536522,
        };
        message.channel.send({ embed });
    }


}

module.exports = info