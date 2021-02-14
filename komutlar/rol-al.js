const wenzy = require('discord.js');

exports.run = async (client, message, args) => {
    const ayarlar = require('../ayarlar.json')
            let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(new wenzy.MessageEmbed().setDescription('<a:809728165517459466:809728165517459466> Bu komudu kullanmak için \`Rolleri Yönet\` yetkisine sahip olmalısın.').setColor(10038562));
var member = message.mentions.members.first();
var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name == args.slice(1).join(' '));
if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komudu kullanmak için \`Rolleri Yönet\` yetkisine sahip olmalısın');
if (!member) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/rol-al @ETİKET @ROL\`');
if (!role) return message.channel.send('<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/rol-al @ETİKET @ROL\`');
    if (!member.roles.cache.has(role.id)) return message.channel.send(new wenzy.MessageEmbed().setDescription('<a:809728165517459466:809728165517459466> Etiketlediğin kullanıcı o role sahip değil.').setColor('#fff000'));
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
  return message.channel.send(`<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/rol-al @ETİKET @ROL\``);
  }
  try{
await (member.roles.remove(role.id))
 message.channel.send(new wenzy.MessageEmbed().setDescription(`<a:809728936706834443:809728936706834443> ${member} isimli üyenin \`${role.name}\` isimli yetkisi başarıyla alındı!`)  .setColor('#fff000'));
    
  } catch (e) {
    console.log(e);
    message.channel.send('Hata oluştu!');
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolal'],
  permLevel: 0
};

exports.help = {
  name: 'rol-al',
  description: 'Belirttiğiniz kullanıcıdan belirttiğiniz rolü alırım işte uzatma.',
  usage: 'rol-al'
};
