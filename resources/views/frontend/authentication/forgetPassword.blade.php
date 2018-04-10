@extends('main')

@section('content')
    <div class="container" style="margin-bottom: 30px">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 member-auth-form-table">
                <form class="form-horizontal" action="{{ route('sendResetPasswordMail') }}" method="post">
                    {{ csrf_field() }}
                    <h3>忘記密碼了嗎?</h3>
                    <p>請輸入您註冊時所使用的信箱，我們將會發送一則重置密碼的信件給您，謝謝。</p>
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
                            <td>
                                {!! NoCaptcha::renderJs() !!}
                                <div class="checkbox">
                                    {!! NoCaptcha::display() !!}
                                </div>
                                @if ($errors->has('g-recaptcha-response'))
                                    <span class="help-block">
                                        <strong>登入必須通過驗證</strong>
                                    </span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 5px;">
                                <button type="submit" class="btn btn-success">寄送驗證信</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>

@endsection
