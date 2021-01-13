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
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}arrow** \n-> Ok şeklinde logo yapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}gold** \n-> Altın şeklinde logo yapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}green** \n-> Yeşil şeklinde logo yapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}graffiti** \n-> Graffiti şeklinde logo yapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}alev** \n-> Alev şeklinde logo yapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}red** \n-> Kırımızı yazısında logo yapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}neonmavi** \n-> Neon Mavi yazısında logo yapar.

`)
 .setFooter(`Carnoxis`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};