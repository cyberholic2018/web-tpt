<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use App;

class CategoryController extends Controller
{
    public function getProductCategory()
    {
        $category = Category::where('type', 'product')->get();

        $status = 200;
        $message = 'Get product category success.';
        $data = $category;

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getPostCategory()
    {
        $category = Category::where('type', 'post')->get();

        $status = 200;
        $message = 'Get post category success.';
        $data = $category;

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getCategory(Request $request)
    {
        $data = $request->all();

        return Category::where('type', $data['type'])->where('locale', App::getLocale())->get();
    }
}
