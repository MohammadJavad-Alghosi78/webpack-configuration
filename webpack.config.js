const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/", // IF YOUT WANT TO RUN PROJECT ON SERVER, YOU MUST SET PUBLICPATH TO YOUR SITE ADDRESS. EX: WWW.MYWEBSITE.COM
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][contenthash:5].[ext]", // TO SET BETTER NAME FOR IMAGES AFTER BUILD PROJECT
            },
          },
        ],
      },
    ],
  },
};
