import { Configuration } from 'webpack';
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
	entry: "./src/main.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "firefox-addon-sample"
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/manifest.json"),
					to: path.resolve(__dirname, "dist/manifest.json")
				},
				{
					from: path.resolve(__dirname, "src/icons/*.png"),
					to: path.resolve(__dirname, "dist/icons/[name][ext]")
				}
			]
		})
	],
	mode: "production",
}
export default config;