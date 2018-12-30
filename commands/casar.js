const discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
   
    let pessoacasar = message.mentions.users.first();
    let jcasado = await db.fetch(`casado_${pessoacasar.id}`);
    let casado = await db.fetch(`casado_${message.author.id}`);
    if(jcasado === null) jcasado = false;
    if(casado === null) casado = false; 
    if(jcasado === true || casado === true) return message.reply("ou você é casado ou o noivo é casado!")
    if(message.author.id === pessoacasar.id) return message.reply("você não pode casar com si mesmo!");
    
    let casamento = new discord.RichEmbed().setColor("RED").setDescription(`<@${message.author.id}> está pedindo em casamento <@${pessoacasar.id}>.\n**Se você for essa pessoa aperte na reação para aceitar!**`).setImage(pessoacasar.avatarURL || message.author.avatarURL).setTimestamp(Date.now()).setFooter(pessoacasar.username || message.author.username, pessoacasar.avatarURL || message.author.avatarURL);
    message.channel.send(`<@${pessoacasar.id}>`, casamento).then(msg => {
       msg.react("✅");
       client.on("messageReactionAdd", (reaction, user) => {
           if(user.id !== pessoacasar.id) return;
           if(reaction.message.id !== msg.id) return;
           if(reaction.emoji.name === "✅") {
             db.set(`casadoquem_`, `${pessoacasar.id}|${message.author.id}`);
             let casado = new discord.RichEmbed().setColor("RED").setDescription(`<@${message.author.id}> está casado com <@${pessoacasar.id}>!`).setImage(pessoacasar.avatarURL || message.author.avatarURL).setTimestamp(Date.now()).setFooter(pessoacasar.username || message.author.username, pessoacasar.avatarURL || message.author.avatarURL);
             db.set(`casado_${message.author.id}`, true); db.set(`jcasado_${message.author.id}`, true);
             return message.reply("Casados com sucesso! Papelada assinada", casado);
           } if(reaction.emoji.name === null) {
           setTimeout(() => {
            message.reply("Casamento cancelado por não aceitação!")
            return false;
           }, 60000);
        }
       });

    });

}
