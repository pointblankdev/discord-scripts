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
  description: 'Select a match dispute',
  options: [
    {
      name: 'limit',
      description: 'Number of disputes shown',
      type: 4,
      required: false,
    },
  ],
};

//will edit the details of a command.
client
  .editCommand(command, '831705792255623178')
  .then(console.log)
  .catch(console.error);
