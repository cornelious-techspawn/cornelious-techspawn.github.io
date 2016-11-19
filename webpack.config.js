module.export = {
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
}