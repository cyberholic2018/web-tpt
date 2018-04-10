<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;
use App\SiteMeta;
use App\Address;
use App\Order;
use App\Bonus;
use Cart;
use Auth;
use PublicServiceProvider;

class BuisnessController extends Controller
{
    public function __construct()
    {

    }

    public function cart()
    {
        $cartArray = array();

        foreach(Cart::content() as $row) {
            array_push($cartArray, [
                'id' => json_decode($row->name),
                'rowId' => $row->rowId,
                'qty' => $row->qty,
                'price' => $row->price,
                'total' => $row->total
            ]);
        }

        return view('frontend.cart.cart', [
            'amount' => Cart::total(),
            'cart' => $cartArray,
            'isThumbShow' => false,
            'thumb' => '<a href="/">首頁</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;購物車'
        ]);
    }

    public function getPoint()
    {

        try {
            $status = 200;
            $message = 'get point success';
            $data = array(
                'point' => Auth::user()->point,
                'guid' => Auth::user()->guid,
                'email' => Auth::user()->email,
                'percentage' => Bonus::all()->first()['percentage'],
            );
        } catch (\Exception $e) {
            $status = 401;
            $message = "Authentication failed.";
            $data = array();
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $data ], $status);
    }

    public function transToCheckout(Request $request)
    {
        $data = $request->all();

        $cartArray = array();

        foreach(Cart::content() as $row) {
            array_push($cartArray, [
                'id' => json_decode($row->name),
                'rowId' => $row->rowId,
                'qty' => $row->qty,
                'price' => $row->price,
                'total' => $row->total
            ]);
        }

        if (count($cartArray) == 0) {
            echo '<script>window.location.href = "/"</script>';
            return redirect('/');
        } else {
            return view('frontend.checkoutMethod.checkout', [
                'shippingMethod' => $data['shipping_method'],
                'isThumbShow' => false,
                'thumb' => null
            ]);
        }
    }

    public function order()
    {
        return view('order', [
            'isThumbShow' => false,
            'thumb' => null
        ]);
    }

    public function orderChecking(Request $request)
    {
        $data = $request->all();

        $this->validate($request, [
            'orderId' => 'required|string|min:6',
            'g-recaptcha-response' => 'required|captcha',
        ]) ;

        try {
            $order = Order::where('merchantID', $data['orderId'])->first();

            if ($order) {
                return view('frontend.checkoutMethod.orderPage', [
                    'order' => $order,
                    'isThumbShow' => false,
                    'thumb' => null
                ]);
            } else {
                return PublicServiceProvider::exception('查無此訂單');
            }

        } catch (\Exception $e) {
            return $e;
        }
    }

    public function getBillingAddress($guid)
    {
        $address = Address::where('owner', $guid)
                          ->where('type', 'billing')
                          ->get();

        return response()->json([ 'status' => 200, 'message' => 'Get billing address success.', 'data' => $address ], 200);
    }
}
