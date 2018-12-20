const config = require("../config.json");

exports.run = (client, message, args) => {
  let user = message.author;
  if (user.id !== '460561427971702787') return message.channel.send("Sorry, you must be the owner to use this command.");

  if (args.length === 0) return message.channel.send(`Use: \`${client.prefix}reload <command>\``);
  
  try {
    delete require.cache[require.resolve(`./${args[0]}`)];
  } catch (e) {
    return message.channel.send(`Comando não encontrado: ${args[0]}`);
  }
  
  message.channel.send(`Comando atualizado: ${args[0]}`);
  
}