const Discord = require("discord.js")

module.exports = {
    run: message  => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle("Règlement")
            .setDescription("**Dox/DDos:**\n1. Ne pas partager de liens, ou de DOX sans que la/les personne(s) concernée(s) soi(en)t d'accord.\n\n**Enregistrement de conversation:**\n2. Les enregistrements des conversations Discord sont interdits sauf s'ils sont destinés à être utilisés comme preuves de report.\n\n**Le Racisme:**\n3. Les propos racistes, sexistes, homophobes... sont formellement interdits !\n\n**Les spoils en masse:**\n4. Ne pas faire de spoils sans que tout le monde dans le salon soit d'accord.\n\n**Les soundboards:**\n5. Ne pas faire d'effets de voix abusifs sans l'accord de tous les membres présents.\n\n**Trash:**\n6. Il est interdit de partager du contenu pouvant heurter la sensibilité des plus jeunes.\n\n**Le Flood:**\n7. Ne pas spam, flood,ect..\n\n**Les mentions:**\n8. Ne pas mentionner sans raison valable !\n\n**Les pp:**\n9.Interdiction d'avoir une photo de profil inapproprié\n\n**Pub:**\n10.Pub en mp ou en salon est interdit !\n\n**Les Insultes:**\n11.Les Insultes sont interdit ! /!\ Nous serons très exigent sur ce point !\n\n||[@here]||\nMerci de respecter ce règlements, Si il n'est pas respecter vous risquez un ban Temporaire ou Définitive !\n-Le staff")           
            .setImage("https://i.imgur.com/wvkTNDe.jpeg")
            .setColor(0x422550)
            .setAuthor("Sayuky", "https://cdn.discordapp.com/attachments/394508067691298836/801616490830364682/unknown.png", "https://www.youtube.com/channel/UCHf89yoXhVbgotMo1-Mt09Q"))     
    }, 
    name: "embedrules"
}

