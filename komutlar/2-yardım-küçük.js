const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Küçük Koruma Sistemi__`, `
             <a:809724433731682326:809724433731682326> **Küfür Engel** sistemini incelemek için \`/küfür-engel-sistemi\`
             <a:809724433731682326:809724433731682326> **Reklam Engel** sistemini incelemek için \`/reklam-engel-incele\`
             <a:809724433731682326:809724433731682326> **Capslock Engel** sistemini incelemek için \`/capslock-engel-incele\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['küçük'],
	permLevel : 0
}
exports.help = {
	name : 'küçük-koruma',
	description : 'Komut kategorilerini atar',
	usage : 'küçük-koruma'
}
