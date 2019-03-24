const Discord = require("discord.js");

exports.run = (client, Discord, message, prefix, command, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("GRAY")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.sendEmbed(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}