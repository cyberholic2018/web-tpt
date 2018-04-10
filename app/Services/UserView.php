<?php

namespace App\Services;

use App\User;
use Auth;

/**
 *
 */
class UserView
{

    function __construct()
    {
        # code...
    }

    static function point()
    {
        return Auth::user()->point;
    }
}
