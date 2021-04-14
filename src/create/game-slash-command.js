/// https://www.npmjs.com/package/discord-slash-commands-client
const interactions = require('discord-slash-commands-client');
require('dotenv').config();

const client = new interactions.Client(
  process.env.TOKEN,
  process.env.CLIENT_ID
);

// list all your existing commands.
client.getCommands().then(console.log).catch(console.error);

const command = {
  name: 'game',
  description: 'Select a game',
  options: [
    {
      name: 'list',
      description: 'The list of games',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Fortnite',
          value: 'game_fortnite',
        },
        {
          name: 'Apex Legends',
          value: 'game_apexlegends',
        },
        {
          name: 'Counter Strike',
          value: 'game_counterstrike',
        },
      ],
    },
    {
      name: 'limit',
      description: 'Number of games shown',
      type: 5,
      required: false,
    },
  ],
};

// // will create a new command and log its data. If a command with this name already exist will that be overwritten.
client.createCommand(command).then(console.log).catch(console.error);
