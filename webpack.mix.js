const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix .js('resources/js/route.jsx','public/js/route.js').react()
    .scripts('public/js/route.js','public/js/test.js')
    .sass('resources/sass/app.scss', 'public/css');
mix.webpackConfig({
    resolve : {
        fallback : {
        "path" : require.resolve("path-browserify"),
        "fs" :false,
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        }
        }
});
