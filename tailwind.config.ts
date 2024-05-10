import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				white: '#edf2f4'
			},
			fontFamily: {
				title: ['var(--font-title)'],
				body: ['var(--font-body)']
			},
			borderWidth: {
				'1': '1px'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			spacing: {
				unit: 'var(--unit)',
				'unit/2': 'calc(var(--unit)/2)'
			}
		}
	},
	plugins: []
};
export default config;
