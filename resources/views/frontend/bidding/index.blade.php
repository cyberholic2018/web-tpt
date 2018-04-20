@extends('frontend.bidding.main')

@section('sub-content')
    {{-- <ul class="bidding-list">
        @foreach ($support as $item)
            <li>
                <a href="{{$item->downloadLink}}">{{$item->fileName}}</a>
                @if ($item->fileSize < 1024)
                    {{ $item->fileSize }} bytes
                @elseif (($item->fileSize >= 1024) && ($item->fileSize < 1048576))
                    {{ round($item->fileSize / 1024, 2) }} KB
                @elseif ($item->fileSize >= 1048576)
                    {{ round($item->fileSize / 1048576, 2) }} MB
                @endif
            </li>
        @endforeach
    </ul> --}}

    <br>
    @if (ContentView::get(App::getLocale()))
        <h2>{{ContentView::get(App::getLocale())->title}}</h2>
    @endif
    @if (ContentView::get(App::getLocale()))
        <h3>{{ContentView::get(App::getLocale())->content}}</h3>
    @endif


    <hr>
    <ul class="nav nav-tabs">
        @foreach ($support as $key => $value)
            @if ($key == 0)
                 <li class="active"><a data-toggle="tab" href="#{{$value->fileSize.$value->id}}">{{$value->fileName}}</a></li>
            @else
                 <li><a data-toggle="tab" href="#{{$value->fileSize.$value->id}}">{{$value->fileName}}</a></li>
            @endif
        @endforeach
    </ul>

    <div class="tab-content">
        @foreach ($support as $key => $value)
            @if ($key == 0)
                <div id="{{$value->fileSize.$value->id}}" class="tab-pane fade in active">
                    {!!$value->description!!}
                </div>
            @else
                <div id="{{$value->fileSize.$value->id}}" class="tab-pane fade">
                    {!!$value->description!!}
                </div>
            @endif
        @endforeach

    </div>
@endsection
