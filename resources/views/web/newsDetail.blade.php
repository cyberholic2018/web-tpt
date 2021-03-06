@extends('main')

@section('custom-script')
    <script>
    jQuery('#line-share').on('click', function() {
      window.open("http://line.me/R/msg/text/?" + document.title + '%0D%0A' + window.location.href);
    });

    jQuery('#facebook-share').on('click', function() {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href + '&src=sdkpreparse');
    });
    </script>
@endsection

@section('custom-header')
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.10&appId=124798941401730";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
@endsection

@section('custom-style')
    <style media="screen">
        #facebook-share, #line-share {
        cursor: pointer;
        }
        .product-header {
            background-image: url('{{$post->featureImage}}');
            background-position: center;
            background-size: cover;
            height: 500px;
            position: relative;
        }
        .product-header .mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .product-header .mask h1 {
            position: absolute;
            width: 100%;
            left: 50%;
            top: 50%;
            margin: 0;
            text-align: center;
            color: white;
            text-shadow: 2px 2px 12px rgba(0,0,0,0.5);
            transform: translateX(-50%) translateY(-50%);
        }
    </style>
    <link rel="stylesheet" href="/css/tpt/news.css">
@endsection

@section('content')
    <div class="container-fluid product-header">
        {{-- <img src="{{ProductView::get($id)->featureImage}}" alt=""/> --}}
        <div class="mask">
            <h1>{{$post->title}}</h1>
        </div>
    </div>
    {{-- <div>
      <img class="img-responsive" src="{{$post->featureImage}}" alt=""/>
    </div> --}}
    <div class="row">
        <div class="col-md-8 col-md-offset-2 sub-page-content">
            <h3>
                {{$post->title}}&nbsp;&nbsp;<br>
                @if ($post->seoTitle)
                    <span style="font-size: 16px;">文章節錄自：{{$post->seoTitle}}</span>
                @endif
                @if ($post->seoTitle && $post->seoKeyword)
                    <span style="font-size: 16px;">，</span>
                @endif
                @if ($post->seoKeyword)
                    <span style="font-size: 16px;">作者：{{$post->seoKeyword}}</span>
                @endif
                <br>
                <span style="font-size: 16px;">{!! date('Y-m-d', strtotime($post->created_at)) !!}</span>
            </h3>
            <table style="width: 80px;">
                <tr>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="facebook-share" class="alignleft" src="/img/icon/facebook-icon.svg" alt="" width="80%" /></td>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="line-share" class="aligncenter" src="/img/icon/line-icon.svg" alt="" width="80%" /></td>
                </tr>
            </table>
        </div>
    </div>
    {{-- <div class="row">
        <div class="col-md-8 col-md-offset-2 page-content" style="text-align: center">
            @if ($post->featureImage)
                <img style="max-width: 100%" src="{{$post->featureImage}}" alt="">
            @else
                <img style="max-width: 100%" src="/images/sunrise-1756274_1920.jpg" alt="">
            @endif
            <div class="page-content-header">
                <h2>　</h2>
            </div>
        </div>
    </div> --}}
    <div class="row">
        <div class="col-md-8 col-md-offset-2 sub-page-content">
            {!! $post->content !!}
        </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-copyright">
        <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic</p>
      </div>
    </div>
@endsection
