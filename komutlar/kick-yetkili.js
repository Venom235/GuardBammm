const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let kickyetkilirol = message.mentions.roles.first()
  if (!kickyetkilirol) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için yetkili rolü ayarlamalısın.')
   
  db.set(`kickyetkilisi_${message.guild.id}`, kickyetkilirol.id)
  message.channel.send(`<a:809728936706834443:809728936706834443> Yetkili Rolü Başarıyla Ayarlandı; **${kickyetkilirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kick-yetkili',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kick-yetkili-ayarla <@rol>'
};
