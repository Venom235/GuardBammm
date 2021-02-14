const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`<a:809728165517459466:809728165517459466> Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
  if (!args[0]) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`ever-engel aç & kapat\`')
  
  if (args[0] == 'aç') {
    db.set(`hereengel_${message.guild.id}`, 'acik')
      message.channel.send('<a:809728936706834443:809728936706834443> Everyone Engel sistemi başarıyla açıldı!')
   
  }
  if (args[0] == 'kapat') {
    db.delete(`hereengel_${message.guild.id}`, 'kapali')
      message.channel.send('<a:809728936706834443:809728936706834443> Everyone Engel sistemi başarıyla kapatıldı!')
  
  } 


}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['everengel','everyoneengel','hereengel'],
  permLevel: 0
};

exports.help = {
  name: 'ever-engel',
  description: 'everyone ve here yi engeller.',
  usage: 'everengelle'
};