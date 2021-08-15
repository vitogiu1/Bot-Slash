const { Client, Collection } = require('discord.js'); //Puxando apenas o necessário do discord.js
const client = new Client({ intents: 32767 }) //Caso você não tenha acesso a todas as intents, coloque apenas as intents que você tem acesso.

module.exports = client

client.config = require('./config.json')
client.slash = new Collection()

require('./src/handlers/slash')(client)

client.login(client.config.token)