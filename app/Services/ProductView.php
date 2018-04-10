<?php

namespace App\Services;

use App\Product;

class ProductView
{
    static function all()
    {
        return 'test';
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
