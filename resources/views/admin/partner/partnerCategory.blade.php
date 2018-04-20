@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/partner-category.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="partner-category">
    <div class="col-md-12">
        <partner-category></partner-category>
    </div>
</div>
@endsection
