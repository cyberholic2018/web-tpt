@extends('admin.admin')

@section('custom-js-script')
<script src="{{ asset('js/backend/reset-password.js') }}"></script>
<script type="text/javascript">
    $('.loading-bar').fadeOut('100');
</script>
@endsection

@section('panel-content')
<div class="row" id="resetPassword">
    @if ($currentUser->socialUser)
        <div class="col-md-12">
            <div class="alert alert-warning" role="alert">
                社群使用者無法使用重置密碼功能
            </div>
        </div>
    @else
        <resetpassword></resetpassword>
    @endif
</div>
@endsection
