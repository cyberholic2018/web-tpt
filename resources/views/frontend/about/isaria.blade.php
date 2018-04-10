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
        <div class="col-md-12 about-banner" >
            <p style="text-align:center" data-aos="fade-up" data-aos-duration="1000"><img alt="" src="/img/mg-logo/ISARIA-500x500.jpg" style="width:45%" /></p>
            <div data-aos="fade-up" data-aos-duration="2000">
                <p style="text-align:center"><span style="font-size:18px">還在為敏弱肌膚而困擾？</span></p>

                <p style="text-align:center"><span style="font-size:18px">讓「蟬花」全面呵護您的肌膚，獨家「ISARIA」精華液，</span></p>

                <p style="text-align:center"><span style="font-size:18px">添加珍貴蟬花孢子粉，特有中／西合併配方，</span></p>

                <p style="text-align:center"><span style="font-size:18px">搭配精萃多種草本精華，屬於敏弱肌的絕佳呵護體驗。</span></p>

                <p style="text-align:center"><span style="font-size:18px">小清新您的敏感肌。</span></p>
            </div>


            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <div class="btgrid">
            <div class="row row-1" data-aos="fade-up" data-aos-duration="2000">
            <div class="col col-md-3">
            <div class="content">
            <p><img alt="" src="/img/isaria/isaria.JPG" style="width:100%" /></p>
            </div>
            </div>

            <div class="col col-md-9">
            <div class="content">
            <h2 style="font-style:italic">&nbsp;</h2>

            <h2 style="font-style:italic"><span style="font-size:20px">蟬花</span></h2>

            <p><span style="font-size:16px">金蟬花，又稱蟬花，是最古老的蟲生真菌，為記載最早，使用最久的蟲草類真菌。</span></p>

            <p>&nbsp;</p>
            </div>
            </div>
            </div>
            </div>

            <p>&nbsp;</p>

            <p>&nbsp;</p>

            <hr />
            <p style="text-align:center">&nbsp;</p>

            <div data-aos="zoom-in">
                <p style="text-align:center"><img alt="" src="/img/isaria/01.jpg" style="max-width:100%" /></p>
                <p></p>

                <p style="text-align:center"><span style="font-size:18px">根據現代營養學研究顯示發現，</span></p>

                <p style="text-align:center"><span style="font-size:18px">蟬花富含蛋白質、胺基酸、脂肪酸多種維生素及微量元素，</span></p>

                <p style="text-align:center"><span style="font-size:18px">甚至在總體營養成分上，人工培育的蟬花勝過野生冬蟲夏草。</span></p>
            </div>


            <p style="text-align:center">&nbsp;</p>

            <hr />
            <p style="text-align:center">&nbsp;</p>

            <p style="text-align:center"><span style="font-size:18px">蟬花除具有其他蟲草所缺乏的解熱鎮痛、 鎮定安眠效果外，更可調節敏弱肌體質。</span></p>

            <p style="text-align:center"><span style="font-size:18px">且蟬花性屬偏涼，對易有濕熱體質的民眾來說可以平衡體內循環，達到內外調和。</span></p>

            <p style="text-align:center">&nbsp;</p>

            <div class="btgrid">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="row row-1 product-img" data-aos="zoom-in-up">
                            <div class="col col-md-3">
                            <div class="content">
                            <p><img alt="" src="/img/isaria/02.jpg" style="width:100%" /></p>
                            <h3 style="font-size: 200%">保濕修護</h3>
                            <p style="font-size: 130%">深層肌膚滋養，提升肌膚保水度，維持柔嫩光滑</p>
                            <p style="font-size: 130%">ISARIA蟬花萃取液含有17種胺基酸（9種必需胺基酸）、蟲草酸、維生素B群、蟲草多醣與透明質酸，小分子可滲透入皮膚內提供養分，大分子可覆蓋在皮膚外，鎖住水分防止流失。</p>


                            </div>
                            </div>

                            <div class="col col-md-3">
                            <div class="content">
                            <p><img alt="" src="/img/isaria/03.jpg" style="width:100%" /></p>

                            <h3 style="font-size: 200%">深度活化</h3>
                            <p style="font-size: 130%">活化肌膚能量，抵抗紫外光，提升健康光采</p>
                            <p style="font-size: 130%">ISARIA蟬花萃取液含有維生素E、硒（生命元素）、SOD與麥角固醇，皆為天然抗氧化劑，可吸收紫外光形成維生素D2，有效調節敏弱體質，促進活化與賦活肌膚能量。</p>


                            </div>
                            </div>

                            <div class="col col-md-3">
                            <div class="content">
                            <p><img alt="" src="/img/isaria/04.jpg" style="width:100%" /></p>
                            <h3 style="font-size: 200%">舒緩不適</h3>
                            <p style="font-size: 130%">有效舒緩肌膚不適，恢復肌膚生機</p>
                            <p style="font-size: 130%">ISARIA蟬花萃取液含有腺苷、蟲草素、ISP-1與HEA，具有解熱、鎮痛的功效，對緩解肌膚狀況、調解膚質有極佳的效果。</p>


                            </div>
                            </div>

                            <div class="col col-md-3">
                            <div class="content">
                            <p><img alt="" src="/img/isaria/05.jpg" style="width:100%" /></p>
                            <h3 style="font-size: 200%">清新自然</h3>
                            <p style="font-size: 150%">生物活性抗菌，高效保濕，維持清新容顏</p>
                            <p style="font-size: 150%">ISARIA蟬花萃取液含有珍貴蟬花孢子粉（幾丁質），為生物活性材料，能有效隔離其他真菌，小清新您的敏感肌。</p>



                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <p>&nbsp;</p>



        </div>
    </div>
</div>
@endsection
