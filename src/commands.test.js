const client = require('./Commands');

test('should get commands', async () => {
  console.log(await client.getCommands({}));
});

// test('should delete command by id', async () => {
//   console.log(await client.deleteCommand('849336487370817537'));
// });

// test('edit command by id', async () => {
//   const command = {
//     name: 'headToHeads',
//     description: 'list head to heads',
//     options: [
//       {
//         name: 'limit',
//         description: 'Number of head to heads shown',
//         type: 4,
//         required: false,
//       },
//     ],
//   };
//   try {
//     console.log(await client.editCommand(command, '831703341755138059'));
//   } catch (error) {
//     console.log(error);
//   }
// });

test('create command', async () => {
  try {
    await client.createCommand({
      name: 'headtoheads',
      description: 'List head to heads',
      options: [
        {
          name: 'limit',
          description: 'Number of head-to-heads shown',
          type: 4,
          required: false,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
});
