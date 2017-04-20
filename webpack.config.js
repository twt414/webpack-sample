var htmlplugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packCSS = new ExtractTextPlugin('css/style.css'); 
var CleanPlugin = require('clean-webpack-plugin');
var path = require("path");

module.exports = {
	entry: ['./src/script/swiper-3.4.2.min.js','./src/script/index.js'],
	output:{
		path: __dirname +'/src',
		filename: 'script/[name].js'
	},
	module: {
		loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader!sass-loader"
            })
        },{
            test: /\.css$/,
            loader:ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        },{
            test: /\.(png|jpg|git|svg)$/i,
            loader: "file-loader",
            query:{
            	name:"/src/res/[name].[ext]"
            }
        }]
	},
	plugins:[
		packCSS,
        new htmlplugin({template : "index.html"})
	]
}
