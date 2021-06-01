require('dotenv').config()
const interactions = require("discord-slash-commands-client");

module.exports = new interactions.Client(process.env.TOKEN, process.env.CLIENT_ID);