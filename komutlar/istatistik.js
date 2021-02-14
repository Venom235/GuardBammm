const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("#fff000")
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Ping__**",`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n Bot Gecikmesi: ${client.ws.ping}ms`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Kullanıcı Sayısı__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Sunucu Sayısı__**", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Aktiflik__**", `${payidarzaman}`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Node.JS Versiyon__**", `${process.version}`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Ram Kullanımı__**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Discord.JS__**", `${Discord.version}`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__Konum__**", `Turkey :flag_tr:`, true)
    .addField("<a:guardbam_7:810105168560914432> **__Bot Sahibi__**", `<@589770402214182922>`, true)
    .addField("<a:guardbam_7:810105168560914432> **__Geliştirici__**", `<@589770402214182922>`, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__İşletim Sistemi__**", ` \`Windows 10 | 64 Bit\` `, true)
    .addField("<a:guardbam_ayarlar:809723766962913280> **__CPU__**",` \`\`\`Intel(R) Xeon(R) CPU @ 2.30GHz\`\`\` `)

  .setAuthor(client.user.username, client.user.avatarURL())
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: "i",
  description: "i",
  usage: "i"
};
