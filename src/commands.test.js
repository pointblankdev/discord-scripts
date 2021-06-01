const client = require('./Commands');

test('should get commands', async () => {
  console.log(await client.getCommands({}));
});

test('should delete command by id', async () => {
  console.log(await client.deleteCommand('849198587418378250'));
});
