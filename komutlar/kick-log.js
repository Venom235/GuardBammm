const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kicklogkanal = message.mentions.channels.first()
if (!kicklogkanal) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için bir tane kanal etiketlemelisin.')
   
  db.set(`kicklog_${message.guild.id}`, kicklogkanal.id)

 
  message.channel.send(`<a:809728936706834443:809728936706834443> KickLog Kanalı Başarıyla Ayarlandı; **${kicklogkanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kicklog-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kicklog-kanal <#kanal>'
};
