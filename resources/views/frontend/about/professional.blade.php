@extends('main')

@section('custom-script')
    <script src="/js/plugins/lightbox2/dist/js/lightbox.min.js" charset="utf-8"></script>
    <script type="text/javascript">
        $(function () {
            var updateLayout = function () {
                var timelineOdd = $('.timeline:nth-child(odd)');
                var timelineEven = $('.timeline:nth-child(even)');

                timelineEven.find('.step-image').attr('data-aos', 'fade-right');
                timelineEven.find('.step-context').attr('data-aos', 'fade-left');
                timelineOdd.find('.step-image').attr('data-aos', 'fade-left');
                timelineOdd.find('.step-context').attr('data-aos', 'fade-right');

                AOS.init();
                AOS.init();
            }

            updateLayout();

            $(window).resize(function(event) {
                updateLayout();
            });

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
            background-image: url('/img/about/banner-3.JPG');
        }
        .middle {
            background-image: url('/img/about/pro/album-04.jpg');
        }
        .slick-dots {
            margin-bottom: -10px;
        }
        .about-album {
            margin-bottom: 50px !important;
        }

    </style>
@endsection

@section('content')
<div class="container-fluid">
    <div class="row" data-aos="fade-in">
        <div class="col-md-12 about-banner top" >
            <h1>高科技環控植物工廠，以創新永續健康。</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2 about-text-contain" data-aos="fade-up">
            <h2>蟲草栽培流程</h2>
        </div>

        <div class="timeline-container">
            <div class="timeline-top-dot" data-aos="fade-up"></div>
            <div class="timeline-string" data-aos="fade-up"></div>
            <div class="col-md-12 timeline">
                <div class="step-image">
                    <img src="{{ url('/img/about/pro/pro-01.jpg') }}" alt="">
                </div>
                <div class="step-context">
                    <h4>小麥培養基配置 : </h4>
                    <p>採用進口有機小麥搭配嚴選有機食材以合適的碳氮比配製而成，不添加化學肥料與抗菌劑，安全可食用並能有效提升蟲草的活性成分。</p>
                </div>
            </div>

            <div class="col-md-12 timeline">
                <div class="step-image">
                    <img src="{{ url('/img/about/pro/pro-02.jpg') }}" alt="">
                </div>
                <div class="step-context">
                    <h4>培養基高溫高壓滅菌 : </h4>
                    <p>培養基經過121度高溫高壓水蒸氣滅菌1個小時達到完全無菌狀態。</p>
                </div>
            </div>

            <div class="col-md-12 timeline">
                <div class="step-image">
                    <img src="{{ url('/img/about/pro/pro-03.jpg') }}" alt="">
                </div>
                <div class="step-context">
                    <h4>培養基無菌接種 : </h4>
                    <p>在無菌層流台內(雙層Hepa過濾99.97%黴菌)將蟲草菌種接種至培養基內，降低雜菌汙染機會，避免使用開放空間殺菌劑，保障作業員安全。</p>
                </div>
            </div>

            <div class="col-md-12 timeline">
                <div class="step-image">
                    <img src="{{ url('/img/about/pro/pro-04.jpg') }}" alt="">
                </div>
                <div class="step-context">
                    <h4>環控暗栽培 : </h4>
                    <p>避光栽培，讓蟲草菌絲體能夠快速成長，佔據培養基成優勢菌種。</p>
                </div>
            </div>

            <div class="col-md-12 timeline">
                <div class="step-image">
                    <img src="{{ url('/img/about/pro/pro-05.jpg') }}" alt="">
                </div>
                <div class="step-context">
                    <h4>環控亮栽培 : </h4>
                    <p>照光栽培，促使蟲草從營養生長轉生殖生長，形成子實體，給予高頻LED強光栽培，造成蟲草生長逆境，有效提高蟲草素、蟲草黃素與其他珍貴活性成分的含量。</p>
                </div>
            </div>

            <div class="col-md-12 timeline">
                <div class="step-image">
                    <img src="{{ url('/img/about/pro/pro-06.jpg') }}" alt="">
                </div>
                <div class="step-context">
                    <h4>採收烘乾 : </h4>
                    <p>採用40度C低溫烘乾，避免蟲草活性成分遭受破壞，完整保留營養價值。</p>
                </div>
            </div>

        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row" data-aos="fade-in">
        <div class="col-md-12 about-banner middle" >
            <h1>＊透氣式組培瓶：採用PP材質無朔化劑，<br>非一次性丟棄材質，可回收重複利用，減少對環境的破壞。</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row" data-aos="fade-up">
        <div class="col-sm-12" style="margin: 50px 0;">
            <div class="center-hr xxl">
                <span>
                    研發環境
                </span>
            </div>
        </div>
    </div>

</div>
<div class="container-fluid" data-aos="fade-up">
    <div class="row about-album">
        @for ($i=0; $i < 7; $i++)
            <div class="col-xs-4 img-box">
                <a href="/img/about/pro/album-0{{$i + 1}}.jpg" data-lightbox="roadtrip">
                    <img src="/img/about/pro/album-0{{$i + 1}}.jpg" width="100%" alt="">
                </a>
                <div class="text-box">
                    @php
                        switch ($i) {
                            case 0:
                                echo "栽培環境設施";
                                break;
                            case 1:
                                echo "真菌子實體生長";
                                break;
                            case 2:
                                echo "液態菌絲體培養";
                                break;
                            case 3:
                                echo "透氣式組培瓶";
                                break;
                            case 4:
                                echo "菌種培養";
                                break;
                            case 5:
                                echo "維持環境溼度";
                                break;
                            case 6:
                                echo "蟲草栽培";
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
