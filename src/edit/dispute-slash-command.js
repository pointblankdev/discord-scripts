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
  name: 'disputes',
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
        {
          name: 'Chess',
          value: 'tournament_chess',
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

//will edit the details of a command.
client
  .editCommand(command, '831705792255623178')
  .then(console.log)
  .catch(console.error);
