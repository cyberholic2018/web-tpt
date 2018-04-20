<?php

namespace App\Services;

use App\Post;

class PostView
{
    public static function all($locale)
    {
        return Post::where('locale', $locale)->paginate(15);
    }

    public static function news($locale)
    {
        return Post::where('locale', $locale)->where('category', 'news')->paginate(15);
    }

    public static function success($locale)
    {
        return Post::where('locale', $locale)->where('category', 'success')->paginate(15);
    }
}
