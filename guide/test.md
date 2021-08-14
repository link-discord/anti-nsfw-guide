# Test Page

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit libero volutpat sed cras ornare. Eget nullam non nisi est sit amet facilisis magna etiam. Cum sociis natoque penatibus et magnis dis. Mauris in aliquam sem fringilla ut morbi tincidunt. Sagittis id consectetur purus ut faucibus pulvinar. Suspendisse potenti nullam ac tortor. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Netus et malesuada fames ac turpis egestas integer eget aliquet. Enim eu turpis egestas pretium aenean pharetra magna. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Morbi enim nunc faucibus a pellentesque. Proin libero nunc consequat interdum varius sit. Lorem dolor sed viverra ipsum nunc. Pulvinar pellentesque habitant morbi tristique senectus. Volutpat lacus laoreet non curabitur gravida arcu. Non blandit massa enim nec dui nunc. Et malesuada fames ac turpis egestas sed.

- this
- is
- a
- list

## Code Block

```ts
import { CommandInteraction } from "discord.js";
import { BotClient, BotCommand } from "../classes/index";

export default class PingCommand extends BotCommand {
	constructor(client: BotClient) {
		super(client, {
			name: "ping",
			description: "Returns the ping of the bot.",
		});
	}

	async execute(interaction: CommandInteraction) {
		await interaction.reply(`My ping is \`${this.client.ws.ping}ms\``);
	}
}
```

## Disclaimers

::: tip
This is a tip message
:::

::: warning
This is a warning message
:::

::: danger
This is a danger message
:::

## Usage
<br />
<DiscordMessages>
	<DiscordMessage profile="user">
		/set-logs <bold>#channel</bold>
	</DiscordMessage>
	<DiscordMessage profile="bot">
		The logs channel has been set to <code class="discord-message-inline-code">#channel</code>.
	</DiscordMessage>
</DiscordMessages>