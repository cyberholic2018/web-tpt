<?php

namespace App\Services;

use App\Product;

class ProductView
{
    public static function all()
    {
        return Product::paginate(9);
    }

    public static function getByCategory($category)
    {
        return Product::where('category', $category)->paginate(3);
    }

    public static function get($guid)
    {
        return Product::where('id', $guid)->first();
    }
}
