const path = require('path');

const config = {
    entry: {
        vendor: ['@babel/polyfill', 'react'],
        home: ['./webpack/entries/home.js'],
        firstssr: ['./webpack/entries/firstssr.js'],
        allRecipes: ['./webpack/entries/allRecipes.js'],
        createRecipe: ['./webpack/entries/createRecipe.js'],
        recipe: ['./webpack/entries/recipe.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.wasm', 'mjs', '*']
    }
};

module.exports = config;