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
	description: 'Imagine a guide... that shows you how to properly use Anti NSFW.',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Anti NSFW Guide' }],
		['meta', { property: 'og:description', content: 'Imagine a guide... that shows you how to properly use Anti NSFW.' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://discordjs.guide/' }],
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
		lastUpdated: false,
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

// if (process.env.NODE_ENV === 'production') {
// 	config.plugins.push(
// 		[
// 			'@vuepress/plugin-docsearch',
// 			{
// 				apiKey: process.env.ALGOLIA_DOCSEARCH_API_KEY,
// 				indexName: 'antinsfw',
// 				placeholder: 'Search guide',
// 			},
// 		]
// 	);
// }

export default config;
