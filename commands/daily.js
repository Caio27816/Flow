const db = require("quick.db");
const discord = require("discord.js");
const ms = require("parse-ms");
exports.run = async (client, message, args) => {
  let user = message.author;
  const cooldown = 8.64e+7;
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let lastDaily = await db.fetch(`lastDaily_${user.id}`);
  if(lastDaily === null) db.set(`lastDaily_${user.id}`, Date.now());
  if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    var timeObj = ms(cooldown - (Date.now() - lastDaily));
    let avatar = user.avatarURL || message.guild.iconURL;
    let reply = new discord.RichEmbed()
    .setAuthor(user.tag, user.avatarURL)
    .setDescription("Você já coletou suas moedas diárias!\nVolte em `"+timeObj.hours+"` horas e `"+timeObj.minutes+"` minutos!")
    .setTimestamp(Date.now())
    .setFooter("Moedas diárias já resgatadas!", client.user.avatarURL || avatar);
    return message.reply(reply);
  } else {
    var add = 50;
    
    db.add(`xp_${user.id}`, add);
    let avatar = user.avatarURL || message.guild.iconURL;
    let replys = new discord.RichEmbed()
    .setAuthor(user.tag, user.avatarURL)
    .setDescription(`Você recebeu 50 de XP!\n Fale no chat para upar o nível.`)
    .setTimestamp(Date.now())
    .setFooter("Moedas diárias resgatadas!", client.user.avatarURL || avatar);
    message.reply(replys);
    db.set(`lastDaily_${user.id}`, Date.now());
    return;
  }

}