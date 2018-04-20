@extends('frontend.product.main')

@section('sub-js-script')
    <script type="text/javascript">
        $(function() {
            $('.product-image').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                // fade: true,
                asNavFor: '.product-thumb'
           });
           $('.product-thumb').slick({
               slidesToShow: 3,
               slidesToScroll: 1,
               asNavFor: '.product-image',
               arrows: false,
               dots: false,
               // centerMode: true,
               focusOnSelect: true
           });
        });
    </script>
@endsection

@section('sub-content')
    <div class="container">
        <div class="row product-section">
            <div class="col-md-9 product-detail">
                <div class="product-gallary">
                    <div class="product-image">
                        <div>
                            <img src="{{ProductView::get($guid)->featureImage}}" alt="">
                        </div>
                        @foreach (json_decode(ProductView::get($guid)->album) as $item)
                            <div>
                                <img src="{{$item->imageUrl}}" alt="">
                            </div>
                        @endforeach
                    </div>
                    <div class="product-thumb">
                        <div class="box">
                            <img src="{{ProductView::get($guid)->featureImage}}" alt="">
                        </div>
                        @foreach (json_decode(ProductView::get($guid)->album) as $item)
                            <div class="box">
                                <img src="{{$item->imageUrl}}" alt="">
                            </div>
                        @endforeach
                    </div>
                </div>
                <br>
                <ul class="nav nav-tabs">
                    @foreach (json_decode(ProductView::get($guid)->description) as $key => $item)
                        @if ($key == 0)
                            <li class="active"><a data-toggle="tab" href="#{{$item->tabId}}">{{$item->title}}</a></li>
                        @else
                            <li><a data-toggle="tab" href="#{{$item->tabId}}">{{$item->title}}</a></li>
                        @endif
                    @endforeach
                </ul>

                <div class="tab-content">
                    @foreach (json_decode(ProductView::get($guid)->description) as $key => $item)
                        @if ($key == 0)
                            <div id="{{$item->tabId}}" class="tab-pane fade in active">
                                {!! $item->content !!}
                            </div>
                        @else
                            <div id="{{$item->tabId}}" class="tab-pane fade">
                                {!! $item->content !!}
                            </div>
                        @endif
                    @endforeach
                </div>
            </div>
            <div class="col-md-3">
                <div class="row">
                    <div class="col-md-12 right-side-bar">
                        <h3>{!! trans('string.how_to_buy') !!}</h3>
                        <p>{!! trans('string.you_can_call') !!} :</p>
                        <p>(02)2557-5082</p>
                        <p>{!! trans('string.commissioner_contact') !!}</p>
                    </div>
                    <div class="col-md-12 right-side-bar">
                        <h3>{!! trans('string.related_products') !!}</h3>
                        @foreach (ProductView::getByCategory(ProductView::get($guid)->category) as $item)
                            <p>
                                <a href="/product/detail/{{$item->guid}}">{{$item->title}}</a>
                            </p>
                        @endforeach
                    </div>
                </div>
            </div>
            {{-- <div class="col-md-3 right-side-bar">
                <h3>如何購買</h3>
                <p>您可直接撥打電話 :</p>
                <p>(02)2557-5082</p>
                <p>我們將有專人與您聯絡。謝謝!</p>
            </div>
            <div class="col-md-3 right-side-bar">
                <h3>相關產品</h3>
                @foreach (ProductView::getByCategory(ProductView::get($guid)->category) as $item)
                    <p>
                        <a href="/product/detail/{{$item->guid}}">{{$item->title}}</a>
                    </p>
                @endforeach
            </div> --}}
        </div>
    </div>
@endsection
