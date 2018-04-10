<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel-group ch-left-panel-group" id="panel-52625">
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-78670"><i class="fa fa-tachometer" aria-hidden="true"></i>&nbsp;主控板　　　</a>
                    </div>
                    <div id="panel-element-78670" class="panel-collapse collapse" v-bind:class="{ in: isAdmin }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/admin">後臺首頁</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/admin/list">後台使用者列表</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/admin/reset">重設密碼</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-268225"><i class="fa fa-users" aria-hidden="true"></i>&nbsp;會員管理系統</a>
                    </div>
                    <div id="panel-element-268225" class="panel-collapse collapse" v-bind:class="{ in: isAccount }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/account/list">會員資料列表</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="#">會員須知設定</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-915732"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;文章管理系統</a>
                    </div>
                    <div id="panel-element-915732" class="panel-collapse collapse" v-bind:class="{ in: isPost }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/add">新增文章</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/list">文章列表</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/postOrder">文章排序設定</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/category">文章類別管理</a></li>
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/categoryOrder">文章類別排序</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-517968"><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;媒體與檔案　</a>
                    </div>
                    <div id="panel-element-517968" class="panel-collapse collapse" v-bind:class="{ in: isMedia }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/media/manager?type=Images">媒體庫</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/media/manager">檔案庫</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-749932"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;電商管理系統</a>
                    </div>
                    <div id="panel-element-749932" class="panel-collapse collapse" v-bind:class="{ in: isProduct }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/product/add">新增銷售商品</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/product/list">商品列表</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="#">商品排序設定</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/product/category">商品類別管理</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="#">商品類別排序</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-333198"><i class="fa fa-briefcase" aria-hidden="true"></i>&nbsp;商務邏輯管理</a>
                    </div>
                    <div id="panel-element-333198" class="panel-collapse collapse" v-bind:class="{ in: isBusiness }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/business/bonus">紅利系統設定</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/business/addCoupon">新增優惠券</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/business/coupon">優惠券管理</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-881236"><i class="fa fa-shopping-basket" aria-hidden="true"></i>&nbsp;訂單管理系統</a>
                    </div>
                    <div id="panel-element-881236" class="panel-collapse collapse" v-bind:class="{ in: isOrder }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/order/list">訂單資料查詢</a></li>
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="#">付款方式設定</a></li> -->
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/order/shipping-method">運費規格設定</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="#">購物須知設定</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="#">訂單信件設定</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-334892"><i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;頁面管理系統</a>
                    </div>
                    <div id="panel-element-334892" class="panel-collapse collapse">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/page/managment">頁面管理</a></li>
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="#">頁面排序設定</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                isAdmin: false,
                isAccount: false,
                isPost: false,
                isProduct: false,
                isOrder: false,
                isMedia: false,
                isPage: false,
                isOrder: false,
                isBusiness: false
            }
        },
        created: function () {
            var currentPath = window.location.pathname;

            if (currentPath.match('/admin')) {
                this.isAdmin = true;
            }
            if (currentPath.match('/account')) {
                this.isAccount = true;
            }
            if (currentPath.match('/post')) {
                this.isPost = true;
            }
            if (currentPath.match('/product')) {
                this.isProduct = true;
            }
            if (currentPath.match('/media')) {
                this.isMedia = true;
            }
            if (currentPath.match('/business')) {
                this.isBusiness = true;
            }
            if (currentPath.match('/order')) {
                this.isOrder = true;
            }
            // console.log(path);
            // /business
        },
        methods: {
        }
    }
</script>
