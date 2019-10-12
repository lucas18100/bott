const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "貓",
    category: "info",
    description: "貓",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`http://aws.random.cat/meow`);

        let catembed = new Discord.RichEmbed()
        .setColor("#FFE513")
        .setImage(body.file)
        .setTitle('文件製作者:市五郎Goro | 凱恩是我的QQ 主機:Ғρs〃泡麵#8138');

        message.channel.send(catembed);

    }
}
