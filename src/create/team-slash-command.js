/// https://www.npmjs.com/package/discord-slash-commands-client
const interactions = require('discord-slash-commands-client');
require('dotenv').config();

const client = new interactions.Client(
  process.env.TOKEN,
  process.env.CLIENT_ID
);

// list all your existing commands.
//client.getCommands().then(console.log).catch(console.error);

const command = {
  name: 'team',
  description: 'Select a team',
  options: [
    {
      name: 'list',
      description: 'The list of teams',
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

// will create a new command and log its data. If a command with this name already exist will that be overwritten.

client.createCommand(command).then(console.log).catch(console.error);

// to check for errors
// client
//   .createCommand(command)
//   .then(console.log)
//   .catch((e) => {
//     console.error(e.toJSON());
//   });
