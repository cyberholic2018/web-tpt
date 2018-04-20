@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/admin-list.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="addAdminForm">
    <div class="col-md-12">
        <adminlist></adminlist>
    </div>
</div>
@endsection
