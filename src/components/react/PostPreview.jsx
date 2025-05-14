import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { capitalize } from '@/lib/capitalize'

export function PostPreview({ img, title, description, publishedAt, slug }) {
	const fecha = new Date(publishedAt)
	const formattedDate = format(fecha, 'MMMM dd, yyyy', { locale: es })

	return (
		<a href={`/article/${slug}`} className='inline-block'>
			<article className='w-full sm:w-[300px] h-[500px] rounded-lg overflow-hidden post-article hover:shadow-xl'>
				<div className='w-full h-[200px] overflow-hidden rounded-lg flex justify-center'>
					<img
						src={`/images/${img}`}
						alt={title}
						height='200'
						width='300'
						className='rounded-lg'
						transition:name={`img-${slug}`}
					/>
				</div>

				<div className='p-5 overflow-hidden'>
					<p className='text-xs my-3 text-zinc-600'>
						{capitalize(formattedDate)}
					</p>
					<h3 className='font-bold text-xl'>{title}</h3>
					<p className='text-sm text-zinc-500 mt-3 overflow-hidden text-ellipsis line-clamp-9'>
						{description}
					</p>
				</div>
			</article>
		</a>
	)
}
