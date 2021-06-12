const client = require('./Commands');

//note command names cannot have mixed-case names will be rejected by the API with a HTTP 400 (Bad Request) response.

test('should get commands', async () => {
  console.log(await client.getCommands({}));
});

test('should delete command by id', async () => {
  console.log(await client.deleteCommand('849943387422982195'));
});

test('edit command by id', async () => {
  const command = {
    name: 'gamereports',
    description: 'List game reports',
    options: [
      {
        name: 'limit',
        description: 'Number of reported games shown',
        type: 4,
        required: false,
      },
    ],
  };

  try {
    await client.editCommand(command, '83191160924012552');
  } catch (error) {
    console.log(error);
  }
});

test('create command', async () => {
  const command = {
    name: 'tournaments',
    description: 'Get a list of recent Gather tournaments',
    options: [
      {
        name: 'limit',
        description: 'Number of tournaments shown - Max 10',
        type: 4,
        required: true,
      },
      {
        name: 'game',
        description: 'Check tournaments for a specific game',
        type: 3,
        required: true,
        choices: [
          {
            name: 'Fortnite',
            value: '1',
          },
          {
            name: 'PUBG',
            value: '2',
          },
          {
            name: 'Counter-Strike: Global Offensive',
            value: '3',
          },
          {
            name: 'Apex Legends',
            value: '4',
          },
          {
            name: 'COD: Warzone',
            value: '5',
          },
          {
            name: 'COD: Modern Warfare',
            value: '8',
          },
          {
            name: 'Madden',
            value: '9',
          },
          {
            name: 'FIFA',
            value: '10',
          },
          {
            name: 'NBA 2K',
            value: '11',
          },
          {
            name: 'Valorant',
            value: '12',
          },
          {
            name: 'Rocket League',
            value: '13',
          },
          {
            name: 'League of Legends',
            value: '14',
          },
          {
            name: 'COD: Mobile',
            value: '15',
          },
          {
            name: 'Super Smash Bros',
            value: '16',
          },
          {
            name: 'Overwatch',
            value: '17',
          },
          {
            name: 'COD: Black Ops Cold War',
            value: '19',
          },
          {
            name: 'Among Us',
            value: '20',
          },
          {
            name: 'Chess',
            value: '21',
          },
        ],
      },
    ],
  };

  try {
    await client.createCommand(command);
  } catch (error) {
    console.log(error);
  }
});
