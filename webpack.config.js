const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './app/index.js',
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.join(__dirname,'build'),
		publicPath: '/js',
		filename: '[name].js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url'
			},
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		})
	],
	devServer: {
		historyApiFallback:true,
		inline:true,
		hot:true,
		stats: 'error-only',
		contentBase: './app',
		colors: true
	}
}