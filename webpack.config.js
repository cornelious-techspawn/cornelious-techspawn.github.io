var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	module: {
		loaders: [
			{test:/\.coffee$/, exclude:/node-modules/, loader:"coffee-loader"}
		]
	},
	output: {
		filename: "index.bundle.js",
		path: __dirname + '/dist'
	},
	plugins: [HTMLWebpackPluginConfig]
};