const Discord = require("discord.js");
const client = new Discord.Client();
const meme = require('memejs');

exports.run = (client, Discord, message, prefix, command, args) => {
  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("GRAY")
  .setImage(data.url[0])
  message.channel.send({embed});
  })};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["meme", "memezzzzz"],
  permLevel: "User"
};

exports.help = {
  name: "meme",
  category: "Miscelaneous",
  description: "Memezzzz 4 life",
  usage: "meme"
};