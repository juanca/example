module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	sections: [{
		name: 'External Link',
		href: 'https://www.google.com',
	}, {
		name: 'Components',
		components: './src/components/**/*.js',
	}],
	skipComponentsWithoutExample: false,
	webpackConfig: {
		devServer: {
			// Docs: https://codesandbox.io/docs/environment#how-can-i-tell-if-i-am-in-a-container-sandbox
			disableHostCheck: !!process.env.CODESANDBOX_SSE,
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						},
					],
				},
			],
		},
	},
};
