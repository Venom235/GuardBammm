module.exports = {
     help: {
       name: 'unjail',
       description: 'Kullanıcıyı cezalıdan çıkarır ve rollerini geri verir.',
       usage: 'jail <değişkenler>',
       category: "mod"
     },
   conf: {
     enabled: true,
     aliases: []
   },
     run: async(client, message, args, config, p) => {
const {MessageEmbed} = require('discord.js'),
db = require('quick.db')
let rol = message.mentions.roles.first()
let user = message.mentions.members.first()
if(!message.guild.roles.cache.get(db.get(`jailyetkili_${message.guild.id}`))) return message.reply(`<a:809728165517459466:809728165517459466> Yetkili rolü ayarlanmamış!`)
if(!message.member.roles.cache.has(db.get(`jailyetkili_${message.guild.id}`))) return message.reply(`<a:809728165517459466:809728165517459466> Sadece **${message.guild.roles.cache.get(db.get(`jailyetkili_${message.guild.id}`)).name}** rolündeki kullanıcılar bu komutu kullanabilir.`)
if(!user) return message.reply(`<a:809728165517459466:809728165517459466> Jailden çıkarılacak kullanıcıyı etiketlemelisin.`)
if(user) {
if(!message.guild.roles.cache.get(db.get(`jailrol_${message.guild.id}`)))return message.reply(`<a:809728165517459466:809728165517459466> Jail rolü ayarlanmamış.`)
if(!user.roles.cache.get(db.get(`jailrol_${message.guild.id}`))) return message.reply(`<a:809728165517459466:809728165517459466> Bu üye zaten jailde değil ve jail rolü bulunmuyor`)
user.roles.remove(db.get(`jailrol_${message.guild.id}`)), message.channel.send(`
<a:809728936706834443:809728936706834443> ${user} kullanıcısı jailden kurtuldu çıkaran yetkili ${message.author}.
`)
}   
}
    
}