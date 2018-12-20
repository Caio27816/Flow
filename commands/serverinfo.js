const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  let embed = await new Discord.RichEmbed()
            .setAuthor("Informações do servidor")
            .setThumbnail(message.guild.iconURL)
            .setColor([54, 57, 63])
            .addField("Nome", message.guild.name)
            .addField('Criador' , message.guild.owner , true)
            .addField("Membros", message.guild.memberCount)
            .addField('Canais', message.guild.channels.size ,true)
            .addField("Criado em", message.guild.createdAt)
            .addField("Quando você entrou", message.member.joinedAt)
            .addField('Emojis' , message.guild.emojis.map(e => e).join(', '))
            .addField('Cargos', message.guild.roles.filter(role => role.id !== message.guild.id).map(role => role.name).join(', '), true);

   await message.channel.send(embed);
}