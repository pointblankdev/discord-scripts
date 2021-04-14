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
  name: 'sponsor',
  description: 'Sponsor a tournament',
  options: [
    {
      name: 'list',
      description: 'The list of tournaments to sponsor',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Tournament A',
          value: 'sponsor_tournamentA',
        },
        {
          name: 'Tournament B',
          value: 'sponsor_tournamentB',
        },
      ],
    },
    {
      name: 'limit',
      description: 'Number of tournaments shown',
      type: 5,
      required: false,
    },
  ],
};

//will edit the details of a command.
client
  .editCommand(command, '831699341156679700')
  .then(console.log)
  .catch(console.error);
