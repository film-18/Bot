let help = (message) => {
    const embed = {
        "author": {
            "name": "✨ " + "คำสั่งทั่วไป",
        },
        "title": "ใช้  `!`  นำหน้าคำสั่ง",
        "color": 7536522,
        "description": "`!help` - ดูคำสั่ง \n `!henlo` - ทักทาย Bot \n `!author` - ติดต่อเจ้าของ Henlo  \n\n\n 💡  `<coin name>` : ชื่อย่อของเหรียญ (เช่น BTC) \n `!history <coin name>` - ประวัติราคาเหรียญย้อนหลัง 7 วัน \n `!add <coin name>` - เพิ่มเหรียญที่ต้องการติดตาม \n `!remove <coin name>` - ลบเหรียญที่ต้องการติดตาม \n `!mycoin <coin name>` - ดูราคาเหรียญที่ติดตาม \n `!info <coin name>` - ราคาเหรียญปัจจุบัน ราคาสูงสุด ราคาต่ำสุด \n\n The base API : `https://api.bitkub.com`"

    };
    message.channel.send({ embed });
}
module.exports = help