const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:809728165517459466:809728165517459466> Bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  if(!db.fetch(`judgekanal_${message.guild.id}`)) return message.channel.send('<a:809728165517459466:809728165517459466> Oto-Rol sistemi zaten kapalı.')
   

   message.reply('<a:809728936706834443:809728936706834443> Oto-Rol sistemi başarıyla kapatıldı.')
db.delete(`judgekanal_${message.guild.id}`)   
  db.delete(`judgerol_${message.guild.id}`)
db.delete(`judgemesaj_${message.guild.id}`)

}; 

exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'otorol-kapat', 
description: 'taslak',
 usage: 'otorol-kapat' 
};
