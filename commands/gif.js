const gifSearch = require("gif-search");

exports.run = (client, message, args) => {

let pesq = args.join(" ");
gifSearch.random(pesq).then(
    gifUrl => message.channel.send({embed: {
        title: `Resultado da pesquisa de gifs: ${pesq}`,
        image: {url: gifUrl}
    }})
);
}