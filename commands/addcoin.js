const admin = require("../firebase.js")
const firestore = admin.firestore()
const axios = require("axios")

let addcoin = async (message) => {
    let word = message.content.split(' ')[1];
    let ticker = await axios.get("https://api.bitkub.com/api/market/ticker")
    let coins = ticker.data
    let coin = coins[`THB_${word.toUpperCase()}`]
    console.log(message.author.id)

    if (coin) {
        firestore.collection('users').doc(message.author.id).set({
            coins: admin.firestore.FieldValue.arrayUnion(`THB_${word.toUpperCase()}`)
        }, { merge: true })
        .then(() => {
            const embed = {
                "title": "เพิ่มเหรียญสำเร็จ ✅",
                "description": "`" + word + "`",
                "color": 7536522,
            };
            message.channel.send({ embed });
        });
    } else {
        const embed = {
            "title": "ไม่พบเหรียญ 😅",
            "color": 7536522,
        };
        message.channel.send({ embed });
    }
}
module.exports = addcoin