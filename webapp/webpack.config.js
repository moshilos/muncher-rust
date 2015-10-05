/**
 * Created by Moshi.los on 10/2/2015.
 */
module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: './app/js',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "ngtemplate?relativeTo=/src/!html"
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    'html-minify-loader': {
        empty: true,        // KEEP empty attributes
        cdata: true,        // KEEP CDATA from scripts
        comments: true     // KEEP comments
    }
};