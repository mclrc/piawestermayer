import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	modules: [
		'@nuxt/content',
	],
	content: {
		theme: 'github-dark',
		documentDriven: true,
	},
})
