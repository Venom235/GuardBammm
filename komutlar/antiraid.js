const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
 if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("<a:809728165517459466:809728165517459466> Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.")
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("<a:809728165517459466:809728165517459466> Anti-raid sistemi zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<a:809728936706834443:809728936706834443> Anti-raid sistemi başarıyla açıldı.");
  }
 
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "<a:809728936706834443:809728936706834443> Anti-raid açılmamış. Açmak için \`/anti-raid aç\`"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("<a:809728936706834443:809728936706834443> Anti-raid sistemi başarıyla kapatıldı.");
  }
  if (!args[0])
    return message.reply(
      "<a:809728165517459466:809728165517459466> Anti-raid sistemini açmak için bu komutu girmelisiniz. \`/anti-raid aç/kapat\`"
    );
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['antiraid'],
  permLevel: 0
};
exports.help = {
  name: "anti-raid"
};