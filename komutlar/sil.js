const Discord = require('discord.js');
const talkedRecently = new Set();
exports.run = function(client, message,  args) {
let codeworkprefix = args.slice(0).join('/');
if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`<a:809728165517459466:809728165517459466> Bu özelliği kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısınız.`);
       if (talkedRecently.has(message.author.id)) {
           return message.channel.send(`<a:809728165517459466:809728165517459466> ${message.member}` + ", Bu Özelliği 120 Saniyede Bir Kullanabilirsin!");
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 120000);
    }
if(!args[0]) return message.channel.send(`<a:809728165517459466:809728165517459466> ${message.member}` + ", Bu komutu kullana bilmek için. \`/sil [1/100]\`");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${message.member}, **Başarıyla** \`${args[0]}\` **Adet Mesaj Çöp Kutusunu Fırlatıdı.** <a:guardbam_supurge:810086026323820565>`).then(nordx => nordx.delete({timeout: 5000}))
  
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};