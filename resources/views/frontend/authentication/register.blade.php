@extends('main')

@section('content')
    <div class="container" style="margin-bottom: 30px">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 member-auth-form-table">
                {{-- {{Route::getCurrentRoute()->getActionName()}} --}}
                <form class="form-horizontal" method="POST" action="/registerNormalUser">
                    {{-- <div class="center-hr xl">
                        <span>
                            社群登入
                        </span>
                    </div> --}}
                    <div style="text-align: center" class="social-login-section">
                        <div class="row">
                            <div class="col-sm-6">
                                <a class="btn btn-info" href="{{ url('auth/facebook') }}" style="background:#3B5998; border:#3B5998; font-size: 16px">
                                    <i class="fa fa-facebook"></i>&nbsp;&nbsp;Facebook 登入
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <a class="btn btn-info" href="{{ url('auth/google') }}" style="background:#c9302c; border:#c9302c; font-size: 16px">
                                    <i class="fa fa-google"></i>&nbsp;&nbsp;Google 登入
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="center-hr xl">
                        <span>
                            一般註冊
                        </span>
                    </div>
                    {{ csrf_field() }}
                    <strong style="font-size: 150%"><p>加入會員立即獲得購物金50元，<br>並享有消費金額10％購物金累積回饋。</p></strong>

                    <p>請詳細的逐項填寫下列相關之資料，以方便我們為您提供更貼切之服務。您所填寫的相關資料係僅作為我們提供會員購物服務之使用，本公司依據「個人資料保護法」第八條規定將盡妥善保管之責任。</p>
                    <table class="sign-form">
                        <tr>
                            <td><label for="signup-mail">姓名</label></td>
                        </tr>
                        <tr>
                            <td>
                                {{-- <input type="text" name="signup-mail" id="signup-mail" value=""> --}}
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td><label for="signup-mail">E-mail</label></td>
                        </tr>
                        <tr>
                            <td>
                                {{-- <input type="text" name="signup-mail" id="signup-mail" value=""> --}}
                                <input id="signup-mail" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
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
                            <td style="padding: 20px 5px;">
                                <button type="submit" class="btn btn-success">註冊</button>
                                <input type="checkbox" id="subscriptable" name="subscriptable" value="true">
                                <label for="subscriptable">訂閱電子報，享有不定期優惠代碼</label>
                            </td>
                        </tr>
                    </table>
                </form>
                {{-- <ul class="nav nav-pills nav-justified">
                    <li class="active"><a data-toggle="tab" href="#home">登入</a></li>
                    <li><a data-toggle="tab" href="#menu1">註冊</a></li>
                </ul> --}}

                {{-- <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                        <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                            {{ csrf_field() }}
                            <p>請輸入個人帳號密碼。如密碼遺失，請按忘記密碼，系統將傳送新密碼給您，謝謝。</p>
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
                                    <td><label for="login-password">密碼</label></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="password" type="password" class="form-control" name="password" required>

                                        @if ($errors->has('password'))
                                            <span class="help-block">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                        @endif
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
                                        <button type="submit" class="btn btn-success" name="button">登入</button>
                                        <a class="btn btn-info" href="{{ url('auth/facebook') }}" style="background:#3B5998; border:#3B5998; font-size: 16px">
                                            <i class="fa fa-facebook"></i>&nbsp;&nbsp;Facebook 登入
                                        </a>
                                        <input type="checkbox" id="remamber" name="remamber" value="">
                                        <label for="remamber">記住我</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="#">忘記您的密碼？</a></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <p>請詳細的逐項填寫下列相關之資料，以方便我們為您提供更貼切之服務。您所填寫的相關資料係僅作為我們提供會員訂票服務之使用，本公司依據「個人資料保護法」第八條規定將盡妥善保管之責任。</p>


                    </div>
                </div> --}}
            </div>
        </div>
    </div>

@endsection
