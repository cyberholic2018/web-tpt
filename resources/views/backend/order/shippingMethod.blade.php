@extends('backend.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/shipping-method.js') }}"></script>
@endsection

@section('panel-content')
    <div class="row ch-post-form" id="shipping-method">
        <div class="col-md-12">
            <shipping-method></shipping-method>
        </div>
    </div>
@endsection
