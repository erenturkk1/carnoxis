const Discord = require("discord.js")
const {MessageEmbed} = Discord
exports.run = async (client,message,args) =>{
  let yazı = args[0]
  if(!yazı) return message.channel.send("<a:twitchbit:793899916614828062> Logo oluşturmak için bir yazı girmelisin.")
  let api = `https://habbofont.net/font/palooza/${yazı}.gif`
  const embed = new MessageEmbed()
  .setColor("BLUE")
  .setImage(api)
  message.channel.send(embed)
}
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    kategori: "logo",
   
      };
      
    exports.help = {
        name: 'gold',
        description: '',
        usage: '',
   
    };