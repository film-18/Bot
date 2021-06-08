
const admin = require("../firebase.js")
const firestore = admin.firestore()

let history = async (message) => {
    let word = message.content.split(' ')[1];
    let coin = `THB_${word.toUpperCase()}`;

    let historiesRef = firestore.collection("histories")
    historiesRef.where("date", ">=", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000))
        .orderBy('date', 'desc')
        .limit(8)
        .get()
        .then((querySnapshot) => {
            let histories = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                let data = doc.data()
                if (data.data[coin]) {
                    histories.push({
                        "name": data.date.toDate().toLocaleDateString('th-TH', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        }),
                            "value": "```" + new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(data.data[coin].last) + "```",
                            "inline": false
                    })
                }

            });

            console.log(histories)
            const embed = {
                "title": "ราคาเหรียญ " + "```" + word + "```" +" ย้อนหลัง 7 วัน 💸",
                "color": 7536522,
                "footer": {
                    "text": "👏 "
                },
                "timestamp": Date(),
                "fields": histories.length > 0? histories.reverse():{
                    "name": "ไม่พบข้อมูล 😥",
                    "value": "```ไม่พบข้อมูลย้อนหลัง 7 วัน```",
                    "inline": false
                }
                
            };
            message.channel.send({ embed });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


}
module.exports = history