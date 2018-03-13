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
