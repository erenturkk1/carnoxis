const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../cryptoconfig.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"Yeni Sistemler",
"Çekiliş Sistemi Bakımda",
"a?yardım",
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.youtube.com/watch?v=Lyj2BS3zIho' })
}, 5000);
    console.log(`Carnoxis başarıyla giriş yaptı.`);
}
