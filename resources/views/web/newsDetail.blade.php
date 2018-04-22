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
        .page-content-header {
            @if ($post->featureImage)
                background-image: url('{{$post->featureImage}}');
            @else
                background-image: url('/images/sunrise-1756274_1920.jpg');
            @endif

        }
    </style>
    <link rel="stylesheet" href="/css/tpt/news.css">
@endsection

@section('content')
    <div>
      <img class="img-responsive" src="{{$post->featureImage}}" alt=""/>
    </div>
    <div class="row">
        <div class="col-md-8 col-md-offset-2 sub-page-content">
            <h3>{{$post->title}}&nbsp;&nbsp;<br><span style="font-size: 18px;">{!! date('Y-m-d', strtotime($post->created_at)) !!}</span></h3>
            <table style="width: 80px;">
                <tr>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="facebook-share" class="alignleft" src="/img/icon/facebook-icon.svg" alt="" width="80%" /></td>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="line-share" class="aligncenter" src="/img/icon/line-icon.svg" alt="" width="80%" /></td>
                </tr>
            </table>
            <br>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 col-md-offset-2 page-content" style="text-align: center">
            {{-- @if ($post->featureImage)
                <img style="max-width: 100%" src="{{$post->featureImage}}" alt="">
            @else
                <img style="max-width: 100%" src="/images/sunrise-1756274_1920.jpg" alt="">
            @endif --}}
            {{-- <div class="page-content-header">
                <h2>　</h2>
            </div> --}}
        </div>
    </div>
    <div class="row">
        {{-- <div class="col-md-3">
            <ul class="page-side-menu">
                <li><a class="{{ $active01 }}" href="/about">About Us</a></li>
                <li><a class="{{ $active02 }}" href="/about/history">History</a></li>
                <li><a class="{{ $active03 }}" href="/about/majorbusinessfield">Major Business Field</a></li>
                <li><a class="{{ $active04 }}" href="/about/businessphilosophy">Business Philosophy</a></li>
                <li><a class="{{ $active05 }}" href="/about/mission">Mission</a></li>
            </ul>
        </div> --}}
        <div class="col-md-8 col-md-offset-2 sub-page-content">
            {{-- <br>
            <h3>{!! date('Y-m-d', strtotime($post->created_at)) !!}</h3>
            <br>
            <table style="width: 80px;">
                <tr>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="facebook-share" class="alignleft" src="/img/icon/facebook-icon.svg" alt="" width="80%" /></td>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="line-share" class="aligncenter" src="/img/icon/line-icon.svg" alt="" width="80%" /></td>
                </tr>
            </table>
            <hr> --}}
            <br>
            {!! $post->content !!}
            <br>
        </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-copyright">
        <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic</p>
      </div>
    </div>
@endsection
