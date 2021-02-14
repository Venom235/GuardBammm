const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Rol-Al & Rol-Ver Sistemi__`, `
             <a:809724433731682326:809724433731682326> **__ROL-AL & ROL-VER SİSTEMİ NE İŞE YARAR?__** \n **Rol-Al & Rol-Ver** sistemi komutla istediğin kişiye rol verip alırsın sağ tık kullanmadan.
             
             <a:809728936706834443:809728936706834443> **Rol-Al & Rol-Ver Sistemi** \n Rol-Al & Rol-Ver sisteminde **Log Kanalı** bulunmamamktadır.
                          
             <a:809723766962913280:809723766962913280> **Peki Nasıl Rol Vereceğim?**\n \`/rol-ver @ETİKET @ROL\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Rol Alacağım?**\n \`/rol-al @ETİKET @ROL\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['rolveral-incele'],
	permLevel : 0
}
exports.help = {
	name : 'rolveral-ayarları-incele',
	description : 'Komut kategorilerini atar',
	usage : 'rolveral-ayarları-incele'
}
