@extends('backend.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/gift-order.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="gift-order">
    <div class="col-md-12">
        <gift-order></gift-order>
    </div>
</div>
@endsection
