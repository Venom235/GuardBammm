const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => {

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('<a:809728165517459466:809728165517459466> Bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

let kanal = message.mentions.channels.first()
let rol = message.mentions.roles.first()
if(!rol) return message.reply('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/otorol-ayarla @ROL\`')
if(!kanal) return message.reply('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/otorol-ayarla @ROL #KANAL\`')

   
message.reply(`Otorol aktif edildi\n '${rol}' Olarak Güncelledim!\n Oto-Rol kanal '${kanal}' olarak güncelledim.`)
   
db.set(`judgekanal_${message.guild.id}`, kanal.id)   
  db.set(`judgerol_${message.guild.id}` , rol.id)
 };

exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: [], 
permLevel: 0
}

exports.help = {
 name: 'otorol-ayarla', 
description: 'taslak',
 usage: 'oto-rol-ayarla' 
};
