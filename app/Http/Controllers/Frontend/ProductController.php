<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use App\Product;
use App\Comment;
use App\SiteMeta;

class ProductController extends Controller
{
    public function __construct()
    {

    }

    public function productCategory($guid)
    {
        $category = Category::where('guid', $guid)->first();
        $product = Product::where('category', $guid)->paginate(15);

        return view('frontend.product.productCategory', [
            'category' => $category,
            'product' => $product,
            'isThumbShow' => false
        ]);
    }

    public function productDetail($guid)
    {
        $product = Product::where('guid', $guid)->first();
        $comentList = Comment::where('source', $guid)->get();
        $productList = Product::paginate(5);

        $score = 0;

        if (count($comentList)) {
            foreach ($comentList as $item) {
                $score = $score + $item->rate;
            }

            $score = round($score / count($comentList));
        }

        $album = json_decode($product->album);

        return view('frontend.product.productDetail', [
            'product' => $product,
            'guid' => $guid,
            'score' => $score,
            'album' => $album,
            'productList' => $productList,
            'comentList' => $comentList,
            'isThumbShow' => true,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<a href="/product-all">系列商品</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;'.$product->title
        ]);
    }

    public function getAllProducts()
    {
        $data = Product::all();

        if ($data) {
            $status = 200;
            $message = 'Get all products success.';
        } else {
            $status = 205;
            $message = 'Products list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getNewestProducts()
    {
        $data = Product::orderBy('id', 'desc')->take(10)->get();

        if ($data) {
            $status = 200;
            $message = 'Get all products success.';
        } else {
            $status = 205;
            $message = 'Products list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getPopularProducts()
    {
        $data = Product::inRandomOrder()->take(4)->get();

        if ($data) {
            $status = 200;
            $message = 'Get all products success.';
        } else {
            $status = 205;
            $message = 'Products list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getByGuid($guid)
    {
        // return $guid;
        $data = Product::all()->where('guid', $guid)->first();

        if ($data) {
            $status = 200;
            $message = 'Get product by guid success.';
        } else {
            $status = 205;
            $message = 'Products list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getByCategory($guid)
    {
        // return $guid;
        $data = Product::where('category', $guid)->paginate(15);

        if ($data) {
            $status = 200;
            $message = 'Get products by category success.';
        } else {
            $status = 205;
            $message = 'Products list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }
}
