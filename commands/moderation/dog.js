const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "狗",
    category: "info",
    description: "狗",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`https://random.dog/woof.json`);

        let dogembed = new Discord.RichEmbed()
        .setColor("#33FFFD")
        .setImage(body.url)
        .setTitle('文件製作者:市五郎Goro | 凱恩是我的QQ 主機:Ғρs〃泡麵#8138');

        message.channel.send(dogembed);

    }
}
