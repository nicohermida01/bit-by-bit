export function NavbarLogo() {
	const handleClickOnLogo = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<button onClick={handleClickOnLogo} className='cursor-pointer'>
			<img
				src='/images/byb_logo.png'
				alt='Bit by Bit Logo'
				width='50'
				height='50'
			/>
		</button>
	)
}
