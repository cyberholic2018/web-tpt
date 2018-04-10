<?php

// home
Route::get('/home', 'HomeController@index')->name('home');


/*****************
    ADMIN
*****************/
Route::get('/admin', function () {
    return view('backend.administrator.adminPage', [
        'panelTitle' => '主控台'
    ]);
});

Route::get('/admin/add', function () {
    return view('backend.administrator.addAdmin', [
        'panelTitle' => '新增管理者帳號'
    ]);
});

Route::get('/admin/list', function () {
    return view('backend.administrator.adminList', [
        'panelTitle' => '管理者帳號列表'
    ]);
});

Route::get('/admin/reset', function () {
    return view('backend.administrator.resetPassword', [
        'currentUser' => Auth::user(),
        'panelTitle' => '重設管理者密碼'
    ]);
});


/*****************
    USER
*****************/
Route::get('/account/list', function () {
    return view('backend.account.accountList', [
        'panelTitle' => '會員列表'
    ]);
});


/*****************
    POST
*****************/
Route::get('/post/add', function () {
    return view('backend.post.addPost', [
        'panelTitle' => '新增文章',
        'mode' => 'add'
    ]);
});

Route::get('/post/edit/{guid}', function ($guid) {
    return view('backend.post.addPost', [
        'panelTitle' => '編輯文章',
        'mode' => 'edit',
        'guid' => $guid
    ]);
});

Route::get('/post/list', function () {
    return view('backend.post.postList', [
        'panelTitle' => '文章列表'
    ]);
});

Route::get('/post/postOrder', function () {
    return view('backend.post.postOrder', [
        'panelTitle' => '文章排序設定'
    ]);
});

Route::get('/post/category', function () {
    return view('backend.post.category', [
        'panelTitle' => '文章類別管理'
    ]);
});

Route::get('/post/categoryOrder', function () {
    return view('backend.post.categoryOrder', [
        'panelTitle' => '文章類別排序'
    ]);
});


/*****************
    PRODUCT
*****************/
Route::get('/product/add', function () {
    return view('backend.product.addProduct', [
        'panelTitle' => '新增商品',
        'mode' => 'add',
    ]);
});

Route::get('/product/category', function () {
    return view('backend.product.productCategory', [
        'panelTitle' => '商品類別管理'
    ]);
});

Route::get('/product/list', function () {
    return view('backend.product.productList', [
        'panelTitle' => '商品列表'
    ]);
});

Route::get('/product/edit/{guid}', function ($guid) {
    return view('backend.product.addProduct', [
        'panelTitle' => '編輯商品',
        'mode' => 'edit',
        'guid' => $guid
    ]);
});


/*****************
    BUSINESS
*****************/
Route::get('/business/bonus', function () {
    return view('backend.business.bonusSetup', [
        'panelTitle' => '購物金設定'
    ]);
});

Route::get('/business/coupon', function () {
    return view('backend.business.couponSetup', [
        'panelTitle' => '優惠券管理'
    ]);
});

Route::get('/business/addCoupon', function () {
    return view('backend.business.couponAdd', [
        'panelTitle' => '新增優惠券'
    ]);
});

Route::get('/business/giftOrder', function () {
    return view('backend.business.giftOrder', [
        'panelTitle' => '新增試用包索取項目'
    ]);
});


/*****************
    PAGE
*****************/
Route::get('/page/managment', function()
{
    return view('backend.page.pageManagment', [
        'panelTitle' => '頁面管理'
    ]);
});

/**
 * ORDER
 */
Route::get('/order/list', function()
{
    return view('backend.order.orderList', [
        'panelTitle' => '訂單管理'
    ]);
});

Route::get('/order/shipping-method', function()
{
    return view('backend.order.shippingMethod', [
        'panelTitle' => '運費管理'
    ]);
});


/*****************
    MEDIA
*****************/
Route::get('/media/manager', function () {
    return view('backend.media.manager', [
        'panelTitle' => '媒體與檔案'
    ]);
});
