@extends('main')

@section('custom-script')
    <script type="text/javascript">
        $(function() {
            $('.logo-gallery').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                fade: false,
                autoplay: true,
                autoplaySpeed: 2000,
                lazyLoad: 'progressive'
           });
        });
    </script>
@endsection

@section('custom-style')
    <style media="screen">
        .top {
            background-image: url('/img/about/Banner.JPG');
        }
    </style>
@endsection

@section('content')
{{-- <div class="container-fluid">
    <div class="row">
        <div class="col-md-12 about-banner top" >
            <h1>銷售據點</h1>
        </div>
    </div>
</div> --}}
<div class="container about-logo-section">
    <div class="row">
        {{-- <div class="col-md-6" style="border-right: #f1f1f1 solid thin;">
            <div class="row logo-gallery">
                <div class="col-xs-4 logo-img">
                    <img src="/img/about/store/01.jpg" alt="">
                </div>
                <div class="col-xs-4 logo-img">
                    <img src="/img/about/store/02.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-6 about-context">
            <div>
                <p>明谷生機致力於只種自己敢吃的蟲草，堅持無農藥、無重金屬，同時不添加化學肥料與抗菌劑，更為了充分掌握研發來源和管控品質，採取原料育種栽培、應用、開發、萃取、品質監控測試、銷售及售後服務的一站式營運模式，每一環節均有嚴謹、縝密的審核，層層把關只為了守護您的健康。</p>
            </div>
        </div> --}}
        <div class="col-md-12">

            <p>&nbsp;</p>
            <div class="center-hr xxl">
                <span>
                    線上購買
                </span>
            </div>

            <p>&nbsp;</p>

            <p style="text-align: left;">在明谷官網上選購商品並以宅配或超商取貨方式到貨。</p>

            <p style="text-align: left;">小提醒：鮮品系列與其他系列因產品性質與運送方式不同，系統設定無法在同一購物車內合併結帳，若同時購買新品與其他系列產品，煩請分開下兩張單。如有造成不便敬請見諒。</p>

            <p style="text-align: left;">生鮮系列購滿1500元即免150元之低溫宅配運費；其他系列購滿1000元即享有免運費之優惠。</p>

            <p style="text-align: left;">您可以選擇超商取貨付款、信用卡、轉帳匯款等付款方式。</p>

            <p>&nbsp;</p>

            <div class="center-hr xxl">
                <span>
                    明谷體驗店
                </span>
            </div>

            <p>&nbsp;</p>

            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="row logo-gallery">
                        <div class="col-xs-4 logo-img">
                            <img src="/img/about/store/01.jpg" alt="">
                        </div>
                        <div class="col-xs-4 logo-img">
                            <img src="/img/about/store/02.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <h3>6+ PLAZA廣場 體驗店</h3>

            <p>&nbsp;</p>

            <p style="text-align: left;">明谷生機－「食藥用真菌的專家」，帶您體驗古老真菌的美好，將蟲草更貼近每一個人的生活。跳脫傳統保健食品框架，以天然草本茶沖泡方式，讓您品嚐自然的原味，搭配以蟬花萃取為主的個人肌膚保養品，由內而外照顧每個人的健康，讓大家每一天的生活更好，養生原來可以這麼的簡單。</p>

            <p style="text-align: left;">地址：302竹北市復興三路二段168號5樓（6+PLAZA廣場） 櫃位電話：03-6208158 營業時間：週五、週六 11：00 &ndash; 22：00；其他日 11：00 &ndash; 21：30 外送時間：09：00 &ndash; 15：30 外送專線：03-5679463 滿500元即可外送（限冷萃）僅限新竹科學園區，公司會議、私人聚會、研討會、茶會預定服務。</p>

            <p>&nbsp;</p>

            <div class="center-hr xxl">
                <span>
                    黃金蟲草鮮品販售門市
                </span>
            </div>
            <p>&nbsp;</p>

            <h3>新北市</h3>

            <p>佳家樂百貨量販廣場 新北市林口區南勢街190號 02-2609-5527</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7979211238426!2d121.3581257500795!3d25.074837442729514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6d607937a75%3A0x29fe67a5e4b0d586!2zMjQ05paw5YyX5biC5p6X5Y-j5Y2A5Y2X5Yui6KGXMTkw6Jmf!5e0!3m2!1szh-TW!2stw!4v1518086643990" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

            <h3>新竹市</h3>

            <p>新竹市農會 <a href="http://www.hccfa.org.tw/about/服務據點">各店地址連結</a> 03-5386143</p>

            <p>&nbsp;</p>
            <p>&nbsp;</p>

        </div>
    </div>
</div>
@endsection
