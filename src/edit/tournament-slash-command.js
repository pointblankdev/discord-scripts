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
  name: 'tournaments',
  description: 'Select a tournament',
  options: [
    {
      name: 'limit',
      description: 'Number of tournaments shown',
      type: 4,
      required: false,
    },
  ],
};

//will edit the details of a command.
client
  .editCommand(command, '831601233621942354')
  .then(console.log)
  .catch(console.error);
