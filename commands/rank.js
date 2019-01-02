const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

   
    db.startsWith(`xp_`, { sort: ".data" }).then(resp => {
       resp.length = 10;
      
      let finalOutput = "**Leaderboard** \n\n";
      for (var i in resp) {
       finalOutput += `${i+1}`+client.users.get(resp[i].ID.split("_")[1]).username+"- "+resp[i].data;
      }
      message.channel.send(finalOutput);
  });
  
}
