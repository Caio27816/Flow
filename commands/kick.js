const discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sem permissão!");
  var formato = "?kick @usuário @motivo (opcional)";
  var usuario = message.guild.member(message.mentions.users.first());
  var motivo = args.slice(1).join(" ");
  if(!motivo) motivo = "Não especificado";
  var avatar = message.author.avatarURL || message.guild.iconURL;
  if(!usuario) {
    var embedE = new discord.RichEmbed()
    .setTitle("Formato inválido!")
    .setColor("RANDOM")
    .setThumbnail(avatar)
    .setDescription(`Olá, ${message.author.username}, detectei que você usou o formato inválido para este comando!\nUse: 
    `+"`"+formato+"`!")
    .setFooter(message.author.username+", formato inválido!", avatar)
    .setTimestamp(Date.now());
    return message.reply(embedE); 
  }
  if(!usuario.kickable) {  
    var embedB = new discord.RichEmbed()
    .setTitle("Usuário com permissões maiores!")
    .setColor("RANDOM")
    .setThumbnail(avatar)
    .setDescription(`Olá, ${message.author.username}, detectei
    que o usuário não pode ser kickado! \n`+"`"+usuario.user.tag+"` tem um cargo maior que o meu?!")
    .setFooter(message.author.username+", usuário não pode ser kickado!", avatar)
    .setTimestamp(Date.now());
    return message.reply(embedB);
  }
  var embedBan = new discord.RichEmbed()
    .setTitle("Usuário kickado")
    .setColor("RANDOM")
    .setThumbnail(avatar)
    .setDescription("O usuário `"+usuario.user.tag+"` foi kickado do servidor!\n\nBanido por: `"+message.author.username+"`!\nRazão de: `"+motivo+"`!")
    .setFooter(message.author.username+", usuário kickado!", avatar)
    .setTimestamp(Date.now());
   message.reply(embedBan);
   message.guild.member(usuario).kick();
 return client.channels.get("514214059550441525").send(embedBan); 

}