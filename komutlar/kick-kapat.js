const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('<a:809728165517459466:809728165517459466> Bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`kicklog_${message.guild.id}`)) return message.channel.send('<a:809728165517459466:809728165517459466> Kick sistemi saten kapalı.')
   

   message.reply('<a:809728936706834443:809728936706834443> Kicklog Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`kicklog_${message.guild.id}`)
db.delete(`kickyetkilisi_${message.guild.id}`) 


}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'kicksistem-kapat', 
description: 'kick sistemini kapatır',
 usage: 'kick-kapat' 
};
