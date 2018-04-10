@extends('frontend.dashboard.dashboard')

@section('dashboard-content')
    @if (Auth::user()->socialUser)
        <strong><h3>已連結 Facebook 帳號 {{Auth::user()->email}}</h3></strong>
    @else
        <form action="/user/modifyInformation" method="post">
            {{csrf_field()}}
            <div class="row information-form">
                <div class="col-md-6 info-field">
                    <label for="name">姓名 <span class="required">*</span></label>
                    <input type="text" class="" name="name" id="name" value="{{Auth::user()->name}}" required>
                </div>
                <div class="col-md-6 info-field">
                    <label>電子郵件 (帳號無法修改)</label>
                    <input type="email" id="account_email" value="{{Auth::user()->email}}" readonly>
                </div>

                <div class="col-md-12">
                    <legend>變更密碼</legend>
                </div>

                <div class="col-md-12 info-field">
                    <label for="password_current">目前的密碼（不需變更請留空）</label>
                    <input type="password" name="password_current" id="password_current">
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password_current') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="col-md-12 info-field">
                    <label for="password_1">新密碼（不需變更請留空）</label>
                    <input type="password" name="password" id="password">
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
                <div class="col-md-12 info-field">
                    <label for="password_2">確認新密碼</label>
                    <input type="password" name="password_confirmation" id="password_confirmation">
                </div>
                <input type="submit" class="btn btn-success" name="save_account_details" value="儲存修改">
            </div>

        </form>
    @endif

@endsection
