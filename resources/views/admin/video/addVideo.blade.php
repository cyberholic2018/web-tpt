@extends('admin.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/add-video.js')}}"></script>
@endsection

@section('panel-content')
<div class="row" id="add-video">
    <div class="col-md-12">
        @if ($mode == 'edit')
            <input id="row-id" type="hidden" name="" value="{{ $id }}">
        @endif
        <add-video></add-video>
    </div>
</div>
@endsection
