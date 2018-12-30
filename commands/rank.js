const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let money = db.startsWith(`xp_`, { sort: '.data'})
  let content = "";

  for (let i = 0; i < money.length; i++) {
      let user = client.users.get(money[i].ID.split('_')[1]).username

      content += `${i+1}. ${user} ~ ${money[i].data}\n`
  }

  const embed = new discord.RichEmbed()
  .setAuthor(`${message.guild.name} - RANK!`, message.guild.iconURL)
  .setDescription(content)
  .setColor(0x51267)

  message.channel.send(embed)
  
}
