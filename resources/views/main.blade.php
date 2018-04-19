<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="{{SiteMetaView::keyword()}}">
        <meta name="description" content="{{SiteMetaView::description()}}">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        @yield('custom-meta')

        {{-- <title>{{ config('app.name', 'Laravel') }}</title> --}}
        <title>{{ SiteMetaView::title() }}</title>

        <link rel="shortcut icon" href="{{ SiteMetaView::shortcut() }}">

        <!-- Fonts -->
        <link href="{{ asset('css/frontend.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/js/plugins/AOS/aos.css">
        <link rel="stylesheet" href="/css/animate.css">

        <!-- Styles -->
        <style>
        .paytest {
            display: block;
            font-size: 50pt;
        }
        </style>

        {{-- Custom stylesheet --}}
        @yield('custom-style')

        <!-- Facebook Pixel Code -->
        <!-- End Facebook Pixel Code -->

    </head>
    <body>
        <div class="loading-bar">
            <img src="/img/icon/default-loading.svg">
        </div>
        @unless (Auth::guest())
            @if (Auth::user()->role == 'ADMIN')
                <div class="container-fluid admin-bar">
                    <div class="row">
                        <div class="col-md-12">
                            <a href="/cyberholic-system/admin">後台入口</a>
                        </div>
                    </div>
                </div>
            @endif
        @endunless

        {{-- 頁面選單 --}}
        <button id="side-bar-btn">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="menu-panel">
            <div class="gray-layer">

            </div>
            <div class="menu-section hide">
                <div class="site-logo">
                    <a href="/"><img src="/img/tpt-logo.png" alt="{{ SiteMetaView::title() }}" title="{{ SiteMetaView::title() }}"></a>                    
                </div>


                <ul>
                    <li>
                        <a href="{{url('/about')}}">
                            <span>關於帕太</span>
                            <br>
                            About POWERTECH
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/news')}}">
                            <span>最新消息</span>
                            <br>
                            News & Infomation
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/product')}}">
                            <span>產品介紹</span>
                            <br>
                            Product Infomation
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/partner')}}">
                            <span>合作夥伴</span>
                            <br>
                            Our Partners
                        </a>
                    </li>
                    <li>
                        <a href="{{url('/contact')}}">
                            <span>聯絡我們</span>
                            <br>
                            Contact Us
                        </a>
                    </li>
                </ul>
                <br><br><br>

                {{-- <button type="button" name="button" id="close-menu">test</button> --}}
            </div>
        </div>

        {{--頁面內容--}}
        @yield('content')

        {{--頁尾--}}

        <!-- Scripts -->
        <script src="{{ asset('js/frontend.js') }}"></script>

        <script src="{{ asset('js/CH-lib.js') }}"></script>

        {{-- <script src="{{ asset('js/cart-panel.js') }}"></script> --}}

        <script src="{{ asset('js/plugins/AOS/aos.js') }}" charset="utf-8"></script>

        <script type="text/javascript">
            AOS.init();

            $(document).ready(function() {
                $('.loading-bar').fadeOut('fast');
            });
        </script>

        {{-- Custom scripts --}}
        @yield('custom-script')

        @if(config('app.env') == 'local')
            <script src="http://localhost:35729/livereload.js"></script>
        @endif

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110216165-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-110216165-1');
        </script>


    </body>
</html>
