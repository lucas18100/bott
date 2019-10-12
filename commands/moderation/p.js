const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "符號",
    category: "info",
    description: "符號",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`https://random.dog`);

        let catembed = new Discord.RichEmbed()
        .setColor("#FFE513")
        .setImage(body.file)
        .setTitle('製作者:Ғρs〃泡麵#8138 指令符號 @');

        message.channel.send(catembed);

    }
}
