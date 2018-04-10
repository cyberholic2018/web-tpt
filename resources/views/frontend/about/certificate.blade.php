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
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 about-banner top" >
            <h1>除了最好，也要最安心。</h1>
        </div>
    </div>
</div>
<div class="container about-logo-section">
    <div class="row">
        <div class="col-md-6" style="border-right: #f1f1f1 solid thin;">
            <div class="row logo-gallery">
                <div class="col-xs-4 logo-img">
                    <img src="/img/mg-logo/ISARIA-500x500.jpg" alt="">
                </div>
                <div class="col-xs-4 logo-img">
                    <img src="/img/mg-logo/mg-logo-500x500.jpg" alt="">
                </div>
                <div class="col-xs-4 logo-img">
                    <img src="/img/mg-logo/meansgood-tea-500x500.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-6 about-context">
            <div>
                <p>明谷生機致力於只種自己敢吃的蟲草，堅持無農藥、無重金屬，同時不添加化學肥料與抗菌劑，更為了充分掌握研發來源和管控品質，採取原料育種栽培、應用、開發、萃取、品質監控測試、銷售及售後服務的一站式營運模式，每一環節均有嚴謹、縝密的審核，層層把關只為了守護您的健康。</p>
            </div>
        </div>
    </div>
</div>
<div class="container certificate-section">
    <div class="row" data-aos="fade-in">
        <div class="col-md-12" >
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#home">黃金蟲草多醣飲</a></li>
                <li><a data-toggle="tab" href="#menu1">黃金蟲草茶</a></li>
                <li><a data-toggle="tab" href="#menu2">蟬花舒敏皂</a></li>
                <li><a data-toggle="tab" href="#menu3">蟬花舒敏萬用膏</a></li>
                <li><a data-toggle="tab" href="#menu4">巧克茶</a></li>
            </ul>

            <div class="tab-content">
                <div id="home" class="tab-pane fade in active">
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 水溶性總多醣檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/01/01-1/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-1/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無二氧化硫檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/01/01-2/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-2/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無重金屬檢驗</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/01/01-3/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-3/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無農藥殘留檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/01/01-4/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-4/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-4/03.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-4/04.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-4/05.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/01/01-4/06.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="menu1" class="tab-pane fade">
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* A.A (Anti Additive) 無添加三星認證</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/02/02-0/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無農藥殘留檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/02/02-1/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無重金屬檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/02/02-2/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/02/02-2/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="menu2" class="tab-pane fade">
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無甲醛檢驗</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/03/03-1/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/03/03-1/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無重金屬檢驗</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/03/03-2/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/03/03-2/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無塑化劑檢驗</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/03/03-3/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/03/03-3/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/03/03-3/03.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="menu3" class="tab-pane fade">
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無重金屬檢驗</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/04/04-1/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/04/04-1/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無雌激素檢驗</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/04/04-2/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/04/04-2/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/04/04-2/03.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無類固醇檢驗</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/04/04-3/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/04/04-3/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/04/04-3/03.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="menu4" class="tab-pane fade">
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* A.A (Anti Additive) 無添加三星認證</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/05/05-0/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無大腸桿菌檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/05/05-1/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-1/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無重金屬檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/05/05-2/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-2/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無黃麴毒素檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/05/05-3/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-3/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 無農藥殘留檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/05/05-4/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-4/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-4/03.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-4/04.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-4/05.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-4/06.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" class="certificate-list">
                        <tr>
                            <td>
                                <p>* 蟲草素檢測</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                <a href="/img/certificate/05/05-5/01.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                                <a href="/img/certificate/05/05-5/02.jpg">
                                    <img src="/img/icon/tick.png" alt="">
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
