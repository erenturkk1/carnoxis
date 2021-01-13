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
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}ban-koruma #kanal** \n-> Ban koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}ban-koruma-sıfırla** \n-> Ban koruma sistemini sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kanal-koruma #kanal** \n-> Kanal koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}kanal-koruma-sıfırla** \n-> Kanal koruma sistemini sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}rol-koruma #kanal** \n-> Rol koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}rol-koruma-sıfırla** \n-> Rol koruma sistemini sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}spam-koruma** \n-> Spam koruma sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}spam-koruma-kapat** \n-> Spam koruma sistemini kapatır.
<a:tickblack:793899913247326208>  **${WestraPrefix}küfürengel** \n-> Küfür engel açar/kapatır.
<a:tickblack:793899913247326208>  **${WestraPrefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}reklamengel** \n-> Reklam engel açar/kapatır.
<a:tickblack:793899913247326208>  **${WestraPrefix}reklamlog #kanal** \n-> Reklam-log ayarlar.`)
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
  name: 'korumasistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};