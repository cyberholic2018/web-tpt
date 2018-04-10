@extends('main')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 member-auth-form-table">
                <h3>查詢訂單</h3>
                <table class="sign-form">
                    <tr>
                        <td>訂單編號</td>
                        <td>{{$order->merchantID}}</td>
                    </tr>
                    <tr>
                        <td>商品內容</td>
                        <td>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>商品</th>
                                        <th>數量</th>
                                        <th>單價</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach (json_decode($order->content) as $product)
                                        <tr>
                                            <td>{{$product->Name}}</td>
                                            <td>{{$product->qty}}</td>
                                            <td>{{$product->price}}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>訂單金額</td>
                        <td>NT$ {{$order->amount}}</td>
                    </tr>
                    <tr>
                        <td>付款方式</td>
                        <td>
                            @php
                                switch ($order->paymentMethod) {
                                    case 'Credit':
                                        echo "信用卡";
                                        break;
                                    case 'cod':
                                        echo "超商取貨付款";
                                        break;
                                    case 'ATM':
                                        echo "ATM 轉帳";
                                }
                            @endphp
                        </td>
                    </tr>
                    @unless ($order->paymentMethod == 'cod')
                        <tr>
                            <td>付款資訊</td>
                            <td>
                                @if ($order->paymentMethod == 'Credit')
                                    @if ($order->paymentStatus == 'unpaid')

                                        <form class="" action="/order-payment-dashboard/{{urlencode($order->guid)}}" method="post">
                                            {{csrf_field()}}
                                            <button type="submit" class="btn btn-xs btn-primary" name="button">尚未付款，點我付款去</button>
                                        </form>
                                    @else
                                        已付款
                                    @endif
                                @else
                                    @if ($order->paymentStatus == 'unpaid')
                                        @if ($order->BankCode)
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td>銀行別</td>
                                                        <td>{{$order->BankCode}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>虛擬帳號</td>
                                                        <td>{{$order->vAccount}}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>虛擬帳號到期日</td>
                                                        <td>{{$order->ExpireDate}}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        @else
                                            <form action="/re-generate-vAccount/{{$order->guid}}" method="post">
                                                {{csrf_field()}}
                                                <button class="btn btn-xs btn-primary" name="button">此筆ATM訂單沒有虛擬帳號，點我產生</button>
                                            </form>
                                        @endif
                                    @else
                                        已付款
                                    @endif
                                @endif
                            </td>
                        </tr>
                    @endunless
                    <tr>
                        <td>運送方式</td>
                        <td>
                            @if ($order->shippingMethod == 'cvs')
                                超商取貨
                            @elseif ($order->shippingMethod == 'delivery')
                                國內宅配
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td>運送標的</td>
                        <td>
                            <table class="table">
                                @if ($order->shippingMethod == 'cvs')
                                    <tr>
                                        <td>取貨店家</td>
                                        <td>{{json_decode($order->shippingTarget)->CVSStoreName}}</td>
                                    </tr>
                                    <tr>
                                        <td>店家地址</td>
                                        <td>
                                            {{json_decode($order->shippingTarget)->CVSAddress}}
                                        </td>
                                    </tr>
                                @else
                                    {{json_decode($order->shippingTarget)->ReceiverPort}}&nbsp;
                                    {{json_decode($order->shippingTarget)->ReceiverCity}}&nbsp;
                                    {{json_decode($order->shippingTarget)->ReceiverAddress}}
                                @endif
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
@endsection
