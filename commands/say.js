const Discord = require("discord.js");

exports.run = (client, Discord, message, prefix, command, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  let botmessage = args.join(" ");

  const sayMessage = args.join(" ");

  let servIcon = message.guild.iconURL;
  let esayEmbed = new Discord.RichEmbed()
  .setColor("GRAY")
  .setDescription(`${sayMessage}`)
  .setTimestamp();

  const esayMessage = args.join(" ");
  // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
  message.delete().catch(O_o=>{});
  // And we get the bot to say the thing:

  message.channel.send(esayEmbed);
}
module.exports.help = {
name:"say"
}