exports.run = (client, message, args) => {

let pic = args[0];
client.playerMap.set(client.playerMap.get(message.guild.id.concat(message.author.id),"control"),pic,"img");
message.channel.send(`Set image url! Players can see this when they ${client.auth.prefix}check your character. If the image URL is broken, it and any character bio won't appear.`)

}
