<?php

namespace App\Services;

use App\Content;
use App;

class ContentView
{
    public static function get($locale)
    {
        return Content::where('locale', $locale)->first();
    }
}
