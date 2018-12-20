exports.run = async (client, message, args) => {
  
  const m = await message.channel.send("Calculando...");
  
  m.edit(`Pong! :ping_pong:\nSua latência é **${m.createdTimestamp - message.createdTimestamp}**ms.\nLatência da API é **${Math.round(client.ping)}**ms.`);
  
}
