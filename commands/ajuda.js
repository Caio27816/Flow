
const discord = require("discord.js");
 exports.run = async (client, message, args) => {
  
    message.channel.send(new discord.RichEmbed()
 .setAuthor("Ajuda")
 .setColor([54, 57, 63])
 .setDescription("**Seja bem-vindo ao Flow.\nAqui temos eventos, brincadeiras e comandos meus. Digite ?comandos.**")
 .setFooter(message.author.username ,message.author.avatarURL)
 ); 


}