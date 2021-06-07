

let author = (message) => {
    const embed = {
        "title": "fmmm",
        "description": "`Owner of Henlo ซ้อฟิล์มสุดสวย`",
        "color": 8584931,
        "footer": {
            "text": "hope you like my Henlo " + "❤" 
        },
        "thumbnail": {
            "url": "https://avatars.githubusercontent.com/u/56312158?v=4"
        },
        "fields": [
            {
                "name": "Github",
                "value": "film-18",
                "inline": true
            },
            {
                "name": "Instagram",
                "value": "chlhfilm",
                "inline": true
            }
        ]
    };
    message.channel.send({ embed });
}
module.exports = author