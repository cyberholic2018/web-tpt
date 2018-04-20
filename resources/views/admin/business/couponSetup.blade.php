@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/coupon-setup.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="coupon-setup">
    <div class="col-md-12">
        <coupon-setup></coupon-setup>
    </div>
</div>
@endsection
