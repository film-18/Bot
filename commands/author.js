let author = (message) => {
    const embed = {
        "title": fmmm,
        "description": ,
        "color": 8584931,
        "footer": {
            "text": "👏 "
        },
        "timestamp": Date(),
        "fields": [
            {
                "name": "Github",
                "value": "film-18",
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
module.exports = henlo