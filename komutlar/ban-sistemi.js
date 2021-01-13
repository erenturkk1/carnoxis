const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../cryptoconfig.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/787726366019420210/793895388624977926/standard_5.gif`

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
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Ban Sistemi Yardım Menüsü`)
 .setDescription(`
**${WestraPrefix}ban-log [@kanalEtiket]** \n-> Belirtilen kanala yasaklanma bilgisini gönderir.
**${WestraPrefix}ban-log-sıfırla** \n-> Ban Log sıfırlar.
**${WestraPrefix}ban** \n-> Birisini Banlar.
**${WestraPrefix}ban-yetki-rol** \n-> Ban Yetkilisi Ayarlar.
**${WestraPrefix}ban-yetki-rol-kapat** \n-> Ban Yetkilisini Kapatır.
`)
 .setFooter(`Carnoxis`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bansistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};