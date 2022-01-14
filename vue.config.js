module.exports = {
	lintOnSave: false,
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'puclic/index.html',
			filename: 'index.html'
		}
	},
	devServer: {
		open: true
	},
	runtimeCompiler: true
}