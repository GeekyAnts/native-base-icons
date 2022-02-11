const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  externals: {
    react: "react",
    "react-native": "react-native",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        include: [
          path.join(__dirname, "."),
          path.join(
            __dirname,
            "..",
            "node_modules",
            "react-native-vector-icons"
          ),
        ],
        loader: require.resolve("babel-loader"),
        options: {
          compact: true,
        },
      },
      {
        loader: require.resolve("file-loader"),
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
};
