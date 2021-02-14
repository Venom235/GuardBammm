const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let banlogkanal = message.mentions.channels.first()
if (!banlogkanal) return message.channel.send('<a:809728165517459466:809728165517459466> Bu Komutu Kullana Bilmek İçin Ban Log Ayarlamalısın.')
   
  db.set(`banlog_${message.guild.id}`, banlogkanal.id)

 
  message.channel.send(`<a:809728936706834443:809728936706834443> Banlog Kanalı Başarıyla Ayarlandı; **${banlogkanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"banlogg"
};

exports.help = {
 name: 'banlog-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'banlog-kanal <#kanal>'
};
