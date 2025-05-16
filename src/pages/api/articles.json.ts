import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export async function POST({ request }) {
	const { search } = await request.json()
	const articles = await getCollection('articles')

	let filteredArticles = articles

	if (search != '') {
		filteredArticles = articles.filter(article =>
			article.data.title.toLowerCase().includes(search.toLowerCase())
		)
	}

	filteredArticles.sort((a, b) => {
		const aDate = new Date(a.data.publishedAt).getDate()
		const bDate = new Date(b.data.publishedAt).getDate()

		return bDate - aDate
	})

	return new Response(JSON.stringify(filteredArticles), {
		headers: { 'Content-Type': 'application/json' },
	})
}
