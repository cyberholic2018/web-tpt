@extends('main')

@section('content')
    <div class="container" style="margin-bottom: 30px">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 member-auth-form-table">
                <form class="form-horizontal" action="{{ route('resetPasswordFunction') }}" method="post">
                    {{ csrf_field() }}
                    <input type="hidden" name="token" value="{{$token}}">
                    <h3>重新設置您的密碼</h3>
                    <p>請輸入您註冊時所使用的信箱，以及您的新密碼。</p>
                    <hr>
                    <table class="sign-form">
                        <tr>
                            <td><label for="login-mail">E-mail</label></td>
                        </tr>
                        <tr>
                            <td>
                                <input id="login-mail" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="signup-password">密碼</label></td>
                        </tr>
                        <tr>
                            <td>
                                {{-- <input type="text" name="signup-password" id="signup-password" value=""> --}}
                                <input id="signup-password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td><label for="signup-password-confirmed">確認密碼</label></td>
                        </tr>
                        <tr>
                            <td>
                                <input id="signup-password-confirmed" type="password" class="form-control" name="password_confirmation" required>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 5px;">
                                <br>
                                <button type="submit" class="btn btn-success">重設密碼</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>

@endsection
