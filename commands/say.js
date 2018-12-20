const Discord = require('discord.js');
exports.run = async (client, message, args) => {


if(!message.member.hasPermission("ADMINISTRATOR")) return;
const sayMessage = args.join(" ");
message.delete()
message.channel.send("@everyone");
const embed = new Discord.RichEmbed()
.setTitle('📢 Anúncio 📢')
.setDescription(sayMessage)
.setFooter(`Enviado por: ${message.author.username}`)
.setTimestamp(new Date())
.setColor('RANDOM')
.setThumbnail(message.guild.iconURL);


message.channel.send(embed);

}
