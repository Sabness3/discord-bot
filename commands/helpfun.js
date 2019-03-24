const Discord = require("discord.js");

exports.run = async (client, Discord, message, prefix, command, args) => {
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Fun Commands | Prefix ( **!** )')
      .setDescription('')
      .addField(':fire:  Meme', '``!meme``')
      .addField(':gay_pride_flag:  How Gay', '``!gay``')
      .addField(':open_hands:  Hug', '``!hug < Mention User >``')
      .setColor('GRAY')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
}