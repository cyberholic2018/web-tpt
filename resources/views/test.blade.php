@extends('main')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                {{-- <br><br><br><br><br><br><br><br>
                <form class="" action="/cvs-generate-sheet" method="post">
                    {{csrf_field()}}
                    <input type="text" name="test" value="">
                </form> --}}
                {{-- <br><br><br><br><br><br><br><br>
                <form  class="form-horizontal" enctype="multipart/form-data" action="/test-post" method="post">
                    {{csrf_field()}}
                    <input type="text" name="name" value="測試上傳">
                    <input type="file" name="files[]" value="" multiple>
                    <input type="submit" name="" value="Submit">
                </form> --}}

                @foreach ($product as $item)
                    {{$item->title}}
                @endforeach
                {{$product}}
            </div>
        </div>
    </div>
@endsection
