@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">


    </style>
    <link rel="stylesheet" href="/css/tpt/contact.css">
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/{{Helper::rc()}}/fff" alt=""/></div>
  </div>
  <section class="numbertwo">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.2875845685617!2d121.63280801493782!3d25.058240083961007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d535404923b37%3A0x8e60a1f91679e603!2zMjIx5paw5YyX5biC5rGQ5q2i5Y2A5aSn5ZCM6Lev5LiA5q61MjM3LTbomZ8!5e0!3m2!1szh-TW!2stw!4v1524496783601" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
