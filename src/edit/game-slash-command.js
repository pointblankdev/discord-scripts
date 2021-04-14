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
  name: 'games',
  description: 'Select a game',
  options: [
    {
      name: 'list',
      description: 'The list of games',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Fortnite',
          value: 'game_fortnite',
        },
        {
          name: 'Apex Legends',
          value: 'game_apexlegends',
        },
        {
          name: 'Counter Strike',
          value: 'game_counterstrike',
        },
        {
          name: 'Chess',
          value: 'game_chess',
        },
      ],
    },
    {
      name: 'limit',
      description: 'Number of games shown',
      type: 5,
      required: false,
    },
  ],
};

//will edit the details of a command.
client
  .editCommand(command, '831914999047782410')
  .then(console.log)
  .catch(console.error);
