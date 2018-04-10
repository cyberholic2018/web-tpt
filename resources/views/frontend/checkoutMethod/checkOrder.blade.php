@extends('main')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 member-auth-form-table">
                <form class="form-horizontal" action="{{ route('orderChecking') }}" method="post">
                    {{ csrf_field() }}
                    <h3>查詢訂單</h3>
                    <p>請輸入您購買時取得的訂單編號，輸入以查詢您的訂單資訊。</p>
                    <hr>
                    <table class="sign-form">
                        <tr>
                            <td><label for="order-id">訂單編號</label></td>
                        </tr>
                        <tr>
                            <td>
                                <input id="order-id" type="text" class="form-control" name="orderId" value="" required autofocus>
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
                                        <strong>請通過ReCaptcha驗證</strong>
                                    </span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 5px;">
                                <button type="submit" class="btn btn-success">查詢訂單</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
@endsection
