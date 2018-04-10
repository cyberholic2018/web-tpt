<?php

namespace App\Services;

use App\Address;

/**
 *
 */
class AddressInfo
{
    function __construct()
    {

    }

    static function get($owner)
    {
        return Address::where('owner', $owner)->first();
    }

    static function check($owner)
    {
        if (count(Address::where('owner', $owner)->get()) == 0) {
            return false;
        } else {
            return true;
        }

    }
}
