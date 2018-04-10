@extends('layouts.app')

@section('custom-js-script')
	@yield('custom-js-script')
@endsection
@section('custom-style-section')
	@yield('custom-style-section')
@endsection
@section('main-panel-script')

@endsection

@section('content')
<style media="screen">

</style>

<div class="container-fluid">
	<div class="row">
		<div class="col-md-2" id="admin-sidebar">
	        <admin-sidebar></admin-sidebar>
	    </div>
		<div class="col-md-10">
			<div class="panel panel-default">
				<div class="panel-heading">{{ $panelTitle }}</div>
				<div class="panel-body">
					@yield('panel-content')
				</div>
			</div>
		</div>
	</div>
</div>
@yield('script')
@yield('style')
@endsection
