<?php

namespace App\Services;

use App\Post;

class PostView
{
    public static function all()
    {
        return Post::orderBy('id', 'desc')->paginate(9);
    }

    public static function get($id)
    {
        return Post::where('id', $id)->first();
    }

    public static function news($locale)
    {
        return Post::where('locale', $locale)->where('category', 'news')->orderBy('id', 'desc')->paginate(15);
    }

    public static function success($locale)
    {
        return Post::where('locale', $locale)->where('category', 'success')->paginate(15);
    }

    public static function take($num)
    {
        return Post::orderBy('id', 'desc')->take($num)->get();
    }
}
