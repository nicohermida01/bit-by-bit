import { Searchbox } from '@/components/react/Searchbox'
import { useEffect, useState } from 'react'
import { PostPreview } from '@/components/react/PostPreview'
import { p } from 'framer-motion/client'

export function PublicationsList() {
	const [publications, setPublications] = useState([])
	const [searchInput, setSearchInput] = useState('')

	const fetchArticles = async searchTerm => {
		const response = await fetch('/api/articles.json', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ search: searchTerm }),
		})

		const data = await response.json()
		setPublications(data)
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			fetchArticles(searchInput)
		}, 300) // dbounce de 300ms para evitar demasiadas solicitudes
		return () => clearTimeout(timeoutId)
	}, [searchInput])

	return (
		<>
			<div className='flex justify-center'>
				<Searchbox inputValue={searchInput} handleOnChange={setSearchInput} />
			</div>
			<main className='flex flex-wrap justify-center gap-8 mt-[50px]'>
				{publications &&
					publications.map(post => {
						const { slug, data } = post

						return <PostPreview {...data} slug={slug} key={slug} />
					})}
				{publications.length === 0 && (
					<p>
						No se encontró ningún resultado para:{' '}
						<span className='bg-secondary inline-block px-2 py-1 rounded-lg ml-1'>
							{searchInput}
						</span>
					</p>
				)}
			</main>
		</>
	)
}
