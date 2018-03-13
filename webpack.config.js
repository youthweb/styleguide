var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractCss = new ExtractTextPlugin({
	filename: "[name].css"
});

module.exports = {
	entry: {
		main: './source/js/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'source/dist')
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ExtractCss.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader'
					}, {
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins: function () { // post css plugins, can be exported to postcss.config.js
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					}, {
						loader: 'sass-loader'
					}],
				}),
			},
		]
	},
	plugins: [
		ExtractCss,
	],
};
