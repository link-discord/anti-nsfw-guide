const { Client, Intents } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'react') {
		const message = await interaction.reply('You can react with Unicode emojis!', { fetchReply: true });
		message.react('😄');
	} else if (interaction.commandName === 'react-custom') {
		const message = await interaction.reply('You can react with custom emojis!', { fetchReply: true });
		message.react('123456789012345678');
	} else if (interaction.commandName === 'fruits') {
		const message = await interaction.reply('Reacting with fruits!', { fetchReply: true });
		message.react('🍎')
			.then(() => message.react('🍊'))
			.then(() => message.react('🍇'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});

client.login('your-token-goes-here');
