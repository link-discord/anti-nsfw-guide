# Set Threshold

Lets you set the threshold potentional NSFW images need to be pass to be considered actual NSFW.<br />
You can set the threshold in % and if the prediction is higher than your threshold the message is deleted.

::: warning
This command requires you to have the `Manage Guild` permission.<br />
The threshold must be between 50% and 98%.
:::

## Usage

<br />
<DiscordMessages>
	<DiscordMessage profile="user">
		/set threshold 80
	</DiscordMessage>
	<DiscordMessage profile="bot">
		The logs channel has been set to 80%
	</DiscordMessage>
</DiscordMessages>
