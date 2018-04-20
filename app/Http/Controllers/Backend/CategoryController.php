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
        $this->middleware('auth');
    }


    public function index()
    {
        return Category::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function getCategory(Request $request)
    {
        $data = $request->all();

        return Category::where('type', $data['type'])->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $data = $request->all();
        $data = [
            'title' => $request->all()['categoryName'],
            'parentId' => $request->all()['categoryParent'],
            'type' => $request->all()['type'],
            'locale' => $request->all()['locale'],
            'featureImage' => $request->all()['featureImage'],
            'description' => $request->all()['description'],
        ];

        $validator = Validator::make($data, [
            'title' => 'required|string|max:255',
        ])->validate();

        if ($data['parentId'] == 'null') {
            $data['parentId'] = null;
        }

        Category::create([
            'guid' => str_random(40),
            'title' => $data['title'],
            'parentId' => $data['parentId'],
            'type' => $data['type'],
            'locale' => $data['locale'],
            'featureImage' => $data['featureImage'],
            'description' => $data['description']
        ]);

        return response()->json([ 'status' => 200, 'message' => '建立類別成功' ], 200);
    }

    public function deleteCategory(Request $request)
    {
        $guid = $request->all()['category'];

        // Category::where('guid', $guid)->get();
        $deleteRow = Category::where('guid', $guid)->delete();

        if ($deleteRow) {
            $status = 200;
            $message = '類別刪除成功';
        } else {
            $status = 404;
            $message = '找不到類別';
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    public function updateCategory(Request $request)
    {
        $data = $request->all();
        $category = Category::where('guid', $data['category']);

        try {
            $category->update([
                'title' => $data['name'],
                'parentId' => $data['parentId'],
                'locale' => $data['locale'],
                'featureImage' => $data['featureImage'],
                'description' => $data['description']
            ]);

            $status = 200;
            $message = '類別編輯成功';
        } catch (Exception $e) {
            $status = 500;
            $message = $e;
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
