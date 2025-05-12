// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import rehypePrettyCode from 'rehype-pretty-code'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
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
})
