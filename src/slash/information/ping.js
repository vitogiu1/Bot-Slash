const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Mostra o ping do bot",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let embed2 = new MessageEmbed()
        .setTitle(`Ping`)
        .setDescription(`Calculando...`)

        const ku = await interaction.followUp({embeds: [embed2]})

        let embed = new MessageEmbed()
        .setTitle(`Ping`)
        .setDescription(`**Ping Do Bot**\n\n WebSocket: **${client.ws.ping}**ms\n Servidor: **${ku.createdTimestamp - interaction.createdTimestamp}**ms`)

        ku.edit({ embeds: [embed]})
    },
};