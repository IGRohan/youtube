module.exports = {
    name: 'ping' ,//Name of the command
    description: "Shows the bot's  ping",
    run: async(client, message, args) => {

        //the command content starts here.
        message.channel.send(`My ping is: ${client.ws.ping}`)
    }
}