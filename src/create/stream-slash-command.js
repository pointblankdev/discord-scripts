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
          name: 'Tournament 1',
          value: 'stream_tournament1',
        },
        {
          name: 'Tournamet 2',
          value: 'stream_tournament2',
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

// will create a new command and log its data. If a command with this name already exist will that be overwritten.
client.createCommand(command).then(console.log).catch(console.error);
