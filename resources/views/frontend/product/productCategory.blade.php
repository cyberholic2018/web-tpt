@extends('main')

@section('custom-script')
    <script type="text/javascript">
        function addSingleProduct(guid) {
            CH.addSingleProductToCart(guid);
            return;
        }
    </script>
@endsection

@section('content')
    <div class="container mg-product list">
        <div class="row product-single-category">
            <div class="col-md-12">
                <div class="center-hr xxl">
                    <span>
                        {{$category->title}}
                    </span>
                </div>
            </div>
            @foreach ($product as $item)
                <div class="col-md-3 product-box">
                    <div class="product-image">
                        <a href="/product-deatil/{{$item->guid}}">
                            <img src="{{$item->featureImage}}" alt="">
                        </a>
                        <div class="add-to-cart">
                            <img class="add-loading" src="/img/icon/loading.svg" width="15" alt="">
                            <a class="add-btn" onclick="addSingleProduct('{{$item->guid}}')"><span>加入購物車</span></a>
                        </div>
                    </div>
                    <div class="product-title">
                        <a href="/product-deatil/{{$item->guid}}">{{$item->title}}</a>
                    </div>
                    <div class="product-price">
                        <span>NT$ {{number_format($item->price)}}</span>
                    </div>
                </div>
            @endforeach
        </div>
        {{$product}}

        {{--單一種類商品類別 row--}}
        {{-- @for ($o=0; $o < 3; $o++)
            <div class="row product-single-category">
                <div class="col-md-12">
                    <div class="center-hr">
                        <span>
                            蟲草系列
                        </span>
                    </div>
                </div>
                @for ($i=0; $i < 4; $i++)
                    <div class="col-md-3 product-box">
                        <div class="product-image">
                            <img src="https://dummyimage.com/500x550/f08b33/fff" alt="">
                            <div class="add-to-cart">
                                <a href="#"><span>加入購物車</span></a>
                            </div>
                        </div>
                        <div class="product-title">
                            <a href="#">商品名稱</a>
                        </div>
                        <div class="product-price">
                            <span>NT$ 399</span>
                        </div>
                    </div>
                @endfor
            </div>
        @endfor --}}

    </div>
@endsection
