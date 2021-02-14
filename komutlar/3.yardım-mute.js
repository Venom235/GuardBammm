const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Mute Sistemi__ (YAKINDA)`, `
             <a:809724433731682326:809724433731682326> **__MUTE SİSTEMİ NE İŞE YARAR?__** \n Mute sistemi sunucuda ayarladınız rolle o kişiye mute atar **Chata Yazması Engellenir.**
             
             <a:809728936706834443:809728936706834443> **Mute Sistemi** \n Mute sistemi **Troll, Spam, Flood** yapanlarda üstünde kullanılması daha tercih edilir.
                          
             <a:809723766962913280:809723766962913280> **Peki Nasıl Ayarlayacağım?**\n \`YAKINDA\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Kapatacağım?**\n \`YAKINDA\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['mute-incele'],
	permLevel : 0
}
exports.help = {
	name : 'mute-ayarları-incele',
	description : 'Komut kategorilerini atar',
	usage : 'mute-ayarları-incele'
}
