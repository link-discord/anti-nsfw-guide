import { defineClientAppEnhance } from '@vuepress/client'
import {
    DiscordButton,
    DiscordButtons,
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordInteraction,
    DiscordMarkdown,
    DiscordMention,
    DiscordMessage,
    DiscordMessages,
    DiscordReaction,
    DiscordReactions,
    install as DiscordMessageComponents
} from '@discord-message-components/vue'
import djsAvatar from './assets/discord-avatar-djs.png'
import '@discord-message-components/vue/dist/style.css'

export default defineClientAppEnhance(({ app }) => {
    app.use(DiscordMessageComponents, {
        avatars: {
            djs: djsAvatar
        },
        profiles: {
            user: {
                author: 'User',
                avatar: 'green'
            },
            bot: {
                author: 'Anti NSFW',
                avatar: 'djs',
                bot: true
            }
        }
    })

    app.component('DiscordButton', DiscordButton)
    app.component('DiscordButtons', DiscordButtons)
    app.component('DiscordEmbed', DiscordEmbed)
    app.component('DiscordEmbedField', DiscordEmbedField)
    app.component('DiscordEmbedFields', DiscordEmbedFields)
    app.component('DiscordInteraction', DiscordInteraction)
    app.component('DiscordMarkdown', DiscordMarkdown)
    app.component('DiscordMention', DiscordMention)
    app.component('DiscordMessage', DiscordMessage)
    app.component('DiscordMessages', DiscordMessages)
    app.component('DiscordReaction', DiscordReaction)
    app.component('DiscordReactions', DiscordReactions)
})
