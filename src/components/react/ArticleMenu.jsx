import {
	Dropdown,
	DropdownTrigger,
	Button,
	DropdownMenu,
	DropdownItem,
} from '@heroui/react'

const MenuIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M4 12h16' />
			<path d='M4 18h16' />
			<path d='M4 6h16' />
		</svg>
	)
}

export function ArticleMenu({ items }) {
	const handleItemClick = item => {
		const elem = document.getElementById(item.slug)
		if (elem) elem.scrollIntoView()
	}

	return (
		<Dropdown placement='bottom-end'>
			<DropdownTrigger>
				<Button
					variant='solid'
					isIconOnly
					title='Menú de navegación'
					aria-label='article navigation menu'
				>
					<MenuIcon />
				</Button>
			</DropdownTrigger>

			<DropdownMenu aria-label='Article menu'>
				{items.map((item, index) => (
					<DropdownItem key={index} onClick={() => handleItemClick(item)}>
						{item.text}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	)
}
