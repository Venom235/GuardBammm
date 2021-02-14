const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Rol Koruma Sistemi__`, `
             <a:809724433731682326:809724433731682326> **__ROL KORUMA SİSTEMİ__** \n Şuan botumuzda sunucuda rol silme ve rol açılma engellenmektedir. İlerde güncellemeler gelecektir.
             
             <a:809728936706834443:809728936706834443> **Silinen Rol Koruma** \n Sunucunuzda silinen rolleri geri oluşturuyor ve rolü silenden **__ROLLERİ YÖNET__** yetkisi i̇çeren rolleri alıyor.
             
             <a:809728936706834443:809728936706834443> **Açılan Rol Koruma** \n Sunucunuzda açılan rolleri geri oluşturuyor ve rolü açandan **__ROLLERİ YÖNET__** yetkisi i̇çeren rolleri alıyor.
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Ayarlayacağım?**\n \`/rol-koruma aç\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Kapatacağım?**\n \`/rol-koruma kapat\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['rol-incele'],
	permLevel : 0
}
exports.help = {
	name : 'rol-koruma-incele',
	description : 'Komut kategorilerini atar',
	usage : 'rol-koruma-incele'
}
