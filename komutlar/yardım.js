const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const Spectrum = new Set();
exports.run = (client, message, args, member) => {

  if (Spectrum.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
        message.delete();
          Spectrum.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Carnoxis Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`•  Prefixim: **a?**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `<a:twitchbit:793899916614828062> • [a?kullanıcı](https://discord.gg/dn7J8vDJ3V): **Kullanıcı yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [a?moderasyon](https://discord.gg/dn7J8vDJ3V): **Moderasyon yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [a?kayıtsistemi](https://discord.gg/dn7J8vDJ3V): ** Kayıt sistemi yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [a?korumasistemi](https://discord.gg/dn7J8vDJ3V): ** Koruma sistemi yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [a?logosistemi](https://discord.gg/dn7J8vDJ3V): ** Logo sistemi yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [a?ekonomisistemi](https://discord.gg/dn7J8vDJ3V): **Ekonomi yardım menüsünü gösterir.**\n <a:twitchbit:793899916614828062> • [a?yardım2](https://discord.gg/dn7J8vDJ3V): ** Yardım2 Menüsünü Gösterir.**`)
  .addField(" • Güncelleme Notları:", "**Güncelleme v1.0:** Tag Sistemi Eklendi ve Güncellendi!")
  //.addField("• Sponsor:", `• Bize sponsor olan **Önem Bilişim**'e teşekkür ederiz! [Sunucu](https://discord.gg/FNnUg6z) • [Site](https://www.onembilisim.com/)`)
  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=793883542782214174&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/dn7J8vDJ3V) •")
  .setImage("https://cdn.discordapp.com/attachments/787726366019420210/793895388624977926/standard_5.gif")
.setFooter("Carnoxis", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}