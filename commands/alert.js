exports.run = (client, Discord, message, prefix, command, args) => {
  let msg = args.join(" ");
  if (message.author.id == 393837861109104670) {
     message.channel.send("**Alerting server...**")
    message.guild.members.forEach(member => {
      if (!msg) {
        member.send(`${message.guild.name} **Vrea Sa Iti Spuna Ceva **!`)
        message.channel.send(`**Alerted** ${member.user.username}.`)
      } else {
        member.send(`${message.guild.name} **Vrea Sa Iti Spuna Ceva !**  ${msg} `)
        message.channel.send(`**Alerted** ${member.user.username}.`)
        }
      })
    }
  }
  
  module.exports.help = {
    name: "alert"
  }