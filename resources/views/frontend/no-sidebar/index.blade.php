@extends('frontend.no-sidebar.main')

@section('sub-content')
    {!!json_decode($pageContent->content)->content!!}
@endsection
