/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // Habilita el soporte para el modo oscuro
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}