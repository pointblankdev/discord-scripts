// https://www.npmjs.com/package/discord-slash-commands-client
const interactions = require('discord-slash-commands-client');
require('dotenv').config();

const client = new interactions.Client(
  process.env.TOKEN,
  process.env.CLIENT_ID
);

// list all your existing commands.
client.getCommands().then(console.log).catch(console.error);

const command = {
  name: 'blep',
  description: 'Send a random adorable animal photo',
  options: [
    {
      name: 'animal',
      description: 'The type of animal',
      type: 3,
      required: true,
      choices: [
        {
          name: 'Dog',
          value: 'animal_dog',
        },
        {
          name: 'Cat',
          value: 'animal_cat',
        },
        {
          name: 'Penguin',
          value: 'animal_penguin',
        },
      ],
    },
    {
      name: 'only_smol',
      description: 'Whether to show only baby animals',
      type: 5,
      required: false,
    },
  ],
};

//will delete command.
client
  .deleteCommand('828893471280070666')
  .then(console.log)
  .catch(console.error);


