@extends('backend.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/add-product.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="editProductForm">
    <div class="col-md-12">
        @if ($mode == 'edit')
            <input id="row-guid" type="hidden" name="" value="{{ $guid }}">
        @endif
        <addproduct></addproduct>
    </div>
</div>
@endsection
