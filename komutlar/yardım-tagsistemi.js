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
 .setAuthor(`${client.user.username} | Tag Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}tag-role** \n-> Tag Alan Rolü Ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}rol-tag** \n-> Tag Alınca Rol Vermek İçin Tag Ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}tag-log** \n-> Tag Alan Rolü Ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}tag-log-kapat** \n-> Tag Alan Rolünü Kapatır.
<a:tickblack:793899913247326208>  **${WestraPrefix}tagrole-sil** \n-> Ayarlanmış Tag Rolünü Siler.
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
  name: 'tagsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};