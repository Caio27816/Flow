var discord = require("discord.js");
var ms = require("ms");
exports.run = async (client, message, args) => {

 if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("você não tem permissão de MANAGE ROLES!"); 
 let formato = "b!mute @usuario @tempo(1h, 1m, 1s) @motivo";
 let usuario = message.guild.member(message.mentions.users.first());
 let tempo = args[1];
 let motivo = args.slice(2).join("");
 var avatar = usuario.user.avatarURL || client.user.avatarURL;
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
 if(!tempo) {
      var embedE1 = new discord.RichEmbed()
    .setTitle("Formato inválido!")
    .setColor("RANDOM")
    .setThumbnail(avatar)
    .setDescription(`Olá, ${message.author.username}, detectei que você usou o formato inválido para este comando!\nUse: 
    `+"`"+formato+"`!")
    .setFooter(message.author.username+", formato inválido!", avatar)
    .setTimestamp(Date.now());
    return message.reply(embedE1);  
 }
 if(!motivo) motivo = "Não informado!";
 let muterole = message.guild.roles.find(r => r.name === "Silenciado");
 if(usuario.roles.has(muterole.id)) return message.reply("membro mencionado já está mutado!"); 
 if(!muterole) {
  await message.guild.createRole({
    name: "Silenciado",
    color: "RED"
  });
   message.guild.channels.forEach(ch => {ch.overwritePermissions(muterole, {"SEND_MESSAGES": false });}); 
 
 }
 usuario.addRole(muterole); 
   var embedM = new discord.RichEmbed()
    .setTitle("Usuário mutado")
    .setColor("RANDOM")
    .setThumbnail(avatar)
    .setDescription("O usuário `"+usuario.user.tag+"` foi mutado no servidor!\n\nMutado por: `"+message.author.username+"`!\nRazão de: `"+motivo+"`!\nTempo: `"+tempo+"`!")
    .setFooter(message.author.username+", usuário mutado!", avatar)
    .setTimestamp(Date.now());
   message.reply(embedM);
   message.reply("recomendável checkar se o membro tem cargo maior do que o du mute!");
   client.channels.get("514214059550441525").send(embedM); 
  setTimeout(() => {
    usuario.removeRole(muterole);
    message.channel.send(`<@${usuario.user.id}> foi desmutado!`);
  }, ms(tempo));
  return;
}
