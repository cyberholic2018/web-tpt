<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Coupon;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Coupon::paginate(15);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $create = Coupon::create([
            'guid' => str_random(40),
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function deleteCoupons(Request $request)
    {
        $data = $request->all()['data'];

        for ($i=0; $i < count($data); $i++) {
            Coupon::where('guid', $data[$i])->delete();
        }

        return response()->json([ 'status' => 200, 'message' => '優惠券刪除成功' ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
