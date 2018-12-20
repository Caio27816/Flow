const dc = require("discord.js");
exports.run = async (client, message, args) => {

 if (!message.member.hasPermission("MANAGE_ROLES")) {
     return message.reply(new dc.RichEmbed()
    .setColor([54, 57, 63])
    .setDescription("Sem permissão de desmutar membros.")
    .setFooter(message.author.avatarURL, message.author.tag)                             
    );
} else {
  if (!args[0]) {
      return message.reply(new dc.RichEmbed()
    .setColor([54, 57, 63])
    .setDescription("Sem membro mencionado.")
    .setFooter(message.author.username, message.author.avatarURL)                            
    );
  }
  if (!args[1]) {
    return message.reply(new dc.RichEmbed()
    .setColor([54, 57, 63])
    .setDescription("Sem motivo dado.")
    .setFooter(message.author.username, message.author.avatarURL)                              
    );
  
  }
  var desmutado = message.guild.member(args[0]) || message.mentions.users.first();
  var muterole = await message.guild.roles.find("name", "Silenciado");
  }
  if(!message.guild.member(desmutado).roles.has(muterole.id)) {
   return message.reply(new dc.RichEmbed()
    .setColor([54, 57, 63])
    .setDescription("Este membro não está mutado.")
    .setFooter(message.author.username, message.author.avatarURL)                              
    );
  }
  await message.guild.member(desmutado).removeRole(muterole);
  var razao = args.slice(1).join(" ")
  var emb = new dc.RichEmbed()
    .setColor([54, 57, 63])
    .setDescription(desmutado+" foi desmutado com sucesso do servidor por "+message.author.username+".\nRazão: "+razao)
    .setFooter(message.author.username, message.author.avatarURL);                              
    
  message.reply(emb);
  client.channels.get("514214059550441525").send(emb);
}
  

