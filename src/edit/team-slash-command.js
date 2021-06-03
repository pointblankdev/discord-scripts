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
  name: 'teams',
  description: 'Get a list of teams',
  options: [
    {
      name: 'limit',
      description: 'Number of teams shown',
      type: 4,
      required: false,
    },
  ],
};

//will edit the details of a command.
client
  .editCommand(command, '831647612939534397')
  .then(console.log)
  .catch(console.error);
