<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Category;
use Auth;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        // $this->middleware('auth');
    }

    // 取得所有分類
    public function index()
    {
        return Category::all();
    }

    // 依照類型取得類別列表
    public function getCategory(Request $request)
    {
        $data = $request->all();

        return Category::where('type', $data['type'])->get();
    }

    // 新增類別
    public function store(Request $request)
    {
        $data = [
            'title' => $request->all()['categoryName'],
            'parentId' => $request->all()['categoryParent'],
            'type' => $request->all()['type'],
            'description' => $request->all()['description'],
            'featureImage' => $request->all()['featureImage'],
        ];

        $validator = Validator::make($data, [
            'title' => 'required|string|max:255',
        ])->validate();

        if ($data['parentId'] == 'null') {
            $data['parentId'] = null;
        }

        try {
            $category = Category::create([
                'guid' => str_random(42),
                'title' => $data['title'],
                'parentId' => $data['parentId'],
                'type' => $data['type'],
                'description' => $data['description'],
                'featureImage' => $data['featureImage'],
            ]);

            $status = 200;
            $message = 'Create category success.';
            $data = $category;
        } catch (\Exception $e) {
            $status = 200;
            $message = 'Create category fail.';
            $data = null;
        }

        return response()->json([
            'status' => $status,
            'message' => $message,
            'data' => $data
        ], $status);
    }

    // 刪除類別
    public function deleteCategory(Request $request)
    {
        $guid = $request->all()['category'];

        // Category::where('guid', $guid)->get();
        $deleteRow = Category::where('guid', $guid)->delete();

        if ($deleteRow) {
            $status = 200;
            $message = 'Delete category success.';
        } else {
            $status = 404;
            $message = 'Category not found.';
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    // 更新類別
    public function updateCategory(Request $request)
    {
        $data = $request->all();

        return Category::where('guid', $data['category'])
                ->update(['title' => $data['name']]);
    }
}
