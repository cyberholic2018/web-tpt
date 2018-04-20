<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;

class PostController extends Controller
{
    public function getAllPosts()
    {
        $data = Post::paginate(5);

        if ($data) {
            $status = 200;
            $message = 'Get all posts success.';
        } else {
            $status = 205;
            $message = 'Posts list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getByGuid($guid)
    {
        // return $guid;
        $data = Post::all()->where('guid', $guid)->first();

        if ($data) {
            $status = 200;
            $message = 'Get post by guid success.';
        } else {
            $status = 205;
            $message = 'Posts list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getByCategory($guid)
    {
        // return $guid;
        $data = Post::where('category', $guid)->paginate(15);

        if ($data) {
            $status = 200;
            $message = 'Get posts by category success.';
        } else {
            $status = 205;
            $message = 'Posts list is Null.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

}
