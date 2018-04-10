@extends('backend.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/category-order.js') }}"></script>
@endsection

@section('panel-content')
<div class="row" id="categoryOrder">
    <div class="col-md-12">
        <categoryorder></categoryorder>
    </div>
</div>
@endsection
