const Discord = require('discord.js')
exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
   if(!sugest) return message.reply("use ?sugerir <sugestão>")
  
  const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Sugestão de: '+message.author.username)
.setDescription('A sugestão dele é: '+sugest)

   
  client.users.get('460561427971702787').send(embed);
  const a = message.channel.send(embed);

}