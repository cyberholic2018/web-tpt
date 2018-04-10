@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">
        @foreach (PostView::all() as $key => $value)
            #blog-{{$value->guid}} {
                background-image: url('{{$value->featureImage}}');
            }
        @endforeach
        .blog-feature-image {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="center-hr xl">
                <span>
                    最新文章
                </span>
            </div>
            @foreach (PostView::all() as $key => $value)
                <div class="row blog-list-section">
                    <div class="col-md-4 blog-feature-image" id="blog-{{$value->guid}}">
                        <img src="/img/4x3.png" alt="">
                    </div>
                    <div class="col-md-8 blog-content">
                        <h3>{{$value->title}}</h3>
                        <hr>
                        {{$value->seoDescription}}
                        <br>
                        <br>
                        <a href="/blog/{{$value->guid}}">繼續閱讀 ></a>
                    </div>
                    <div class="col-md-12">
                        <hr>
                    </div>
                </div>
            @endforeach
            {{PostView::all()}}
        </div>
    </div>
</div>
@endsection
