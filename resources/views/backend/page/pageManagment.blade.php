@extends('backend.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/page-managment.js') }}"></script>
@endsection

@section('panel-content')
    <div class="row ch-post-form" id="page-managment">
        <div class="col-md-12">
            <page-managment></page-managment>
        </div>
    </div>
@endsection
