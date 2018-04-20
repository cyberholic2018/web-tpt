<?php

namespace App\Services;

use App\Partner;
use App;

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
}
