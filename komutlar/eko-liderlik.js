const Discord = require(`discord.js`);
const db = require(`quick.db`);
const moment = require('moment');
const ayarlar = require('../cryptoconfig.json')

module.exports.run = async(client, message, args) => {

let cash = db.get(`bakiyecdare-${message.guild.id}`)
if (!cash) return message.channel.send('Sunucuda Kayıtlı Herhangi bir Ekonomi Verisi **Bulunamadı**!')

var limit = 25;
  
var lastpage = Math.ceil(Object.keys(cash).length / limit);
let page = parseInt(args[0]);

let prefix = ayarlar.prefix
  

if (!page) page = 1 

if (page > lastpage) return message.channel.send(`${page} Sayılı Sayfa Bulunamadı.`)
  
let frompages = limit * (page - 1);
let pageslimit = 15 * page;
  
let list = Object.entries(cash).sort((a, b) => b[1] - a[1]).slice(frompages, pageslimit);
let arr = [];
  
for (var i in list) {
  arr.push(`**${i * 1 + 1 + frompages}** <@!${message.guild.members.cache.get(list[i][0]) ? message.guild.members.cache.get(list[i][0]).id : "Bilinmeyen Kullanıcı"}> - Para Miktarı: **${list[i][1]}**`)
};
  
  let embed = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setTitle(`${message.guild.name} Sunucusu Ekonomi Liderlik Tablosu`)
  .setThumbnail(message.guild.iconURL({ dynamic:true, size:2048 }))
  .setDescription(arr.join("\n"))
  .setFooter(`Sayfa: ${page} / ${lastpage}`,message.guild.iconURL({ dynamic:true, size:2048 }))
  .setTimestamp()
  message.channel.send(embed)
  
};

exports.conf = {
 enabled: false,
 guildOnly: false,
 aliases: ["top-coin","leaderboard","liderlik"],
 permLevel: 0,
  
};
exports.help = {
 name: 'topcoin'
};