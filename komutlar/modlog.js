const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:twitchbit:793899916614828062> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`<a:twitchbit:793899916614828062> Mod-log kanalı zaten ayarlı değil.`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`<a:twitchbit:793899916614828062> Mod-log kanalı başarıyla sıfırlandı.`);
    return
  }
  
if (!logk) return message.channel.send(`<a:twitchbit:793899916614828062> Yanlış kullanım doğru kullanım: a?mod-log #kanal`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`<a:twitchbit:793899916614828062> Mod-log kanalı başarıyla ${logk} olarak ayarlandı.`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog','log-ayarlama'],
    permLevel: 3,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};