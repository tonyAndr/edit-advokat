const webpack = require( 'webpack' );
const NODE_ENV = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	mode: NODE_ENV,
    entry: './src/index.js',
    resolve: {
        extensions: ['.js']
    },
	output: {
		path: __dirname,
		filename: './build/build.js'
	},
	module: {
		rules: [
			{
				test: /.js?$/,
				use: [ {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
						plugins: [
							'@babel/plugin-transform-async-to-generator',
							'@babel/plugin-proposal-object-rest-spread',
							[
								'@babel/plugin-transform-react-jsx', {
									'pragma': 'wp.element.createElement'
								}
							]
						]
					}
				}],
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss)$/,
				use: [ {
                    loader: MiniCssExtractPlugin.loader,
				},
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
                        postcssOptions: {
                            plugins: [
                                require( 'autoprefixer' )
                            ]
                        },
					},
				},
				'sass-loader' ]
            }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify( NODE_ENV )
		}),
		new MiniCssExtractPlugin({
			filename: './build/build.css'
		})
	]
};
