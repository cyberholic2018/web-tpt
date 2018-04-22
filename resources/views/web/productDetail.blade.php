@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">

    </style>
    <link rel="stylesheet" href="/css/tpt/product-detail.css">
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="{{ProductView::get($id)->featureImage}}" alt=""/></div>
    <section class="numbertwo">
      <p>{{ProductView::get($id)->title}}</p>
    </section>
    <section class="numberthree">
        {!!ProductView::get($id)->description!!}
        <hr>
        <div class="content">
            {!!ProductView::get($id)->shortDescription!!}
        </div>
    </section>
    <div class="row">
      <div class="col-md-12 col-copyright">
        <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic    </p>
      </div>
    </div>
  </div>


@endsection
