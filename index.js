const Discord = require("discord.js"),
    client = new Discord.Client({
        fetchAllMembers: true,
        partials: ["MESSAGE", "REACTION"]
    }),
     config = require("./config.json"),
     fs = require("fs")

client.login(process.env.TOKEN);
client.commands = new Discord.Collection()

fs.readdir("./commands", (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith(".js")) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

fs.readdir("./misc", (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith(".js")) return
        const command = require(`./misc/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on("message", message => {
    if (message.type !== "DEFAULT" || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send("Cette commande ne peut être utilisé que dans un serveur")
    command.run(message, args, client)
})

client.on('ready', () => {
    console.log('En marche !');
  });

client.on("guildMemberAdd", member => {
    member.guild.channels.cache.get(config.greetings.channel).send(`Bienvenue sur test bot, ${member}.\nNous sommes maintenant **` + member.guild.memberCount + "** sur le serveur !")
    member.roles.add(config.greetings.role)
})

client.on("guildMemberRemove", member => {
    member.guild.channels.cache.get(config.greetings.channel).send(`Au revoir :sob: ${member}.\nNous sommes maintenant **` + member.guild.memberCount + "** sur le serveur !")
})

client.on("messageReactionAdd", (reaction, user) => {
    if (!reaction.message.guild || user.bot) return 
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? "id" : "name"
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on("messageReactionRemove", (reaction, user) => {
    if (!reaction.message.guild || user.bot) return 
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? "id" : "name"
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

client.on('ready', () => {
    const statuses = [
        "Développer",
        "Saluer",
        "Modérer"
    ]
    let i = 0
    const interval = "1e4"
    setInterval(() => {
        client.user.setActivity(statuses[i], {type: "PLAYING"})
        i = ++i % statuses.length
    }, interval);
    
  })

  client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    })
})
