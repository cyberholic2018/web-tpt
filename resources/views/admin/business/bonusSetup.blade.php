@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/bonus-setup.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="bonus-setup">
    <div class="col-md-12">
        <bonus-setup></bonus-setup>
    </div>
</div>
@endsection
