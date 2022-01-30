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

mix.scripts(['resources/js/React.js','resources/js/top.js' ],'public/js/All.js')
    .js('resources/js/components/Example.js','public/js/example.js').react()
    .js('src/route.jsx','public/js/route.js').react()
    .scripts(['public/js/example.js','public/js/route.js'],'public/js/test.js')
    .sass('resources/sass/app.scss', 'public/css');
