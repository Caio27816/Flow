var Discord = require('discord.js')

exports.run = (client,message,args)=>{
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("Você não mencioniou ninguém")
        var arquivo = new Discord.Attachment()
       .setAttachment("https://cdn.discordapp.com/attachments/478707534501249044/484466997699280896/voadora-gif-6.gif","puto.gif");

 message.channel.send("<@" + message.author.id + "> deu uma voadora em <@"+ user.id +">",arquivo)

}