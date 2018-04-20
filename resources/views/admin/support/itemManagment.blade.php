@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/item-managment.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
    <div class="row ch-product-form" id="item-managment">
        <div class="col-md-12">
            @if ($mode == 'edit')
                <input id="row-id" type="hidden" name="" value="{{ $id }}">
            @endif
            <item-managment></item-managment>
        </div>
    </div>
@endsection
