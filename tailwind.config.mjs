import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0070f3',
					dark: '#003c8f',
				},
				secondary: {
					DEFAULT: '#f81ce5',
					dark: '#db2777',
				},
			},
			fontFamily: {
				mono: ['Geist Mono', ...defaultTheme.fontFamily.sans],
				sans: ['Geist Sans', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.no-scrollbar': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',

					/* Firefox */
					'scrollbar-width': 'none',

					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			});
		}),
		require('tailwindcss-animate'),
	],
};
