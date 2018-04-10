@extends('main')

@section('custom-script')
    <script type="text/javascript">
        function addSingleProduct(guid) {
            CH.addSingleProductToCart(guid);
            return;
        }

        $(function () {
            @foreach (CategoryView::product() as $item)
                $('#link-{{$item->guid}}').on('click', function () {
                    $('html,body').animate({scrollTop:$('#section-{{$item->guid}}').offset().top}, 800);
                });
            @endforeach
        });
    </script>
@endsection

@section('content')
    <div class="container mg-product list">
        {{-- <div class="row product-single-category">
            <div class="col-sm-12">
                <div class="center-hr xxl">
                    <span>
                        全部商品
                    </span>
                </div>
            </div>
            @foreach ($productAll as $item)
                <div class="col-sm-3 product-box">
                    <div class="product-image">
                        <a href="/product-deatil/{{$item->guid}}">
                            <img src="{{Helper::thumb($item->featureImage)}}" alt="">
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
        {{$productAll}} --}}

        @foreach (CategoryView::product() as $item)
            @if (count(ProductView::getByCategory($item->guid)) !== 0)
                <div class="row product-single-category" id="section-{{$item->guid}}">
                    <div class="col-sm-12">
                        <div class="center-hr xxl">
                            <span>
                                {{ $item->title }}
                            </span>
                        </div>
                    </div>
                    @foreach (ProductView::getByCategory($item->guid) as $item)
                        <div class="col-sm-3 product-box">
                            <div class="product-image">
                                <a href="/product-deatil/{{$item->guid}}">
                                    <img src="{{Helper::thumb($item->featureImage)}}" alt="">
                                </a>
                                <div class="add-to-cart">
                                    <a class="add-btn" onclick="addSingleProduct('{{$item->guid}}')"><span>加入購物車</span></a>
                                </div>
                            </div>
                            <div class="product-title">
                                <a href="#">{{$item->title}}</a>
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
            @endif
        @endforeach

    </div>
@endsection
