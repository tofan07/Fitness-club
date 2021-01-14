/* eslint-disable no-undef */
const path = require('path');

module.exports = {

	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		environment: {
			arrowFunction: false
		}
	},
	devServer: {
		open: true,
		port: 8080,
		hot: false,
		writeToDisk: true
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
