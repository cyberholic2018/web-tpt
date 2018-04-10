<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Order;
use App\Shipping;
use App\Bonus;
Use App\User;
use Hash;
use Mail;

class OrderController extends Controller
{
    /**
     * 接收金流回傳的資訊
     */
    public function ecpayReturn(Request $request)
    {
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
            $originIP = $_SERVER['HTTP_CLIENT_IP'];
        }else if(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
            $originIP = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
            $originIP= $_SERVER['REMOTE_ADDR'];
        }

        Log::info('Connection from : '.$originIP);

        if ($originIP == '175.99.72.1' ||
            $originIP == '175.99.72.11' ||
            $originIP == '175.99.72.24' ||
            $originIP == '175.99.72.28' ||
            $originIP == '175.99.72.32') {

            $data = $request->all();

            try {
                $bonusPercentage = (int)Bonus::all()->first()['percentage'] / 100;
            } catch (\Exception $e) {
                $bonusPercentage = 0;
            }

            $order = Order::where('merchantID', $data['CustomField1'])->first();
            $orderFlag = $order->orderFlag;
            $orderOwner = $order->owner;

            if (Hash::check($data['CustomField1'], $orderFlag))
            {
                if ($data['RtnCode'] == '1') {
                    Log::info("callback validation success");

                    if ($data['SimulatePaid'] == '1') {
                        DB::table('orders')
                            ->where('merchantID', $data['CustomField1'])
                            ->update([
                                'isSimulate' => '1',
                                'paymentStatus' => 'paid'
                            ]);
                    } else {
                        DB::table('orders')
                            ->where('merchantID', $data['CustomField1'])
                            ->update([
                                'paymentStatus' => 'paid'
                            ]);
                    }

                    try {
                        if ($orderOwner !== 'guest') {
                            $originPoint = User::where('guid', $orderOwner)->first()->point;
                            User::where('guid', $orderOwner)->update([
                                'point' => (int)$originPoint + $order->amount * $bonusPercentage,
                            ]);
                        }
                    } catch (\Exception $e) {
                        Log::error($e);
                    }

                    Log::info(json_encode($data));

                    Mail::send('mail.paymentSuccess', [
                        'MerchantTradeNo' => $data['CustomField1'],
                    ], function($message) {
                        $message->to([
                            'vincent7697@gmail.com',
                            'hi@meansgood.com.tw'
                        ])->subject('付款成功');
                        $message->from(env('MAIL_USERNAME'), '明谷生機');
                    });

                    return "1|OK";
                } else {
                    return "0|FAIL";
                }
            } else {
                Log::info("callback validation fail");
                return 0;
            }

            Log::info($orderFlag);
            Log::info(json_encode($data));

        } else {
            Log::error('The request origin are not from ecpay, please check.');
        }
    }

    /**
     * 物流狀態更新
     */
    public function logisticsReturn()
    {
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
            $originIP = $_SERVER['HTTP_CLIENT_IP'];
        }else if(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
            $originIP = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
            $originIP= $_SERVER['REMOTE_ADDR'];
        }

        Log::info('Connection from : '.$originIP);

        if ($originIP == '175.99.72.1' ||
            $originIP == '175.99.72.11' ||
            $originIP == '175.99.72.24' ||
            $originIP == '175.99.72.28' ||
            $originIP == '175.99.72.32') {

            $data = $request->all();

            Log::info(json_encode($data));

            try {
                $bonusPercentage = (int)Bonus::all()->first()['percentage'] / 100;
            } catch (\Exception $e) {
                $bonusPercentage = 0;
            }

            $order = Order::where('merchantID', $data['MerchantTradeNo'])->first();
            $orderFlag = $order->orderFlag;
            $orderOwner = $order->owner;

            if (Hash::check($data['MerchantTradeNo'], $orderFlag))
            {
                if ($data['RtnCode'] == '2067') {
                    Log::info("callback validation success");

                    DB::table('orders')
                        ->where('merchantID', $data['MerchantTradeNo'])
                        ->update([
                            'paymentStatus' => 'paid'
                        ]);

                    try {
                        if ($orderOwner !== 'guest') {
                            $originPoint = User::where('guid', $orderOwner)->first()->point;
                            User::where('guid', $orderOwner)->update([
                                'point' => (int)$originPoint + $order->amount * $bonusPercentage,
                            ]);
                        }
                    } catch (\Exception $e) {
                        Log::error($e);
                    }

                    Log::info(json_encode($data));

                    Mail::send('mail.paymentSuccess', [
                        'MerchantTradeNo' => $data['MerchantTradeNo'],
                    ], function($message) {
                        $message->to([
                            'vincent7697@gmail.com',
                            'hi@meansgood.com.tw'
                        ])->subject('取貨成功');
                        $message->from(env('MAIL_USERNAME'), '明谷生機');
                    });

                    return "1|OK";
                } else {
                    return "0|FAIL";
                }
            } else {
                Log::info("callback validation fail");
                return 0;
            }

            Log::info($orderFlag);
            Log::info(json_encode($data));

        } else {
            Log::error('The request origin are not from ecpay, please check.');
        }
    }
    /**
     * ATM 資訊更新
     */

    public function paymentInfo(Request $request)
    {
        $data = $request->all();

        try {
            $order = Order::where('merchantID', $data['CustomField1'])->first();

            DB::table('orders')
                ->where('merchantID', $data['CustomField1'])
                ->update([
                    'ExpireDate' => $data['ExpireDate'],
                    'BankCode' => $data['BankCode'],
                    'PaymentType' => $data['PaymentType'],
                    'vAccount' => $data['vAccount'],
                ]);

            Log::info('Update order sucess');

            return view('frontend.checkoutMethod.atmReport', [
                'atmData' => json_encode($request->all())
            ]);
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    /**
     * 取得所有訂單
     */
    public function getOrders($status)
    {
        if ($status == 'all') {
            return Order::orderBy('created_at', 'DESC')
                        ->paginate(15);
        } else {
            return Order::where('paymentStatus', $status)
                        ->orderBy('created_at', 'DESC')
                        ->paginate(15);
        }
    }

    /**
     * 搜尋訂單
     */
    public function searchOrders($merchantID)
    {
        return Order::where('merchantID', 'like', '%'.$merchantID.'%')->paginate(15);
    }

    /**
     * 訂單完成頁面
     */
    public function orderSuccess()
    {
        return view('frontend.checkoutMethod.checkoutSuccess', [
            'isThumbShow' => false,
            'thumb' => ''
        ]);
    }

    /**
     * 更改訂單狀態
     */
    public function updateOrderStatus(Request $request)
    {
        $data = $request->all();

        try {
            $order = Order::where('guid', $data['guid'])->update([
                'orderStatus' => $data['orderStatus'],
            ]);
            $status = 200;
            $message = 'Modify order status success.';
        } catch (\Exception $e) {
            $order = null;
            $status = 500;
            $message = 'Internal server error.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $order ], $status);
    }

    /**
     * add shipping method
     */
    public function addShippingMethod(Request $request)
    {
        $data = $request->all();

        try {
            $shipping = Shipping::create($data);
            $status = 200;
            $message = 'Add shipping methods success.';
        } catch (\Exception $e) {
            $shipping = null;
            $status = 500;
            $message = 'Internal server error.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $shipping ], $status);

    }

    /**
     * Edit shipping method
     */
    public function editShippingMethod(Request $request)
    {
        $data = $request->all();

        try {
            $shipping = Shipping::where('id', $data['id'])->update($data);
            $status = 200;
            $message = 'Edit shipping methods success.';
        } catch (\Exception $e) {
            $shipping = null;
            $status = 500;
            $message = 'Internal server error.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $shipping ], $status);

    }

    /**
     * Delete shipping method
     */
    public function deleteShippingMethod($id)
    {

        try {
            $shipping = Shipping::where('id', $id)->delete();
            $status = 200;
            $message = 'Edit shipping methods success.';
        } catch (\Exception $e) {
            $shipping = null;
            $status = 500;
            $message = 'Internal server error.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $shipping ], $status);

    }

    /**
     * Get all shipping methods
     */
    public function getShippingMethods()
    {

        try {
            $shipping = Shipping::all();
            $status = 200;
            $message = "Get shipping methods success.";
        } catch (\Exception $e) {
            $shipping = null;
            $status = 500;
            $message = "Internal server error.";
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $shipping ], $status);
    }
}
