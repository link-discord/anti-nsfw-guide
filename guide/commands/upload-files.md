# Upload Files

You can use this command to make the bot log the images it filtered out.
This requires you to have a logs channel already set using the [set-logs](/commands/set-logs/) command.

::: warning
This command requires you to have the `Manage Guild` permission.
:::

## Usage
<br />
<DiscordMessages>
	<DiscordMessage profile="user">
		/upload-files true
	</DiscordMessage>
	<DiscordMessage profile="bot">
		The bot will now log removed NSFW images and store them for a limited time.
	</DiscordMessage>
    <DiscordMessage profile="user">
		/upload-files false
	</DiscordMessage>
    <DiscordMessage profile="bot">
        The bot will no longer log deleted NSFW images.
    </DiscordMessage>
</DiscordMessages>