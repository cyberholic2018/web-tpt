@extends('backend.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/order-list.js') }}"></script>
@endsection

@section('panel-content')
    <div class="row ch-post-form" id="order-list">
        <div class="col-md-12">
            <order-list></order-list>
        </div>
    </div>
@endsection
