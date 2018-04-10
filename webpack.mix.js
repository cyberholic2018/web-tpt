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
    .js('resources/assets/js/fancytree.js', 'public/js')
    .js('resources/assets/js/customFunction.js', 'public/js')
    .js('resources/assets/js/frontend-script.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/frontend-style.scss', 'public/css');

 // vue template

 // side bar
 mix.js('resources/assets/js/components/backend/side-bar/admin-sidebar.js', 'public/js/backend');

 // Admin view
 mix.js('resources/assets/js/components/backend/administrator/admin-page/admin-page.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/administrator/admin-list/admin-list.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/administrator/reset-password/reset-password.js', 'public/js/backend');

 // Account view
 mix.js('resources/assets/js/components/backend/account/account-list/account-list.js', 'public/js/backend');

 // Media view
 mix.js('resources/assets/js/components/backend/media/file-manager/file-manager.js', 'public/js/backend');

 // Product view
 mix.js('resources/assets/js/components/backend/product/add-product/add-product.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/product/product-list/product-list.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/product/product-category/product-category.js', 'public/js/backend');

 // Post view
 mix.js('resources/assets/js/components/backend/post/add-post/add-post.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/post/category/category.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/post/category-order/category-order.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/post/post-list/post-list.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/post/post-order/post-order.js', 'public/js/backend');

 // Business view
 mix.js('resources/assets/js/components/backend/business/bonus-setup/bonus-setup.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/business/coupon-add/coupon-add.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/business/coupon-setup/coupon-setup.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/business/gift-order/gift-order.js', 'public/js/backend');

 /**
  * Order view
  */
 mix.js('resources/assets/js/components/backend/order/order-list/order-list.js', 'public/js/backend')
    .js('resources/assets/js/components/backend/order/shipping-method/shipping-method.js', 'public/js/backend');

 // Page view
 mix.js('resources/assets/js/components/backend/page/page-managment/page-managment.js', 'public/js/backend');



 // frontend
 mix.js('resources/assets/js/components/frontend/index/index.js', 'public/js')
    .js('resources/assets/js/components/frontend/cart-page/cart-page.js', 'public/js')
    .js('resources/assets/js/components/frontend/checkout/checkout.js', 'public/js')
    .js('resources/assets/js/components/frontend/cart-panel/cart-panel.js', 'public/js');

 mix.styles([
    'public/css/app.css',
    'public/css/toastr.min.css',
    'public/css/bootstrap-datetimepicker.min.css'
 ], 'public/css/all.css');

 // mix.scripts([
 //    'public/js/app.js',
 //    'public/js/plugins/toastr/toastr.min.js',
 //    'public/js/plugins/moment/moment-with-locales.min.js',
 //    'public/js/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
 //    'public/js/customFunction.js',
 // ], 'public/js/all.js');


 mix.styles([
    'public/css/frontend-style.css',
    'public/css/toastr.min.css',
 ], 'public/css/frontend.css');

 mix.scripts([
     'public/js/app.js',
     'public/js/plugins/toastr/toastr.min.js',
     'public/js/frontend-script.js',
 ], 'public/js/frontend.js');
