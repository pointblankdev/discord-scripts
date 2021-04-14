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
  name: 'participants',
  description: 'Select a team',
  options: [
    {
      name: 'list',
      description: 'The list of teams to join',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Heats',
          value: 'team_heats',
        },
        {
          name: 'Free for All',
          value: 'team_freeforall',
        },
        {
          name: 'Chess Ladies',
          value: 'team_chessladies',
        },
      ],
    },
    {
      name: 'limit',
      description: 'Number of teams shown',
      type: 5,
      required: false,
    },
  ],
};

//will edit the details of a command.
client
  .editCommand(command, '831699827115950130')
  .then(console.log)
  .catch(console.error);
