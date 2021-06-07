let help = (message) => {
    const embed = {
        "author": {
            "name": "✨ " + "คำสั่งทั่วไป",
        },
        "title": "ใช้  `!`  นำหน้าคำสั่ง",
        "color": 12943359,
        "description": "`!help` - ดูคำสั่ง \n `!henlo` - ทักทาย Bot \n `!author` - ติดต่อเจ้าของ Henlo งับ \n\n\n `!history` - ประวัติราคาเหรียญย้อนหลัง 7 วัน \n `!mycoin <coin name>` - เพิ่มเหรียญที่ต้องการติดตาม \n `!info <coin name>` - ราคาเหรียญปัจจุบัน ราคาสูงสุด ราคาต่ำสุด \n\n The base API : `https://api.bitkub.com`"

    };
    message.channel.send({ embed });
}
module.exports = help