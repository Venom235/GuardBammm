const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Küfür Engel Sistemi__`, `
             <a:809724433731682326:809724433731682326> **__Küfür Engel Sistemi__** \n Sunucuda herhangi biri **[Küfür/Argo vb.]** kelimelerde bulunursa bot engelliyor.
                                       
             <a:809728936706834443:809728936706834443> **Küfür Engel Kime İşlemez** \n Sunucuda **YÖNETİCİ** yetkisine sahip olanlar **[Küfür/Argo vb.]** kelimelerde bulunursa herhangi birşey yapmıyor.
                                       
             <a:809723766962913280:809723766962913280> **Peki Nasıl Ayarlayacağım?**\n \`/küfür-engel aç\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Kapatacağım?**\n \`/küfür-engel kapat\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['küfür-incele'],
	permLevel : 0
}
exports.help = {
	name : 'küfür-engel-sistemi',
	description : 'Komut kategorilerini atar',
	usage : 'küfür-engel-sistemi'
}
