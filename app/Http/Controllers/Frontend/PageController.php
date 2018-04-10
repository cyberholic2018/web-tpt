<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\SiteMeta;
use App\Product;

class PageController extends Controller
{
    public function __construct()
    {

    }

    public function index()
    {
        // $meta = SiteMeta::all()->first();

        // $album = json_decode($meta->index_album);
        return view('index', [
            // 'album' => $album,
            'isThumbShow' => false,
            'thumb' => null
        ]);
    }

    public function productDetail()
    {
        return view('frontend.product.productDetail', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<a href="/product-all">系列商品</a>'
        ]);
    }

    public function productAll()
    {
        $productAll = Product::paginate(15);

        return view('frontend.product.productAll', [
            'productAll' => $productAll,
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;系列商品'
        ]);
    }

    public function login()
    {
        return view('frontend.authentication.login', [
            'isThumbShow' => false,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;會員登入'
        ]);
    }

    public function register()
    {
        return view('frontend.authentication.register', [
            'isThumbShow' => false,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;會員註冊'
        ]);
    }

    public function about()
    {
        return view('frontend.about.index', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;品牌故事'
        ]);
    }

    public function professional()
    {
        return view('frontend.about.professional', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;品牌專業'
        ]);
    }

    public function certificate()
    {
        return view('frontend.about.certificate', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;品牌認證'
        ]);
    }

    public function cordyceps()
    {
        return view('frontend.about.cordyceps', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;蟲草介紹'
        ]);
    }

    public function isaria()
    {
        return view('frontend.about.isaria', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;蟬花介紹'
        ]);
    }

    public function privacy()
    {
        return view('frontend.privacy.privacy', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;隱私權政策'
        ]);
    }

    public function notice()
    {
        return view('frontend.privacy.notice', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;購物須知'
        ]);
    }

    public function store()
    {
        return view('frontend.about.store', [
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;銷售據點'
        ]);
    }
}
