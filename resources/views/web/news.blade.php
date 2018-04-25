@extends('main')

@section('custom-script')
    <script src="/js/plugins/masonry/masonry.pkgd.min.js" charset="utf-8"></script>
    <script src="/js/plugins/mp/mp.mansory.min.js" charset="utf-8"></script>
    <script type="text/javascript">
    // $('.grid').masonry({
    //     itemSelector: '.grid-item',
    // });
    </script>
@endsection

@section('custom-style')
    <style media="screen">


    </style>
    <link rel="stylesheet" href="/css/tpt/news.css">
@endsection

@section('content')


  {{-- <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/6C74FF/fff" alt=""/></div>
  </div> --}}

  <div class="news-description">
      {!!PageView::show(2)!!}
  </div>


  <section class="numbertwo">
    <div class="container">
      <div class="row">
          {{-- @foreach (PostView::all() as $key => $value)
              <div class="grid-item col-set">
                  <img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
                  <p class="name">{{$value->title}}</p>
                  <p>{!! date('Y-m-d', strtotime($value->created_at)) !!}</p>
                  <hr/>
                  <div class="content">
                      {{mb_strimwidth($value->content, 0, 100, '...', "UTF-8")}}
                  </div>
                  <a href="/news/{{$value->guid}}">Learn more</a>
              </div>
          @endforeach --}}
          @foreach (PostView::all() as $key => $value)
              <div class="col-md-4 col-set">
                  <div class="embed-responsive embed-responsive-16by9 featureImage">
                      <img src="{{$value->featureImage}}" alt=""/>
                  </div>
                  <div class="name">
                      {{-- <p title="{{$value->title}}"></p> --}}
                      {{$value->title}}
                  </div>
                  <p>{!! date('Y-m-d', strtotime($value->created_at)) !!}</p>
                  <hr/>
                  <div class="content" style="height:70px; overflow: hidden">
                      {{mb_strimwidth(preg_replace('#<[^>]+>#', ' ', $value->content), 0, 100, '...', "UTF-8")}}
                  </div>
                  <div style="text-align:center; margin-top: 10px">
                      <a class="btn btn-default" href="/news/{{$value->guid}}">繼續閱讀</a>
                  </div>

              </div>
          @endforeach
          <br><br>
      </div>
      <div class="row">
          <div class="col-md-12">
              {{PostView::all()}}
          </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-copyright">
          <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic</p>
        </div>
      </div>
    </div>
  </section>

@endsection
