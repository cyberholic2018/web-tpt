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
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>車載面板 - 後視鏡</p>
          </div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>車載面板 - 儀表板</p>
          </div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>車載面板 - 影音裝置</p>
          </div>
        </div>
        <div class="row" id="b">
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>手持POS面板</p>
          </div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>POS設備面板</p>
          </div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>醫療面板</p>
          </div>
        </div>
        <div class="row" id="c">
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>HMI人機互動面板</p>
          </div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>WIFI設備面板</p>
          </div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
            <p>車載面板 - 後視鏡</p>
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
