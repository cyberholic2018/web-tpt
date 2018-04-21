@extends('main')

@section('custom-script')
    <script src="/js/plugins/slider/wowslider.js" charset="utf-8"></script>
    <script src="/js/plugins/slider/script.js" charset="utf-8"></script>
@endsection

@section('custom-style')
    <link rel="stylesheet" href="/js/plugins/slider/style.css">

    <link rel="stylesheet" href="/css/tpt/index.css">
@endsection

@section('content')

  <div>
    <div class="container-fluid">
        <div id="wowslider-container1" data-aos="fade-in">
            <div class="ws_images">
                <ul>
                    @foreach (SiteMetaView::album() as $item)
                        <li>
                            <img src="{{$item->url}}" alt="{{$item->title}}">
                        </li>
                    @endforeach
                </ul>
            </div>
            {{-- <div class="ws_bullets">
                <div>
                    @foreach (SiteMetaView::album() as $item)
                        <a href="#" title="{{$item->title}}"><span>1</span></a>
                    @endforeach
                </div>
            </div>
            <div class="ws_shadow"></div> --}}
            <div class="scroll-down-btn">
                <div class="text">Scroll</div>
                <div class="arrow"></div>
            </div>
        </div>
        {{-- <div class="row">
            <div class="col-md-12">

            </div>
        </div> --}}
        {{-- <img class="img-responsive" src="https://dummyimage.com/1920x1080/6C74FF/fff" alt=""/> --}}
    </div>
  </div>
  <section class="numbertwo">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-set" data-aos="fade-up">

          <img class="img-responsive" src="https://dummyimage.com/640x420/5FF1FF/fff" alt=""/>
        </div>
        <div class="col-md-4 col-int" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/579DE8/fff" alt=""/></div>
        <div class="col-md-4 col-idea" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/8B51E8/fff" alt=""/></div>
        <div class="col-md-6 col-por" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/960x540/E563FF/fff" alt=""/></div>
        <div class="col-md-6 col-part" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/960x540/5FF1FF/fff" alt=""/></div>
      </div>
    </div>
  </section>
  <section class="numberthree">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>最新消息</p>
          <p>News & Information</p>
        </div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/6C74FF/fff" alt=""/>
          <p class="name">帕太泰國分公司開設</p>
          <p>2018-03-22</p>
          <hr/>
          <p>台灣帕太於大中華地區已有16間分公司致力提供點對點服務，一通電話服務就到，且由國內面板廠供貨，商譽完善且品質穩定，備受好評。</p>
          <p>近日於泰國分公司正式成立，主要拓展東南亞市場，董事長李峻丞，布局東南亞早已於2015 年開始規劃，選於2018年開設，主要為...</p>
          <div class="btn btn-default">繼續閱讀</div>
        </div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/5FF1FF/fff" alt=""/>
          <p class="name">群創車載面板 驚艷</p>
          <p>2018-03-06</p>
          <hr/>
          <p>群創（3481.）搶自駕車商機，All事業群總經理楊柱祥指出，未來車載面板應用會從車內到車外，從2片到7片，車載面板技術、品質要求高，成為台灣面板產業很重要的驅動力之一。</p>
          <P>50吋多曲面車用面板讓車廠驚艷，已經和多加一線車廠洽談產品開發。</P>
          <div class="btn btn-default" id="b">繼續閱讀</div>
        </div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/8B51E8/fff" alt=""/>
          <p class="name">友達群創衝刺8K大面板</p>
          <p>2018-03-06</p>
          <hr/>
          <p>市調機構IHS表示，今年是8電視元年，友達（2409）集群創將供應65吋以上超大尺寸的8K電視面板，給三星和索尼等品牌電視大廠，隨著8K超大尺寸產品出貨量攀升，可以提供面板廠出貨單價，並去化較多的產能。友達昨（11）日股價收平盤12.4元，成交量2.54萬張；群創也收...</p>
          <div class="btn btn-default" id="c">繼續閱讀</div>
        </div>
      </div>
    </div>
  </section>
  <section class="numberfour">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>我們的供應商</p>
          <p class="eng">Our Supplier</p>
          <hr/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/579DE8/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/579DE8/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/579DE8/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/579DE8/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/579DE8/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/579DE8/fff" alt=""/></div>
      </div>
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>我們的客戶</p>
          <p class="eng">Our Customer</p>
          <hr/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/E563FF/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/E563FF/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/E563FF/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/E563FF/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/E563FF/fff" alt=""/></div>
        <div class="col-md-4 col-img" data-aos="fade-up"><img class="img-responsive" src="https://dummyimage.com/640x420/E563FF/fff" alt=""/></div>
      </div>
    </div>
  </section>
  <section class="numberfive">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>營運據點</p>
          <p class="eng">Our Locations</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-button">
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#home">台灣帕太科技股份有限公司</a></li>
            <li><a data-toggle="tab" href="#menu1">蘇州曜邦電子科技有限公司 </a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tab-content">
            <div class="tab-pane fade in active" id="home">
              <div class="row">
                <div class="col-md-12 col-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.279221403041!2d121.63243311488944!3d25.058523643462177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d53515f76e2a1%3A0xbc512f562f7f4448!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5aSn5ZCM6Lev5LiA5q61MjM36Jmf!5e0!3m2!1szh-TW!2stw!4v1524313135391" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-contact">
                  <p>帕太科技公司</p>
                  <p>TAIWAN POWERTEK CO.,LTD.</p>
                  <P>地址：22161新北市汐止區大同路一段237號6樓之1</P>
                  <P>6F-1,No237,Sec. 1,Datong Rd.,Ximzhi Dist., New Taipei City 221, Taiwan</P>
                  <p>Tel：+886 2 8646-1681</p>
                  <p>Fax：+886 2 8646-1761</p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="menu1">
              <div class="row">
                <div class="col-md-12 col-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.279221403041!2d121.63243311488944!3d25.058523643462177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d53515f76e2a1%3A0xbc512f562f7f4448!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5aSn5ZCM6Lev5LiA5q61MjM36Jmf!5e0!3m2!1szh-TW!2stw!4v1524313135391" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-contact">
                  <p>蘇州曜邦電子科技有限公司 </p>
                  <p>TAIWAN POWERTEK CO.,LTD.</p>
                  <P>地址：22161新北市汐止區大同路一段237號6樓之1</P>
                  <P>6F-1,No237,Sec. 1,Datong Rd.,Ximzhi Dist., New Taipei City 221, Taiwan</P>
                  <p>Tel：+886 2 8646-1681</p>
                  <p>Fax：+886 2 8646-1761</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="numbersix">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>聯絡我們</p>
          <p class="eng">Contact Us</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-list">
            <div class="col-md-8 col-md-offset-2">
                <ul style="padding-left: 20px">
                  <li>※謝謝您對我們的支持與肯定，為了提供您更好的服務，敬請留下您寶貴的建議，我們將盡快回復您。</li>
                  <li>※我們的上班時間為週一至週五09:00~18:00，我們將於收到您的來信後立即回覆您。</li>
                  <li>※客服信箱：service@tpt.com.tw</li>
                </ul>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-tel">
          <form action="">
            <table class="contact-table">
              <tr>
                <td>
                  <div class="form-group">
                    <label for="company-input">公司名稱</label>
                    <input class="form-control" id="company-input" name="company" type="text"/>
                  </div>
                </td>
                <td>
                  <div class="form-group">
                    <label for="phone-input">聯絡電話 </label><span>*</span>
                    <input class="form-control" id="phone-input" name="phone" type="text" required=""/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-group">
                    <label for="name-input">姓名</label><span>*</span>
                    <input class="form-control" id="name-input" name="name" type="text" required=""/>
                  </div>
                </td>
                <td>
                  <div class="form-group">
                    <label for="email-input">電子郵件</label><span>*</span>
                    <input class="form-control" id="email-input" name="email" type="text" required=""/>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="form-group">
                    <label for="content-input">備註</label>
                    <textarea class="form-control" id="content-input" name="content" rows="5"></textarea>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <button class="btn btn-contact" type="submit">送出</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-copyright">
          <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic    </p>
        </div>
      </div>
    </div>
  </section>


@endsection
