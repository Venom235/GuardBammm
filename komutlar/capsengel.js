const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`<a:809728165517459466:809728165517459466> Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if(args[0] === 'aç') {
    db.set(`capslock_${message.guild.id}`, true)
    message.channel.send(`<a:809728936706834443:809728936706834443> Capslock Engel Sistemi Başarıyla Aktif Edildi!`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`capslock_${message.guild.id}`)
message.channel.send(`<a:809728936706834443:809728936706834443> Capslock Engel Sistemi Başarıyla Kapatıldı!`)
return
}
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslockengel','capslock','capslock-engel','cl'],
  permLevel: 0
};
exports.help = {
  name: 'caps-engel',
  description: 'Capslock kullanımını engeller.',
  usage: 'caps-engel'
};