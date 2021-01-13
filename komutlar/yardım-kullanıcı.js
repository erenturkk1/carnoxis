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
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}davet** \n-> Botu davet edersiniz.
<a:tickblack:793899913247326208>  **${WestraPrefix}shardbilgi** \n-> Botun shard bilgilerini gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}öneri** \n-> Bota öneri belirtirsiniz.
<a:tickblack:793899913247326208>  **${WestraPrefix}bug-bildir** \n-> Bulduğunuz bugu gönderirsiniz.
<a:tickblack:793899913247326208>  **${WestraPrefix}istatistik** \n-> Botun istatistiğini gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}kod-çevir** \n-> v11 Kodları v12 Ye Çevirir.
<a:tickblack:793899913247326208>  **${WestraPrefix}çevrilenkod** \n-> Şimdiye Kadar Çevrilen Komutları Görürsünüz.
<a:tickblack:793899913247326208>  **${WestraPrefix}mcskin** \n-> Minecraft Skini Atar.
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};