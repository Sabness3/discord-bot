const Discord = require('discord.js')
exports.run = (client, Discord, message, prefix, command, args) => {
    let pEmbed = new Discord.RichEmbed()
    .setDescription('** Discord Invite Link : https://discord.gg/NdAFnY4** ')
    .setColor(message.guild.me.displayHexColor)
    .setColor('GRAY')
    message.channel.send(pEmbed);
}
module.exports.help = {
    name:"invite"
}