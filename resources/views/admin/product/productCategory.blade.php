@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/product-category.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="product-category">
    <div class="col-md-12">
        <product-category></product-category>
    </div>
</div>
@endsection
