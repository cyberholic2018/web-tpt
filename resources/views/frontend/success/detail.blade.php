@extends('frontend.success.main')

@section('sub-script')
@endsection

@section('sub-content')
    <div class="row" id="netone-news">
        <div class="col-md-8 col-md-offset-2 about-content" style="margin-top: 30px; margin-bottom: 50px;">
            <br>
            <h3>{!! date('Y-m-d', strtotime(PostView::success(App::getLocale())->created_at)) !!}</h3>
            <br>
            <table style="width: 80px;">
                <tr>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="facebook-share" class="alignleft" src="http://maxim-meterials.com.tw/wp-content/uploads/2017/08/facebook-icon.svg" alt="" width="80%" /></td>
                    <td width="50%" align="left" style="border-bottom: none;"><img id="line-share" class="aligncenter" src="http://maxim-meterials.com.tw/wp-content/uploads/2017/08/line-icon.svg" alt="" width="80%" /></td>
                </tr>
            </table>
            <hr>
            {!! PostView::success(App::getLocale())->content !!}
            <br>
        </div>
    </div>

@endsection
