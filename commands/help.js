const Discord = require("discord.js");

exports.run = async (client, Discord, message, prefix, command, args) => {
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Commands | Prefix ( **!** )')
      .setDescription('')
      .addField(':newspaper:  Invite', '``!invite``')
      .addField(':computer:  Ping', '``!ping``')
      .addField(':clipboard:  ServerInfo', '``!serverinfo``')
      .addField(':robot:  BotInfo', '``!botinfo``')
      .addField(':man:  UserInfo', '``!userinfo``')
      .addField(':notes:  Help Music', '``!helpmusic``')
      .addField(':crown:  Help Mod', '``!helpmod``')
      .addField(':video_game:  Help Fun', '``!helpfun``')
      .setColor('GRAY')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
}