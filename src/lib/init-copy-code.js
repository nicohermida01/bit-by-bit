import { addCopyButtons } from '@/lib/copy-code'

document.addEventListener('DOMContentLoaded', () => {
	addCopyButtons()
})

document.addEventListener('astro:after-swap', () => {
	addCopyButtons()
})
