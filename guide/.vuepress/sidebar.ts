export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
				'/test.md'
			],
		},
		{
			text: 'Commands',
			children: [
				'/commands/',
				'/commands/ping.md'
			],
		}
	],
};
