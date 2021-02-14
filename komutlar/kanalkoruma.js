const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/kanal-koruma aç & kapat\``)
  }
  if (args[0] === 'aç') {
    db.set(`kanalk_${message.guild.id}`, "Aktif")
     message.channel.send(`<a:809728936706834443:809728936706834443> Kanal Koruma Sistemi Başarıyla Açıldı!`)
  }
   if (args[0] === 'kapat') {
    db.delete(`kanalk_${message.guild.id}`)
    message.channel.send(`<a:809728936706834443:809728936706834443> Kanal Koruma Sistemi Başarıyla Kapatıldı!`)
  }
};
exports.conf = {
  aliases: ['kanalkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
