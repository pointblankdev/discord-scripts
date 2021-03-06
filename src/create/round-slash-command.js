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
  name: 'round',
  description: 'Select a round',
  options: [
    {
      name: 'list',
      description: 'The list of rounds',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Pre-Final',
          value: 'round_prefinal',
        },
        {
          name: 'Kick-Off',
          value: 'round_kickoff',
        },
      ],
    },
    {
      name: 'limit',
      description: 'Number of rounds shown',
      type: 5,
      required: false,
    },
  ],
};

// will create a new command and log its data. If a command with this name already exist will that be overwritten.
client.createCommand(command).then(console.log).catch(console.error);
