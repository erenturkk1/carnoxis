const WestraDiscord =
      require('discord.js');
const WestraClient =
      new WestraDiscord.Client();
exports.run = (client, message) => {
const WestraEmbed = new WestraDiscord.MessageEmbed().setColor(0x36393F).setFooter(`Carnoxis`).setTimestamp()
.setDescription(`<a:twitchbit:793899916614828062> Pingim = **${client.ws.ping} ms**`)
message.channel.send(WestraEmbed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};