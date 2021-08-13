# Command handling

Unless your bot project is a small one, it's not a very good idea to have a single file with a giant if/else if chain for commands. If you want to implement features into your bot and make your development process a lot less painful, you'll want to implement a command handler. Let's get started on that!

Here's the base code we'll be using:

```js
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong.');
	} else if (interaction.commandName === 'beep') {
		await interaction.reply('Boop!');
	}
	// ...
});

client.login(token);
```

## Individual command files

Before anything, you may want to create a backup of your current bot file. If you've followed along so far, your entire folder structure should look something like this:

```:no-line-numbers
discord-bot/
├── node_modules
├── config.json
├── index.js
├── package-lock.json
└── package.json
```
Next, open your terminal and install the [`@discordjs/builders`](https://github.com/discordjs/builders) package by running `npm install @discordjs/builders`, as we'll be using the utility methods from this package in the following code samples.

In the same folder, create a new folder and name it `commands`. This is where you'll store all of your commands, of course. Head over to your `commands` folder, create a new file named `ping.js`, and copy & paste in the following code:

```js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
```

You can go ahead and do the same for the rest of your commands and put their respective blocks of code inside the `execute()` function. If you've been using the same code as the guide thus far, you can copy & paste your commands into their own files now, following the format above. The `description` property is optional but will be useful for the dynamic help command we'll be covering later.

::: tip
`module.exports` is how you export data in Node.js so that you can `require()` it in other files. If you're unfamiliar with it and want to read more, you can look at [the documentation](https://nodejs.org/api/modules.html#modules_module_exports) for more info.
:::

::: tip
If you need to access your client instance from inside one of your command files, you can access it via `interaction.client`. If you need to access external files, modules, etc., you should re-require them at the top of the file.
:::

## Reading command files

Back in your main file, make these two additions:

```js {1,6}
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
```

::: tip
`fs` is Node's native file system module. You can read the docs about it [here](https://nodejs.org/api/fs.html).
:::

::: tip
If you aren't exactly sure what <DocsLink section="collection" path="class/Collection"><code>Collection</code>s</DocsLink> are, they're a class that extend JavaScript's native [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) class and include more extensive, useful functionality.
:::

This next step is how you'll dynamically retrieve all your newly created command files. The [`fs.readdirSync()`](https://nodejs.org/api/fs.html#fs_fs_readdirsync_path_options) method will return an array of all the file names in a directory, e.g. `['ping.js', 'beep.js']`. To ensure only command files get returned, use `Array.filter()` to leave out any non-JavaScript files from the array. With that array, you can loop over it and dynamically set your commands to the Collection you made above.

```js {3,5-10}
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}
```

## Dynamically executing commands

With your `client.commands` Collection setup, you can use it to retrieve and execute your commands! Inside your `interactionCreate` event, delete your `if`/`else if` chain of commands and replace it with this:

```js {6-12}
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (!client.commands.has(interaction.commandName)) return;

	try {
		await client.commands.get(interaction.commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});
```

If there isn't a command with that name, you don't need to do anything further, so exit early with `return`. If there is, `.get()` the command, call its `.execute()` method, and pass in your `interaction` variable as its argument. In case something goes wrong, log the error and report back to the member to let them know.

And that's it! Whenever you want to add a new command, you make a new file in your `commands` directory, name it what you want, and then do what you did for the other commands.

::: tip
Please head to the interactions section to learn how to [register your slash commands](/interactions/registering-slash-commands.md).
:::

## Resulting code

<ResultingCode path="command-handling/file-setup" />
