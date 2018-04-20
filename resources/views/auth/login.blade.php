@extends('layouts.main')
@section('content')
<div class="container">
    <div class="row" id="loginSite">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">後台登入</div>
                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="{{ route('login') }}" autocomplete="off">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email">E-Mail 帳號</label>

                            <div class="col-md-12">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password">密碼</label>

                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        {{-- <div class="form-group">
                            <div class="col-md-12 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div> --}}

                        {{-- {!! NoCaptcha::renderJs() !!} --}}
                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="checkbox">
                                    {!! NoCaptcha::display() !!}
                                </div>
                                @if ($errors->has('g-recaptcha-response'))
                                    <span class="help-block">
                                        <strong>登入必須通過驗證</strong>
                                    </span>
                                @endif
                                <br>
                                <button type="submit" class="btn btn-primary">
                                    登入
                                </button>

                                {{-- <a class="btn btn-link" href="{{ url('/cyberholic-system/password/reset') }}">
                                    Forgot Your Password?
                                </a> --}}


                            </div>
                        </div>
                        {{-- <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <a class="btn btn-info" href="{{ url('auth/facebook') }}" style="background:#3B5998; border:#3B5998">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </div>
                        </div> --}}
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
