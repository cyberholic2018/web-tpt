@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">
    @charset "UTF-8";
* {
font-family: 微軟正黑體;
position: relative;
font-weight: 800;
}

html, body {
padding: 0;
margin: 0;
height: 100%;
width: 100%;
}

.container-fluid {
padding: 0;
}
.container-fluid img {
height: 100%;
width: 100%;
}

section.numbertwo {
border-bottom: solid #D4D4D4;
color: #5C5C5C;
}
section.numbertwo .col-md-12.col-tittle {
text-align: center;
font-size: 25px;
margin-top: 30px;
}
section.numbertwo .col-md-12.col-button {
text-align: center;
font-size: 25px;
background-color: #545454;
padding-top: 3px;
padding-bottom: 3px;
cursor: pointer;
}
section.numbertwo .col-md-12.col-button ul {
border: none;
}
section.numbertwo .col-md-12.col-button ul li {
list-style: none;
width: 50%;
}
section.numbertwo .col-md-12.col-button ul li a {
color: #E8E8E8;
background-color: #545454;
border: none;
}
section.numbertwo .col-md-12.col-button ul li.active a {
border-bottom: solid 2px #FAA200;
}
section.numbertwo .col-md-12.col-map {
left: 50%;
right: 50%;
transform: translateX(-50%);
max-width: 900px;
margin-top: 35px;
}
section.numbertwo .col-md-12.col-contact {
font-size: 18px;
margin-top: 30px;
margin-bottom: 30px;
text-align: center;
line-height: 10px;
}

section.numbersix {
text-align: center;
}
section.numbersix .col-md-12.col-tittle {
text-align: center;
font-size: 25px;
margin-top: 30px;
}
section.numbersix .col-md-12.col-list {
text-align: left;
padding-top: 3px;
padding-bottom: 3px;
line-height: 45px;
background-color: #545454;
color: #E8E8E8;
}
section.numbersix .col-md-12.col-tel {
width: 100%;
margin: 10px auto;
text-align: left;
}
section.numbersix .col-md-12.col-tel .contact-table {
margin-top: 30px;
left: 50%;
right: 50%;
transform: translateX(-50%);
}
section.numbersix .col-md-12.col-tel .contact-table span {
color: red;
}
section.numbersix .col-md-12.col-tel .contact-table tr td {
padding: 5px;
}
section.numbersix .col-md-12.col-tel .contact-table tr textarea {
width: 100%;
}
section.numbersix .col-md-12.col-tel .btn-contact {
background-color: #545454;
color: #E8E8E8;
width: 50%;
left: 50%;
right: 50%;
transform: translateX(-50%);
}
section.numbersix .col-md-12.col-bottom {
margin-top: 100px;
margin-bottom: 150px;
text-align: center;
font-size: 10px;
}

    </style>
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/000/fff" alt=""/></div>
  </div>
  <section class="numbertwo">
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28968.13186951268!2d120.92452149999998!3d24.829109900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8dfe1ebae1c22986!2z5paw56u55Y2X5a-u6IiK5ryB5riv!5e0!3m2!1szh-TW!2stw!4v1523373663161" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28968.13186951268!2d120.92452149999998!3d24.829109900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8dfe1ebae1c22986!2z5paw56u55Y2X5a-u6IiK5ryB5riv!5e0!3m2!1szh-TW!2stw!4v1523373663161" width="100%" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
          <ul>
            <li>※謝謝您對我們的支持與肯定，為了提供您更好的服務，敬請留下您寶貴的建議，我們將盡快回復您。</li>
            <li>※我們的上班時間為週一至週五09:00~18:00，我們將於收到您的來信後立即回覆您。</li>
            <li>※客服信箱：service@tpt.com.tw</li>
          </ul>
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
        <div class="col-md-12 col-bottom">
          <p class="small">COPYRIGHT © TAIWAN POWERTEK. ALL RIGHTS RESERVED. DESIGN BY CyberHolic    </p>
        </div>
      </div>
    </div>
  </section>


@endsection
