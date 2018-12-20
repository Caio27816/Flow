exports.run = (client, message, args) => {


  var ev = message.guild.roles.find("name", "@everyone");
  var au = message.guild.member(message.member);
 if(message.member.roles.some(r => r.name === "👑 | Fundador".includes(r.name))) {
  message.guild.channels.forEach(canais => {
    canais.overwritePermissions(ev, {
       SEND_MESSAGES: false
    
    });
  
  
  
  });
 }
  message.channel.send("Todos os canais foram ***mutados*** com sucesso!");
}