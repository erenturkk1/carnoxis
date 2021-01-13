const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
var ayarlar = require('../cryptoconfig.json')

exports.run = async (bot, message, args) => { 

  let prefix  = ayarlar.prefix
  
  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`bakiyecdare-${message.guild.id}.${message.author.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("GOLD")
.setDescription(`Komutu Yanlış Kullandın \n Doğru Kullanım: \`${prefix}rulet <renk> <miktar>\``);

let moneymore = new Discord.MessageEmbed()
.setColor("GOLD")
.setDescription(`Sahip Olduğun Bakiyeden Daha Fazlasını Yatıramazsın !`);

let colorbad = new Discord.MessageEmbed()
.setColor("GOLD")
.setDescription(`Lütfen Geçerli bir Renk Belirt \n \`kırmızı\` \`siyah\` \`yeşil\``);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "k" || colour.includes("siyah")) colour = 0;
    else if (colour == "s" || colour.includes("kırmızı")) colour = 1;
    else if (colour == "y" || colour.includes("yeşil")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // YEŞİL
        money *= 15
        db.add(`bakiyecdare-${message.guild.id}.${message.author.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Tebrikler **Yeşil** Renkten **${money}** Para Kazandın ! \n\n Yatırdığınızın 15x Katı`);
        message.channel.send(moneyEmbed1)
    } else if (isOdd(random) && colour == 1) { // KIRMIZI
        money = parseInt(money * 1.5)
        db.add(`bakiyecdare-${message.guild.id}.${message.author.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`Tebrikler **Kırmızı** Renkten **${money}** Para Kazandın ! \n\n Yatırdığınızın 1.5x Katı`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) {  // SİYAH
        money = parseInt(money * 2)
        db.add(`bakiyecdare-${message.guild.id}.${message.author.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Tebrikler Siyah Renkten **${money}** Para Kazandın ! \n\n Yatırdığınızın 2x Katı`);
        message.channel.send(moneyEmbed3)
    } else { 
        db.subtract(`bakiyecdare-${message.guild.id}.${message.author.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`Baş Çıktı :( **${money}** Para Kaybettin !`);
        message.channel.send(moneyEmbed4)
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'rulet'
};