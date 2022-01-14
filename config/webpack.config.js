const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob');
const list = {}
async function makeList(dirPath, list) {
	const files = glob.sync(`${dirPath}/**/index.js`)
	for (let file of files) {
		const component = file.split(/[/.]/)[2]
		list[component] = `./${file}`;
	}
}
makeList('components/lib', list)
// list打包插件
// main.js打包预览
module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: './examples/main.js',
	mode: 'development',
	output: {
		filename: '[name].umd.js',
		path: path.resolve(__dirname, '../dist'),
		library: 'gdui',
		libraryTarget: 'umd'
	},
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.m?js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
				exclude: /(node_modules|bower_components)/, // 千万别忘记添加exclude选项,不然运行可能会报错
			},
		]
	}
}