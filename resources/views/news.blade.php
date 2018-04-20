@extends('main')

@section('custom-js-script')
    <script src="{{ asset('js/netone-news.js') }}"></script>
@endsection

@section('custom-style')
    <style media="screen">
        .page-content-header {
            background-image: url('/images/sunrise-1756274_1920.jpg');
        }
        @foreach (ithome::get(11) as $key => $value)
            .ithome0{{$key}} {
                background-image: url('{{$value['featureImage']}}');
            }
        @endforeach
    </style>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12 page-content">
            <div class="page-content-header">
                <h2>{!! trans('header.news') !!}</h2>
            </div>
        </div>
    </div>
    <div class="row" id="netone-news">
        <div class="col-md-8 col-md-offset-2 about-content" style="margin-top: 30px; margin-bottom: 50px;">
            <br>
            <table class="table-field">
                @foreach (PostView::news(App::getLocale()) as $key => $item)
                    <tr>
                        <td>
                            <h4><a href="/news/{{$item->guid}}">{{$item->title}}</a></h4>
                        </td>
                        <td align="right">
                            {!! date('Y-m-d', strtotime($item->created_at)) !!}
                        </td>
                    </tr>
                @endforeach
            </table>
            {{PostView::news(App::getLocale())}}


        </div>
        <div class="col-md-8 col-md-offset-2">
            <div class="row">
                @foreach (ithome::get(9) as $key => $value)
                    <div class="col-md-4 news-section news-top">
                        <div class="zoom-bg ithome0{{$key}}"></div>
                        <div class="news-info news-bottom">
                            <h2><a target="_blank" href="{{$value['link']}}">{{$value['title']}}</a></h2>
                            <h3 class="hash-tag">#iTHome</h3>
                            <span>{{$value["pubDate"]}}</span>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection
