const client = require('./Commands');

//note command names cannot have mixed-case names will be rejected by the API with a HTTP 400 (Bad Request) response.

test('should get commands', async () => {
  console.log(await client.getCommands({}));
});

test('should delete command by id', async () => {
  console.log(await client.deleteCommand('831911609240125520'));
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
  try {
    await client.createCommand({
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
    });
  } catch (error) {
    console.log(error);
  }
});
