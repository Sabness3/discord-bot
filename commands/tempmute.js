const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
    if (args[0] == "help") {
        message.reply("Usage: !tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Veuillez mentionner un utilisateur !");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas le mute !");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Merci d'indiquer une raison !");

    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Muted By ${message.author}`)
        .setColor("GRAY")
        .addField("Utilizator Muted:", tomute)
        .addField("Mute In Channel", message.channel)
        .addField("Mute At", message.createdAt)
        .addField("Mute Time", mutetime)
        .addField("Reason", reason);

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if (!incidentschannel) return message.reply("Créer un salon logs !");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> est mute pour ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> a été unmuted !`);
    }, ms(mutetime));
}