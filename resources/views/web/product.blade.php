@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">


    </style>
    <link rel="stylesheet" href="/css/tpt/product.css">
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/{{Helper::rc()}}/fff" alt=""/></div>
    <section class="numbertwo">
        <p>這是產品介紹的測試檔案，建立 TFT module 在全球快速流通與完整的售後服務，並確實服務全球客戶，期待結合各國之通路商，建構一個以物流、商流、金流的全球實體經濟網!建立TFT module在全球快速流通與完整的售後服務，並確實服務全球客戶，期待結合各國之通路商，建構一個以物流、商流、金流的全球實體經濟網!這是產品介紹的測試檔案，建立TFT module在全球快速流通與完整的售後服務，並確實服務全球客戶，期待結合各國之通路商，建構一個以物流、商流、金流的全球實體經濟網!</p>
    </section>
    <section class="numberthree">
      <div class="container">
        <div class="row" id="a">
            @foreach (ProductView::all() as $key => $value)
                <a href="/productDetail/{{$value->id}}">
                    <div class="col-md-4 col-set">
                        <img class="img-responsive" src="{{$value->featureImage}}" alt=""/>
                        <p>{{$value->title}}</p>
                    </div>
                </a>

            @endforeach
        </div>
        <div class="row">
            <div class="ocl-md-12">
                {{ProductView::all()}}
            </div>
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
