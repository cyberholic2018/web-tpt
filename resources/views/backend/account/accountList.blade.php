@extends('backend.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/account-list.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="account-list">
    <div class="col-md-12">
        <account-list></account-list>
    </div>
</div>
@endsection
