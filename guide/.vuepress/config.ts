import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
	lang: 'en-US',
	title: 'Anti NSFW Guide',
	description: 'The official guide for Anti NSFW.',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#820243' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Anti NSFW Guide' }],
		['meta', { property: 'og:description', content: 'The official guide for Anti NSFW.' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://anti-nsfw.netlify.app/' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: '/meta-image.png' }],
	],
	theme: path.join(__dirname, 'theme', 'index.ts'),
	themeConfig: {
		contributors: false,
		sidebar,
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		smoothScroll: true,
		lastUpdated: true,
		docsRepo: 'https://github.com/link-discord/anti-nsfw-guide',
		navbar: [
			{
				text: 'Support Server',
				link: 'https://discord.gg/wnsuUvCDKV',
			}
		],
		themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [],
});

export default config;