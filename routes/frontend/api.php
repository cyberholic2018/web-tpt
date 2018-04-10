<?php

Route::get('/test', 'Frontend\PostController@test');

/**
 * check property
 */
Route::post('/checkAuth', 'HomeController@checkAuth');
Route::get('/getAddress/{guid}', 'HomeController@getAddress')->middleware('auth');


/**
 * Product
 */
Route::get('/products', 'Frontend\ProductController@getAllProducts');
Route::get('/products/get/{guid}', 'Frontend\ProductController@getByGuid');
Route::get('/products/newest', 'Frontend\ProductController@getNewestProducts');
Route::get('/products/popular', 'Frontend\ProductController@getPopularProducts');
Route::get('/products/byCategory/{guid}', 'Frontend\ProductController@getByCategory');
Route::get('/products/category', 'Frontend\CategoryController@getProductCategory');


/**
 * post
 */
Route::get('/posts', 'Frontend\PostController@getAllPosts');
Route::get('/posts/get/{guid}', 'Frontend\PostController@getByGuid');
Route::get('/posts/byCategory/{guid}', 'Frontend\PostController@getByCategory');
Route::get('/posts/category', 'Frontend\CategoryController@getPostCategory');


/**
 * Cart
 */
Route::post('/cart/add/single/{guid}', 'Frontend\CartController@addSingleProduct');
Route::post('/cart/add/{guid}', 'Frontend\CartController@addProduct');
Route::post('/cart/delete/single/{rowid}', 'Frontend\CartController@removeSingleProduct');
Route::get('/cart/get', 'Frontend\CartController@getCartContent');
Route::get('/cart/delete/all', 'Frontend\CartController@truncateCart');
Route::post('/cart/update', 'Frontend\CartController@updateCart');
Route::get('/cart/checkTemp', 'Frontend\CartController@checkTemp');

/**
 * Business
 */
Route::post('/business/getBillingAddress', 'Frontend\CartController@getBillingAddress');
Route::get('/shipping/get', 'Backend\OrderController@getShippingMethods');
Route::post('/coupon/get/{couponNumber}', 'Frontend\CouponController@getCouponInfo');

/**
 * Comment
 */
Route::post('/product/send/comment/{guid}', 'Frontend\CommentController@addComment');
Route::get('/product/delete/comment/{guid}', 'Frontend\CommentController@deleteComment');

/**
 * Address
 */
Route::post('/address/edit/{guid}', 'Frontend\AddressController@editAddress');
Route::post('/address/add/{guid}', 'Frontend\AddressController@addAddress');

/**
 * Member controller
 */
Route::post('/registerNormalUser', 'Frontend\UserController@registerNormalUser');
Route::post('/sendResetPasswordMail', 'Frontend\UserController@sendResetPasswordMail')->name('sendResetPasswordMail');
Route::post('/resetPasswordFunction', 'Frontend\UserController@resetPasswordFunction')->name('resetPasswordFunction');
