// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import rehypePrettyCode from 'rehype-pretty-code'

import react from '@astrojs/react'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: ['18fb-181-231-169-231.ngrok-free.app'],
		},
	},

	markdown: {
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					theme: 'github-light',
					keepBackground: false,
					onVisitLine(node) {
						// This function is called for each line of code
						// If the line is empty, we add a space to prevent it from being removed
						if (node.children.length === 0) {
							node.children.push({ type: 'text', value: ' ' })
						}
					},
				},
			],
		],
	},

	integrations: [react({ include: ['**/react/*'] })],

	output: 'server',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
})
