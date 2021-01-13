const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
  const rache = require("../cryptoconfig.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || rache.prefix 
                    
         var user = message.mentions.users.first() || message.author;
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.sendEmbed(new Discord.MessageEmbed().setDescription('Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisi Lazım!').setColor("RED")); 
                
                    
                   let komut = await db.fetch(`sunucuKomut_${message.guild.id}`) 
                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) return message.channel.send('Bu sunucuda tag ayarlı değil.')
                         let komutvarmi = await db.fetch(`sunucuKomut_${message.guild.id}`)
                    if(!args[0]) return message.channel.send(`Lütfen silmek istediğiniz tagı giriniz.\nMevcut özel taglar: \`${komut}\``)
                    if(args[0] !== komut) return message.channel.send(`Bu tag mevcut değil.\nMevcut tag: \`${komut}\``)
                   if(args[0] == 'Bulunmuyor.') return message.channel.send(`Bu tag mevcut değil.\nMevcut taglar: \`${komut}\``)
                    
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Bu sunucudan Tag.`, `\`${komut}\` silindi.`)
                     .setColor('GREEN')
                
                     db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                     db.delete(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) 
                     };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "tag-sil"
};