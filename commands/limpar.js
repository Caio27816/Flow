exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = '?';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    args = messageArray.slice(1);
    if (cmd === `?limpar`){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para Gerenciar mensagens");
        if(!args[0]) return message.channel.send("Como Usar:\n",`!${prefix}limpar [NÚMERO DE MENSAGENS]`);
     
        message.channel.bulkDelete(args[0]).then(() => {
		const a =	message.channel.send(args[0]+" mensagens apagadas, <@" + message.author.id + ">"+".").then
      (msg => console.log(args[0]+" mensagens apagadas no chat"+message.channel))
      .catch(console.error);
        })
}
   
};