var Discord = require('discord.js')

exports.run = (client,message,args)=>{
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("Você não mencioniou ninguém")

  var deu = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setImage("https://cdn.discordapp.com/attachments/436653523481001994/451921680554786836/soco.gif","puto.gif");
 
  
 message.channel.send(deu)
}