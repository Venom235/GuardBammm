const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let banyetkilirol = message.mentions.roles.first()
  if (!banyetkilirol) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için yetkili belirlemelisin.')
   
  db.set(`banyetkilisi_${message.guild.id}`, banyetkilirol.id)
  message.channel.send(`<a:809728936706834443:809728936706834443> Yetkili Rolü Başarıyla Ayarlandı; **${banyetkilirol}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'banyetkilisi-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'banyetkili-rol <@rol>'
};
