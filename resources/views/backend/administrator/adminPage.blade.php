@extends('backend.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/admin-page.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="adminPage">
    <div class="col-md-12">
        <adminpage></adminpage>
    </div>
</div>
@endsection
