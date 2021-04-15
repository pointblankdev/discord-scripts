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
  name: 'reported-games',
  description: 'Select a reported game',
  options: [
    {
      name: 'limit',
      description: 'Number of reported games shown',
      type: 4,
      required: false,
    },
  ],
};

//will edit the details of a command.
client
  .editCommand(command, '831911609240125520')
  .then(console.log)
  .catch(console.error);
