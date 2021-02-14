const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Kick Sistemi__`, `
             <a:809724433731682326:809724433731682326> **__KİCK SİSTEMİ NE İŞE YARAR?__** \n Botta bulunan kick sistemini ayarladıktan sonra ayarladınız yetkili sunucudan istediği kişileri ata bilecek.
             
             <a:809728936706834443:809728936706834443> **Kick Sistemi** \n Kick sistemi loglu kick atar bileceksiniz **__[DM LOG]__** bulunmamaktadır.
                          
             <a:809723766962913280:809723766962913280> **Peki Nasıl Ayarlayacağım?**\n \`/kick-yetkili @ROL\` \n \`/kicklog-ayarla #KANAL\` \n \`/kick @ETİKET SEBEB\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Kapatacağım?**\n \`/kicksistem-kapat\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['kick-incele'],
	permLevel : 0
}
exports.help = {
	name : 'kick-ayarları-incele',
	description : 'Komut kategorilerini atar',
	usage : 'kick-ayarları-incele'
}
