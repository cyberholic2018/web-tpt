<?php

namespace App\Services;

use App\Category;
use App;

class CategoryView
{
    public static function get($guid)
    {
        return Category::where('guid', $guid)->first();
    }

    public static function type($type)
    {
        return Category::where('type', $type)->where('locale', App::getLocale())->get();
    }

    public static function type2($type)
    {
        return Category::where('type', $type)->get();
    }
}
