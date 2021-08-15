const {CommandInteraction, Client, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'avatar',
    description: "Mostra o avatar de alguém.",
    options: [
        {
            name: "menção",
            description: "Mencione a pessoa que você quer saber o avatar",
            type: "USER",
            required: false
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [menção] = args

        let avatar;
        let usuario;

        if(!menção) {
            avatar = interaction.user.avatarURL()
            usuario = interaction.user.username
        } else {
            avatar = client.users.cache.get(menção).avatarURL()
            usuario = client.users.cache.get(menção).username
        }


        let embed = new MessageEmbed()
        .setDescription(`Avatar do **${usuario}**`)
        .setImage(avatar)

        interaction.followUp({embeds: [embed]})
    }
}