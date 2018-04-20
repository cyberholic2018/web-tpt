@extends('admin.admin')

@section('custom-js-script')
    <script src="{{ asset('js/backend/add-page.js') }}"></script>
@endsection

@section('panel-content')
    <div class="row ch-post-form" id="add-page">
        <div class="col-md-12">
            @if ($mode == 'edit')
                <input id="row-guid" type="hidden" name="" value="{{ $guid }}">
            @endif
            <add-page></add-page>
        </div>
    </div>
@endsection
