<?php

Route::get('/lang/{lang}', ['as'=>'lang.switch', 'uses'=>'LocaleController@switchLang']);

// Route::get('/', 'Frontend\PageController@index');
// Route::get('/about', 'Frontend\PageController@about');
// Route::get('/repair', 'Frontend\PageController@repair');
// Route::get('/qna', 'Frontend\PageController@qna');
// Route::get('/solution-education', 'Frontend\PageController@solutionEducation');
// Route::get('/solution-government', 'Frontend\PageController@solutionGovernment');
// Route::get('/solution-enterprise', 'Frontend\PageController@solutionEnterprise');
// Route::get('/solution-ap', 'Frontend\PageController@solutionAP');
// Route::get('/news', 'Frontend\PageController@news');
// Route::get('/news/{guid}', 'Frontend\PageController@singleNews');
// Route::get('/bidding', 'Frontend\PageController@bidding');
// Route::get('/success', 'Frontend\PageController@success');
// Route::get('/success/{guid}', 'Frontend\PageController@successDetail');
// Route::get('/partners', 'Frontend\PageController@partners');
// Route::post('/category/get', 'Frontend\CategoryController@getCategory');
// Route::post('/partner/get', 'Frontend\PageController@getPartners');

// Post
// Route::get('/posts', 'Frontend\PostController@getAllPosts');
// Route::get('/posts/get/{guid}', 'Frontend\PostController@getByGuid');
// Route::get('/posts/byCategory/{guid}', 'Frontend\PostController@getByCategory');
// Route::get('/posts/category', 'Frontend\CategoryController@getPostCategory');

// Product
// Route::get('/product/{guid}', 'Frontend\PageController@productCategory');
// Route::get('/product/detail/{guid}', 'Frontend\PageController@productDetail');

Route::get('/mailtest', 'MailController@mailTest');

Route::get('/', function () {
    return view('index');
});
Route::get('/about', function () {
    return view('web.about');
});
Route::get('/contact', function () {
    return view('web.contact');
});
Route::get('/partner', function () {
    return view('web.partner');
});
Route::get('/product', function () {
    return view('web.product');
});
Route::get('/productDetail/{id}', function ($id) {
    return view('web.productDetail', [
        'id' => $id
    ]);
});
Route::get('/news', function () {
    return view('web.news');
});
Route::get('/newsDetail/{id}', function ($id) {
    return view('web.newsDetail', [
        'id' => $id
    ]);
});

Route::get('/testithome', function ()
{
    return ithome::get(30);
});
