module.exports = {
    entry: {
        app: './src/app.js',
        search: './src/search.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/build'
    },
    devServer: {
        hot: true,
        inline: true,
        port: 3030,
        compress: true,
        contentBase: ["dist"]
    }
}