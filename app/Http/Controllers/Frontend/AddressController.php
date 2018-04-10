<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Address;
use PublicServiceProvider;

class AddressController extends Controller
{
    public function editAddress($guid, Request $request)
    {
        $data = $request->all();

        Address::where('owner', $guid)->update([
            'fullName' => $data['fullName'],
            'cellPhone' => $data['cellPhone'],
            'address' => $data['address'],
            'city' => $data['city'],
            'postcode' => $data['postcode'],
        ]);

        return Redirect::back();
    }

    public function addAddress($guid, Request $request)
    {
        $data = $request->all();

        Address::create([
            'guid' => PublicServiceProvider::generateGuid(),
            'owner' => $guid,
            'fullName' => $data['fullName'],
            'cellPhone' => $data['cellPhone'],
            'address' => $data['address'],
            'city' => $data['city'],
            'postcode' => $data['postcode'],
        ]);

        return Redirect::back();
    }
}
