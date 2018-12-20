const Discord = require('discord.js');
const db = require('quick.db');
const utils = require("../utils.js");

exports.run = async (client, message, args) => {
  if(args[0]){
  let user = message.guild.member(args[0]) || message.mentions.users.first();
  if(user.bot){
  return message.channel.send(new Discord.RichEmbed()
  .setAuthor("Comando não executado!")
  .setColor([54, 57, 63])
  .setDescription("Comando não pode ser executado em usuários bot.")
  .setFooter(message.author.username, message.author.avatarURL)                            
  );
  }
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let level = await db.fetch(`level_${user.id}`);
  if (level === null) level = 0;
  
  
  let need = utils.need(level+1);
  
  let embed = new Discord.RichEmbed()
    .setColor([54, 57, 63])
    .setAuthor("RANK: " + user.username, user.avatarURL)
    .setDescription("LEVEL " + level + "[" + xp + "/" + need + "]")
    .setTimestamp();
  message.channel.send(embed);
  }else {
  let user = message.author;
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let level = await db.fetch(`level_${user.id}`);
  if (level === null) level = 0;
  
  
  let need = utils.need(level+1);
  
  const embed = new Discord.RichEmbed()
    .setColor([54, 57, 63])
    .setAuthor("RANK: " + user.username, user.avatarURL)
    .setDescription("LEVEL " + level + "[" + xp + "/" + need + "]")
    .setTimestamp();
  message.channel.send(embed);
  }
}