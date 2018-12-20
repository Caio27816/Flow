const ascii = require("ascii-art"); // npm i ascii-art

exports.run = (client, message, args) => {
    ascii.font(args.join(" "), 'Doom', function(rendered){

        rendered = rendered.trimRight();

        if(!args[0] > 15) return message.reply('Limite de 15 palavras atingidas')

        message.channel.send(rendered, {
            code: 'md'
        });
    });}