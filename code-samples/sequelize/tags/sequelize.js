const Sequelize = require('sequelize');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

/*
 * Make sure you are on at least version 5 of Sequelize! Version 4 as used in this guide will pose a security threat.
 * You can read more about this issue on the [Sequelize issue tracker](https://github.com/sequelize/sequelize/issues/7310).
 */

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});

client.once('ready', () => {
	/*
	 * equivalent to: CREATE TABLE tags(
	 * name VARCHAR(255),
	 * description TEXT,
	 * username VARCHAR(255),
	 * usage_count INT NOT NULL DEFAULT 0
	 * );
	 */
	Tags.sync();
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName: command } = interaction;

	if (command === 'addtag') {
		const tagName = interaction.options.getString('name');
		const tagDescription = interaction.options.getString('description');

		try {
			// equivalent to: INSERT INTO tags (name, descrption, username) values (?, ?, ?);
			const tag = await Tags.create({
				name: tagName,
				description: tagDescription,
				username: interaction.author.username,
			});
			return interaction.reply(`Tag ${tag.name} added.`);
		} catch (error) {
			if (error.name === 'SequelizeUniqueConstraintError') {
				return interaction.reply('That tag already exists.');
			}
			return interaction.reply('Something went wrong with adding a tag.');
		}
	} else if (command === 'tag') {
		const tagName = interaction.options.getString('name');

		// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
		const tag = await Tags.findOne({ where: { name: tagName } });
		if (tag) {
			// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
			tag.increment('usage_count');
			return interaction.reply(tag.get('description'));
		}
		return interaction.reply(`Could not find tag: ${tagName}`);
	} else if (command === 'edittag') {
		const tagName = interaction.options.getString('name');
		const tagDescription = interaction.options.getString('description');

		// equivalent to: UPDATE tags (descrption) values (?) WHERE name = ?;
		const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
		if (affectedRows > 0) {
			return interaction.reply(`Tag ${tagName} was edited.`);
		}
		return interaction.reply(`Could not find a tag with name ${tagName}.`);
	} else if (command === 'taginfo') {
		const tagName = interaction.options.getString('name');

		// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
		const tag = await Tags.findOne({ where: { name: tagName } });
		if (tag) {
			return interaction.reply(`${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
		}
		return interaction.reply(`Could not find tag: ${tagName}`);
	} else if (command === 'showtags') {
		const tagList = await Tags.findAll({ attributes: ['name'] });
		const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
		return interaction.reply(`List of tags: ${tagString}`);
	} else if (command === 'removetag') {
		// equivalent to: DELETE from tags WHERE name = ?;
		const tagName = interaction.options.getString('name');
		const rowCount = await Tags.destroy({ where: { name: tagName } });
		if (!rowCount) return interaction.reply('That tag did not exist.');
		return interaction.reply('Tag deleted.');
	}
});

client.login('your-token-goes-here');
