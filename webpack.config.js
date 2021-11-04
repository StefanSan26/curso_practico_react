const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),    
		filename: "curso_practico_react/bundle.js",
		publicPath: "/curso_practico_react/"
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"],
		alias: {
			'@components' : path.resolve(__dirname, 'src/components/'),
			'@icons' : path.resolve(__dirname, 'src/assets/icons/'),
			'@logos' : path.resolve(__dirname, 'src/assets/logos/'),
			'@containers' : path.resolve(__dirname, 'src/containers/'),
			'@pages' : path.resolve(__dirname, 'src/pages/'),
			'@styles' : path.resolve(__dirname, 'src/styles/'),
		}
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset'
			}
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new miniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
		historyApiFallback: true,	
  },
};
