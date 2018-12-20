exports.run = async (client, message, args) => {
 
  message.channel.send("Clique").then(msg => {
     msg.react("✅")
     client.on("messageReactionAdd", async (reaction, users) => {
  if(reaction.message.id !== msg.id) return;
  
  var role = reaction.message.guild.roles.find(r => r.id === "487884439565631508");
  var userss = reaction.message.guild.members.get(users.id);
  userss.addRole(role);

});
  
  });
  
}