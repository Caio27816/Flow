const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
    client.user.setActivity("o comando ?ajuda", { type: "WATCHING"});
    console.log("Bot iniciado no Flow!");
  //;ᴍᴇᴍʙʀᴏs: sᴛᴀᴛᴜs
    function changing_status() {
    var server  = client.guilds.get("478563030670508033");
   

   const mem =  server.channels.get("525711309220872211");
   const nm = mem.name;
   var nmm = nm.split(" ");
   let nmi = parseInt(nmm[1]);
   if(nmi !== server.memberCount) {   
     mem.setName(`ᴍᴇᴍʙʀᴏs: ${server.memberCount}`);
     return;
   }
}
    setInterval(changing_status, 9000);
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
	if (message.author.bot) return undefined;
  if(message.channel.type === 'dm') return message.author.send("Olá "+message.author.username);
  if(message.content.includes("<@480772912698359818>")) return message.channel.send("Use ?ajuda para ver meus comandos.");
  let user = message.author;
  
 
  
 if(message.channel.id === '478688455996473364') return message.react('👍').then(message.react('👎'));
 if(message.content.includes("youtu.be/" || "youtube.com") && message.channel.id === "478566396691873793") {
    return message.reply("sem vídeo aqui mano"); 
 }
 if (message.content.includes("https://discord.gg/")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }
    }
  
	if (message.content.indexOf(client.prefix) !== 0) return;
	const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  
  try {
    
    let commands = require(`./commands/${command}.js`);
    await commands.run(client, message, args);
  } catch (e) {
    console.log(e);
  }
  const db = require("quick.db");
  const cooldown = require("./cooldown.js");
  const utils = require("./utils.js");
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let level = await db.fetch(`level_${user.id}`);
  if (level === null) level = 0;
  
  if (!cooldown.is(user.id)) {
    cooldown.add(user.id);
    var add = 13;
    db.add(`xp_${user.id}`, add);
    setTimeout(() => {
      cooldown.remove(user.id);
    }, 1000 * 25);
  }
  
  while (xp >= utils.need(level+1)) {
    if (xp >= utils.need(level+1)) {
      db.subtract(`xp_${user.id}`, utils.need(level+1));
      db.add(`level_${user.id}`, 1);
      xp = await db.fetch(`xp_${user.id}`);
      level = await db.fetch(`level_${user.id}`);
      let embed = new Discord.RichEmbed()
      .setTitle("LEVEL UP")
      .setDescription(`<@${message.author.id}> upou para o level ${level+1}.`)
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp(Date.now());
      message.channel.send(embed);
    
    }
  }
});

client.on("guildMemberAdd", async member => {

     var nmember = member.guild.roles.find(r => r.name === "🍁 | Não-Registrado");
     member.addRole(nmember);
     let avatar = member.user.avatarURL;
     if(!avatar) avatar = member.guild.iconURL;
    const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Entrada e Registro')
.setDescription("**Seja bem-vindo(a) ao nosso servidor, "+member.user.tag+".\nAperte na reação abaixo para que seu registro seja validado.\nVocê é o membro número `"+member.guild.memberCount+"`**")
.setFooter(member.user.username+", se registre!", member.user.avatarURL || member.guild.iconURL)
.setTimestamp(Date.now())    
.setThumbnail(avatar);
  
  client.channels.get('524060099266871309').send(`<@${member.user.id}>`, embed).then(async msg=> {
               await msg.react("✅").then(r => {
           client.on('messageReactionAdd', async (reaction, user) => {
           if(reaction.message.id !== msg.id) return;  
           if(reaction.emoji.name === "✅" && user.id !== reaction.message.author.id) {
           let membro = member.guild.roles.find("name", "👤 | Membro");  
           await member.addRole(membro);  
           await member.removeRole(nmember);             
          
        } else {
          setTimeout(() => {
            member.user.send("Você, por gentileza, poderia apertar no botão?!");
          
          }, 1000 * 60); 
        }
                  
            });
        });
    });

    const moment = require("moment");
    moment.locale("pt-br");	
    let criou = member.user.createdAt;
    let criou_em = moment(criou).format("L");
    criou_em.toString();
    let aheio = criou_em.split("/");
    let dia = parseInt(aheio[0]);
    let mes = parseInt(aheio[1]);
    let agorad = moment(Date.now()).format("L").toString().split("/").parseInt([0]);	
    let agoram = moment(Date.now()).format("L").toString().split("/").parseInt([1]);
    let agorads = 10-dia;
    if(agoram === mes && agorads.toString().startsWith("-")) {
     var embedC = new Discord.RichEmbed()
     .setAuthor(member.user.tag+", suspeito!", member.user.avatarURL)
     .setColor("RANDOM")
     .setDescription("O usuário `"+member.user.tag+"`, que acabou de entrar no servidor, criou sua conta há menos de 10 (dez) dias!\nÉ `recomendável` checkar se realmente é um humano!\nEle foi nosso membro `"+member.guild.memberCount+"`!")
     .setFooter(member.user.tag+", recomendado checkar se o membro é um humano!", member.user.avatarURL)
     .setTimestamp(Date.now());
     member.guild.members.forEach(async mem => {
       var role = member.guild.roles.find(r => r.id === "478687942567526413");
       if(!member.roles.has(role)) return;
       await mem.send(embedC);
     
     });
      return;
    }



});



client.login(process.env.TOKEN);
