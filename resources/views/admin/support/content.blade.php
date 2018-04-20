@extends('admin.admin')

@section('custom-js-script')
@endsection

@section('panel-content')
<div class="row ch-product-form">
    <div class="col-md-12">
        <div class="row">
        <form action="/admin/support/content/edit" method="post">
            {{ csrf_field() }}
            <div class="col-md-4">
                <div class="form-group">
                    <strong>中文版面</strong>
                </div>

                <div class="form-group">
                    <label for="">主標題</label>
                    @if (ContentView::get('zh-TW'))
                        <input class="form-control" type="text" name="title" value="{{ContentView::get('zh-TW')->title}}" required>
                    @else
                        <input class="form-control" type="text" name="title" value="" required>
                    @endif
                </div>

                <div class="form-group">
                    <label for="">內容</label>
                    @if (ContentView::get('zh-TW'))
                        <textarea class="form-control" name="content" cols="80">{{ContentView::get('zh-TW')->content}}</textarea>
                    @else
                        <textarea class="form-control" name="content" cols="80"></textarea>
                    @endif
                </div>
                <input type="hidden" name="locale" value="zh-TW">


                <input class="btn btn-primary" type="submit" name="" value="送出">
            </div>
        </form>
        <form action="/admin/support/content/edit" method="post">
            {{ csrf_field() }}
            <div class="col-md-4 col-md-offset-1">
                <div class="form-group">
                    <strong>英文版面</strong>
                </div>

                <div class="form-group">
                    <label for="">主標題</label>
                    @if (ContentView::get('en'))
                        <input class="form-control" type="text" name="title" value="{{ContentView::get('en')->title}}" required>
                    @else
                        <input class="form-control" type="text" name="title" value="" required>
                    @endif
                </div>

                <div class="form-group">
                    <label for="">內容</label>
                    @if (ContentView::get('en'))
                        <textarea class="form-control" name="content" cols="80">{{ContentView::get('en')->content}}</textarea>
                    @else
                        <textarea class="form-control" name="content" cols="80"></textarea>
                    @endif
                </div>
                <input type="hidden" name="locale" value="en">


                <input class="btn btn-primary" type="submit" name="" value="送出">
            </div>
        </form>
        </div>
    </div>
</div>
@endsection
