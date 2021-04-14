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
          name: 'User A',
          value: 'pair_userA',
        },
        {
          name: 'User B',
          value: 'pair_userB',
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

//will edit the details of a command.
client
  .editCommand(command, '831699916047908875')
  .then(console.log)
  .catch(console.error);
