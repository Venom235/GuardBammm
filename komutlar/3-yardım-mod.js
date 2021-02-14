const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Koruma Menüsü__`, `
             <a:809725355984027659:809725355984027659> **Ban** sistemini incelemek için \`/ban-ayarları-incele\`
             <a:809725355984027659:809725355984027659> **Kick** sistemini incelemek için \`/kick-ayarları-incele\`
             <a:809725355984027659:809725355984027659> **Jail** sistemini incelemek için \`/jail-ayarları-incele\` 
             <a:809725355984027659:809725355984027659> **Mute** sistemini incelemek için \`/mute-ayarları-incele\` **(YAKINDA)**
             <a:809725355984027659:809725355984027659> **Oto-Rol** sistemini incelemek için \`/otorol-ayarları-incele\`
             <a:809725355984027659:809725355984027659> **Gel & Git** sistemini incelemek için \`/gelgit-ayarları-incele\`
             <a:809725355984027659:809725355984027659> **Rol-Al & Rol-Ver** sistemini incelemek için \`/rolveral-ayarları-incele\`
             <a:809725355984027659:809725355984027659> **Chat** sistemini incelemek için \`/chat-ayarları-incele\`
             
             `)
           .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
       
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['moderasyon-menüsü'],
	permLevel : 0
}
exports.help = {
	name : 'moderasyon',
	description : 'Komut kategorilerini atar',
	usage : 'moderasyon'
}
