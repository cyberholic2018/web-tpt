<?php



// Generate Dummy Data
Route::get('generateDumyNormalUser', 'Backend\AdminController@generateDumyNormalUser');
Route::get('generateDumyAdminUser', 'Backend\AdminController@generateDumyAdminUser');
Route::get('generateDumyPost', 'Backend\AdminController@generateDumyPost');

// For test
Route::get('/apitest', 'HomeController@test');
Route::get('/mailtest', 'Backend\MailController@sendMail');
// Route::post('/mailtest', 'Backend\MailController@sendMail');


/**
 * EC Pay checkout methods
 */
Route::get('/getCvsTarget', 'Backend\CheckoutController@getCvsTarget');
Route::post('/logistics_order_reply', 'Backend\CheckoutController@logistics_order_reply');
Route::post('/payment_info', 'Backend\OrderController@paymentInfo');
Route::post('/shop_option_reply', 'Backend\CheckoutController@shopReply');
Route::post('/cvs_map_callback', 'Backend\CheckoutController@callBackCvs');
Route::post('/order-payment', 'Backend\CheckoutController@orderPayment');
Route::post('/order-payment-dashboard/{guid}', 'Backend\CheckoutController@orderPaymentDashboard');
Route::post('/ecpay-return', 'Backend\OrderController@ecpayReturn');
Route::post('/logistics-return', 'Backend\OrderController@logisticsReturn');
Route::get('/order-success', 'Backend\OrderController@orderSuccess');
Route::get('/order/search/{merchantID}', 'Backend\OrderController@searchOrders');
Route::get('/order/get/{status}', 'Backend\OrderController@getOrders');
Route::post('/cvs-generate-sheet', 'Backend\CheckoutController@generateSheet');
Route::post('/re-generate-vAccount/{guid}', 'Backend\CheckoutController@reGenerateVAccount');
Route::post('/order/updateStatus', 'Backend\OrderController@updateOrderStatus');

Route::group(['middleware' => 'auth'], function ()
{
    Route::post('/order/generate-cvs', 'Backend\CheckoutController@generateCvs');
    Route::post('/order/generate-sheet', 'Backend\CheckoutController@generateSheet');
});

Route::get('/check_test', 'Backend\CheckoutController@checkoutTest');

/**
 * shipping method
 */
Route::post('/admin/shipping/addShippingMethod', 'Backend\OrderController@addShippingMethod');
Route::post('/admin/shipping/editShippingMethod', 'Backend\OrderController@editShippingMethod');
Route::post('/admin/shipping/deleteShippingMethod/{id}', 'Backend\OrderController@deleteShippingMethod');
Route::get('/admin/shipping/getShippingMethods', 'Backend\OrderController@getShippingMethods');

/*****************
    OAUTH
*****************/
Route::get('auth/facebook', 'Auth\RegisterController@redirectToProvider');
Route::get('auth/facebook/callback', 'Auth\RegisterController@handleProviderCallback');
Route::get('auth/google', 'Auth\RegisterController@redirectToGoogleProvider');
Route::get('auth/google/callback', 'Auth\RegisterController@handleGoogleProviderCallback');


/*****************
    ADMIN
*****************/
Route::post('/admin/admin/add', 'Backend\AdminController@store');
Route::get('/admin/admin/list', 'Backend\AdminController@getAdminList');
Route::post('/admin/admin/reset', 'Backend\AdminController@resetPassword');
Route::post('/admin/admin/delete', 'Backend\AdminController@deleteAdmin');


/*****************
    USER
*****************/
Route::get('/admin/normal/list', 'Backend\AdminController@getNormalList');
Route::get('/admin/normal/add', 'Backend\AdminController@createNormalUser');


/*****************
    POST
*****************/
Route::get('/admin/post/get', 'Backend\PostController@index');
Route::get('/admin/post/get/{guid}', 'Backend\PostController@getPost');
Route::get('/admin/post/category', 'Backend\PostController@getCategory');
Route::post('/admin/post/add', 'Backend\PostController@store');
Route::post('/admin/post/edit/{guid}', 'Backend\PostController@update');
Route::post('/admin/post/delete', 'Backend\PostController@deletePosts');


/*****************
    PRODUCT
*****************/
Route::post('/admin/product/add', 'Backend\ProductController@store');
Route::get('/admin/product/get', 'Backend\ProductController@index');
Route::get('/admin/product/get/{guid}', 'Backend\ProductController@getProduct');
Route::post('/admin/product/edit/{guid}', 'Backend\ProductController@update');
Route::get('/admin/product/get/category', 'Backend\ProductController@getCategory');
Route::post('/admin/product/delete', 'Backend\ProductController@deleteProducts');


/*****************
    BUSINESS
*****************/
Route::get('/admin/business/bonus/get', 'Backend\BonusController@index');
Route::post('/admin/business/bonus/add', 'Backend\BonusController@store');
Route::post('/admin/business/bonus/update', 'Backend\BonusController@updatePara');
Route::get('/admin/business/coupon/get', 'Backend\CouponController@index');
Route::post('/admin/business/coupon/add', 'Backend\CouponController@store');
Route::post('/admin/business/coupon/update', 'Backend\CouponController@update');
Route::post('/admin/business/coupon/delete', 'Backend\CouponController@deleteCoupons');


/*****************
    PAGE
*****************/
Route::middleware('auth')->get('/admin/page/meta/get', 'Backend\MetaController@getMeta');
Route::middleware('auth')->post('/admin/page/meta/set', 'Backend\MetaController@setMeta');
Route::middleware('auth')->post('/admin/page/meta/edit', 'Backend\MetaController@editMeta');


/*****************
    CATEGORY
*****************/
Route::post('/admin/category/add', 'Backend\CategoryController@store');
Route::post('/admin/category/get', 'Backend\CategoryController@getCategory');
Route::post('/admin/category/delete', 'Backend\CategoryController@deleteCategory');
Route::post('/admin/category/update', 'Backend\CategoryController@updateCategory');
