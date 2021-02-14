const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`<a:809728165517459466:809728165517459466> Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send(`<a:809728936706834443:809728936706834443> Küfür Engel Sistemi Başarılı Bir Şekilde Akif Edildi.`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send(`<a:809728936706834443:809728936706834443> Küfür Engel Başarılı Bir Şekilde Kapatıldı.`)
return
}
  message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/küfür-engel aç & kapat\`')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfürleri engeller',
 usage: 'küfürengel'
};