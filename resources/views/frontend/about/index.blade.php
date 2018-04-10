@extends('main')

@section('custom-script')
    <script src="/js/plugins/lightbox2/dist/js/lightbox.min.js" charset="utf-8"></script>
    <script type="text/javascript">
        $(function () {
            $('.about-album').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
           });
        });
    </script>
@endsection

@section('custom-style')
    <link rel="stylesheet" href="/js/plugins/lightbox2/dist/css/lightbox.min.css">
    <style media="screen">
        .top {
            background-image: url('/img/about/Banner.JPG');
        }
        .middle-1 {
            background-attachment: fixed;
            background-image: url('/img/about/check-qa.jpg');
        }
        .middle-2 {
            background-attachment: fixed;
            background-image: url('/img/about/banner-2.JPG');
        }

        @media (max-width:1024px) {
            .middle-1, .middle-2 {
                background-attachment:initial;
            }
        }
    </style>
@endsection

@section('content')
<div class="container-fluid">
    <div class="row" data-aos="fade-in">
        <div class="col-md-12 about-banner top" >
            <h1>美好的生活，就是自己選擇的生活。</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row" data-aos="fade-up">
        <div class="col-md-8 col-md-offset-2 about-text-contain">
            <h2>Our promise-「生活美好的本質就是健康」</h2>
            <br>
            <hr width="50%">
            <br>
            <h3>「Life means good!」，生活意味著美好。</h3>
            <br>
            <br>
            <p>人必須活著，才能有美好的生活。而健康不只是活著而已，也不是活得長久而已，而是活在良好的健康狀態裡。</p>

            <p>秉承「開發出對得起自己，讓家人也能安心使用」的理念，明谷農業生技有限公司於2015年正式創立，其背後隱含的更是明谷一路走來的堅持與努力。</p>

            <p>創辦人以「將蟲草的好分享給全世界」為許，從無到有，不僅從既有的基礎上開展，更力求積極創新，不斷尋求技術上的突破，讓明谷成為台灣唯一量產「蟬花」，更是亞洲唯一同時量產三種蟲草－「蟬花」、「黃金蟲草」、「白凰蟲草」的公司。</p>

        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row" data-aos="fade-up">
        <div class="col-md-12 about-banner middle-1" >
            <h1>「只種自己敢吃的蟲草」，層層把關只為了守護您的健康。</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row" data-aos="fade-left">
        <div class="col-md-8 col-md-offset-2 about-text-contain">
            <p>為了將蟲草的好分享出去，創辦人魏博士於2013開始籌備明谷，並與國立臺灣大學生物產業機電工程學系合作推廣創新植物工廠。</p>

            <p>以「只種自己敢吃的蟲草」為信念，不惜成本使用有機食材作為蟲草的培養基，不僅無農藥、無重金屬，同時不添加化學肥料與抗菌劑，更為了充分掌握研發來源和管控品質，採取原料育種栽培、應用、開發、萃取、品質監控測試、銷售及售後服務的一站式營運模式，每一環節均有嚴謹、縝密的審核，層層把關只為了守護您的健康。</p>

            <p>除了重視食品安全外，再加上獨家開發的新式LED光源，透過環控技術製造蟲草生長的光逆境，藉此提高蟲草的藥性，讓明谷的蟲草兼具食安與功效。</p>
            <br>
            <hr>
            <br>

            <h3>明谷的創立源始於愛，<br>期許用專業、健康、環保由裡至外呵護每一位使用者</h3>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row" data-aos="fade-up">
        <div class="col-md-12 about-banner middle-2" >
            <h1>健康就該「內外調和」，由裡到外呵護您的身體與心靈</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row" data-aos="fade-right">
        <div class="col-md-8 col-md-offset-2 about-text-contain">
            <p>我們深知企業的永續經營，需要品質、效用、創新與策略的互相配合，因此明谷不只革新市面上的蟲草風貌，更將蟲草的營養以不同的樣貌呈現，全方位守護您的健康。除了既有的蟲草茶飲，更推出了以蟬花萃取為概念的保養品牌&ndash;「ISARIA」，自食用保健延伸至外在保養，由內而外呵護，讓您買到的不只是產品，更是明谷團隊的層層用心。</p>

            <p>我們堅持的不只是成份安全、純天然無添加，更要求健康永續，因此全系列產品，我們提供的是真正符合您需求的有效配方，因為我們堅信生活永遠可以有更好的方式，而未來還有更多可能，因此我們將以「以農業為本，發展生技應用」實踐永續健康生活。</p>

            <p>未來明谷仍將不斷自我督促，致力推動新型態農業4.0，透過不斷研發的能量，結合高科技創新傳統農業，帶來農業栽培的革新，一直持續不斷的製造安心、安全且高品質的商品。</p>

        </div>
    </div>
    <div class="row" data-aos="fade-up">
        <div class="col-sm-12" style="margin: 50px 0;">
            <div class="center-hr xxl">
                <span>
                    參展紀錄
                </span>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid" data-aos="fade-up">
    <div class="row about-album">
        @for ($i=0; $i < 6; $i++)
            <div class="col-xs-4 img-box">
                <a href="/img/about/story/album-0{{$i + 1}}.jpg" data-lightbox="roadtrip">
                    <img src="/img/about/story/album-0{{$i + 1}}.jpg" width="100%" alt="">
                </a>
                <div class="text-box">
                    @php
                        switch ($i) {
                            case 0:
                                echo "2017 台灣美食展";
                                break;
                            case 1:
                                echo "2017美食展上台分享";
                                break;
                            case 2:
                                echo "2017植物工廠展";
                                break;
                            case 3:
                                echo "台大生機系的產學合作";
                                break;
                            case 4:
                                echo "許多好朋友的支持力挺";
                                break;
                            case 5:
                                echo "2017喜來登耶誕快閃市集";
                                break;
                            default:
                                echo "string";
                                break;
                        }
                    @endphp
                </div>
            </div>
        @endfor
    </div>
</div>
@endsection
