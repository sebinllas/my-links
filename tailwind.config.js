const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				amber: colors.amber,
			},
			spacing: {
				'8px': '8px',
				'12px': '12px',
				'16px': '16px',
				'24px': '24px',
				'32px': '32px',
				'48px': '48px',
				'72px': '72px',
				'96px': '96px',
			},
		},
	},
	variants: {
		extend: { visibility: ['group-hover'] },
	},
	plugins: [],
};

