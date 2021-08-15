const fs = require('fs')
const { Client } = require('discord.js')
const moment = require('moment')

/**
 * @param {Client} client
 */
module.exports = async(client) => {
    const arquivosSlash = []
    const arraySlash = []
    const slashFolder = fs.readdirSync('./src/slash')
    for (const folder of slashFolder) {
        const slashFiles = fs.readdirSync(`./src/slash/${folder}`).filter(file => file.endsWith('.js'))
    for(const file of slashFiles) {
        const slash = require(`../slash/${folder}/${file}`)
        client.slash.set(slash.name, slash);
        arraySlash.push(slash)
        arquivosSlash.push(slashFiles)
        }
    }

    client.on('ready', async () => {
        await client.application.commands.set(arraySlash);
        console.log(`[${moment().format("DD-MM-YYYY HH:mm")} - Sucess ✅] - [SLASH-COMMANDS]: Foram carregados ${arquivosSlash.length} comando(s) slash`)
        console.log(`Eu, o ${client.user.username} Está online!`)
    })

    client.on("interactionCreate", async (interaction) => {
        if (interaction.isCommand()) {
            await interaction.deferReply({ ephemeral: false }).catch(() => {});
    
            const slashCommand = client.slash.get(interaction.commandName);
            if (!slashCommand)
                return interaction.followUp({ content: "Ocorreu um erro ao executar o comando!" });
    
            const args = [];
    
            for (let option of interaction.options.data) {
                if (option.type === "SUB_COMMAND") {
                    if (option.name) args.push(option.name);
                    option.options?.forEach((x) => {
                        if (x.value) args.push(x.value);
                    });
                } else if (option.value) args.push(option.value);
            }
    
            slashCommand.run(client, interaction, args);
        }
    });
}