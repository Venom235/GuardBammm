const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`<a:809728165517459466:809728165517459466> Bu özelliği kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısınız.`);
  let every = message.guild.roles.cache.find(r => r.name === '@everyone')
message.channel.createOverwrite(every, {
  'SEND_MESSAGES': null,
 
})
 

   message.channel.send('<a:809728936706834443:809728936706834443> Sohbet kanalı ``Yazılabilir`` durumuna getirildi.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç','a','saç'],
kategori: 'sohbet',
  permLevel: 0
};

exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};