const Discord = require("discord.js");

exports.run = (client, Discord, message, prefix, command, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ``${args[0]}`` messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}