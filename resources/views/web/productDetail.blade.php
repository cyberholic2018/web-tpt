@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">
        .product-header {
            background-image: url('{{ProductView::get($id)->featureImage}}');
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
    <link rel="stylesheet" href="/css/tpt/product-detail.css">
@endsection

@section('content')

  <div>

    {{-- <div class="container-fluid"><img src="{{ProductView::get($id)->featureImage}}" alt=""/></div> --}}
    <div class="container-fluid product-header">
        <div class="mask">
            <h1>{{ProductView::get($id)->title}}</h1>
        </div>
    </div>
    <section class="numbertwo">
      <p>{{ProductView::get($id)->title}}</p>
    </section>
    <section class="numberthree">
        <div class="content">
            {!!ProductView::get($id)->shortDescription!!}
        </div>
        <hr>
        {!!ProductView::get($id)->description!!}

    </section>
    <div class="row">
      <div class="col-md-12 col-copyright">
        <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic    </p>
      </div>
    </div>
  </div>


@endsection
