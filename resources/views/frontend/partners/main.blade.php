@extends('main')

@section('custom-style')
    <style media="screen">
        .page-content-header {
            background-image: url('/images/sunrise-1756274_1920.jpg');
        }
    </style>
@endsection

@section('custom-js-script')
    @yield('sub-script')
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12 page-content">
            <div class="page-content-header">
                <h2>{!! trans('header.partner') !!}</h2>
            </div>
        </div>
    </div>
    <div class="row">
        {{-- <div class="col-md-3">
            <ul class="page-side-menu">
                <li><a class="{{ $active01 }}" href="/about">About Us</a></li>
                <li><a class="{{ $active02 }}" href="/about/history">History</a></li>
                <li><a class="{{ $active03 }}" href="/about/majorbusinessfield">Major Business Field</a></li>
                <li><a class="{{ $active04 }}" href="/about/businessphilosophy">Business Philosophy</a></li>
                <li><a class="{{ $active05 }}" href="/about/mission">Mission</a></li>
            </ul>
        </div> --}}
        <div class="col-md-12 sub-page-content">
            @yield('sub-content')
        </div>
    </div>
@endsection
