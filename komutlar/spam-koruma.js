const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<a:twitchbit:793899916614828062> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(sistem) return message.channel.send(nn.setDescription(`<a:twitchbit:793899916614828062> Spam koruma zaten aktif.`)).then(a => a.delete({timeout: 10000}));

data.set(`spam.${message.guild.id}`, 'codare');
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor(0x36393F).setDescription(`<a:twitchbit:793899916614828062> Spam koruma başarıyla açıldı.`)).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam-engel', 'spamengel', 'spam-koruma', 'spamkoruma'],
  permLevel: 0
}

exports.help = {
  name: 'spam'
};
