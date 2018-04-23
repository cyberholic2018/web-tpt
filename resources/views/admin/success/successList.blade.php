@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/success-list.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="success-list">
    <div class="col-md-12">
        <success-list></success-list>
    </div>
</div>
@endsection
