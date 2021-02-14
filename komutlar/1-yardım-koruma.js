const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
              .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Koruma Menüsü__`, `
             <a:809723766962913280:809723766962913280> **Rol koruma** sistemini incelemek için \`/rol-koruma-incele\`
             <a:809723766962913280:809723766962913280> **Kanal koruma** sistemini incelemek için \`/kanal-koruma-incele\`
             <a:809723766962913280:809723766962913280> **Bot koruma** sistemini incelemek için \`/antiraid-incele\`
             <a:809723766962913280:809723766962913280> **Üye koruma** sistemini incelemek için \`/uye-koruma-incele\` **YAKINDA**
             <a:809723766962913280:809723766962913280> **Spam koruma** sistemini incelemek için \`/spam-koruma-incele\` **YAKINDA**
             <a:809723766962913280:809723766962913280> **Diğer koruma** sistemini incelemek için \`/diger-koruma-incele\` **YAKINDA**
             <a:809723766962913280:809723766962913280> **Emoji koruma** sistemini incelemek için \`/emoji-koruma-incele\`
             <a:809723766962913280:809723766962913280> **Ever&Here koruma** sistemini incelemek için \`/everengel-incele\`
             
             `)
           .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
       
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['koruma'],
	permLevel : 0
}
exports.help = {
	name : 'koruma-menüsü',
	description : 'Komut kategorilerini atar',
	usage : 'koruma-menüsü'
}
