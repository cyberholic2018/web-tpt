<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Kennychou3896\Allpay2in1\Allpay;
use Illuminate\Support\Facades\Log;
use App\Services\PublicServiceProvider;
use App\Bonus;
use App\Order;
use App\Product;
use App\User;
use App\Address;
use Illuminate\Support\Facades\DB;
use Cart;
use Hash;
use Auth;
use Mail;

class CheckoutController extends Controller
{
    private function checkAddress($guid, $type)
    {
        return count(Address::where('owner', $guid)->where('type', $type)->get());
        try {
            if (count(Address::where('guid', $guid)->where('type', $type)->first()) == 0) {
                return false;
            } else {
                return true;
            }

            // return count(Address::where('guid', $guid)->where('type', $type)->first());
        } catch (\Exception $e) {
            return false;
        }
    }

    private function editAddress($type, $data, $mode)
    {
        $shippingTarget = json_decode($data['shippingTarget'], true);


        if ($data['shippingMethod'] == 'cvs') {
            # code...
        } else {
            # code...
        }

        if ($mode == 'add') {
            if ($data['shippingMethod'] == 'cvs') {
                return Address::create([
                    'guid' => PublicServiceProvider::generateGuid(),
                    'owner' => $data['owner'],
                    'type' => $type,
                    'fullName' => $shippingTarget['ReceiverName'],
                    'cellPhone' => $shippingTarget['ReceiverCellPhone'],
                    'email' => $shippingTarget['ReceiverEmail'],
                ]);
            } else {
                return Address::create([
                    'guid' => PublicServiceProvider::generateGuid(),
                    'owner' => $data['owner'],
                    'type' => $type,
                    'fullName' => $shippingTarget['ReceiverName'],
                    'cellPhone' => $shippingTarget['ReceiverCellPhone'],
                    'address' => $shippingTarget['ReceiverAddress'],
                    'city' => $shippingTarget['ReceiverCity'],
                    'postcode' => $shippingTarget['ReceiverPort'],
                    'email' => $shippingTarget['ReceiverEmail'],
                ]);
            }
        } else {
            if ($data['shippingMethod'] == 'cvs') {
                return Address::where('owner', $data['owner'])->update([
                    'type' => $type,
                    'fullName' => $shippingTarget['ReceiverName'],
                    'cellPhone' => $shippingTarget['ReceiverCellPhone'],
                    'email' => $shippingTarget['ReceiverEmail'],
                ]);
            } else {
                return Address::where('owner', $data['owner'])->update([
                    'type' => $type,
                    'fullName' => $shippingTarget['ReceiverName'],
                    'cellPhone' => $shippingTarget['ReceiverCellPhone'],
                    'address' => $shippingTarget['ReceiverAddress'],
                    'city' => $shippingTarget['ReceiverCity'],
                    'postcode' => $shippingTarget['ReceiverPort'],
                    'email' => $shippingTarget['ReceiverEmail'],
                ]);
            }
        }
    }

    /**
     * Create new account
     */
    public function createAccount($data)
    {
        // return $data;
        $bonus = Bonus::all()->first();

        $shippingTarget = json_decode($data['shippingTarget'], true);

        try {
            $defaultPoint = Bonus::all()->first()['defaultPoint'];
        } catch (\Exception $e) {
            $defaultPoint = 25;
        }

        try {
            $subscriptable = $data['subscriptable'];
            $subscriptable = true;
        } catch (\Exception $e) {
            $subscriptable = false;
        }

        try {
            event(new Registered($user = User::create([
                'guid' => PublicServiceProvider::generateGuid(),
                'name' => $shippingTarget['ReceiverName'],
                'email' => $shippingTarget['ReceiverEmail'],
                'role' => 'NORMAL',
                'point' => $defaultPoint,
                'password' => bcrypt($data['password']),
                'subscriptable' => $subscriptable,
            ])));

            Mail::send('mail.welcomeMail', [
                'name' => $shippingTarget['ReceiverName'],
                'account' => $shippingTarget['ReceiverEmail'],
                'point' => $bonus['defaultPoint'],
                'percentage' => $bonus['percentage']
            ], function($message) use ($shippingTarget) {
                $message->to([ $shippingTarget['ReceiverEmail'], ])->subject('明谷生機線上購物加入會員通知');
                $message->from(env('MAIL_USERNAME'));
            });

            $this->guard()->login($user);

            return $user;
        } catch (\Exception $e) {
            Log::error($e);
        }
    }

    /**
     * 信用卡 OR ATM轉帳付款
     */
    public function orderPayment(Request $request)
    {
        $actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";

        $data = $request->all();

        $sender = env('MAIL_USERNAME');

        $cartInfo = json_decode($data['cartInfo']);
        $shippingTarget = json_decode($data['shippingTarget'], true);

        $totalAmount = (int)$data['TotalAmount'] - (int)$data['pointUsage'] + (int)$data['shippingCosts'];

        $merchantIdCache = array(
            'MerchantTradeNo' => "MG".time(),
        );

        if ($data['addNewMember'] == 'true') {
            $newUser = $this->createAccount($data);
        } else {
            $newUser = false;
        }

        // return $data;

        // return $this->checkAddress($data['owner'], 'shipping');
        $allpay = new Allpay();

        //基本參數(可依系統規劃自行調整)
        $allpay->i()->Send['ReturnURL']             = $actual_link."/ecpay-return" ;        //交易結果回報的網址
        $allpay->i()->Send['ClientBackURL']         = $actual_link."/order-success" ;       //交易結束，讓user導回的網址
        $allpay->i()->Send['MerchantTradeNo']       = $merchantIdCache['MerchantTradeNo'] ; //訂單編號
        $allpay->i()->Send['MerchantTradeDate']     = date('Y/m/d H:i:s');                  //交易時間
        $allpay->i()->Send['TotalAmount']           = $totalAmount;                         //交易金額
        $allpay->i()->Send['TradeDesc']             = "明谷生機 - 商品交易" ;                //交易描述
        $allpay->i()->Send['EncryptType']           = '1' ;
        $allpay->i()->Send['ChoosePayment']         = $data['ChoosePayment'] ;              //付款方式
        $allpay->i()->Send['PaymentType']           = 'aio' ;
        $allpay->i()->Send['CustomField1']          = $merchantIdCache['MerchantTradeNo'];
        $allpay->i()->Send['CustomField2']          = Hash::make($merchantIdCache['MerchantTradeNo']);

        if ($data['ChoosePayment'] == 'ATM') {
            $allpay->i()->SendExtend['ExpireDate']        = 7;
            $allpay->i()->SendExtend['PaymentInfoURL']    = $actual_link."/payment_info";
            // $allpay->i()->SendExtend['ClientRedirectURL'] = $actual_link."/payment_info";
        }

        //訂單的商品資料
        foreach ($cartInfo as $item) {
            array_push($allpay->i()->Send['Items'],
                    array('Name' => $item->Name,
                    'Price' => (int)($item->price),
                    'Currency' => "元",
                    'Quantity' => (int) ($item->qty),
                    'URL' => "http://www.yourwebsites.com.tw/Product"));
        }

        // 清除購物車
        Cart::destroy();

        return DB::transaction(function () use ($data, $merchantIdCache, $allpay, $cartInfo, $shippingTarget, $sender, $newUser)
        {
            if (Auth::guest()) {
                $pointUsage = 0;
                $owner = 'guest';
            } else {
                $pointUsage = (int)$data['pointUsage'];
                if ($newUser) {
                    $owner = $newUser['guid'];
                } else {
                    $owner = $data['owner'];
                }

                Log::info($owner);
                $data['owner'] = $owner;
                if ($this->checkAddress($owner, 'shipping')) {
                    $this->editAddress('shipping', $data, 'edit');
                    // return 1;
                } else {
                    $this->editAddress('shipping', $data, 'add');
                    // return 0;
                }

                if ($pointUsage > Auth::user()->point) {
                    DB::rollback();
                    return "<h1 style='text-align: center; margin-top: 100px;'>點數錯誤，請重新下訂。</h1>";
                } else {
                    try {
                        User::where('guid', $owner)->update([
                            'point' => (int)Auth::user()->point - $pointUsage,
                        ]);
                    } catch (\Exception $e) {
                        Log::error($e);
                        DB::rollback();
                        return "<h1 style='text-align: center; margin-top: 100px;'>點數錯誤，請重新下訂。</h1>";
                    }
                }
            }

            foreach ($cartInfo as $item) {
                if (Product::where('guid', $item->id->guid)->first()['reserveStatus']) {

                    if ((Product::where('guid', $item->id->guid)->first()['status'] == 'outofstock') ||
                        ((int)Product::where('guid', $item->id->guid)->first()['quantity'] == 0)) {
                        DB::rollback();
                        return "<h1 style='text-align: center; margin-top: 100px;'>商品數量有誤，請重新建立訂單。</h1>";
                    } else {
                        if ((int)$item->qty > (int)Product::where('guid', $item->id->guid)->first()['quantity']) {
                            return "<h1 style='text-align: center; margin-top: 100px;'>商品數量有誤，請重新建立訂單。</h1>";
                            DB::rollback();
                        } else {
                            try {
                                Product::where('guid', $item->id->guid)->update([
                                    'quantity' => (int)Product::where('guid', $item->id->guid)->first()['quantity'] - (int)$item->qty,
                                ]);
                            } catch (\Exception $e) {
                                Log::error($e);
                                DB::rollback();
                                return "<h1 style='text-align: center; margin-top: 100px;'>商品數量有誤，請重新建立訂單。</h1>";
                            }
                        }
                    }
                }
            }

            try {
                Order::create([
                    'guid'              => str_random(42),
                    'content'           => $data['cartInfo'],
                    'amount'            => (int)$data['TotalAmount'],
                    'merchantID'        => $merchantIdCache['MerchantTradeNo'],
                    'pointUsage'        => $pointUsage,
                    'status'            => 'unpaid',
                    'owner'             => $owner,
                    'paymentMethod'     => $data['ChoosePayment'],
                    'shippingMethod'    => $data['shippingMethod'],
                    'shippingTarget'    => $data['shippingTarget'],
                    'Temperature'       => $data['Temperature'],
                    'receipt'           => $data['receipt'],
                    'taxId'             => $data['taxId'],
                    'orderFlag'         =>  Hash::make($merchantIdCache['MerchantTradeNo']),
                    'remarks'           => 'remarks',
                ]);
            } catch (\Exception $e) {
                Log::error($e);
                DB::rollback();
                return "<h1 style='text-align: center; margin-top: 100px;'>訂單建立失敗，請聯繫商家。</h1>";
            }

            //Go to EcPay
            echo "<h1 style='text-align: center; margin-top: 100px;'>交易資訊傳輸中...</h1>";

            Mail::send('mail.orderNotice', [
                'data' => $data,
                'cartInfo' => $cartInfo,
                'shippingTarget' => $shippingTarget,
                'merchantIdCache' => $merchantIdCache
            ], function($message) use ($sender, $shippingTarget) {
                $message->to([
                    'hi@meansgood.com.tw',
                ])->subject('訂單成立通知 - 來自 '.$shippingTarget['ReceiverName'].' 的訂購');
                $message->from($sender);
            });

            Mail::send('mail.notice', [
                'data' => $data,
                'cartInfo' => $cartInfo,
                'shippingTarget' => $shippingTarget,
                'merchantIdCache' => $merchantIdCache
            ], function($message) use ($sender, $shippingTarget) {
                $message->to([
                    $shippingTarget['ReceiverEmail'],
                    $sender,
                ])->subject('訂單成立通知信');
                $message->from($sender);
            });

            echo $allpay->i()->CheckOutForm();
        });
    }

    /**
     * 超商取貨物流單建立
     */
    public function shopReply(Request $request)
    {
        $data = $request->all();

        $sender = env('MAIL_USERNAME');

        // return $data;
        // return json_encode($data);
        $allpay = new Allpay();

        $cartInfo = json_decode($data['cartInfo']);
        $shippingTarget = json_decode($data['shippingTarget'], true);

        // return $shippingTarget;

        $totalAmount = (int)$data['TotalAmount'] - (int)$data['pointUsage'] + (int)$data['shippingCosts'];

        $merchantIdCache = array(
            'MerchantTradeNo' => "MG".time(),
        );

        if ($data['addNewMember'] == 'true') {
            $newUser = $this->createAccount($data);
        } else {
            $newUser = false;
        }

        return DB::transaction(function () use ($data, $merchantIdCache, $allpay, $cartInfo, $shippingTarget, $sender, $totalAmount, $newUser)
        {
            if (Auth::guest()) {
                $pointUsage = 0;
                $owner = 'guest';
                Log::info('guest');
            } else {
                Log::info('member');
                $pointUsage = (int)$data['pointUsage'];
                if ($newUser) {
                    $owner = $newUser['guid'];
                } else {
                    $owner = $data['owner'];
                }

                Log::info($owner);
                $data['owner'] = $owner;
                if ($this->checkAddress($owner, 'shipping')) {
                    $this->editAddress('shipping', $data, 'edit');
                    // return 1;
                } else {
                    $this->editAddress('shipping', $data, 'add');
                    // return 0;
                }

                if ($pointUsage > Auth::user()->point) {
                    DB::rollback();
                    return "<h1 style='text-align: center; margin-top: 100px;'>點數錯誤，請重新下訂。</h1>";
                } else {
                    try {
                        User::where('guid', $owner)->update([
                            'point' => (int)Auth::user()->point - $pointUsage,
                        ]);
                    } catch (\Exception $e) {
                        Log::error($e);
                        DB::rollback();
                        return "<h1 style='text-align: center; margin-top: 100px;'>點數錯誤，請重新下訂。</h1>";
                    }
                }
            }

            foreach ($cartInfo as $item) {
                if (Product::where('guid', $item->id->guid)->first()['reserveStatus']) {

                    if ((Product::where('guid', $item->id->guid)->first()['status'] == 'outofstock') ||
                        ((int)Product::where('guid', $item->id->guid)->first()['quantity'] == 0)) {
                        DB::rollback();
                        return "<h1 style='text-align: center; margin-top: 100px;'>商品數量有誤，請重新建立訂單。</h1>";
                    } else {
                        if ((int)$item->qty > (int)Product::where('guid', $item->id->guid)->first()['quantity']) {
                            return "<h1 style='text-align: center; margin-top: 100px;'>商品數量有誤，請重新建立訂單。</h1>";
                            DB::rollback();
                        } else {
                            try {
                                Product::where('guid', $item->id->guid)->update([
                                    'quantity' => (int)Product::where('guid', $item->id->guid)->first()['quantity'] - (int)$item->qty,
                                ]);
                            } catch (\Exception $e) {
                                Log::error($e);
                                DB::rollback();
                                return "<h1 style='text-align: center; margin-top: 100px;'>商品數量有誤，請重新建立訂單。</h1>";
                            }
                        }
                    }
                }
            }

            try {
            	$AL =$allpay->l();
              	$AL->HashKey = config('allpay.HashKey');
              	$AL->HashIV = config('allpay.HashIV');

                $AL->Send = array(
                    'MerchantID'            => config('allpay.MerchantID'),
                    'MerchantTradeNo'       => $merchantIdCache['MerchantTradeNo'],
                    'MerchantTradeDate'     => date('Y/m/d H:i:s'),
                    'LogisticsType'         => 'CVS',
                    'LogisticsSubType'      => $data['LogisticsSubType'],
                    'GoodsAmount'           => $totalAmount,
                    'CollectionAmount'      => $totalAmount,
                    'IsCollection'          => $data['IsCollection'],    //是否代收貨款
                    'GoodsName'             => '明谷生機 - 商品訂單',
                    'SenderName'            => '明谷生機',
                    'SenderPhone'           => '031234567',
                    'SenderCellPhone'       => '0911222333',
                    'ReceiverName'          => $data['ReceiverName'],
                    'ReceiverCellPhone'     => $data['ReceiverCellPhone'],
                    'ReceiverEmail'         => $data['ReceiverEmail'],
                    'TradeDesc'             => '測試交易敘述',
                    'ServerReplyURL'        => url('logistics-return'),        //物流狀態回覆網址
                    'LogisticsC2CReplyURL'  => url('logistics_order_C2C_reply'),    //到付店若有異動訊息回覆網址
                    'Remark'                => '測試備註',
                    'PlatformID'            => '',
                );

                $AL->SendExtend = array(
                     'ReceiverStoreID'  => $data['CVSStoreID'],     //到付店id
                     'ReturnStoreID'    => $data['CVSStoreID']        //回退店id,一般與寄件店id同
                );

                // 清除購物車
                Cart::destroy();

            	$Result = $AL->BGCreateShippingOrder();   //超商系統回覆內容

                $cvsResult = array(
                    'MerchantID'        => $Result['MerchantID'],
                    'AllPayLogisticsID' => $Result['AllPayLogisticsID'],
                    'CVSPaymentNo'      => $Result['CVSPaymentNo'],
                    'CVSValidationNo'   => $Result['CVSValidationNo'],
                );

                $newShippingTarget = array_merge(json_decode($data['shippingTarget'], true), $cvsResult);

                Mail::send('mail.orderNotice', [
                    'data'              => $data,
                    'cartInfo'          => $cartInfo,
                    'shippingTarget'    => $shippingTarget,
                    'merchantIdCache'   => $merchantIdCache
                ], function($message) use ($sender, $shippingTarget) {
                    $message->to([
                        'hi@meansgood.com.tw',
                    ])->subject('訂單成立通知 - 來自 '.$shippingTarget['ReceiverName'].' 的訂購');
                    $message->from($sender);
                });

                Mail::send('mail.notice', [
                    'data'              => $data,
                    'cartInfo'          => $cartInfo,
                    'shippingTarget'    => $shippingTarget,
                    'merchantIdCache'   => $merchantIdCache
                ], function($message) use ($sender, $shippingTarget) {
                    $message->to([
                        $shippingTarget['ReceiverEmail'],
                        $sender,
                    ])->subject('訂單成立通知信');
                    $message->from($sender);
                });

                try {
                    Order::create([
                        'guid'              => str_random(42),
                        'content'           => $data['cartInfo'],
                        'amount'            => (int)$data['TotalAmount'],
                        'merchantID'        => $merchantIdCache['MerchantTradeNo'],
                        'pointUsage'        => (int)$data['pointUsage'],
                        'status'            => 'cod',
                        'owner'             => $owner,
                        'paymentMethod'     => 'cod',
                        'shippingMethod'    => 'cvs',
                        'receipt'           => $data['receipt'],
                        'taxId'             => $data['taxId'],
                        'shippingTarget'    => json_encode($newShippingTarget),
                        'orderFlag'         => Hash::make($merchantIdCache['MerchantTradeNo']),
                        'remarks'           => 'remarks',
                    ]);
                } catch (\Exception $e) {
                    Log::error($e);
                    DB::rollback();
                }

                Log::info(json_encode($Result));

                if ($owner == 'guest') {
                    return PublicServiceProvider::exception('感謝您的選購，請至信箱查詢您的訂單明細。');
                } else {
                    return redirect('/order-success');
                }

            	// echo '<pre>' . print_r($Result, true) . '</pre>';
              	if($Result['RtnCode'] == 300){
              	}
            } catch(Exception $e) {
                $Result = $e->getMessage();
              	echo $e->getMessage();
                DB::rollback();
        	}
        });
    }

    /**
     * 會員專區繼續付款
     */
    public function orderPaymentDashboard($guid)
    {

        try {
            $order = Order::where('guid', $guid)->first();
        } catch (\Exception $e) {
            return "Can not find order.";
        }

        $orderParametor = array(
            'merchantID'        => $order['merchantID'],
            'cartInfo'          => json_decode($order['content']),
            'amount'            => $order['amount'],
            'pointUsage'        => $order['pointUsage'],
            'paymentMethod'     => $order['paymentMethod'],
            'shippingMethod'    => $order['shippingMethod'],
        );


        $actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";

        $allpay = new Allpay();

        $allpay->i()->Send['ReturnURL']         = $actual_link."/ecpay-return";
        $allpay->i()->Send['ClientBackURL']     = $actual_link."/user";
        $allpay->i()->Send['MerchantTradeNo']   = "MG".time();
        $allpay->i()->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');
        $allpay->i()->Send['TotalAmount']       = (int)$orderParametor['amount'] - (int)$orderParametor['pointUsage'];
        $allpay->i()->Send['TradeDesc']         = "明谷生機 - 商品交易";
        $allpay->i()->Send['EncryptType']       = '1';
        $allpay->i()->Send['ChoosePayment']     = $orderParametor['paymentMethod'] ;
        $allpay->i()->Send['PaymentType']       = 'aio';
        $allpay->i()->Send['CustomField1']      = $orderParametor['merchantID'];

        //訂單的商品資料
        foreach ($orderParametor['cartInfo'] as $item) {
            array_push($allpay->i()->Send['Items'],
                    array(
                        'Name' => $item->Name,
                        'Price' => (int)($item->price),
                        'Currency' => "元",
                        'Quantity' => (int) ($item->qty),
                        'URL' => "http://www.yourwebsites.com.tw/Product",
                    ));
        }

        //Go to EcPay
        echo "<h1 style='text-align: center; margin-top: 100px;'>交易資訊傳輸中...</h1>";
        echo $allpay->i()->CheckOutForm();
    }

    /**
     * 後台已產生ATM訂單，但沒有選擇銀行，所以沒有虛擬帳號，此為重新產生帳號的流程
     */
    public function reGenerateVAccount($guid)
    {
        try {
            $order = Order::where('guid', $guid)->get();
            $cartInfo = json_decode($order[0]->content);
        } catch (\Exception $e) {
            return "Can not find order.";
        }

        $actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";

        $allpay = new Allpay();

        $allpay->i()->Send['ReturnURL']             = $actual_link."/ecpay-return";
        $allpay->i()->Send['ClientBackURL']         = $actual_link."/user";
        $allpay->i()->Send['MerchantTradeNo']       = "MG".time();
        $allpay->i()->Send['MerchantTradeDate']     = date('Y/m/d H:i:s');
        $allpay->i()->Send['TotalAmount']           = (int)$order[0]['amount'] - (int)$order[0]['pointUsage'];
        $allpay->i()->Send['TradeDesc']             = "明谷生機 - 商品交易";
        $allpay->i()->Send['EncryptType']           = '1';
        $allpay->i()->Send['ChoosePayment']         = $order[0]['paymentMethod'] ;
        $allpay->i()->Send['PaymentType']           = 'aio';
        $allpay->i()->Send['CustomField1']          = $order[0]['merchantID'];
        $allpay->i()->SendExtend['ExpireDate']      = 7;
        $allpay->i()->SendExtend['PaymentInfoURL']  = $actual_link."/payment_info";

        //訂單的商品資料
        foreach ($cartInfo as $item) {
            array_push($allpay->i()->Send['Items'],
                    array(
                        'Name' => $item->Name,
                        'Price' => (int)($item->price),
                        'Currency' => "元",
                        'Quantity' => (int) ($item->qty),
                        'URL' => "http://www.yourwebsites.com.tw/Product",
                    ));
        }

        //Go to EcPay
        echo "<h1 style='text-align: center; margin-top: 100px;'>交易資訊傳輸中...</h1>";
        echo $allpay->i()->CheckOutForm();
    }

    /**
     * 後台手動產生物流訂單
     * Parameter:
     *
     * IsCollection,        是否代收貨款
     * LogisticsType,       運送方式
     * LogisticsSubType,    若運送方式為CVS的話，指定這個參數即為超商的標的
     * TotalAmount,
     * ReceiverName,
     * ReceiverCellPhone,
     * ReceiverEmail,
     * CVSStoreID
     */
    public function generateCvs(Request $request)
    {
        $data = $request->all();

        // return date("Y/m/d", strtotime('+2 days', time()));
        // return $data;
        // return json_encode($data);
        $allpay = new Allpay();

        $merchantIdCache = array(
            'MerchantTradeNo' => "MG".time(),
        );

        try {
        	$AL =$allpay->l();
          	$AL->HashKey = config('allpay.HashKey');
          	$AL->HashIV = config('allpay.HashIV');

            $AL->Send = array(
                'MerchantID'            => config('allpay.MerchantID'),
                'MerchantTradeNo'       => 'mic-' . date('YmdHis'),
                'MerchantTradeDate'     => date('Y/m/d H:i:s'),
                'LogisticsType'         => $data['LogisticsType'],
                'LogisticsSubType'      => $data['LogisticsSubType'],
                'GoodsAmount'           => (int)$data['TotalAmount'],
                'CollectionAmount'      => (int)$data['TotalAmount'],
                'IsCollection'          => 'N',
                'GoodsName'             => '明谷生機 - 商品訂單',
                'SenderName'            => '明谷生機',
                'SenderPhone'           => '031234567',
                'SenderCellPhone'       => '0911222333',
                'ReceiverName'          => $data['ReceiverName'],
                'ReceiverCellPhone'     => $data['ReceiverCellPhone'],
                // 'ReceiverEmail'         => $data['ReceiverEmail'],
                'TradeDesc'             => '測試交易敘述',
                'ServerReplyURL'        => url('logistics-return'),        //物流狀態回覆網址
                'LogisticsC2CReplyURL'  => url('logistics_order_C2C_reply'),    //到付店若有異動訊息回覆網址
                'Remark'                => '測試備註',
                'PlatformID'            => '',
            );

            if ($data['LogisticsType'] == 'Home') {
                $AL->SendExtend = array(
                    'SenderZipCode'         => '30844',
                    'SenderAddress'         => '新竹縣寶山鄉園區二路356巷51-7號',
                    'Temperature'           => $request->all()['Temperature'],
                    'ReceiverZipCode'       => $request->all()['ReceiverPort'],
                    'ReceiverAddress'       => $request->all()['ReceiverAddress'],
                );
            } else {
                $AL->SendExtend = array(
                    'ReceiverStoreID'  => $request->all()['CVSStoreID'],     //到付店id
                    'ReturnStoreID'    => $request->all()['CVSStoreID']        //回退店id,一般與寄件店id同
                );
            }

        	$Result = $AL->BGCreateShippingOrder();   //超商系統回覆內容
            Log::info(json_encode($Result));
            // return redirect('/order-success');
        	// echo '<pre>' . print_r($Result, true) . '</pre>';
            if($Result['RtnCode'] == 300){
                $order = Order::where('guid', $data['guid'])->first();
                $shippingTarget = json_decode($order['shippingTarget'], true);

                $cvsResult = array(
                    'MerchantID' => $Result['MerchantID'],
                    'AllPayLogisticsID' => $Result['AllPayLogisticsID'],
                    'CVSPaymentNo' => $Result['CVSPaymentNo'],
                    'CVSValidationNo' => $Result['CVSValidationNo'],
                );

                $newShippingTarget = array_merge($shippingTarget, $cvsResult);

                Order::where('guid', $data['guid'])->update([
                    'status' => 'shippingGenerated',
                    'shippingTarget' => json_encode($newShippingTarget),
                ]);
          	}
            return $Result;

        } catch(Exception $e) {
            $Result = $e->getMessage();
          	echo $e->getMessage();
    	}
    }

    /**
     * 產生繳費單
     * Parameter
     *
     * LogisticsSubType
     */
    public function generateSheet(Request $request)
    {
        $data = $request->all();
        $allpay = new Allpay();

        $AL = $allpay->l();
        $AL->HashKey = config('allpay.HashKey');
        $AL->HashIV = config('allpay.HashIV');
        $LogisticsSubType = $data['LogisticsSubType'];

        switch ($LogisticsSubType) {
            case 'Home':
                $AL->Send = array(
                    'MerchantID' => $data['MerchantID'],
                    'AllPayLogisticsID' => $data['AllPayLogisticsID'],
                );

                $printBill = $allpay->l()->PrintTradeDoc();
                break;
            case 'UNIMARTC2C':
                $AL->Send = array(
                    'MerchantID' => $data['MerchantID'],
                    'AllPayLogisticsID' => $data['AllPayLogisticsID'],
                    'CVSPaymentNo' => $data['CVSPaymentNo'],
                    'CVSValidationNo' => $data['CVSValidationNo'],
                );

                $printBill = $allpay->l()->PrintUnimartC2CBill();
                break;
            case 'FAMIC2C':
                $AL->Send = array(
                    'MerchantID' => $data['MerchantID'],
                    'AllPayLogisticsID' => $data['AllPayLogisticsID'],
                    'CVSPaymentNo' => $data['CVSPaymentNo'],
                );

                $printBill = $allpay->l()->PrintFamilyC2CBill();
                break;
            case 'HILIFEC2C':
                $AL->Send = array(
                    'MerchantID' => $data['MerchantID'],
                    'AllPayLogisticsID' => $data['AllPayLogisticsID'],
                    'CVSPaymentNo' => $data['CVSPaymentNo'],
                );

                $printBill = $allpay->l()->PrintHiLifeC2CBill();
                break;
        }

        echo $printBill;
    }

    /**
     * 取得超商店家參數
     */
    public function getCvsTarget(Request $request)
    {
        $data = $request->all();

        $allpay = new Allpay();

        $allpay->l()->Send['MerchantTradeNo']   = 'MGCVS_'.date('YmdHis');
        $allpay->l()->Send['LogisticsSubType']  = $data['shop'];
        $allpay->l()->Send['IsCollection']      = 'N';//是否代收貨款
        $allpay->l()->Send['ServerReplyURL']    = url('cvs_map_callback'); //超商系統回覆路徑post
        $allpay->l()->Send['ExtraData']         = ''; //附帶資料
        $allpay->l()->Send['Device']            = '0';

        $logisticsForm = $allpay->l()->CvsMap();
        echo $logisticsForm;
    }

    public function callBackCvs(Request $request)
    {
        return view('frontend.logistics.cvsMap', [
            'logisticsForm' => $request->all(),
        ]);
    }

    public function logistics_order_reply(Request $request)
    {
        Log::info('test');
        // return json_encode($request->all());
        // return view('checkoutSuccess')
        // return redirect('/');
        return view('frontend.checkoutMethod.checkoutSuccess', [
            'atmData' => json_decode($request->all()),
        ]);
    }

    public function checkoutTest(Request $request)
    {
        // $buyqty = 25;
        // $prodqty = Product::where('id', 4)->first()['quantity'];
        //
        // return $prodqty;

        $price = 1580;
        $qty = 25;

        return DB::transaction(function() use ($qty, $price) {

            DB::table('products')->where('id', 4)->update([
                'price' => $price,
            ]);
            $product = DB::table('products')->where('id', 4)->update([
                'quantity' => $qty,
            ]);

            if (Product::where('id', 4)->first()['quantity'] < 0) {
                DB::rollback();
                return 0;
            } else {
                return 1;
            }
        });

        // return DB::table('products')->where('id', 4)[0];

        // DB::commit();

        // $product = DB::table('products')->where('id', 4)->update([
        //     'quantity' => 15,
        // ]);
        // return $product;

    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard();
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        //
    }
}
