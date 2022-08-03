import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-schema-org',
		'@nuxt/content'
	],
	schemaOrg: {
		canonicalHost: 'https://presskit.timbenniks.dev',
	},
})
