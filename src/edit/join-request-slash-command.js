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
  name: 'join-requests',
  description: 'Send a join request',
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
          name: 'Meta Frisbee',
          value: 'team_metafrisbee',
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
  .editCommand(command, '831702952371552296')
  .then(console.log)
  .catch(console.error);
