@extends('main')

@section('custom-style')
    <link rel="stylesheet" href="/js/plugins/AOS/aos.css">
@endsection

@section('custom-script')
    <script src="/js/plugins/AOS/aos.js" charset="utf-8"></script>

    <script type="text/javascript">
        AOS.init();
    </script>
@endsection

@section('custom-style')
@endsection

@section('content')

    <div class="container-fluid">
        <div class="row" data-aos="fade-in">
            <div class="col-md-12">
                <h2 style="text-align: center; padding: 200px 0">{{ $message }}</h2>
            </div>
        </div>
    </div>

@endsection
