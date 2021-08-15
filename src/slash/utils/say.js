const {CommandInteraction, Client} = require('discord.js');

module.exports = {
    name: 'say',
    description: "Fale algo em nome do bot.",
    options: [
        {
            name: "mensagem",
            description: "Texto que o bot vai dizer.",
            type: "STRING",
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [mensagem] = args;
        
        interaction.followUp({ content: `✅ Comando enviado por **${interaction.user.username}**\n\n${mensagem}`})
    }
}