@extends('main')

@section('custom-script')
<script src="/js/checkout.js" charset="utf-8"></script>
@endsection

@section('content')
    <div class="container mg-business">
        <div class="row">
            <div class="col-md-12 checkout-thumbnail">
                <ul>
                    <li>購物車</li>
                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                    <li class="active">結帳資訊</li>
                    <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                    <li>購買完成</li>
                </ul>
            </div>
            <div class="col-md-12" id="checkout">
                <input type="hidden" id="shipping_method" value="{{$shippingMethod}}">
                <checkout></checkout>
            </div>
        </div>
    </div>
@endsection
