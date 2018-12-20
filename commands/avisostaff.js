const Discord = require("discord.js");
exports.run = (client,message,args)=>{

  const sayMessage = args.join(" ");
  if(!sayMessage) return message.channel.send("***Faltou o aviso***");
    const thumb = message.guild.iconURL;
     
  message.guild.members.forEach(member => {
          
    setTimeout(function(){
           if(!member.roles.some(r=>["👪 | Equipe"].includes(r.name))) return;
           if(member.user.bot) return;       
         
       const embed = new Discord.RichEmbed()
.setTitle('📢Aviso staff📢')
.setDescription(sayMessage)
.setFooter(`Enviado por: ${message.author.username}`)
.setTimestamp(new Date())
.setColor('RANDOM')
.setThumbnail(message.guild.iconURL);
      
             member.send({
             embed
       }); 
           }, 1000)
     
  });
       message.channel.send("Aviso enviado com sucesso!");  
   }      