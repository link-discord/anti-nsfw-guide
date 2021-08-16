import path from 'path'
import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'
import sidebar from './sidebar'

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    bundler: '@vuepress/vite',
    templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
    templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
    lang: 'en-US',
    title: 'Anti NSFW Guide',
    description: 'The official guide for Anti NSFW.',
    head: [
        ['script', { src: 'https://arc.io/widget.min.js#Mrx2qVyY' }],
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#1d1d1d' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/icon-152x152.png', color: '#fb0881' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#1d1d1d' }],
        ['meta', { property: 'og:title', content: 'Anti NSFW Guide' }],
        ['meta', { property: 'og:description', content: 'The official guide for Anti NSFW.' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://anti-nsfw.netlify.app/' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { property: 'og:image', content: '/meta-image.png' }]
    ],
    theme: path.join(__dirname, 'theme', 'index.ts'),
    themeConfig: {
        contributors: false,
        sidebar,
        docsDir: 'guide',
        sidebarDepth: 3,
        editLinks: true,
        smoothScroll: true,
        backToTop: true,
        lastUpdated: true,
        docsRepo: 'https://github.com/link-discord/anti-nsfw-guide',
        navbar: [
            {
                text: 'Invite Anti NSFW',
                link: 'https://discord.com/oauth2/authorize?client_id=706054368318980138&scope=applications.commands+bot&permissions=69256439808'
            },
            {
                text: 'Support Server',
                link: 'https://discord.gg/wnsuUvCDKV'
            }
        ],
        themePlugins: {
            mediumZoom: false
        }
    },
    plugins: ['@vuepress/pwa', 'vuepress-plugin-nprogress', 'vuepress-plugin-smooth-scroll']
})

export default config
