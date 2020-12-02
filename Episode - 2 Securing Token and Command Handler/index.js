const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const fs = require('fs')
client.commands = new Discord.Collection()

//Creating our command handler
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)

    console.log(`${command.name} has been loaded!`)
}
 
client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
});
 
//Now we'll make an event for the commands!
 
client.on('message', message => {
    const prefix = process.env.prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!message.guild) return; 

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commands = args.shift().toLowerCase()
    
    //Now we'll execute the commands
    const cmd = client.commands.get(commands)
    if(cmd) cmd.run(client, message, args)
})
 
//Now our bot will login through the bot token
 
client.login(process.env.token);