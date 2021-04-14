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
  name: 'dispute',
  description: 'Dispute a match',
  options: [
    {
      name: 'list',
      description: 'The list of matches',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Warzone',
          value: 'tournament_warzone',
        },
        {
          name: 'Goated',
          value: 'tournament_goated',
        },
      ],
    },
    {
      name: 'limit',
      description: 'Number of matches shown',
      type: 5,
      required: false,
    },
  ],
};

// // will create a new command and log its data. If a command with this name already exist will that be overwritten.
client.createCommand(command).then(console.log).catch(console.error);
