exports.run = (client,message,args)=>{
    var acusado = message.mentions.users.first();
    var why = args.slice(1).join(" ");
    
    
    if(!acusado) return message.reply("coloque o nome do acusado e o motivo logo em seguida.");
    if(!why) return message.reply("coloque o nome do acusado e o motivo logo em seguida.");
    
    message.reply("sua denúncia foi enviada com sucesso.");
    client.guilds.get("478563030670508033").channels.get("481995381987868693").send({embed: {
  color: 854646,
   title: "Denúncia",
  description: "Acusado: "+acusado+"."+" \n\n Acusador: <@" + message.author.id + ">. \n\nMotivo: "+why
}}); 
  message.guild.members.forEach(member => {
           setTimeout(function(){
           if(member.id == client.user.id) return;
           if(member.id == message.author.id) return;
           if(!member.roles.some(r=>["🎩 Equipe  Flow 🎩"].includes(r.name))) return;
           if(member.user.bot) return;       
         
             member.send({embed: {
          color: 854646,
          title: "Denúncia",
         description: "Acusado: "+acusado+"."+" \n\n Acusador: <@" + message.author.id + ">. \n\nMotivo: "+why
       }}); 
           }, 1000)
                                
                                

  
  });
                                
        
  }      