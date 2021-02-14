const codework1 = require('discord.js')

exports.run = function(client, message, args) {
  const codework = new codework1.MessageEmbed() 
                            
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle("<a:guardbam_donec:809915975947649066> GuardBam+ Bot Davet Linki") 
.setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot)\n <a:guardbam_sag:809915976203108362> [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) \n <a:guardbam_sag:809915976203108362> [Oy Ver]()")
.setColor("#fff000")

return message.channel.send(codework)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botuekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};