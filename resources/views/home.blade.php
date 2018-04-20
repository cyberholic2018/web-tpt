@extends('main')

@section('custom-style')
    <link rel="stylesheet" type="text/css" href="/js/plugins/slider/engine1/style.css" />
    <style media="screen">
        @foreach ($ithomeData as $key => $value)
            .ithome0{{$key}} {
                background-image: url('{{$value['featureImage']}}');
            }
        @endforeach
    </style>
@endsection

@section('custom-js-script')
    <script type="text/javascript" src="js/plugins/slider/engine1/wowslider.js"></script>
    <script type="text/javascript" src="js/plugins/slider/engine1/script.js"></script>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12" style="padding: 0; overflow:hidden">
            <div id="wowslider-container1">
                <div class="ws_images">
                    <ul>
                        @foreach ($album as $item)
                            <li><img src="{{ $item->url }}" alt="{{ $item->title }}" title="{{ $item->title }}"/></li>
                        @endforeach
                    </ul>
                </div>
                <div class="ws_bullets">
                    <div>
                        @foreach ($album as $item)
                            <a href="#" title="{{ $item->title }}"><span><img height="48" src="{{ $item->url }}" alt="{{ $item->title }}"/>1</span></a>
                        @endforeach
                    </div>
                </div>
                <div class="ws_shadow"></div>
            </div>
        </div>

        <div class="container">
            <div class="col-md-4 solution-section">
                <div class="solution-header product">
                </div>
                <div class="solution-info">
                    <h3>{!! trans('string.product_info') !!}</h3>
                    <a href="/product/{{ CategoryView::type('product')[0]->guid }}">{!! trans('string.product_info_sub') !!}</a>
                </div>
            </div>

            <div class="col-md-4 solution-section">
                <div class="solution-header solution">
                </div>
                <div class="solution-info">
                    <h3>{!! trans('string.solution') !!}</h3>
                    <a href="{{ url('/solution-education') }}">{!! trans('string.solution_sub') !!}</a>
                </div>
            </div>

            <div class="col-md-4 solution-section">
                <div class="solution-header partner">
                </div>
                <div class="solution-info">
                    <h3>{!! trans('string.partners') !!}</h3>
                    <a href="{{ url('/partners') }}">{!! trans('string.partners_sub') !!}</a>
                </div>
            </div>
        </div>

        @if (App::getLocale() === 'zh-TW')

        @endif
        <div class="container-fluid">
            <div class="row">
                @foreach ($ithomeData as $key => $value)
                    <div class="col-md-4 news-section">
                        <div class="zoom-bg ithome0{{$key}}"></div>
                        <div class="news-info">
                            <h2><a target="_blank" href="{{$value['link']}}">{{$value['title']}}</a></h2>
                            <h3 class="hash-tag">#iTHome</h3>
                            <span>{{$value["pubDate"]}}</span>
                        </div>
                    </div>
                @endforeach
                <div class="col-md-12 learn-more-news">
                    <a href="/news">{!! trans('string.review_news') !!}</a>
                </div>
            </div>
        </div>

    </div>



@endsection
