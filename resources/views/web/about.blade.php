@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <link rel="stylesheet" href="/css/tpt/about.css">
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/{{Helper::rc()}}/fff" alt=""/></div>
  </div>
  <section class="numbertwo">
    <div class="container">
      <div class="row word">
        <div class="col-md-5 col-border">
          <hr/>
        </div>
        <div class="col-md-2 col-tittle">
          <p>公司簡介</p>
        </div>
        <div class="col-md-5 col-border">
          <hr/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 col-img"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/></div>
        <div class="col-md-7 col-p">
          <p>台灣帕太(Taiwan PowerTek Corporation, TPT)是全球提供優質、便利的產品和服務以及最具競爭力的價格；同時，我們不斷的優化我們的業務及團隊服務，為客戶創造最高的附加價值，滿足客戶的需求共創雙贏的商機。</p>
        </div>
      </div>
      <div class="row word">
        <div class="col-md-5 col-border">
          <hr/>
        </div>
        <div class="col-md-2 col-tittle">
          <p>經營理念</p>
        </div>
        <div class="col-md-5 col-border">
          <hr/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 col-p"><span>企業永續發展</span>
          <p>企業發展，著重於誠信負責，TPT秉持實事求是、務本踏實得原則，長期獲得顧客的信賴與支持，達成永續經營之目的！唯有秉持永續經營的企業，才能提供同仁穩定而健全的工作環境與發展空間，造福同仁並提供顧客長期而多元性的完整服務，所以 - 「技術創新（Technology）、專業（Profession）、團隊合作（Teamwork）」為帕太經營理念。</p>
        </div>
        <div class="col-md-5 col-img"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/></div>
      </div>
      <div class="row">
        <div class="col-md-5 col-img"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/></div>
        <div class="col-md-7 col-p"><span>為客戶創造價值</span>
          <p>台灣帕太的開發型經營理念是我們的經驗與合作夥伴及顧客分享，分享的價值在於結合我們的經驗與專業和優勢，不論是供應、研發與生產、到市場的銷售，與所有合作夥伴們在分享價值、共創繁榮的共同體認下，建立了長期且良好的合作關係後，穩定的持續供應各種價位合理的產品，確保消費者取得的是帕太與合作夥伴共同創造的產品價值、而非單一產品。</p>
        </div>
      </div>
      <div class="row word">
        <div class="col-md-7 col-p"><span>建立開放型管理模式</span>
          <p>台灣帕太營造樂於溝通的環境，重視團隊合作，同仁間以誠信、坦率相待，同時，透過溝通、集思廣益的方法接受各方看法，團結一致，共同努力。</p>
        </div>
        <div class="col-md-5 col-img"><img class="img-responsive" src="https://dummyimage.com/640x420/{{Helper::rc()}}/fff" alt=""/></div>
      </div>
      <div class="row">
        <div class="col-md-5 col-border">
          <hr/>
        </div>
        <div class="col-md-2 col-tittle">
          <p>核心價值</p>
        </div>
        <div class="col-md-5 col-border">
          <hr/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-bigimg"><img class="img-responsive" src="https://dummyimage.com/960x540/{{Helper::rc()}}/fff" alt=""/></div>
        <div class="row">
          <div class="col-md-12 col-copyright">
            <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic    </p>
          </div>
        </div>
      </div>
    </div>
  </section>


@endsection
