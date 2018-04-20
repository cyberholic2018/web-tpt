@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/partner-location.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="partner-location">
    <div class="col-md-12">
        <partner-location></partner-location>
    </div>
</div>
@endsection
