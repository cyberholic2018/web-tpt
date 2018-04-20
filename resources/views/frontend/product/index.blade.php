@extends('frontend.product.main')

@section('sub-content')
    <div class="container">
        <div class="row product-section">
            <div class="col-md-9">
                <br><br>
                {!!CategoryView::get($guid)->description!!}
            </div>
            <div class="col-md-3 right-side-bar">
                <h3>{!! trans('string.how_to_buy') !!}</h3>
                <p>{!! trans('string.you_can_call') !!} :</p>
                <p>(02)2557-5082</p>
                <p>{!! trans('string.commissioner_contact') !!}</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row product-section" style="margin-bottom: 50px">
                    @foreach (ProductView::getByCategory($guid) as $key => $item)
                        <div class="col-md-4 product-box">
                            <h4>{{$item->title}}</h4>
                            <img class="product-img" width="100%" src="{{$item->featureImage}}" alt="">
                            {!!$item->shortDescription!!}

                            <a href="/product/detail/{{$item->guid}}">{!! trans('string.learn_more') !!}</a>
                        </div>
                    @endforeach
                </div>
                <br><br>
                {{ProductView::getByCategory($guid)}}
                <br><br>
            </div>
        </div>
    </div>
@endsection
