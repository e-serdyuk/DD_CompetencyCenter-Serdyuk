var path = require('path');

module.exports = {
	entry: './src/main.jsx', 
	output: {
		filename: 'bundle.js', 
		path: path.resolve(__dirname,'build')
	},
	watch:true,
	 
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				query:
				{
				    presets: ['es2015', 'react']
			    }
            }
		]
	}
}