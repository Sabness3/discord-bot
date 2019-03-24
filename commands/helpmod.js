const Discord = require("discord.js");

exports.run = async (client, Discord, message, prefix, command, args) => {
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Commands + MOD | Prefix ( **!** )')
      .setDescription('')
      .addField(':scream:  TempMute', '``!tempmute < User + Reason >``')
      .addField(':no_entry_sign:  Ban', '``!ban < User + Reason >``')
      .addField(':x:  Kick', '``!kick < User + Reason >``')
      .addField(':newspaper:  Invite', '``!invite``')
      .addField(':computer:  Ping', '``!ping``')
      .addField(':clipboard:  ServerInfo', '``!serverinfo``')
      .addField(':robot:  BotInfo', '``!botinfo``')
      .addField(':man:  UserInfo', '``!userinfo``')
      .addField(':notes:  Help Music', '``!helpmusic``')
      .setColor('GRAY')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
}