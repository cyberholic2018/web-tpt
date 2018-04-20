@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/post-order.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row" id="postOrder">
    <div class="col-md-12">
        <postorder></postorder>
    </div>
</div>
@endsection
