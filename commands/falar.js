const Discord = require('discord.js');
exports.run = async (client, message, args) => {



const sayMessage = args.join(" ");
message.delete();

const embed = new Discord.RichEmbed()
.setTitle('')
.setDescription(sayMessage)
.setColor('RANDOM');



message.channel.send(embed);

}