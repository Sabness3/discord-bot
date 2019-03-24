const Discord = require("discord.js");

exports.run = (client, Discord, message, prefix, command, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("GRAY")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt);

  message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}