module.exports = {
     help: {
       name: 'jail',
       description: 'Cezalı Sistemini ayarla',
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
if(args[0] === "ayarla" || user || args[0] === "yetkili") {
if(args[0] === "ayarla") {
if(message.author.id !== message.guild.owner.id) return message.reply("<a:809728165517459466:809728165517459466> Jail ayarlamalarını sadece sunucu sahibi yapabilir")
if(!rol) return message.reply("<a:809728165517459466:809728165517459466 Lütfen Cezalı üye rolünü etiketleyin!" + `\ \`/jail-ayarla #KANAL @ROL\``)
db.set(`jailrol_${message.guild.id}`, rol.id),message.reply(`<a:guardbam_evet:809728936706834443>  Jail Sistemi Ayarlandı: **${rol.name}**`)
}
if(args[0] === "yetkili") {
if(message.author.id !== message.guild.owner.id) return message.reply("<a:809728165517459466:809728165517459466 Jail ayarlamalarını sadece sunucu sahibi yapabilir")
let yetkilirol = message.mentions.roles.first()
if(!yetkilirol) return message.reply('<a:809728165517459466:809728165517459466> Yetkili rolünü etiketlemeyi unuttun!')
db.set(`jailyetkili_${message.guild.id}`, yetkilirol.id),message.reply(`<a:809728936706834443:809728936706834443> Jail yetkili rolü ayarlandı: **${yetkilirol.name}**`)
}  
if(user) {

if(!message.guild.roles.cache.has(db.get(`jailyetkili_${message.guild.id}`))) return message.reply(`<a:809728165517459466:809728165517459466> Jail yetkili rolü ayarlanmamış!`)
if(!message.member.roles.cache.has(db.get(`jailyetkili_${message.guild.id}`))) return message.reply(`sadece **${message.guild.roles.cache.get(db.get(`<a:809728936706834443:809728936706834443> jailyetkili_${message.guild.id}`)).name}** rolündeki kullanıcılar bu komutu kullanabilir.`)
if(!message.guild.roles.cache.get(db.get(`jailrol_${message.guild.id}`))) return message.channel.send(`
<a:809728165517459466:809728165517459466> Lütfen jail rolünü ayarlayın: \`/jail ayarla @ROL\`
`);
if(user.user.id === message.author.id) return message.reply('neden?')
if(user.roles.cache.has(db.get(`jailyetkili_${message.guild.id}`))) return message.reply('<a:809728165517459466:809728165517459466> Yetkilileri jaile atman için iznin yok.')
if(user.roles.cache.has(db.get(`jailrol_${message.guild.id}`))) return message.reply('<a:809728165517459466:809728165517459466> Bu kullanıcı zaten jailde ve jail rolü bulunuyor!')
user.roles.remove(user.roles.cache.filter(r => r.id !== db.get(`jailrol_${message.guild.id}`))),user.roles.add(message.guild.roles.cache.get(db.get(`jailrol_${message.guild.id}`))),
message.channel.send(`<a:809728936706834443:809728936706834443> ${user} kullanıcısı ${message.author} tarafından Cezalıya atıldı, tüm rolleri alındı ve **${message.guild.roles.cache.get(db.get(`jailrol_${message.guild.id}`)).name}** rolü verildi.`)
}  
} else return message.channel.send(new MessageEmbed().setColor("#fff000").setTitle("GuardBam+ | Jail Sistemi")
.setDescription(`
\`/jail ayarla @ROL\` - Jail rolünü  ayarlar.
\`/jail yetkili @ROL\` - Jail yetkilisi rolünü ayarlar.
\`/jail @ETİKET\` - Etiketlenen kullanıcıyı jaile (cezalıya) atar.
\`/unjail @ETİKET\` - Etiketlenen kullanıcıyı jailden çıkarır.
`))    
}
    
}