@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/coupon-add.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="coupon-add">
    <div class="col-md-12">
        <coupon-add></coupon-add>
    </div>
</div>
@endsection
