import { defineCollection, z } from 'astro:content'

const articlesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		img: z.string(),
		description: z.string(),
		publishedAt: z.date(),
		lastUpdate: z.date(),
		ready: z.boolean().default(false),
	}),
})

export const collections = { articles: articlesCollection }
