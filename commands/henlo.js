let henlo = (message) => {
    const embed = {
        "title": "Boop! Beep!\nA world of Cryptocurrency 💸",
        "description": "`ความสามารถของ Henlo` \n - เเสดงราคาเหรียญตามที่ต้องการ \n - เพิ่มเหรียญที่อยากติดตาม \n - ดูราคาย้อนหลัง 7 วัน",
        "color": 7536522,
    };
    message.channel.send({ embed });
}
module.exports = henlo
