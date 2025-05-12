export function addCopyButtons() {
	document.querySelectorAll('pre code').forEach(codeBlock => {
		const pre = codeBlock.parentNode

		// Evitar botones duplicados
		if (pre.querySelector('.copy-button')) return

		const button = document.createElement('button')
		button.className = 'copy-button'
		button.type = 'button'
		button.innerText = 'Copiar'

		button.addEventListener('click', () => {
			const code = codeBlock.innerText
			navigator.clipboard.writeText(code).then(() => {
				button.innerText = 'Copiado!'
				setTimeout(() => {
					button.innerText = 'Copiar'
				}, 2000)
			})
		})

		pre.appendChild(button)
	})
}

/* document.querySelectorAll('pre code').forEach(codeBlock => {
	const button = document.createElement('button')
	button.className = 'copy-button'
	button.type = 'button'
	button.innerText = 'Copiar'

	button.addEventListener('click', () => {
		const code = codeBlock.innerText
		navigator.clipboard.writeText(code).then(() => {
			button.innerText = 'Copiado!'
			setTimeout(() => {
				button.innerText = 'Copiar'
			}, 2000)
		})
	})

	const pre = codeBlock.parentNode
	if (pre.parentNode.classList.contains('code-container')) {
		pre.parentNode.appendChild(button)
	} else {
		pre.appendChild(button)
	}
}) */
