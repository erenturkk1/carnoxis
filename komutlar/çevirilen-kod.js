const Discord = require("discord.js");
const db = require('quick.db')
exports.run = (client, message, args, member) => {
  let çevrilenkod = db.get(`çevrilenkod`);
const embed = new Discord.MessageEmbed()
  .setColor("0x36393F")
  .setDescription(`<a:ayar:776353886574477342> \n Toplam Çevrilenrilen Kod: ${çevrilenkod}`)
.setImage("https://cdn.discordapp.com/attachments/787726366019420210/793895388624977926/standard_5.gif")
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ksay"],
    permLevel: 0
}

exports.help = {
    name: "çevrilenkod",
    description: "kodçevirme",
    usage: "kodçevirme"
}
