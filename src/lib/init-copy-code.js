import { addCopyButtons } from './copy-code.js'

document.addEventListener('DOMContentLoaded', () => {
	addCopyButtons()
})

document.addEventListener('astro:after-swap', () => {
	addCopyButtons()
})
