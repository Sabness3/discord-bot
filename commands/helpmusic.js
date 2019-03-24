const Discord = require("discord.js");

exports.run = async (client, Discord, message, prefix, command, args) => {
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Music Commands | Prefix ( **!** )')
      .setDescription('')
      .addField(':notes:  Play', '``!play < Melodie >``')
      .addField(':pause_button:  Pause', '``!pause``')
      .addField(':play_pause:  Skip', '``!skip``')
      .addField(':arrows_clockwise:  Volume', '``!volume < 1 - 100 >``')
      .addField(':record_button:  Now Playing', '``!np``')
      .addField(':twisted_rightwards_arrows:   Queue', '``!queue``')
      .setColor('GRAY')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
}