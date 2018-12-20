const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  message.guild.members.forEach().then(user => {
   
    db.startsWith(`xp_${user.id}`, { sort: ".data" }).then(resp => {
       resp.lenght = 5;
      
      let finalOutput = "Leaderboard \n\n";
      for (var i in resp) {
       finalOutput += `${client.users.get(user.id)` 
      }
    
    });
  
  });
  
}