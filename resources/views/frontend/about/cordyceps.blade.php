@extends('main')

@section('custom-script')
    <script type="text/javascript">
        $(function() {

            $('.product-img').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                // fade: true,
           });

        });

    </script>
@endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 about-banner">
                <p></p>
                <p></p>
                <br>
                <p style="text-align:center"><img data-aos="fade-up" data-aos-duration="1000" alt="" src="/img/mg-logo/meansgood-tea-500x500.jpg" style="max-width: 100%" /></p>
                <p></p>
                <div data-aos="fade-up" data-aos-duration="2000" style="font-size: 130%; text-align: center">
                    <p>創新食療新體驗，讓「蟲草」更貼近您的生活，跳脫傳統保健食品框架，運用鮮泡茶的概念呈現真菌之味，搭配嚴選漢方食材，草本味道，給您最自然的健康，醫食同源。</p>
                </div>
                <p></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div class="btgrid">
                    <div class="row row-1" data-aos="fade-up" data-aos-duration="2000">
                        <div class="col col-md-3">
                            <div class="content">
                                <p><img alt="" src="/img/cordyceps/cordyceps.jpg" style="width:100%" /></p>
                            </div>
                        </div>

                        <div class="col col-md-9">
                            <div class="content">
                                <h2 style="font-style:italic">&nbsp;</h2>

                                <h2 style="font-style:italic"><span style="font-size:20px">黃金蟲草</span></h2>

                                <p><span style="font-size:16px">蛹蟲草，亦稱為北冬蟲夏草，簡稱北蟲草，更有人稱為黃金蟲草，是一種珍貴的食藥用真菌。</span></p>

                                {{--
                                <p><span style="font-size:16px">新華本草綱要記載 :『北蟲草性平、味甘、益肝腎、補脊髓、止血化痰。』</span></p> --}}

                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <hr>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style="text-align: center" data-aos="fade-up"><img alt="" src="/img/cordyceps/cordyceps-01.jpg" style="width: 100%; max-width:600px;" /></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div data-aos="fade-up" style="font-size: 130%; text-align: center">
                    <p>冬蟲夏草與黃金蟲草皆為蟲草屬的蟲生真菌，蟲草有效成分基本上相同，但是 含量有所差異，黃金蟲草為蟲草屬中蟲草素含量最高的品種，</p>

                    <p>其中蟲草黃素是目前唯一水溶性的類胡蘿蔔素，能讓人體迅速吸收幫助您對抗3C，抵擋藍光。</p>


                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <h3 style="text-align: center" data-aos="fade-up">黃金蟲草、白凰蟲草與冬蟲夏草成分比較</h3>

                <div class="table-responsive" data-aos="fade-up">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <p>他廠蛹蟲草</p>
                                </td>
                                <td>
                                    <p>明谷蛹蟲草</p>
                                </td>
                                <td>
                                    <p>明谷白凰蟲草</p>
                                </td>
                                <td>
                                    <p>野生冬蟲夏草</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>蟲草素(mg/g)</p>
                                </td>
                                <td>
                                    <p>3.59</p>
                                </td>
                                <td>
                                    <p>6.06</p>
                                </td>
                                <td>
                                    <p>28.75</p>
                                </td>
                                <td>
                                    <p>0.244</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>蟲草多醣(%)</p>
                                </td>
                                <td>
                                    <p>13.80 </p>
                                </td>
                                <td>
                                    <p>25.60 </p>
                                </td>
                                <td>
                                    <p>26.20 </p>
                                </td>
                                <td>
                                    <p>2.46 </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>

                <p>&nbsp;</p>
                <div class="btgrid" data-aos="fade-up">
                    <div class="row row-1" data-aos="fade-up">
                        <div class="col col-md-3">
                            <div class="content">
                                <p><img alt="" src="/img/cordyceps/cordyceps-03.jpg" style="width:100%" /></p>
                            </div>
                        </div>

                        <div class="col col-md-9">
                            <div class="content">
                                <h2 style="font-style:italic">&nbsp;</h2>

                                <h2 style="font-style:italic"><span style="font-size:20px">白凰蟲草</span></h2>

                                <p><span style="font-size:16px">白凰蟲草為明谷獨家菌種，由黃金蟲草逆境誘導原機突變而來，蟲草素高達5倍之多，具有極大藥用價值。</span></p>

                                {{--
                                <p><span style="font-size:16px">新華本草綱要記載 :『北蟲草性平、味甘、益肝腎、補脊髓、止血化痰。』</span></p> --}}

                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div data-aos="fade-up" style="font-size: 130%; text-align: center">
                    <p>明谷固態組織栽培，生長時間較長(約兩個半月)，人力成本較高，</p>
                    <p>但蟲草品質佳、活性成分高，轉色均勻且香味濃，子實體粗壯，口感也較好。</p>
                </div>

                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h3 style="text-align: center" data-aos="fade-up">人工栽培的黃金蟲草和野生冬蟲夏草的比較</h3>
                <div class="table-responsive" data-aos="fade-up">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>
                                    <p>成份</p>
                                </td>
                                <td>
                                    <p>人工：子實體</p>
                                </td>
                                <td>
                                    <p>人工：菌絲體</p>
                                </td>
                                <td>
                                    <p>比較野生</p>
                                </td>
                                <td>
                                    <p>說明</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>蟲草素</p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p>無檢出</p>
                                </td>
                                <td>
                                    <p>高出60倍</p>
                                </td>
                                <td>
                                    <p>蟲草最珍貴成分</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>蟲草酸</p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p>高出2倍</p>
                                </td>
                                <td>
                                    <p>D甘露醇</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>蟲草多醣體</p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p>高出1.5倍</p>
                                </td>
                                <td>
                                    <p>半乳甘露聚醣</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>SOD鋂</p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p>高出5.2倍</p>
                                </td>
                                <td>
                                    <p>過氧化物岐酶</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>類胡蘿蔔素</p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p>無檢出</p>
                                </td>
                                <td>
                                    <p>無檢出</p>
                                </td>
                                <td>
                                    <p>抗氧化物</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>硒Se</p>
                                </td>
                                <td>
                                    <p><i class="fa fa-check" aria-hidden="true"></i></p>
                                </td>
                                <td>
                                    <p>無檢出</p>
                                </td>
                                <td>
                                    <p>高出12.8倍</p>
                                </td>
                                <td>
                                    <p>生命元素</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>微量元素</p>
                                </td>
                                <td colspan="4">
                                    <p>30餘種：錳、銅、磷、鈣、鐵、鋅、鈉、鉻、鍶、釩、鋯、鉬&hellip;等</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>胺基酸</p>
                                </td>
                                <td colspan="4">
                                    <p>18種胺基酸，包含人體需要攝取的8種胺基酸</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>維生素</p>
                                </td>
                                <td colspan="4">
                                    <p>9種以上維生素，A、B1、B2、B6、B12、C、E、PP&hellip;等</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>其他</p>
                                </td>
                                <td colspan="4">
                                    <p>麥角固醇、亞油酸、軟脂酸、腺苷</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <hr />
                <p style="text-align:center">&nbsp;</p>

                <div data-aos="zoom-in" style="text-align: center; font-size: ">

                    <br>
                    <img src="/img/cordyceps/cordyceps-02.jpg" style="max-width: 100%" alt="">
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div data-aos="fade-up" style="font-size: 130%; text-align: center">
                    <p>黃金蟲草具有廣泛的藥理作用，本身就是一個複雜的天然藥方，體現了中藥補益的本質，滿足日常食補之訴求。</p>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </div>
        </div>
    </div>
@endsection
