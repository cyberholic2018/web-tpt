@extends('admin.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/add-list.js') }}"></script>
@endsection

@section('panel-content')
    <div class="row ch-post-form" id="add-list">
        <div class="col-md-12">
            <add-list></add-list>
        </div>
    </div>
@endsection
