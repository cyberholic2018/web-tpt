@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">


    </style>
    <link rel="stylesheet" href="/css/tpt/news.css">
@endsection

@section('content')


  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/6C74FF/fff" alt=""/></div>
  </div>

  <section class="numbertwo">
    <div class="container">
      <div class="row">
          @for ($i=0; $i < 9; $i++)
              <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/>
                <p class="name">帕太泰國分公司開設</p>
                <p>2018-03-22</p>
                <hr/>
                <p>台灣帕太於大中華地區已有16間分公司致力提供點對點服務，一通電話服務就到，且由國內面板廠供貨，商譽完善且品質穩定，備受好評。</p>
                <p>近日於泰國分公司正式成立，主要拓展東南亞市場，董事長李峻丞，布局東南亞早已於2015 年開始規劃，選於2018年開設，主要為...</p>
              </div>
          @endfor


      </div>
      <div class="row">
        <div class="col-md-12 col-bottom">
          <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic</p>
        </div>
      </div>
    </div>
  </section>

@endsection
