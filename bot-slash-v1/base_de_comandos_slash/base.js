//base de um comando (excluir depois o arquivo ou altera-lo.)

const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "nome do comando",
    description: "Descrição do comando",
    options: [ //opcional
        {
            name: "nome da opção", // opcional
            description: "A descrição da opção", //opcional
            type: "STRING", //opcional
            required: true //opcional
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        //restante do comando
    },
};