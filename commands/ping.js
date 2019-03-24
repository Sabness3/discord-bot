const Discord = require('discord.js')
exports.run = (client, Discord, message, prefix, command, args) => {
    let pEmbed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setColor('GRAY')
    .setTitle('🔔 Pong!')
    .addField('📶 Latency', (new Date().getTime() - message.createdTimestamp) + ' ms', true)
    .addField("💻 API", `${client.ping} ms`);
     message.channel.send(pEmbed);
  
  }
  

exports.help = {
    name: 'ping',
    category: 'INFO'
}