const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setPresence({ game: { name: `Type '@Fergie help'!`, type: 0 } });
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.startsWith(client.user + ' ping')) {
  message.channel.send('Ping?').then(m => {
    m.edit(`Pong! - Time Taken: ${m.createdTimestamp - message.createdTimestamp}ms`)
  })
  }
  
  if (message.content.startsWith(client.user + 'ban')) {
  let userToBan = message.mentions.users.first()
  let rreason = message.content.slice(28).split(' ').join(' ')
  let reason = `Banned by ${message.author.tag}: ${rreason}`
  if (!message.member.permissions.has("BAN_MEMBERS")) {
    message.channel.send('Sorry, you do not have permission to execute the "ban" command!');
    return;
  }

  if (message.author.id === message.mentions.users.first().id)
   return message.channel.send("You can't ban yourself!")

if (bot.user.id === message.mentions.users.first().id)
return message.channel.send("I can't ban myself!")

 if(message.mentions.users.size === 0) {
    return message.reply("Please mention a user to ban.");
}
   message.guild.member(userToBan).ban(reason)
   message.channel.send(":thumbsup:");
}
  
  if (message.content.startsWith(client.user + ' help')) {
    message.reply(`You've been DMed a list of commands.`)
    message.author.send(`\`\`\`xml
< COMMANDS LIST >
@Fergie ping : Checks if the bot is still alive.
@Fergie help : Brings up this help list.\`\`\``)
    message.author.send("You can also check out the commands here:\nhttps://github.com/Ellie-bot/Fergie/wiki/Fergie:-Commands")
}
});


client.login(process.env.BOT_TOKEN)
