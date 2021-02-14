const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setDescription("<a:guardbam_sag:809915976203108362> [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=809912152877039618&permissions=8&scope=bot) | [Destek Sunucusu](https://discord.gg/ntzvZkHgvG) | [Oy Ver]()")
             .setAuthor(client.user.username, client.user.avatarURL())
             .addField(`__GuardBam+ Jail Sistemi__`, `
             <a:809724433731682326:809724433731682326> **__JAİL SİSTEMİ NE İŞE YARAR?__** \n Jail sistemi **SUNUCU** sahibi ayarlaya bilir ve sistemi ayarladıktan sonra karantina sistemi cezalıya atar.
             
             <a:809728936706834443:809728936706834443> **Jail Sistemi** \n Jail sistemi ayarladığınız yetkili rolünde olan yetkililer istediği bir kişiyi karantinaya ata bilecek.
                          
             <a:809723766962913280:809723766962913280> **Peki Nasıl Ayarlayacağım?**\n \`/jail ayarla @ROL\` \n \`/jail yetkili @ROL\` \n \`/jail @ETİKET\` \n \`/unjail @ETİKET\`
             
             <a:809723766962913280:809723766962913280> **Peki Nasıl Kapatacağım?**\n \`Jail Sistemi Kapanmıyor! Cezalı Rolü Silerek Kapata Bilirsin.\`
             
             <a:809723766962913280:809723766962913280> **Log Kanalı Nasıl Ayarlanır?** Log kanalı ayarlamak için \`/koruma-log #KANAL\`
             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['jail-incele'],
	permLevel : 0
}
exports.help = {
	name : 'jail-ayarları-incele',
	description : 'Komut kategorilerini atar',
	usage : 'jail-ayarları-incele'
}
