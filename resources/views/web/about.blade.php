@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <link rel="stylesheet" href="/css/tpt/about.css">
@endsection

@section('content')
    {{-- {!!PageView::show(1)!!} --}}


    <div>
        <div class="container-fluid sub-page-header"><img alt="" src="{{PageView::get(1)['featureImage']}}" style="width: 1920px; height: 600px;" />
            <div class="mask">
                <h1>{{PageView::get(1)['title']}}</h1>
            </div>
        </div>
    </div>


    <section class="numbertwo">
        <div class="container">
            <div class="row word" style="margin-top: 45px">
                <div class="col-md-5 col-border">
                    <hr />
                </div>
                <div class="col-md-2 col-tittle">
                    <p>公司簡介</p>
                </div>
                <div class="col-md-5 col-border">
                    <hr />
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 col-img">
                    <img alt="" class="img-responsive" src="{{PageView::get(2)['featureImage']}}" style="width: 640px; height: 420px;" />
                </div>

                <div class="col-md-7 col-p">
                    {!!json_decode(PageView::get(2)['content'])->content!!}
                </div>
            </div>

            <div class="row" style="margin-top: 35px">
                <div class="col-md-5 col-border">
                    <hr />
                </div>

                <div class="col-md-2 col-tittle">
                    <p><span style="color:null;">經營理念</span></p>
                </div>

                <div class="col-md-5 col-border">
                    <hr />
                </div>
            </div>

            <div class="row">
                <div class="col-md-7 col-p">
                    {!!json_decode(PageView::get(3)['content'])->content!!}
                </div>

                <div class="col-md-5 col-img">
                    <img alt="" class="img-responsive" src="{{PageView::get(3)['featureImage']}}" style="width: 640px; height: 420px;" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 col-img">
                    <img alt="" class="img-responsive" src="{{PageView::get(4)['featureImage']}}" style="width: 640px; height: 420px;" />
                </div>

                <div class="col-md-7 col-p">
                    {!!json_decode(PageView::get(4)['content'])->content!!}
                </div>
            </div>

            <div class="row">
                <div class="col-md-7 col-p">
                    {!!json_decode(PageView::get(5)['content'])->content!!}
                </div>

                <div class="col-md-5 col-img"><img alt="" class="img-responsive" src="{{PageView::get(5)['featureImage']}}" style="width: 640px; height: 420px;" /></div>
            </div>

            <div class="row word" style="margin-top: 35px">
                <div class="col-md-5 col-border">
                    <hr />
                </div>

                <div class="col-md-2 col-tittle">
                    <p>核心價值</p>
                </div>

                <div class="col-md-5 col-border">
                    <hr />
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 col-bigimg"><img alt="" src="http://tpt.egith.net/photos/1/corevalue.png" style="width: 960px; height: 540px;" /></div>
            </div>
        </div>
    </section>
  <section class="numbertwo">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-copyright">
          <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic    </p>
        </div>
      </div>
    </div>
  </section>


@endsection
