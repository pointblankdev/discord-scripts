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
  name: 'tournament',
  description: 'Select a tournament',
  options: [
    {
      name: 'list',
      description: 'The list of tournaments',
      type: 1,
      required: true,
      choices: [
        {
          name: 'Warzone',
          value: 'tournament_warzone',
        },
        {
          name: 'Goated',
          value: 'tournament_goated',
        },
        {
          name: 'Milk Stevens',
          value: 'tournament_milkstevens',
        },
        {
          name: 'Survivor Fighters',
          value: 'tournament_survivorfighters',
        },
        {
          name: 'Fortnite',
          value: 'tournament_fortnite',
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

// // will create a new command and log its data. If a command with this name already exist will that be overwritten.
// client.createCommand(command).then(console.log).catch(console.error);

// will edit the details of a command.
client
  .editCommand(
    command,
    "831601233621942354"
  )
  .then(console.log)
  .catch(console.error);

// // will delete a command
// client
//   .deleteCommand("id of the command you wish to delete")
//   .then(console.log)
//   .catch(console.error);
