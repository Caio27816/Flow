var discord = require("discord.js");
exports.run = async (client, message, args) => {
  var reac = new discord.RichEmbed()
  .setAuthor("Escolha uma opção")
  .setColor("RANDOM")
  .setThumbnail(message.guild.iconURL)
  .setDescription("👮-Moderação\n🔧-Utilitários\n🤔-RANK")
  .setTimestamp(Date.now());
  message.channel.send(reac).then(async reacm => {
   await reacm.react("🔧");
   await reacm.react("👮"); 
   await reacm.react("🤔"); 
   setTimeout(() => {reacm.delete()}, 40000); 
   client.on('messageReactionAdd', (reaction, user) => {
       if(reaction.message.id !== reacm.id) return;
       if(reaction.emoji.name === "🔧" && user.id === message.author.id) {
            let util = new discord.RichEmbed()
            .setAuthor("Comandos utilitários")
            .setColor("RANDOM")
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setDescription("***ajuda***- ajuda.\n***gif***- procura por um gif mencionado.\n***ping***- mostra meu ping.\n***serverinfo***- informações do servidor.\n***soco***- larga um soco no membro mencionado.\n***voadora***- larga uma voadora na cara do membro mencionado. \n***fakemsg***- manda mensagem em nome de um membro mencionado.\n***avatar***- mostra a foto de perfil do membro mencionado.\n***falar***- faz eu falar o que foi argumentado após o comando.\n\n**Prefixo:** ?")
            .setTimestamp(Date.now());
         reacm.edit(util);
         reaction.remove(message.author.id);
       } else { 
         if (reaction.emoji.name === "👮" && user.id === message.author.id){
            let mod = new discord.RichEmbed()
            .setAuthor("Comandos moderativos")
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription("***mute***- muta o membro mencionado.\n***kick***- expulsa o membro mencionado.\n***ban***- bane o membro mencionado.\n***limpar***- delete determinado número de mensagens.\n***muteall***-muta todos os membros em todos os canais.\n\n**Prefixo:** ?")
            .setTimestamp(Date.now());
           reacm.edit(mod);
           reaction.remove(message.author.id);
       }
        if (reaction.emoji.name === "🤔" && user.id === message.author.id){
            let mod = new discord.RichEmbed()
            .setAuthor("Comandos de rank")
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.tag, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription("***xp***- mostra seu xp ou o xp do membro que foi mencionado.\n\n***daily***- você resgata seu xp diário. Recomendo usar!\n***Em breve, leaderboard.***\n\n**Prefixo:** ?")
            .setTimestamp(Date.now());
           reacm.edit(mod);
           reaction.remove(message.author.id);
       }
    }         
    });
  });

}
