module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			display: ['Nunito'],
			body: ['Nunito'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
