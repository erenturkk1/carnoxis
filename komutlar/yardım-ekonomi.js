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
 .setAuthor(`${client.user.username} | Ekonomi Sistemi Yardım Menüsü`)
 .setDescription(`
:dollar: **${WestraPrefix}bilgiler** \n-> Kendinizin Ekonomi Bilgilerinizi Gösterir.
:dollar: **${WestraPrefix}bakiye** \n-> Kendi Bakiyenizi Öğrenirsiniz.
:dollar: **${WestraPrefix}günlükpara** \n-> Komutu Kullanan Kişiye Random Bir Şekilde Günlük Para Verir.
:dollar: **${WestraPrefix}hesap-oluştur** \n-> Ekonomide Yer Almak İçin Hesap Oluşturursunuz.
:dollar: **${WestraPrefix}kasaaç** \n-> Para Kazanmak İçin Kasa Açarsınız.
:dollar: **${WestraPrefix}kasabilgi** \n-> Kasa Hakkında Bilgi Verir.
:dollar: **${WestraPrefix}kasalar** \n-> Bütün Kasaları Görürsünüz.
:dollar: **${WestraPrefix}çalış** \n-> Çalışıp Para Kazanırsınız.
:dollar: **${WestraPrefix}kumar** \n-> Kumar Oynarsınız Dikkat.
:dollar: **${WestraPrefix}rulet** \n-> Rulet Oynarsınız.
:dollar: **${WestraPrefix}liderlik** \n-> Sunucudaki Kayıtlı Para Liderliğine Bakarsınız.
:dollar: **${WestraPrefix}transfer** \n-> Kendi Paranızdan Bir Başkasına Para Gönderirsiniz.

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
  name: 'ekonomisistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};