<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Coupon;

class CouponController extends Controller
{
    public function getCouponInfo($couponNumber)
    {
        try {
            $coupon = Coupon::where('serialNumber', $couponNumber)->first();

            if ($coupon) {
                $status = 200;
                $message = 'Get coupon success.';
                $data = $coupon;
            } else {
                $status = 404;
                $message = 'Coupon not found.';
                $data = $coupon;
            }
        } catch (\Exception $e) {
            $status = 500;
            $message = 'Internal server error';
            $data = $e;
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data], $status);
    }
}
