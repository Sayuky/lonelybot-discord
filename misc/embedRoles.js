const Discord = require("discord.js")

module.exports = {
    run: message  => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("Roles")
            .addField("Rôle 1", "🍕PIZZA", true)
            .addField("Rôle 2", "💨Puteuuuh", true)
            .setDescription("Coche la réaction correspondant au rôle voulu")           
            .setImage("https://i.imgur.com/wvkTNDe.jpeg")
            .setColor(0x422550)
            .setAuthor("Sayuky", "https://cdn.discordapp.com/attachments/394508067691298836/801616490830364682/unknown.png", "https://www.youtube.com/channel/UCHf89yoXhVbgotMo1-Mt09Q"))     
    }, 
    name: "embedroles"
}