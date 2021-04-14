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
  name: 'pair',
  description: 'Select a pair',
  options: [
    {
      name: 'list',
      description: 'The list of users',
      type: 3,
      required: true,
      choices: [
        {
          name: 'User 1',
          value: 'pair_user1',
        },
        {
          name: 'User 2',
          value: 'pair_user2',
        },
      ],
    },
    {
      name: 'limit',
      description: 'Number of users shown',
      type: 5,
      required: false,
    },
  ],
};

// will create a new command and log its data. If a command with this name already exist will that be overwritten.
client.createCommand(command).then(console.log).catch(console.error);
