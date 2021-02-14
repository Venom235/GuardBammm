const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Yardım Menüsü__`, `
             <a:guardbam_7:810105168560914432> **Koruma Menüsü** sistemini incelemek için \`/koruma-menüsü\`
             <a:guardbam_7:810105168560914432> **Küçük Koruma** sistemini incelemek için \`/küçük-koruma\`
             <a:guardbam_7:810105168560914432> **Moderasyon** sistemini incelemek için \`/moderasyon\`

             `)
           .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
       .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")

        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['YARDIM'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : 'yardım'
}
