const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("<a:809728165517459466:809728165517459466> Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.")
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "<a:809728165517459466:809728165517459466> Anti-raid açılmamış. Açmak için \`/anti-raid aç\`"
    );
  }
  if (!args[1]) return message.reply("<a:809728165517459466:809728165517459466> Lütfen bir bot ID si girin.");
 
  if (isNaN(args[1])) {
    return message.reply("<a:809728165517459466:809728165517459466> Sadece ID Girmelisin !");
  }
  if (args[0] == "ver") {
    client.users.cache.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + "ID li bota izin verildi.");
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " ID li botun izni kaldırıldı.");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "bot-izni"
};