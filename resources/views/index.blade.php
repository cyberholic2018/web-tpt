@extends('main')

@section('custom-script')
    <script src="/js/plugins/slider/wowslider.js" charset="utf-8"></script>
    <script src="/js/plugins/slider/script.js" charset="utf-8"></script>
    <script type="text/javascript">
        $('.ws_images').find('div').first().css('height','100%');
    </script>
@endsection

@section('custom-style')
    <link rel="stylesheet" href="/css/tpt/index.css">
    <link rel="stylesheet" href="/js/plugins/slider/style.css">
@endsection

@section('content')
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
        <div class="ws_bullets">
            <div>
                @foreach (SiteMetaView::album() as $item)
                    <a href="#" title="{{$item->title}}"><span>1</span></a>
                @endforeach
            </div>
        </div>
        <div class="ws_shadow"></div>
        <div class="scroll-down-btn">
            <div class="text">Scroll</div>
            <div class="arrow"></div>
        </div>
    </div>

  <div>
    <div class="container-fluid">


        {{-- <div class="row">
            <div class="col-md-12">

            </div>
        </div> --}}
        {{-- <img class="img-responsive" src="https://dummyimage.com/1920x1080/6C74FF/fff" alt=""/> --}}
    </div>
  </div>
  <section class="numbertwo">
    <div class="container">
      <div class="row product-list">
          <div class="row">
            <div class="col-md-12 col-tittle">
              <p>產品介紹</p>
              <p class="eng">Produc Information</p>
              <hr/>
            </div>
          </div>
        @foreach (ProductView::all() as $key => $value)
            <a href="/productDetail/{{$value->id}}">
                <div class="col-md-4 col-set">
                    <div class="embed-responsive embed-responsive-4by3 featureImage">
                        <img src="{{$value->featureImage}}" alt=""/>
                    </div>

                    <p>{{$value->title}}</p>
                </div>
            </a>
        @endforeach
      </div>
    </div>
  </section>
  <section class="numberthree">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>最新消息</p>
          <p>News & Information</p>
          <hr/>
        </div>
        @foreach (PostView::take(3) as $key => $value)
            <div class="col-md-4 col-img" data-aos="fade-up">
                {{-- <img class="img-responsive" src="{{$value->featureImage}}" alt=""/> --}}
                <div class="embed-responsive embed-responsive-16by9 partner-list">
                    <img src="{{$value->featureImage}}" alt=""/>
                </div>
              <div class="name">
                  <span title="{{$value->title}}">{{$value->title}}</span>
              </div>
              {{-- <p class="name">{{$value->title}}</p> --}}
              <p>{!! date('Y-m-d', strtotime($value->created_at)) !!}</p>
              <hr/>
              <div class="content" style="height:70px; overflow: hidden">
                  {{mb_strimwidth(preg_replace('#<[^>]+>#', ' ', $value->content), 0, 100, '...', "UTF-8")}}
              </div>
              <a class="btn btn-default" href="/news/{{$value->guid}}">繼續閱讀</a>
            </div>
        @endforeach
      </div>
    </div>
  </section>
  <section class="numberfour">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>合作夥伴</p>
          <p class="eng">Our Partner</p>
          <hr/>
        </div>
      </div>
      <div class="row">
          @foreach (PartnerView::tpt() as $key => $value)
              <div class="col-md-4 col-img" data-aos="fade-up" style="text-align: center; font-weight: 800; font-size: 20px;">
                  <div class="embed-responsive embed-responsive-16by9 partner-list">
                      <img src="{{$value->content}}" alt=""/>
                  </div>
                  <p>{{$value->title}}</p>
              </div>
          @endforeach
      </div>
    </div>
  </section>
  <section class="numberfive">
    <div class="container">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2875845685617!2d121.63280801493782!3d25.058240083961007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d535404923b37%3A0x8e60a1f91679e603!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5aSn5ZCM6Lev5LiA5q61MjM3LTbomZ8!5e0!3m2!1szh-TW!2stw!4v1524496783601" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-contact">
                  <h4>台灣帕太科技股份有限公司</h4>
                  <h4>TAIWAN POWERTEK CO.,LTD.</h4>
                  <h4>地址：22161新北市汐止區大同路一段237號6樓之1</h4>
                  <h4>6F-1,No237,Sec. 1,Datong Rd.,Ximzhi Dist., New Taipei City 221, Taiwan</h4>
                  <h4>Tel：+886 2 8646-1681</h4>
                  <h4>Fax：+886 2 8646-1761</h4>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="menu1">
              <div class="row">
                <div class="col-md-12 col-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.5457415579262!2d120.66734131501904!3d31.316298081437598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b3a6591ac696c5%3A0x7bc84fd0bed6f5cd!2z5Lit5ZyL5rGf6IuP55yB6IuP5bee5biC5ZC05Lit5Yy65Zut5Yy65rmW6KW_6IuP6ZuF6LevMzE45Y-3IOmCruaUv-e8lueggTogMjE1MDAw!5e0!3m2!1szh-TW!2stw!4v1524671345263" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-contact">
                  <h4>蘇州曜邦電子科技有限公司 </h4>
                  <h4>BONDTEK CORPORATION</h4>
                  <h4>地址：江蘇省蘇州市蘇州工業園區蘇雅路318號1904(天翔國際)</h4>
                  <h4>1904, No.318, Suya Rd., Suzhou Industrial Park, Suzhou City, Jiangsu Province, Chin</h4>
                  <h4>Tel：+86 512 67629496</h4>
                  <h4>Fax：+86 512 67626943</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="numbersix">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-tittle">
          <p>聯絡我們</p>
          <p class="eng">Contact Us</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-list">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <ul style="padding-left: 20px">
                      <li>※謝謝您對我們的支持與肯定，為了提供您更好的服務，敬請留下您寶貴的建議，我們將盡快回復您。</li>
                      <li>※我們的上班時間為週一至週五09:00~18:00，我們將於收到您的來信後立即回覆您。</li>
                      <li>※客服信箱：service@tpt.com.tw</li>
                    </ul>
                </div>
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
