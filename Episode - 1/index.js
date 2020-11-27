const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
});
 
//Now we'll make an event for the commands!
 
client.on('message', message =>{
    //Here we'll write the commands
    if(message.content === 'ping') {
        message.channel.send("Pong!")
    }
    if(message.content === 'youtube') {
        message.channel.send("https://www.youtube.com/c/igrohan")
    }
    //We'll leave it here for now
})
 
//Now our bot will login through the bot token
 
client.login('token');