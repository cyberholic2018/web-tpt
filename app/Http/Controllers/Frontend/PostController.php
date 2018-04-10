<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;
use Log;

class PostController extends Controller
{
    public function test()
    {
        $posts = DB::table('posts')
                 ->where('isPublish', 1)
                 ->where('schedulePost', '<', date('Y-m-d H:i:s'))
                 ->where('scheduleDelete', '>', date('Y-m-d H:i:s'))
                 ->paginate(15);

        return $posts;
    }

    public function getAllPosts()
    {
        $data = DB::table('posts')
                ->where('isPublish', 1)
                ->where('schedulePost', '<', date('Y-m-d H:i:s'))
                ->where('scheduleDelete', '>', date('Y-m-d H:i:s'))
                ->paginate(15);

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
        $data = Post::all()
                ->where('guid', $guid)
                ->where('isPublish', 1)
                ->where('schedulePost', '<', date('Y-m-d H:i:s'))
                ->where('scheduleDelete', '>', date('Y-m-d H:i:s'));

        if (count($data) !== 0) {
            $data = $data->first();
            $status = 200;
            $message = 'Get post by guid success.';
        } else {
            $status = 404;
            $message = 'Post not found.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

    public function getByCategory($guid)
    {
        $data = Post::where('category', $guid)
                ->where('isPublish', 1)
                ->where('schedulePost', '<', date('Y-m-d H:i:s'))
                ->where('scheduleDelete', '>', date('Y-m-d H:i:s'))
                ->paginate(15);

        if ($data) {
            $status = 200;
            $message = 'Get posts by category success.';
        } else {
            $status = 404;
            $message = 'Post not found';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }

}
