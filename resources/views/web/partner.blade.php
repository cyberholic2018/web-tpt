@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">


    </style>
    <link rel="stylesheet" href="/css/tpt/partner.css">
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/000/fff" alt=""/></div>
    <section class="numbertwo">
      <div class="container">
        <div class="row">
            @foreach (PartnerView::tpt() as $key => $value)
                <div class="col-md-4 col-set">
                    <div class="embed-responsive embed-responsive-16by9 featureImage">
                        <img src="{{$value->content}}" >
                    </div>
                    <a href="{{$value->customField1}}">{{$value->title}}</a>
                </div>
            @endforeach

        </div>
      </div>
    </section>
    <div class="row">
      <div class="col-md-12 col-copyright">
        <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic    </p>
      </div>
    </div>
  </div>


@endsection
