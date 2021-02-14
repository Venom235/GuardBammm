const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Gel & Git Sistemi__`, `
             <a:809724433731682326:809724433731682326> **__GEL & GİT SİSTEMİ NE İŞE YARAR?__** \n Seste bulunan birisini yanına çeker yada yanına gider.
             
             <a:809728936706834443:809728936706834443> **Gel & Git Sistemi** \n Gel & Git sistemi emojili **git & çek** komutludur.
                          
             <a:809723766962913280:809723766962913280> **Gel Komutununu Nasıl Kullanacağım?**\n \`/çek @ETİKET\`
             
             <a:809723766962913280:809723766962913280> **Git Komutunu Nasıl Kullanacağım?**\n \`/git @ETİKET\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['gelgit-incele'],
	permLevel : 0
}
exports.help = {
	name : 'gelgit-ayarları-incele',
	description : 'Komut kategorilerini atar',
	usage : 'gelgit-ayarları-incele'
}
