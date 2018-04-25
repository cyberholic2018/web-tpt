<?php

namespace App\Services;

use App\Partner;
use App;
use App\Content;

class PartnerView
{
    public static function all()
    {
        return Partner::where('locale', App::getLocale())->paginate(15);
    }

    public static function admin()
    {
        return Partner::paginate(15);
    }

    public static function get($guid)
    {
        return Partner::where('guid', $guid)->first();
    }

    public static function tpt()
    {
        return Content::paginate(15);
    }
}
