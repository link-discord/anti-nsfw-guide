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
                '/commands/set-logs.md',
                '/commands/support.md'
            ]
        }
    ]
}
