const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:809728165517459466:809728165517459466> Bu komutu kulana bilmek için yetkiniz yok.");

    let kullanici = args[0];

    if (!kullanici) return message.channel.send("<a:809728165517459466:809728165517459466> Bir kullanıcı ID girmen gerek")

    message.guild.fetchBans()

        .then(bans => {

            if (!bans.has(kullanici)) {

                return message.channel.send(`<a:809728165517459466:809728165517459466> Bu kullanıcı banlanmamış.`)

            }

        })

    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

        message.channel.send(`<a:809728936706834443:809728936706834443> ${user.tag} adlı kullanıcının ban nedeni: **${reason}**`)



    })

}

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['bansor'],

    permLevel: 0

};



exports.help = {

    name: 'bansorgulama',

    description: 'Ban sorgulama yaparsınız.',

    usage: 'bansorgulama'

}
