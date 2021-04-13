// https://www.npmjs.com/package/discord-slash-commands-client
const interactions = require('discord-slash-commands-client');

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

// will create a new command and log its data. If a command with this name already exist will that be overwritten.
client.createCommand(command).then(console.log).catch(console.error);

// // will edit the details of a command.
// client
//   .editCommand(
//     { name: "new command name", description: "new command description" },
//     "id of the command you wish to edit"
//   )
//   .then(console.log)
//   .catch(console.error);

// // will delete a command
// client
//   .deleteCommand("id of the command you wish to delete")
//   .then(console.log)
//   .catch(console.error);
