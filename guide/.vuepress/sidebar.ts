export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/'
			],
		},
		{
			text: 'Commands',
			children: [
				'/commands/',
				'/commands/info.md',
				'/commands/ping.md',
				'/commands/scan.md',
				'/commands/set-logs.md',
				'/commands/support.md',
				'/commands/upload-files.md'
			],
		}
	],
};
