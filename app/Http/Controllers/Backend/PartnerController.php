<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Partner;

class PartnerController extends Controller
{
    /**
     * 新增合作夥伴位置
     */
    public function addPartner(Request $request)
    {
        $data = $request->all();

        try {
            Partner::create($data);

            return redirect('/cyberholic-system/partner/managment');
        } catch (\Exception $e) {
            return $e;
        }


    }

    /**
     * 更新合作夥伴位置
     */
    public function updatePartner($guid, Request $request)
    {
        $data = $request->all();

        try {
            Partner::where('guid', $guid)->update([
                'name' => $data['name'],
                'addressString' => $data['addressString'],
                'link' => $data['link'],
                'longitude' => $data['longitude'],
                'latitude' => $data['latitude'],
            ]);

            return redirect('/cyberholic-system/partner/managment');
        } catch (\Exception $e) {
            return $e;
        }
    }

    /**
     * 刪除合作夥伴
     */
    public function deletePartner($guid)
    {
        try {
            Partner::where('guid', $guid)->delete();

            return redirect('/cyberholic-system/partner/managment');
        } catch (\Exception $e) {

        }

    }
}
