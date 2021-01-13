////FİBER <3 LysteX
const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const db = require('quick.db');
const eşyalar = ['🍇', '🍋', '🍒', '🍊', '🥝'];

exports.run = function(client, message, args) {
    let bahis = args[0] 
    let verilcek = bakiye*2
    
    var bakiye = db.fetch(`bakiyecdare-${message.author.id}`) || '0'
    var çark1 = eşyalar[Math.floor(Math.random() * eşyalar.length)];
    var çark2 = eşyalar[Math.floor(Math.random() * eşyalar.length)];
    var çark3 = eşyalar[Math.floor(Math.random() * eşyalar.length)];
    var hesapd = db.fetch(`hesapismiçodare-${message.author.id}`)
    if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `a?hesap-oluştur <isim>`")
    if(!args[0]) return message.channel.send("Bir para miktarı girmelisin")
    if(isNaN(args[0])) return message.channel.send("Bir sayı girmelisin.")
    
    if(bakiye < 0) return message.channel.send("Bakiyen 0 dan az")
    if(bahis < 0) return message.channel.send("- Geçerli bi değer değildir.")
    if(bakiye < bahis) return message.channel.send("Yeterli Paran Yok.")
    
    if (çark1 === çark2 && çark1 === çark3){
        message.channel.send(stripIndents`
**[ 🎰 | SLOTS | 🎰 ]**
**-----------------**
${çark1} : ${çark2} : ${çark3} **«**
**-----------------**
        `).then(`Tebrikler paranın iki katını kazandın.`)
      db.add(`bakiyecdare-${message.author.id}`, verilcek)
    } else {
        message.channel.send(stripIndents`
         **[ 🎰 | SLOTS | 🎰 ]**
**-----------------**
${çark1} : ${çark2} : ${çark3} **«**
**-----------------**
        `).then(message.channel.send(`Eyvah Kaybettin!`))
      db.subtract(`bakiyecdare-${message.author.id}`, bahis)  
    }

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['slots','kumar'],
  permLevel: 0
};

exports.help = {
  name: 'çark', 
  description: 'Çark oynarsınız',
  usage: 'çark'
};

 