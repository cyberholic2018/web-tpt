<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Post;
use App\Category;
use Auth;

class PostController extends Controller
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


    public function index(Request $request)
    {
        $flag = $request->all()['flag'];
        $order = $request->all()['order'];
        if (Auth::user()->role == 'ADMIN') {
            return $posts = DB::table('posts')->orderBy($flag, $order)->paginate(15);
        }
    }

    Public function getCategory()
    {
        $data = Post::all();
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

            $createPost = Post::create([
                'guid' => str_random(40),
                'author' => $creatorGuid,
                'authorName' => $creator,
                'title' => $data['title'],
                'category' => $category,
                'content' => $data['content'],
                'featureImage' => $data['featureImage'],
                'seoTitle' => $data['seoTitle'],
                'locale' => $data['locale'],
                'seoKeyword' => $data['seoKeyword'],
                'socialImage' => $data['socialImage'],
                'seoDescription' => $data['seoDescription'],
                'isPublish' => $isPublish,
                'schedulePost'=> $data['schedulePost'],
                'scheduleDelete' => $data['scheduleDelete']
            ]);

            if ($createPost) {
                $status = 200;
                $message = 'Create post success.';
            } else {
                $status = 423;
                $message = 'Create post fail.';
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

    public function getPost($guid)
    {
        return Post::where('guid', $guid)->first();
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
        $postRow = Post::where('guid', $guid);

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

            $updatePost = $postRow->update([
                'title' => $data['title'],
                'category' => $category,
                'content' => $data['content'],
                'featureImage' => $data['featureImage'],
                'seoTitle' => $data['seoTitle'],
                'seoKeyword' => $data['seoKeyword'],
                'locale' => $data['locale'],
                'socialImage' => $data['socialImage'],
                'seoDescription' => $data['seoDescription'],
                'isPublish' => $isPublish,
                'schedulePost'=> $data['schedulePost'],
                'scheduleDelete' => $data['scheduleDelete']
            ]);

            if ($updatePost) {
                $status = 200;
                $message = 'Update post success.';
            } else {
                $status = 423;
                $message = 'Update post fail.';
            }
        } else {
            $status = 425;
            $message = 'Permission denied.';
        }

        return response()->json([ 'status' => $status, 'message' => $message ], $status);
    }

    public function deletePosts(Request $request)
    {
        $data = $request->all()['data'];

        for ($i=0; $i < count($data); $i++) {
            Post::where('guid', $data[$i])->delete();
        }

        return response()->json([ 'status' => 200, 'message' => '文章刪除成功' ], 200);
    }

    /**
     *
     */
    public function searchPosts(Request $request, $keyword)
    {
        $flag = $request->all()['flag'];
        $order = $request->all()['order'];
        if (Auth::user()->role == 'ADMIN') {
            return Post::where('title', 'like', '%'.$keyword.'%')->orderBy($flag, $order)->paginate(15);
        }
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
