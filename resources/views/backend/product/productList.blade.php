@extends('backend.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/product-list.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="product-list">
    <div class="col-md-12">
        <product-list></product-list>
    </div>
</div>
@endsection
