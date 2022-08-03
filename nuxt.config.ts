import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-schema-org'
	],
	schemaOrg: {
		canonicalHost: 'https://presskit.timbenniks.dev',
	},
})
