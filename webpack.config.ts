import { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
	entry: "./src/main.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	mode: "production",
}
export default config;