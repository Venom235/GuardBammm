const { MessageEmbed } = require('discord.js')
const data = require('quick.db')

   exports.run = async(client, message, args) => {
    const emirhan = await data.fetch(`snipe.id.${message.guild.id}`)
    if(!emirhan) {
    const embeds = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`<a:809728165517459466:809728165517459466> Mesaj bulunamadı!`)
.setColor(`#fff000`)
    message.channel.send(embeds);
          } else {
  let kullanıcı = client.users.cache.get(emirhan);
  const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new MessageEmbed()
  .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
  .setDescription(`Silinen mesaj: ` + silinen)
.setColor(`#fff000`)
  message.channel.send(embed) }
}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}
exports.help = {
  name: "snipe",
  description: 'Son silinen mesajı yakalar.',
  usage: 'snipe'
} 