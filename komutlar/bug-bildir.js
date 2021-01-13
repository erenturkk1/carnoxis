const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client, message, args) => {

    const öneri = args.slice(0).join(' ');
    if(!öneri) return message.channel.send("Bir bug belirtmelisin. **NOT** deneme,sa,baksanıza,alo vb. gibi şeyler yazmak yasak. Aksi takdirde botdan yasaklanırsınız!!. ")
       
  const embed = new Discord.MessageEmbed()
  .setTitle("Birisi Bug buldu!")
  .addField("Belirtilen Bug:", öneri)
  .addField("Bugu Belirten Kişi:", `Adı: **${message.author.tag}** - Etiketi: <@${message.author.id}> - ID: **${message.author.id}**`)
  //etColor("BLUE")
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: "gif"}))
  message.channel.send(`Öneriniz başarıyla iletildi!`)
  client.channels.cache.get("793899553254408222").send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "bug-bildir",
    description: "öneri bildirirsiniz",
    usage: "öneri <öneri>"
}