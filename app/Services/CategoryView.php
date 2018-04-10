<?php

namespace App\Services;

use App\Category;

class CategoryView
{
    public static function product()
    {
        return Category::where('type', 'product')->get();
    }

    public static function post()
    {
        return Category::where('type', 'post')->get();
    }
}
