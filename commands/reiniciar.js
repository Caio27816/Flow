exports.run = async (client, message, args) => {

  if(message.member.hasPermission('ADMINISTRATOR')){
    resetBot(message.channel)
        async function resetBot(channel) {
            channel.send(`Reiniciando...`)
            .then(msg => client.destroy(true))
            .then(() => client.login(process.env.TOKEN));
         
        
    client.on('ready', () => {
        message.channel.send(`Bot reiniciado com sucesso!`);
    });
}
}
}