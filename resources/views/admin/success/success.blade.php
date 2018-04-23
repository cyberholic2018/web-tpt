@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/success.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row ch-product-form" id="success">
    <div class="col-md-12">
        <input type="hidden" name="edit-mode" value="{{$mode}}">
        @if ($mode == 'edit')
            <input type="hidden" name="id" value="{{$id}}">
        @endif
        <success></success>
    </div>
</div>
@endsection
