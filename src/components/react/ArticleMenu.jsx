import {
	Dropdown,
	DropdownTrigger,
	Button,
	DropdownMenu,
	DropdownItem,
} from '@heroui/react'

export function ArticleMenu({ items }) {
	const handleItemClick = item => {
		const elem = document.getElementById(item.slug)
		if (elem) elem.scrollIntoView()
	}

	return (
		<Dropdown placement='bottom-end'>
			<DropdownTrigger>
				<Button variant='solid'>Menu</Button>
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
