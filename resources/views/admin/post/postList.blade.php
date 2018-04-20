@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/post-list.js')}}" charset="utf-8"></script>
@endsection

@section('panel-content')
<div class="row" id="postList">
    <div class="col-md-12">
        <postlist></postlist>
    </div>
</div>
@endsection
