@extends('main')

@section('content')

    <div class="container mg-dashboard">
        <div class="row">
            <div class="col-md-3">
                <div class="center-hr">
                    <span>
                        我的帳戶
                    </span>
                </div>
                <ul class="dash-sidebar">
                    <li><a href="{{ url('/user') }}">我的訂單</a></li>
                    <li><a href="{{ url('/user/address') }}">聯絡資訊</a></li>
                    <li><a href="{{ url('/user/information') }}">會員資訊</a></li>
                    <li><a onclick="event.preventDefault(); document.getElementById('logout-form').submit();" href="#">帳號登出</a></li>
                </ul>
            </div>
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="pull-left">{{ $title }}</h3>
                        <ul class="dash-methods pull-right">
                            <li><a href="#" data-toggle="modal" data-target="#myModal-01">客服資訊</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#myModal-02">運送資訊</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#myModal-03">退換貨政策</a></li>
                        </ul>
                    </div>
                </div>
                <hr>

                {{-- 客服資訊 --}}
                <div class="modal fade" id="myModal-01" tabindex="-1" role="dialog" aria-labelledby="myModal-01Label">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            {{-- <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModal-01Label">客服資訊</h4>
                            </div> --}}
                            <div class="modal-body">
                                <h3 style="text-align:center">客服資訊</h3>

                                <hr />
                                <h4>Email查詢</h4>

                                <p>將您的問題以電子郵件寄送至&nbsp;hi＠meansgood.com.tw，我們將有客服為您解答。</p>
                                <br>
                                <h4>電話查詢</h4>

                                <p>在工作日的9:00-16:30，歡迎撥打03-567-9463與我們聯絡查詢。</p>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">關閉視窗</button>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- 運送資訊 --}}
                <div class="modal fade" id="myModal-02" tabindex="-1" role="dialog" aria-labelledby="myModal-02Label">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            {{-- <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModal-02Label">運送方式</h4>
                            </div> --}}
                            <div class="modal-body">
                                <h3 style="text-align:center">運送方式</h3>

                                <hr />
                                <h4>宅配到府</h4>
                                <p>您訂購的商品將由物流公司協助寄出，通常在一週內宅配到府。實際配送過程與時間由物流人員安排，若商品延遲送達請盡速聯繫明谷客服專線：03-567-9463，我們將全力協助您聯繫宅配人員追蹤商品實際運送狀況，若遇有商品未在預期時間內送達的情形還請多多包涵。</p>
                                <br>
                                <h4>超商取貨付款</h4>

                                <p>因為超商距離不同，而有送達時間差異；平均而言，「商品將在訂單成立後的三到五個工作日內送達」，屆時將以簡訊通知您前往取貨。 另因超商取貨有代收金額的限制，單筆訂單金額限4000元以下。若單筆訂單超過4000元，建議您使用其他付款方式，或者拆成兩筆訂單分別結帳。</p>

                                <p>&nbsp;</p>

                                <h3 style="text-align:center">運費計算方式</h3>

                                <hr />
                                <ul>
                                    <li>超商取貨費用60元，購物滿1000元（含）即享有免運費。</li>
                                    <li>常溫宅配費用110元，購物滿1000元（含）即享有免運費。</li>
                                    <li>低溫宅配費用150元，購物滿1500元（含）即享有免運費。</li>
                                </ul>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">關閉視窗</button>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- 退換貨服務 --}}
                <div class="modal fade" id="myModal-03" tabindex="-1" role="dialog" aria-labelledby="myModal-03Label">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            {{-- <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModal-03Label">運送方式</h4>
                            </div> --}}
                            <div class="modal-body">
                                <h3 style="text-align:center">退換貨承諾</h3>

                                <hr />
                                <p>明谷用心研發好產品，在出貨前也都會進行嚴格的把關，希望交到您手上的商品皆維持最高品質。秉持著著對產品、顧客負責任的精神，若您對於所收到的產品有問題，明谷當然提供退換貨服務！</p>

                                <p>若您收到產品出現外包裝瑕疵、破損等問題；或您對於產品使用上有任何不滿意、不習慣之處，麻煩您來電 03-567-9463、或來信<a href="mailto:hi@meansgood.com.tw">hi@meansgood.com.tw</a> 與明谷人員聯繫，我們將了解您的使用狀態，並盡速為您辦理退換貨。</p>

                                <p>謝謝您對明谷生機的支持，希望您在明谷網站有愉快的購物體驗，若有任何問題，歡迎與我們聯繫！如果您不習慣網路購物，也非常歡迎直接來電訂購。</p>



                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">關閉視窗</button>
                            </div>
                        </div>
                    </div>
                </div>
                @yield('dashboard-content')
            </div>
        </div>
    </div>





@endsection
