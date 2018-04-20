@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/item-list.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="item-list">
    <div class="col-md-12">
        <item-list></item-list>
    </div>
</div>
@endsection
