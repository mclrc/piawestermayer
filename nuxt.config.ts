import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	app: {
		head: {
			script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
		},
	},
	modules: [
		'@nuxt/content',
	],
	content: {
		documentDriven: true,
	},
})
