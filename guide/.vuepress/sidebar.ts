export default {
    '/': [
        {
            text: 'Home',
            children: ['/']
        },
        {
            text: 'Commands',
            children: [
                '/commands/',
                '/commands/help.md',
                '/commands/info.md',
                '/commands/ping.md',
                '/commands/scan.md',
				'/commands/set-language.md',
                '/commands/set-logs.md',
                '/commands/set-threshold.md',
				'/commands/strict.md',
                '/commands/support.md'
            ]
        },
        {
            text: 'Legal Stuff',
            children: ['/privacy-policy/', '/terms-of-service/']
        }
    ]
}
