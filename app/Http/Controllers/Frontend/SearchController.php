<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;
use App\Post;
use Log;
use App\SiteMeta;

class SearchController extends Controller
{
    public function __construct()
    {

    }

    /**
     * 全文檢索
     */
    public function searchProduct(Request $request)
    {
        $data = $request->all();
        // return $data;

        try {
            // $product = Product::search($data['key-word'])->get();
            // $post = Post::search($data['key-word'])->get();
            $product = Product::where('title', 'like', '%'.$data['key-word'].'%')->get();
            $post = Post::where('title', 'like', '%'.$data['key-word'].'%')->get();
        } catch (\Exception $e) {
            Log::error($e);
            return $e;
        }

        return view('frontend.search.search', [
            'product' => $product,
            'post' => $post,
            'isThumbShow' => true,
            'thumb' => '首頁 > 商品 > 搜尋 "'.$data['key-word'].'" 的結果。'
        ]);

    }

    /**
     * import scout
     */
    public function importScout()
    {
        Artisan::call('scout:import "App\Product"');
    }
}
