<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Coupon;

class CouponController extends Controller
{

    // 取得所有優惠券
    public function index()
    {
        return Coupon::paginate(15);
    }

    // 新增優惠券
    public function store(Request $request)
    {
        $data = $request->all();
        $create = Coupon::create([
            'guid' => str_random(42),
            'serialNumber' => $data['serialNumber'],
            'content' => $data['content'],
            'isPublish' => $data['isPublish'],
            'schedulePost' => $data['schedulePost'],
            'scheduleDelete' => $data['scheduleDelete'],
            'discountType' => $data['discountType'],
            'couponAmount' => $data['couponAmount'],
            'freeShipping' => $data['freeShipping'],
            'minimumAmount' => $data['minimumAmount'],
            'maximumAmount' => $data['maximumAmount'],
            'individualUse' => $data['individualUse'],
            'usageLimit' => $data['usageLimit'],
            'usageLimitPerUser' => $data['usageLimitPerUser']
        ]);
        return $create;
    }

    // 更新優惠券
    public function update(Request $request, $id)
    {
        //
    }

    // 刪除優惠券
    public function deleteCoupons(Request $request)
    {
        $data = $request->all()['data'];

        for ($i=0; $i < count($data); $i++) {
            Coupon::where('guid', $data[$i])->delete();
        }

        return response()->json([ 'status' => 200, 'message' => 'Delete coupon success.' ], 200);
    }

}
