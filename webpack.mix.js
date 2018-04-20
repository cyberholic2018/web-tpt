let mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');

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

 mix.webpackConfig({
     plugins: [
         new LiveReloadPlugin()
     ]
 });

 // mix.options({
 //     uglify: true
 // });

 // global function
 mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/customFunction.js', 'public/js')
    .js('resources/assets/js/frontendCustomFunction.js', 'public/js')
    .js('resources/assets/js/frontend-script.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/frontend.scss', 'public/css')
    .sass('resources/assets/sass/frontend-style.scss', 'public/css');

 // vue template

 // side bar
 mix.js('resources/assets/js/components/admin/side-bar/admin-sidebar.js', 'public/js/backend');

 // Admin view
 mix.js('resources/assets/js/components/admin/administrator/admin-page/admin-page.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/administrator/admin-list/admin-list.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/administrator/reset-password/reset-password.js', 'public/js/backend');

 // Account view
 mix.js('resources/assets/js/components/admin/account/account-list/account-list.js', 'public/js/backend');

 // Media view
 mix.js('resources/assets/js/components/admin/media/file-manager/file-manager.js', 'public/js/backend');

 // Product view
 mix.js('resources/assets/js/components/admin/product/add-product/add-product.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/product/product-list/product-list.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/product/product-category/product-category.js', 'public/js/backend');

 // Post view
 mix.js('resources/assets/js/components/admin/post/add-post/add-post.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/post/category/category.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/post/category-order/category-order.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/post/post-list/post-list.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/post/post-order/post-order.js', 'public/js/backend');

 // Business view
 mix.js('resources/assets/js/components/admin/business/bonus-setup/bonus-setup.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/business/coupon-add/coupon-add.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/business/coupon-setup/coupon-setup.js', 'public/js/backend');

 // Page view
 mix.js('resources/assets/js/components/admin/page/page-managment/page-managment.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/page/add-page/add-page.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/page/add-list/add-list.js', 'public/js/backend');

 // Support view
 mix.js('resources/assets/js/components/admin/support/item-managment/item-managment.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/support/item-list/item-list.js', 'public/js/backend');

 // video view
 mix.js('resources/assets/js/components/admin/video/video-managment/video-managment.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/video/add-video/add-video.js', 'public/js/backend');

 // video view
 mix.js('resources/assets/js/components/admin/partner/partner-category/partner-category.js', 'public/js/backend')
    .js('resources/assets/js/components/admin/partner/partner-location/partner-location.js', 'public/js/backend');


 // frontend
 mix.js('resources/assets/js/components/frontend/index/index.js', 'public/js')
    .js('resources/assets/js/components/frontend/netone-news/netone-news.js', 'public/js')
    .js('resources/assets/js/components/frontend/netone-solution/netone-solution.js', 'public/js')
    .js('resources/assets/js/components/frontend/contact-us/contact-us.js', 'public/js')
    .js('resources/assets/js/components/frontend/partner/partner.js', 'public/js')
    .js('resources/assets/js/components/admin/support/category/support-category.js', 'public/js');

 mix.styles([
    'public/css/app.css',
    'public/css/toastr.min.css',
    'public/css/bootstrap-datetimepicker.min.css'
 ], 'public/css/all.css');

 mix.styles([
    'public/css/app.css',
    'public/css/frontend.css',
 ], 'public/css/frontend-all.css');

 mix.scripts([
    'public/js/app.js',
    'public/js/frontendCustomFunction.js',
 ], 'public/js/frontend-all.js');

 mix.scripts([
    'public/js/app.js',
    'public/js/plugins/toastr/toastr.min.js',
    'public/js/plugins/moment/moment-with-locales.min.js',
    'public/js/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
    'public/js/customFunction.js',
 ], 'public/js/all.js');

 mix.styles([
    'public/css/frontend-style.css',
    'public/css/toastr.min.css',
 ], 'public/css/frontend.css');

 mix.scripts([
     'public/js/app.js',
     'public/js/plugins/toastr/toastr.min.js',
     'public/js/frontend-script.js',
 ], 'public/js/frontend.js');
