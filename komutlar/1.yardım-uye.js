const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Üye Koruma Sistemi__ (YAKINDA)`, `
             <a:809724433731682326:809724433731682326> **__ÜYE KORUMA SİSTEMİ__** \n Üye koruma sistemi sunucudaki ban ve kick miktarlarına limit getirmektedir.
             
             <a:809728936706834443:809728936706834443> **Ban Limit** \n Sunucunuzdan 10 dakikada belirlediğiniz miktardan fazla üye banlıyanların **ÜYELERİ YASAKLA** yetkisi i̇çeren rolleri alıyor.
             
             <a:809728936706834443:809728936706834443> **Kick Limit** \n Sunucunuzdan 10 dakikada belirlediğiniz miktardan fazla üye atanların **ÜYELERİ AT** yetkisi i̇çeren rolleri alıyor.
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Ayarlayacağım?**\n \`/kicklimit-koruma <miktar>\` \n \`/banlimit-koruma <miktar>\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Kapatacağım?**\n \`/kicklimit-koruma kapat\` \n \`/banlimit-koruma kapat\` 
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['uye-incele'],
	permLevel : 0
}
exports.help = {
	name : 'uye-koruma-incele',
	description : 'Komut kategorilerini atar',
	usage : 'uye-koruma-incele'
}
