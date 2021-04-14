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
  name: 'head-to-head',
  description: 'Play someone head to head',
  options: [
    {
      name: 'list',
      description: 'The list of users to play head to head',
      type: 3,
      required: true,
      choices: [
        {
          name: 'User A',
          value: 'pair_userA',
          tournament: {
            name: 'Milk Stevens',
            value: 'tournament_milkstevens',
          },
        },
        {
          name: 'User A',
          value: 'pair_userA',
          tournament: {
            name: 'Survivor Fighters',
            value: 'tournament_survivorfighters',
          },
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
  .editCommand(command, '831703341755138059')
  .then(console.log)
  .catch(console.error);
