const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, Discord, message, prefix, command, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("**Make sure you mention someone!**");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug!")
    .setDescription(`**${message.author.username}** Hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("GRAY")

    message.channel.send(hugEmbed)

}