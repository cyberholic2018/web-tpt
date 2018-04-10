<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;
use Cart;

class CartController extends Controller
{
    /**
     * Add single product to cart
     */
    public function addSingleProduct($guid)
    {
        try {
            $product = Product::where('guid', $guid)->first();

            if (intval($product->discountedPrice) > 0) {
                $price = $product->discountedPrice;
            } else {
                $price = $product->price;
            }

            $productMeta = array(
                'title' => $product->title,
                'guid' => $product->guid,
                'featureImage' => $product->featureImage,
                'Temperature' => $product->Temperature,
            );

            $cart = Cart::add(json_encode($productMeta), json_encode($productMeta), 1, $price);

            $status = 200;
            $message = 'Add product to cart success.';
        } catch (\Exception $e) {
            $cart = array();
            $status = 500;
            $message = 'Add product to cart fail.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $cart], $status);
    }

    /**
     * Add to Cart
     */
    public function addProduct($guid, Request $request)
    {
        $data = $request->all();

        try {
            $product = Product::where('guid', $guid)->first();

            if (intval($product->discountedPrice) > 0) {
                $price = $product->discountedPrice;
            } else {
                $price = $product->price;
            }

            $productMeta = array(
                'title' => $product->title,
                'guid' => $product->guid,
                'featureImage' => $product->featureImage,
                'Temperature' => $product->Temperature,
            );

            $cart = Cart::add(json_encode($productMeta), json_encode($productMeta), $data['quantity'], $price);

            $status = 200;
            $message = 'Add product to cart success.';
        } catch (\Exception $e) {
            $cart = array();
            $status = 500;
            $message = 'Add product to cart fail.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $cart], $status);
    }

    /**
     * Get All Cart content
     */
    public function getCartContent()
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

        return $arrayName = array(
            'amount' => Cart::total(),
            'cart' => $cartArray,
        );
    }

    /**
     * Update cart content
     */
    public function updateCart(Request $request)
    {
        $data = json_decode($request->all()['cart']);

        foreach ($data as $key => $value) {
            Cart::update($value->rowId, $value->qty);
        }

        return $this->getCartContent();
    }

    /**
     * Remove single product
     */
    public function removeSingleProduct($rowid)
    {
        try {
            $cart = Cart::remove($rowid);
            $status = 200;
            $message = 'Remove product to cart success.';
        } catch (\Exception $e) {
            $cart = null;
            $status = 500;
            $message = 'Remove product to cart fail.';
        }

        return response()->json([ 'status' => $status, 'message' => $message, 'data' => $cart], $status);
    }

    /**
     * check Temperature
     * 在購物車內有商品時呼叫此API才有作用
     */
    public function checkTemp()
    {
        $cartContent = $this->getCartContent();

        $tempProperty = array('Temperature' => 'room');

        if (count($cartContent['cart']) > 0) {
            foreach ($cartContent['cart'] as $key => $item) {
                if ($item['id']->Temperature == 'refrigeration') {
                    $tempProperty['Temperature'] = 'refrigeration';
                }
            }
        }

        return $tempProperty;

    }

    /**
     * Truncate Cart
     */
    public function truncateCart()
    {
        Cart::destroy();

        return 'remove success';
    }
}
