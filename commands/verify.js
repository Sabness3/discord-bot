const Discord = require("discord.js");


module.exports.run = async (client, Discord, message, prefix, command, args) => {
    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Verified');
    if (message.channel.name !== 'verification') return message.reply('You must go to the channel #verification').then(msg => msg.delete(5000));
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has already been verified!').then(msg => msg.delete(5000));
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('Your account has been successfully verified.').then(msg => msg.delete(5000));
        return message.channel.send((verifyEmbed));
    }
}

module.exports.help = {
    name: 'verify',
    description: 'you must have the Verified role'
}