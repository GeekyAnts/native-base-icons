const path = require('path');


module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    externals: ['react', 'react-dom', 'react-native'],
    module: {
        rules: [
            // {
            //     test: /\.(json)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //         },
            //     ],
            // },
            {
                test: /\.(js|jsx|mjs|ts|tsx)$/,
                include: [
                    path.join(__dirname, '.'),
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