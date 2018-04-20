@extends('admin.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/category.js')}}"></script>
@endsection

@section('panel-content')
<div class="row" id="categoryElment">
    <div class="col-md-12">
        <category></category>
    </div>
</div>
@endsection
