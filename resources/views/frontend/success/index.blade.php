@extends('frontend.success.main')

@section('sub-script')
    <script src="/js/plugins/masonry/masonry.pkgd.min.js" charset="utf-8"></script>
    <script src="/js/plugins/mp/mp.mansory.min.js" charset="utf-8"></script>
    <script type="text/javascript">
    $('.grid').masonry({
        itemSelector: '.grid-item',
    });
    </script>
@endsection

@section('sub-content')
    <div class="row" id="netone-news">
        <div class="col-md-8 col-md-offset-2 about-content" style="margin-top: 30px; margin-bottom: 50px;">
            <br>
            {{-- <table class="table-field">
                @foreach (PostView::success(App::getLocale()) as $key => $item)
                    <tr>
                        <td>
                            <h4><a href="/news/{{$item->guid}}">{{$item->title}}</a></h4>
                        </td>
                        <td align="right">
                            {!! date('Y-m-d', strtotime($item->created_at)) !!}
                        </td>
                    </tr>
                @endforeach
            </table> --}}


            <div class="grid">
                @foreach (PostView::success(App::getLocale()) as $key => $item)
                    <div class="grid-item">
                        <div class="success-case">
                            <div class="success-img">
                                <img src="{{$item->featureImage}}" alt="">
                                <h3>{{$item->title}}</h3>
                            </div>
                            <div class="success-content">
                                {!!$item->content!!}
                            </div>
                            <div class="success-footer">
                                <a class="btn btn-default" href="/news/{{$item->guid}}">{!! trans('string.learn_more') !!}</a>
                            </div>
                        </div>

                    </div>
                @endforeach
            </div>
            {{PostView::success(App::getLocale())}}
        </div>
    </div>

@endsection
