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
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}mod-log #kanal** \n-> Mod-log ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}sa-as aç** \n-> SA-AS sistemini açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}sa-as kapat** \n-> SA-AS sistemini kapatır.
<a:tickblack:793899913247326208>  **${WestraPrefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
<a:tickblack:793899913247326208>  **${WestraPrefix}say** \n-> Sunucu bilgilerini gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}oylama** \n-> Oylama yapar.
<a:tickblack:793899913247326208>  **${WestraPrefix}otorol @rol #kanal** \n-> Otorol ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}sayaç sayı** \n-> Sayaç sayısı ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}sayaç-kanal-ayarla #kanal** \n-> Sayaç Kanalı Ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}giriş-çıkış-ayarla #kanal** \n-> Resimli Hg-Bb Sistemi Açar.
<a:tickblack:793899913247326208>  **${WestraPrefix}giriş-çıkış-sıfırla ** \n-> Resimli Hg-Bb Sistemini Sıfırlar.
`)
 .setFooter(`Carnoxis`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};