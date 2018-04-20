<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;
use App\Category;
use Auth;

class ProductController extends Controller
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

    public function index(Request $request)
    {
        $flag = $request->all()['flag'];
        $order = $request->all()['order'];
        $data = Product::orderBy($flag, $order)->paginate(15);
        $productData = array();

        if (Auth::user()->role == 'ADMIN') {
            for ($i=0; $i < count($data) ; $i++) {
                if ($data[$i]['category'] == null) {
                    $category = null;
                } else {
                    $category = Category::where('guid', $data[$i]['category'])->get()[0]->title;
                }

                array_push($productData, [
                    'guid' => $data[$i]['guid'],
                    'featureImage' => $data[$i]['featureImage'],
                    'authorName' => $data[$i]['authorName'],
                    'category' => $category,
                    'created_at' => $data[$i]['created_at'],
                    'price' => $data[$i]['price'],
                    'discountedPrice' => $data[$i]['discountedPrice'],
                    'isPublish' => $data[$i]['isPublish'],
                    'quantity' => $data[$i]['quantity'],
                    'locale' => $data[$i]['locale'],
                    'reserveStatus' => $data[$i]['reserveStatus'],
                    'rule' => $data[$i]['rule'],
                    'scheduleDelete' => $data[$i]['scheduleDelete'],
                    'schedulePost' => $data[$i]['schedulePost'],
                    'serialNumber' => $data[$i]['serialNumber'],
                    'status' => $data[$i]['status'],
                    'title' => $data[$i]['title']
                ]);
            }

            $status = 200;
            $message = 'Get product information success.';
        } else {
            $status = 425;
            $message = 'Permission denied.';
            $data = null;
        }
        return $data;
    }

    public function searchProducts(Request $request, $keyword)
    {
        $flag = $request->all()['flag'];
        $order = $request->all()['order'];
        $data = Product::where('title', 'like', '%'.$keyword.'%')->orderBy($flag, $order)->paginate(15);
        $productData = array();

        if (Auth::user()->role == 'ADMIN') {
            for ($i=0; $i < count($data) ; $i++) {
                if ($data[$i]['category'] == null) {
                    $category = null;
                } else {
                    $category = Category::where('guid', $data[$i]['category'])->get()[0]->title;
                }

                array_push($productData, [
                    'guid' => $data[$i]['guid'],
                    'featureImage' => $data[$i]['featureImage'],
                    'authorName' => $data[$i]['authorName'],
                    'category' => $category,
                    'created_at' => $data[$i]['created_at'],
                    'price' => $data[$i]['price'],
                    'discountedPrice' => $data[$i]['discountedPrice'],
                    'isPublish' => $data[$i]['isPublish'],
                    'quantity' => $data[$i]['quantity'],
                    'locale' => $data[$i]['locale'],
                    'reserveStatus' => $data[$i]['reserveStatus'],
                    'rule' => $data[$i]['rule'],
                    'scheduleDelete' => $data[$i]['scheduleDelete'],
                    'schedulePost' => $data[$i]['schedulePost'],
                    'serialNumber' => $data[$i]['serialNumber'],
                    'status' => $data[$i]['status'],
                    'title' => $data[$i]['title']
                ]);
            }

            $status = 200;
            $message = 'Get product information success.';
        } else {
            $status = 425;
            $message = 'Permission denied.';
            $data = null;
        }
        return $data;
    }

    Public function getCategory()
    {
        $data = Product::all();
        $categoryData = array();

        for ($i=0; $i < count($data); $i++) {
            if ($data[$i]['category'] == null) {
                $category = null;
                $categoryGuid = null;
            } else {
                $category = Category::where('guid', $data[$i]['category'])->get()[0]->title;
                $categoryGuid = Category::where('guid', $data[$i]['category'])->get()[0]->guid;
            }

            array_push($categoryData, [
                'productGuid' => $data[$i]['guid'],
                'categoryGuid' => $categoryGuid,
                'title' => $category
            ]);
        }

        return $categoryData;
    }

    public function getProduct($guid)
    {
        return Product::where('guid', $guid)->first();
    }

    // public function index()
    // {
    //     $data = Product::all();
    //     $productData = array();
    //
    //     // 篩選上線期間
    //     if (Auth::user()->role == 'ADMIN') {
    //         for ($i=0; $i < count($data) ; $i++) {
    //             if (!(strtotime($data[$i]->schedulePost)) && !(strtotime($data[$i]->scheduleDelete))) {
    //                 array_push($productData, $data[$i]);
    //             } else if (!(strtotime($data[$i]->schedulePost)) && (time() < strtotime($data[$i]->scheduleDelete))) {
    //                 array_push($productData, $data[$i]);
    //             } else if ((time() > strtotime($data[$i]->schedulePost)) && !(strtotime($data[$i]->scheduleDelete))) {
    //                 array_push($productData, $data[$i]);
    //             } else if ((time() > strtotime($data[$i]->schedulePost)) && (time() < strtotime($data[$i]->scheduleDelete))) {
    //                 array_push($productData, $data[$i]);
    //             }
    //         }
    //
    //         $status = 200;
    //         $message = 'Get product information success.';
    //         $data = $productData;
    //     } else {
    //         $status = 425;
    //         $message = 'Permission denied.';
    //         $data = null;
    //     }
    //
    //     return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $creator = Auth::user()->name;
        $creatorGuid = Auth::user()->guid;

        // return $data;
        if (Auth::user()->role == 'ADMIN') {

            if ($data['category'] == 'null') {
                $category = null;
            } else {
                $category = $data['category'];
            }

            switch ($data['isPublish']) {
                case 'true':
                    $isPublish = 1;
                    break;
                case 'false':
                    $isPublish = 0;
                    break;
            }

            switch ($data['reserveStatus']) {
                case 'true':
                    $reserveStatus = 1;
                    break;
                case 'false':
                    $reserveStatus = 0;
                    break;
            }

            $createProduct = Product::create([
                'guid' => str_random(40),
                'title' => $data['title'],
                'serialNumber' => $data['serialNumber'],
                'quantity' => $data['quantity'],
                'author' => $creatorGuid,
                'authorName' => $creator,
                'category' => $category,
                'featureImage' => $data['featureImage'],
                'album' => $data['album'],
                'status' => $data['status'],
                'isPublish' => $isPublish,
                'reserveStatus' => $reserveStatus,
                'locale' => $data['locale'],
                'price' => $data['price'],
                'productInformation' => $data['productInformation'],
                'discountedPrice' => $data['discountedPrice'],
                'description' => $data['description'],
                'seoTitle' => $data['seoTitle'],
                'seoDescription' => $data['seoDescription'],
                'seoKeyword' => $data['seoKeyword'],
                'shortDescription' => $data['shortDescription'],
                'socialImage' => $data['socialImage'],
                'schedulePost'=> $data['schedulePost'],
                'scheduleDelete' => $data['scheduleDelete']
            ]);

            if ($createProduct) {
                $status = 200;
                $message = 'Create product success.';
            } else {
                $status = 423;
                $message = 'Create product fail.';
            }
        } else {
            $status = 425;
            $message = 'Permission denied.';
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
    public function update(Request $request, $guid)
    {
        $data = $request->all();
        $postRow = Product::where('guid', $guid);

        // return $data;
        if (Auth::user()->role == 'ADMIN') {

            if ($data['category'] == 'null') {
                $category = null;
            } else {
                $category = $data['category'];
            }

            switch ($data['isPublish']) {
                case 'true':
                    $isPublish = 1;
                    break;
                case 'false':
                    $isPublish = 0;
                    break;
            }

            $updateProduct = $postRow->update([
                'title' => $data['title'],
                'serialNumber' => $data['serialNumber'],
                'quantity' => $data['quantity'],
                'category' => $category,
                'featureImage' => $data['featureImage'],
                'album' => $data['album'],
                'status' => $data['status'],
                'locale' => $data['locale'],
                'price' => $data['price'],
                'productInformation' => $data['productInformation'],
                'discountedPrice' => $data['discountedPrice'],
                'description' => $data['description'],
                'seoTitle' => $data['seoTitle'],
                'seoDescription' => $data['seoDescription'],
                'seoKeyword' => $data['seoKeyword'],
                'shortDescription' => $data['shortDescription'],
                'socialImage' => $data['socialImage'],
                'schedulePost'=> $data['schedulePost'],
                'scheduleDelete' => $data['scheduleDelete']
            ]);

            if ($updateProduct) {
                $status = 200;
                $message = 'Update product success.';
            } else {
                $status = 423;
                $message = 'Update product fail.';
            }
        } else {
            $status = 425;
            $message = 'Permission denied.';
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    public function deleteProducts(Request $request)
    {
        $data = $request->all()['data'];

        for ($i=0; $i < count($data); $i++) {
            Product::where('guid', $data[$i])->delete();
        }

        return response()->json([ 'status' => 200, 'message' => '文章刪除成功' ], 200);
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
