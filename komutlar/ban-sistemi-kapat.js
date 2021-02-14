const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('<a:809728165517459466:809728165517459466> Bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`banlog_${message.guild.id}`)) return message.channel.send('<a:809728165517459466:809728165517459466> Ban sistemi zaten kapalı.')
   

   message.reply('<a:809728936706834443:809728936706834443> Ban Sistemi Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`banlog_${message.guild.id}`)
db.delete(`banyetkilisi_${message.guild.id}`) 

}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'bansistem-kapat', 
description: 'Ban sistemini kapatır',
 usage: 'ban-kapat' 
};
