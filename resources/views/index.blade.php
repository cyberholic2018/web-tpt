@extends('main')

@section('custom-style')
    <link rel="stylesheet" href="/js/plugins/slider/style.css">
@endsection

@section('custom-script')
    {{-- <script src="/js/plugins/slider/wowslider.js" charset="utf-8"></script>
    <script src="/js/plugins/slider/script.js" charset="utf-8"></script> --}}
    <script type="text/javascript">
        function addSingleProduct(guid) {
            CH.addSingleProductToCart(guid);
            return;
        }
    </script>
@endsection

@section('custom-style')
    <style media="screen">
        .paytest {
            display: inline-block;
            font-size: 50pt;
        }
    </style>
@endsection

@section('content')

    {{-- <a class="paytest" href="/checkoutTest">/checkoutTest</a>
    <a class="paytest" href="/cvsTest">/cvsTest</a> --}}
    {{-- <div class="container-fluid">
        <div class="row" data-aos="fade-in">
            <div class="col-md-12 slider-section">
                <div id="wowslider-container1">
                    <div class="ws_images">
                        <ul>
                            @foreach (SiteMetaView::album() as $item)
                                <li>
                                    <a href="{{$item->link}}">
                                        <img src="{{$item->url}}" alt="{{$item->title}}">
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="ws_bullets">
                        <div>
                            @foreach (SiteMetaView::album() as $item)
                                <a href="#" title="{{$item->title}}"><span>1</span></a>
                            @endforeach
                        </div>
                    </div>
                <div class="ws_shadow"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-3 index-product-category" data-aos="fade-up">
                <div class="product-image">
                    <a href="{{url('about')}}"><img src="/img/index_01.jpg" alt=""></a>

                </div>
                <div class="product-title">
                    <a href="{{url('about')}}"><h3>明谷的故事</h3></a>

                </div>
            </div>
            <div class="col-md-3 index-product-category" data-aos="fade-up">
                <div class="product-image">
                    <a href="{{url('about/cordyceps')}}"><img src="/img/index_02.jpg" alt=""></a>

                </div>
                <div class="product-title">
                    <a href="{{url('about/cordyceps')}}"><h3>蟲草好醫食</h3></a>

                </div>
            </div>
            <div class="col-md-3 index-product-category" data-aos="fade-up">
                <div class="product-image">
                    <a href="{{url('about/isaria')}}"><img src="/img/index_03.jpg" alt=""></a>

                </div>
                <div class="product-title">
                    <a href="{{url('about/isaria')}}"><h3>蟬花小清新</h3></a>

                </div>
            </div>
            <div class="col-md-3 index-product-category" data-aos="fade-up">
                <div class="product-image">
                    <a href="{{url('product-all')}}"><img src="/img/index_04.jpg" alt=""></a>

                </div>
                <div class="product-title">
                    <a href="{{url('product-all')}}"><h3>好物集散地</h3></a>

                </div>
            </div>
        </div>

        <div class="center-hr xxl">
            <span>
                最新商品
            </span>
        </div>
        <div class="row">
            @foreach (ProductView::getPopularProducts() as $item)
                <div class="col-md-3 index-product-category" data-aos="fade-up">
                    <div class="product-image">
                        <a href="{{ url('product-deatil/'.$item->guid) }}"><img src="{{Helper::thumb($item->featureImage)}}" alt=""></a>
                        <a onclick="addSingleProduct('{{$item->guid}}')" class="add-to-cart">加入購物車</a>
                    </div>
                    <div class="product-title">
                        <h4><a href="{{ url('product-deatil/'.$item->guid) }}">{{$item->title}}</a></h4>
                    </div>
                    <div class="product-price">
                        @if ($item->discountedPrice)
                            <span style="text-decoration:line-through">NT$ {{number_format($item->price)}}</span>
                            <span style="color: red; font-size: 150%">NT$ {{number_format($item->discountedPrice)}}</span>
                        @else
                            <span>NT$ {{number_format($item->price)}}</span>
                        @endif

                    </div>
                </div>
            @endforeach


        </div>
    </div> --}}

@endsection
