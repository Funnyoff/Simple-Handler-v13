module.exports = {
    name: 'exemplecmd',
    usage: 'exemplecmd',
    category: "mod",
    description: `Commande exemple.`,
    async execute(client, message, args) {

        message.channel.send('Voici le premier message de ton bot ! Si tu as besoin d\'aide, des salons aide sont dispo sur mon serveur https://discord.gg/FAZgBcCj3t !')
        
    }
}