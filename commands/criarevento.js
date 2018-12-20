exports.run = async (client, message, args) => {
  let formato = "?criarevento pergunta|Alternativa 1| Alternativa 2| Alternativa 3| Alternativa 4\nObs: | é necessário.";
  let pergunta = args.join(" ");
  let fatia = pergunta.split("|");
  let fpergunta = fatia[0];
  let a1 = fatia[1];
  let a2 = fatia[2];
  let a3 = fatia[3];
  let a4 = fatia[4];
  message.channels.get("478689211726299137a").send("Pergunta: \n`"+fpergunta+"`\nAlternativas de 1 à 4: "+a1+" \n"+a2+"\n"+a3+"\n"+a4);
}