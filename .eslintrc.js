module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'prettier',
		'@nuxtjs',
		'eslint:recommended',
		'plugin:nuxt/recommended',
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'prettier/prettier': 'error',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': 0,
		'no-nested-ternary': 0,
		'import/order': 0,
		'import/no-extraneous-dependencies': 0,
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: false },
		],
		'vue/html-indent': 0,
		'vue/attribute-hyphenation': 0,
		'vue/html-self-closing': 0,
		'vue/no-v-html': 0,
		'vue/singleline-html-element-content-newline': 0,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.vue'],
			},
		},
	},
};
