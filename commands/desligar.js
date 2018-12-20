exports.run = async (client, message, args) => {

  if(message.author.id !== '460561427971702787') return message.reply("você não é o whoami meu chapa")
    desligarBot(message.channel)
        
  async function desligarBot(channel) {
            channel.send(`Desligando...`)
            channel.send("Se quiser me ligar denovo, vá até o Glitch")
            .then(msg => client.destroy(true));
          
         
      
}
}
