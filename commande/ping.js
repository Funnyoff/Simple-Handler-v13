const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "Infos",
  description: "Get bot's rel time ping status",
  emoji: "🏓",

  async execute(client, message, args) {

    const ping = new MessageEmbed()
      .setColor("#303136")
      .setTitle("🏓 Ping pong!")
      .setDescription(`PING: ${client.ws.ping}`);

    message.reply({ embeds: [ping] })
    
  },
};