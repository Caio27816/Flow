const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var embedColor = [54, 57, 63]; // Cor da embed!
    
    var missingPermissionsEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Permissões insuficiente!')
        .setDescription('Você precisa da permissão `MANAGE_MESSAGES` para usar este comando!')
        .setTimestamp();
    var missingArgsEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Forma errada de usar')
        .setDescription('**Utilize**: `aviso <user> <razão>')
        .setTimestamp();
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); 
    let mentioned = message.mentions.users.first(); 
    if(!mentioned) return message.channel.send(missingArgsEmbed); 
    let reason = args.slice(1).join(' ') 
    if(!reason) return message.channe.send(missingArgsEmbed); 

    var warningEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`Você foi avisado em ${message.guild.name}`)
        .addField('Avisado por', message.author.tag)
        .addField('Razão', reason)
        .setTimestamp();
    mentioned.send(warningEmbed); 
    var warnSuccessfulEmbed = new Discord.RichEmbed() 
        .setColor(embedColor)
        .setTitle('Usuário avisado com sucesso!');
    message.channel.send(warnSuccessfulEmbed); 
    message.delete(); 
}