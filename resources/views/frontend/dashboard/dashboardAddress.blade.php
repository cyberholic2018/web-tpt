@extends('frontend.dashboard.dashboard')

@section('dashboard-content')
    <p>下列的地址將會在您結帳時自動使用，但您還是可以在結帳時改成其他地址。</p>
    <hr>
    <div class="row">
        <div class="col-md-6">
            <h3>訂購人資訊</h3>
            @if (AddressInfo::check(Auth::user()->guid))
                <a href="#" data-toggle="modal" data-target="#myModal">編輯</a>
                <table class="address-table">
                    <tr>
                        <td>{{AddressInfo::get(Auth::user()->guid)->fullName}}</td>
                    </tr>
                    <tr>
                        <td>
                            {{AddressInfo::get(Auth::user()->guid)->cellPhone}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {{AddressInfo::get(Auth::user()->guid)->postcode}}&nbsp;{{AddressInfo::get(Auth::user()->guid)->city}}&nbsp;{{AddressInfo::get(Auth::user()->guid)->address}}
                        </td>
                    </tr>
                </table>

                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <form class="" action="/address/edit/{{Auth::user()->guid}}" method="post">
                            {{ csrf_field() }}
                            <div class="modal-content">
                                <div class="modal-header" style="border-bottom: none">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel">編輯地址 *</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="fullName">收件人 *</label>
                                        <input class="form-control" type="text" name="fullName" id="fullName" value="{{AddressInfo::get(Auth::user()->guid)->fullName}}" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="cellPhone">行動電話 *</label>
                                        <input class="form-control" type="text" name="cellPhone" id="cellPhone" value="{{AddressInfo::get(Auth::user()->guid)->cellPhone}}" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="postcode">郵遞區號 *</label>
                                        <input class="form-control" type="text" name="postcode" id="postcode" value="{{AddressInfo::get(Auth::user()->guid)->postcode}}" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="city">居住城市 *</label>
                                        <input class="form-control" type="text" name="city" id="city" value="{{AddressInfo::get(Auth::user()->guid)->city}}" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="address">街道地址 *</label>
                                        <input class="form-control" type="text" name="address" id="address" value="{{AddressInfo::get(Auth::user()->guid)->address}}" required>
                                    </div>
                                </div>
                                <div class="modal-footer" style="border-top: none">
                                    <button type="submit" class="btn btn-primary">儲存地址</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            @else
                <a href="#" data-toggle="modal" data-target="#myModal">新增</a>

                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <form class="" action="/address/add/{{Auth::user()->guid}}" method="post">
                            {{ csrf_field() }}
                            <div class="modal-content">
                                <div class="modal-header" style="border-bottom: none">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 class="modal-title" id="myModalLabel">新增地址 *</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="fullName">收件人 *</label>
                                        <input class="form-control" type="text" name="fullName" id="fullName" value="" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="cellPhone">行動電話 *</label>
                                        <input class="form-control" type="text" name="cellPhone" id="cellPhone" value="" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="postcode">郵遞區號 *</label>
                                        <input class="form-control" type="text" name="postcode" id="postcode" value="" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="city">居住城市 *</label>
                                        <input class="form-control" type="text" name="city" id="city" value="" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="address">街道地址 *</label>
                                        <input class="form-control" type="text" name="address" id="address" value="" required>
                                    </div>
                                </div>
                                <div class="modal-footer" style="border-top: none">
                                    <button type="submit" class="btn btn-primary">儲存地址</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            @endif

            {{-- <table class="address-table">
                <tr>
                    <td>{{AddressInfo::get(Auth::user()->guid)->fullName}}</td>
                </tr>
                <tr>
                    <td>
                        {{AddressInfo::get(Auth::user()->guid)->cellPhone}}
                    </td>
                </tr>
                <tr>
                    <td>
                        {{AddressInfo::get(Auth::user()->guid)->postcode}}&nbsp;{{AddressInfo::get(Auth::user()->guid)->city}}&nbsp;{{AddressInfo::get(Auth::user()->guid)->address}}
                    </td>
                </tr>
            </table> --}}

            {{-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <form class="" action="/address/edit/{{Auth::user()->guid}}" method="post">
                        {{ csrf_field() }}
                        <div class="modal-content">
                            <div class="modal-header" style="border-bottom: none">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">編輯地址 *</h4>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="fullName">收件人 *</label>
                                    <input class="form-control" type="text" name="fullName" id="fullName" value="{{AddressInfo::get(Auth::user()->guid)->fullName}}" required>
                                </div>
                                <div class="form-group">
                                    <label for="cellPhone">行動電話 *</label>
                                    <input class="form-control" type="text" name="cellPhone" id="cellPhone" value="{{AddressInfo::get(Auth::user()->guid)->cellPhone}}" required>
                                </div>
                                <div class="form-group">
                                    <label for="postcode">郵遞區號 *</label>
                                    <input class="form-control" type="text" name="postcode" id="postcode" value="{{AddressInfo::get(Auth::user()->guid)->postcode}}" required>
                                </div>
                                <div class="form-group">
                                    <label for="city">居住城市 *</label>
                                    <input class="form-control" type="text" name="city" id="city" value="{{AddressInfo::get(Auth::user()->guid)->city}}" required>
                                </div>
                                <div class="form-group">
                                    <label for="address">街道地址 *</label>
                                    <input class="form-control" type="text" name="address" id="address" value="{{AddressInfo::get(Auth::user()->guid)->address}}" required>
                                </div>
                            </div>
                            <div class="modal-footer" style="border-top: none">
                                <button type="submit" class="btn btn-primary">儲存地址</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> --}}

        </div>
    </div>
@endsection
