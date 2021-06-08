const admin = require("../firebase.js")
const firestore = admin.firestore()
const axios = require("axios")


let mycoin = async (message) => {
    let ticker = await axios.get("https://api.bitkub.com/api/market/ticker")

    firestore.collection('users').doc(message.author.id).get()
        .then(doc => {
            coins = []
            if (doc.exists) {
                coins = doc.data().coins
            }
            console.log(coins)


            let coinsPrice = []
            coins.forEach(coin => {
                coinsPrice.push({
                    "name": coin,
                    "value": "```" + new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(ticker.data[coin].last) + "```",
                    "inline": true
                })
            });

            const embed = {
                "title": "ราคาเหรียญที่ติดตาม 💸",
                "color": 7536522,
                "footer": {
                    "text": "👏 "
                },
                "timestamp": Date(),
                "fields": coinsPrice.length > 0 ? coinsPrice : {
                    "name": "ไม่พบเหรียญ :cry:",
                    "value": "`!addcoin <coin name>` - เพิ่มเหรียญ",
                    "inline": false
                }

            };
            message.channel.send({ embed });
        })


}
module.exports = mycoin