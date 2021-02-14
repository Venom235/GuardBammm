const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:809728165517459466:809728165517459466> Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    if (!args[0]) {
        return message.channel.send(`<a:809728165517459466:809728165517459466> Bu komutu kullana bilmek için. \`/forceban (KULLANICI ID)\``)
   }
   var sebeb = args.slice(1).join(" ");
   var seyfooo = args[0]
   var now = new Date()
   if (!sebeb) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.channel.send(`<a:809728165517459466:809728165517459466> Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.members.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<a:809728936706834443:809728936706834443> <@!${user.id}> adlı kullanıcı başarıyla banlandı.`);
                   })
                   .catch(error => {
                       message.channel.send(`<a:809728165517459466:809728165517459466> Bir Hata Oluştu`);
                       console.error('<a:809728165517459466:809728165517459466>', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.channel.send(`<a:809728165517459466:809728165517459466> Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<a:809728936706834443:809728936706834443> <@!${user.id}> sunucudan başarıyla yasaklandı.`);
                   })
                   .catch(error => {
                       message.channel.send(`<a:809728165517459466:809728165517459466> Bir Hata Oluştu`);
                       console.error('<a:809728165517459466:809728165517459466> Hata:', error);
                   });
           });
   }
 
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['force-ban'],
   permLevel: 0
 
};
 
exports.help = {
   name: 'forceban',
   description: 'Oylama yapmanızı sağlar.',
   usage: 'forceban <id>'
};