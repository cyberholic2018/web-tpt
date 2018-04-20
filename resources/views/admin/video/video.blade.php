@extends('admin.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/video-managment.js')}}"></script>
@endsection

@section('panel-content')
<div class="row" id="video-managment">
    <div class="col-md-12">
        <video-managment></video-managment>
    </div>
</div>
@endsection
