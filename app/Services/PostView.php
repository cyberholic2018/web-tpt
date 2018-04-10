<?php

namespace App\Services;

use App\Post;

class PostView
{
    static function all()
    {
        return Post::paginate(15);
    }

    public static function get($guid)
    {
        return Post::where('guid', $guid)->first();
    }

    public static function getNewestPosts()
    {
        return Post::take(4)->get();
    }

    public static function getPopularProducts()
    {
        return Product::inRandomOrder()->take(4)->get();
    }

    public static function getByCategory($category)
    {
        return Product::where('category', $category)->get();
    }
}
