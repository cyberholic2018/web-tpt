<?php


// Route::get('/home', 'HomeController@index')->name('home');
Route::get('/auth/user/get', 'HomeController@getCurrentUser');

// OAuth
Route::get('auth/facebook', 'Auth\RegisterController@redirectToProvider');
Route::get('auth/facebook/callback', 'Auth\RegisterController@handleProviderCallback');

// Generate Dummy Data
Route::get('generateDumyNormalUser', 'Backend\AdminController@generateDumyNormalUser');
Route::get('generateDumyAdminUser', 'Backend\AdminController@generateDumyAdminUser');
Route::get('generateDumyPost', 'Backend\AdminController@generateDumyPost');

// For test
Route::get('/apitest', 'HomeController@test');

// Admin Route

// Api
Route::post('/admin/admin/add', 'Backend\AdminController@store');
Route::get('/admin/admin/list', 'Backend\AdminController@getAdminList');
Route::post('/admin/admin/reset', 'Backend\AdminController@resetPassword');
Route::post('/admin/admin/delete', 'Backend\AdminController@deleteAdmin');

// Route
Route::middleware('auth')->get('/cyberholic-system/admin', function () {
    return view('admin.administrator.adminPage', [
        'panelTitle' => '主控台'
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/admin/add', function () {
    return view('admin.administrator.addAdmin', [
        'panelTitle' => '新增管理者帳號'
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/admin/list', function () {
    return view('admin.administrator.adminList', [
        'panelTitle' => '管理者帳號列表'
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/admin/reset', function () {
    return view('admin.administrator.resetPassword', [
        'currentUser' => Auth::user(),
        'panelTitle' => '重設管理者密碼'
    ]);
});


// Account Route

Route::get('/admin/normal/list', 'Backend\AdminController@getNormalList');
Route::get('/admin/normal/add', 'Backend\AdminController@createNormalUser');

Route::middleware('auth')->get('/cyberholic-system/account/list', function () {
    return view('admin.account.accountList', [
        'panelTitle' => '會員列表'
    ]);
});


// Post Route

// Api
Route::get('/admin/post/get', 'Backend\PostController@index');
Route::get('/admin/post/get/{guid}', 'Backend\PostController@getPost');
Route::get('/admin/post/category', 'Backend\PostController@getCategory');
Route::post('/admin/post/add', 'Backend\PostController@store');
Route::post('/admin/post/edit/{guid}', 'Backend\PostController@update');
Route::post('/admin/post/delete', 'Backend\PostController@deletePosts');
Route::get('/admin/post/search/{keyword}', 'Backend\PostController@searchPosts');

// Route
Route::middleware('auth')->get('/cyberholic-system/post/add', function () {
    return view('admin.post.addPost', [
        'panelTitle' => '新增文章',
        'mode' => 'add'
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/post/edit/{guid}', function ($guid) {
    return view('admin.post.addPost', [
        'panelTitle' => '編輯文章',
        'mode' => 'edit',
        'guid' => $guid
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/post/list', function () {
    return view('admin.post.postList', [
        'panelTitle' => '文章列表'
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/post/postOrder', function () {
    return view('admin.post.postOrder', [
        'panelTitle' => '文章排序設定'
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/post/category', function () {
    return view('admin.post.category', [
        'panelTitle' => '文章類別管理'
    ]);
});

Route::middleware('auth')->get('/cyberholic-system/post/categoryOrder', function () {
    return view('admin.post.categoryOrder', [
        'panelTitle' => '文章類別排序'
    ]);
});


// Product Route

// Api
Route::post('/admin/product/add', 'Backend\ProductController@store');
Route::get('/admin/product/get', 'Backend\ProductController@index');
Route::get('/admin/product/get/{guid}', 'Backend\ProductController@getProduct');
Route::post('/admin/product/edit/{guid}', 'Backend\ProductController@update');
Route::get('/admin/product/get/category', 'Backend\ProductController@getCategory');
Route::post('/admin/product/delete', 'Backend\ProductController@deleteProducts');
Route::get('/admin/product/search/{keyword}', 'Backend\ProductController@searchProducts');

// Route

Route::middleware('auth')->get('/cyberholic-system/product/add', function () {
    return view('admin.product.addProduct', [
        'panelTitle' => '新增商品',
        'mode' => 'add',
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/product/category', function () {
    return view('admin.product.productCategory', [
        'panelTitle' => '商品類別管理'
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/product/list', function () {
    return view('admin.product.productList', [
        'panelTitle' => '商品列表'
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/product/edit/{guid}', function ($guid) {
    return view('admin.product.addProduct', [
        'panelTitle' => '編輯商品',
        'mode' => 'edit',
        'guid' => $guid
    ]);
});

// Business Route

// API
Route::get('/admin/business/bonus/get', 'Backend\BonusController@index');
Route::post('/admin/business/bonus/add', 'Backend\BonusController@store');
Route::post('/admin/business/bonus/update', 'Backend\BonusController@updatePara');

Route::get('/admin/business/coupon/get', 'Backend\CouponController@index');
Route::post('/admin/business/coupon/add', 'Backend\CouponController@store');
Route::post('/admin/business/coupon/update', 'Backend\CouponController@update');
Route::post('/admin/business/coupon/delete', 'Backend\CouponController@deleteCoupons');

// Route
Route::middleware('auth')->get('/cyberholic-system/business/bonus', function () {
    return view('admin.business.bonusSetup', [
        'panelTitle' => '紅利點數設定'
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/business/coupon', function () {
    return view('admin.business.couponSetup', [
        'panelTitle' => '優惠券管理'
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/business/addCoupon', function () {
    return view('admin.business.couponAdd', [
        'panelTitle' => '新增優惠券'
    ]);
});


// Page managment
Route::middleware('auth')->get('/admin/page/meta/get', 'Backend\MetaController@getMeta');
Route::middleware('auth')->post('/admin/page/meta/set', 'Backend\MetaController@setMeta');
Route::middleware('auth')->post('/admin/page/meta/edit', 'Backend\MetaController@editMeta');
Route::post('/admin/page/add', 'Backend\PageController@createPage');
Route::get('/admin/page/get', 'Backend\PageController@getPages');
Route::get('/admin/page/get/{guid}', 'Backend\PageController@getPage');
Route::post('/admin/page/update/{guid}', 'Backend\PageController@updatePage');

Route::middleware('auth')->get('/cyberholic-system/page/managment', function()
{
    return view('admin.page.pageManagment', [
        'panelTitle' => '後臺首頁'
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/page/add', function()
{
    return view('admin.page.addPage', [
        'panelTitle' => '編輯頁面',
        'mode' => 'add',
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/page/edit/{guid}', function($guid)
{
    return view('admin.page.addPage', [
        'panelTitle' => '編輯頁面',
        'mode' => 'edit',
        'guid' => $guid
    ]);
});
Route::middleware('auth')->get('/cyberholic-system/page/list', function()
{
    return view('admin.page.pageList', [
        'panelTitle' => '頁面列表'
    ]);
});


// Category Route

// Api
Route::post('/admin/category/add', 'Backend\CategoryController@store');
Route::post('/admin/category/get', 'Backend\CategoryController@getCategory');
Route::post('/admin/category/delete', 'Backend\CategoryController@deleteCategory');
Route::post('/admin/category/update', 'Backend\CategoryController@updateCategory');


// Support view
// API
Route::post('/admin/support/add', 'Backend\SupportController@store');
Route::get('/admin/support/get', 'Backend\SupportController@index');
Route::get('/admin/support/get/{id}', 'Backend\SupportController@getSupport');
Route::post('/admin/support/delete', 'Backend\SupportController@deleteSupports');
Route::post('/admin/support/update/{id}', 'Backend\SupportController@update');
Route::post('/admin/support/content/edit', 'Backend\SupportController@contentEdit');

Route::get('/cyberholic-system/support/managment', function()
{
    return view('admin.support.itemManagment', [
        'panelTitle' => '新增支援項目',
        'mode' => 'add'
    ]);
});
Route::get('/cyberholic-system/support/edit/{id}', function($id)
{
    return view('admin.support.itemManagment', [
        'panelTitle' => '編輯工業局軟體標',
        'mode' => 'edit',
        'id' => $id
    ]);
});
Route::get('/cyberholic-system/support/list', function()
{
    return view('admin.support.itemList', [
        'panelTitle' => '工業局軟體標管理'
    ]);
});
Route::get('/cyberholic-system/support/category', function()
{
    return view('admin.support.support-category', [
        'panelTitle' => '支援專區類別管理'
    ]);
});
Route::get('/cyberholic-system/support/content', function()
{
    return view('admin.support.content', [
        'panelTitle' => '工業局軟體標說明管理'
    ]);
});


// Media Route
Route::post('/admin/video/add', 'Backend\MediaController@addVideo');
Route::get('/admin/video/get',  'Backend\MediaController@getAllVideo');
Route::get('/admin/video/get/{id}', 'Backend\MediaController@getVideo');
Route::post('/admin/video/delete', 'Backend\MediaController@deleteVideos');
Route::post('/admin/video/update/{id}', 'Backend\MediaController@update');

Route::get('/cyberholic-system/video/managment', function()
{
    return view('admin.video.video', [
        'panelTitle' => '影音管理',
        'mode' => 'add'
    ]);
});
Route::get('/cyberholic-system/video/add', function()
{
    return view('admin.video.addVideo', [
        'panelTitle' => '新增影音',
        'mode' => 'add'
    ]);
});
Route::get('/cyberholic-system/video/edit/{id}', function($id)
{
    return view('admin.video.addVideo', [
        'panelTitle' => '編輯影音項目',
        'mode' => 'edit',
        'id' => $id
    ]);
});


/**
 * 合作夥伴管理
 */
Route::post('/partner/add', 'Backend\PartnerController@addPartner');
Route::post('/partner/edit/{guid}', 'Backend\PartnerController@updatePartner');
Route::get('/partner/delete/{guid}', 'Backend\PartnerController@deletePartner');
Route::get('/cyberholic-system/partner/add', function()
{
    return view('admin.partner.addPartner', [
        'panelTitle' => '新增合作夥伴',
        'mode' => 'add',
    ]);
});
Route::get('/cyberholic-system/partner/edit/{guid}', function($guid)
{
    return view('admin.partner.addPartner', [
        'panelTitle' => '編輯合作夥伴',
        'mode' => 'edit',
        'guid' => $guid,
        'partner' => PartnerView::get($guid)
    ]);
});
Route::get('/cyberholic-system/partner/managment', function()
{
    return view('admin.partner.partnerManagment', [
        'panelTitle' => '合作夥伴管理',
    ]);
});
Route::get('/cyberholic-system/partner/category', function ()
{
    return view('admin.partner.partnerCategory', [
        'panelTitle' => '合作夥伴分類管理',
    ]);
});
Route::get('/cyberholic-system/partner/location', function ()
{
    return view('admin.partner.partnerLocation', [
        'panelTitle' => '合作夥伴區域管理',
    ]);
});

// Api

// Route
Route::middleware('auth')->get('/cyberholic-system/media/manager', function () {
    return view('admin.media.manager', [
        'panelTitle' => '媒體與檔案'
    ]);
});
