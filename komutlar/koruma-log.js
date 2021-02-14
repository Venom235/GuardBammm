const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`<a:809728165517459466:809728165517459466> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`nordxmodlog${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:809728165517459466:809728165517459466> Koruma-log Kanalı Zaten ayarlı değil.`).setColor("fff000"));
    
    db.delete(`nordxmodlog${message.guild.id}`)
   message.channel.send(new Discord.MessageEmbed().setDescription(`<a:809728936706834443:809728936706834443> Koruma-log Kanalı başarıyla sıfırlandı.`).setColor("fff000"));

    return
  }
  
if (!logk) return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:809728165517459466:809728165517459466> Bir Koruma-log kanalı belirt \`/koruma-log #KANAL\``).setColor("fff000"));
 

db.set(`nordxmodlog${message.guild.id}`, logk.id)

message.channel.send(new Discord.MessageEmbed().setDescription(`<a:809728936706834443:809728936706834443> Koruma-log kanalı başarıyla ${logk} olarak ayarlandı`).setColor("fff000"));

console.log(`Koruma-log komutu ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['koruma-log','koruma'],
    permLevel: 0 ,
  kategori:'korumalogg'
};

exports.help = {
    name: 'koruma-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'koruma-log <#kanal>'
};