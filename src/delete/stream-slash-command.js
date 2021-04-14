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
  name: 'stream',
  description: 'Stream a tournament',
  options: [
    {
      name: 'list',
      description: 'The list of tournaments to stream',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Tournament A',
          value: 'stream_tournamentA',
        },
        {
          name: 'Tournamet B',
          value: 'stream_tournamentB',
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

//will delete command
client
  .deleteCommand('831699191486611487')
  .then(console.log)
  .catch(console.error);
