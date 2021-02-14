const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Diğer Koruma Sistemi__ (YAKINDA)`, `
             <a:809724433731682326:809724433731682326> **__DİĞER KORUMA SİSTEMİ__** \n Sunucunuzda çok etkin kullanılmayan ayarlar için etkin koruma sağlar.
             
             <a:809728936706834443:809728936706834443> **Webhook Koruma** \n Sunucunuzda izinsiz oluşturulan webhookları siler.
             
             <a:809728936706834443:809728936706834443> **Url Koruma** \n Sunucunuzda izinsiz url değiştirilmesini engeller.
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Ayarlayacağım?**\n \`/webhook-koruma aç\` \n \`/url-koruma aç\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Kapatacağım?**\n \`/webhook-koruma kapat\` \n \`/url-koruma kapat\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['diğer-incele'],
	permLevel : 0
}
exports.help = {
	name : 'diger-koruma-incele',
	description : 'Komut kategorilerini atar',
	usage : 'diger-koruma-incele'
}
