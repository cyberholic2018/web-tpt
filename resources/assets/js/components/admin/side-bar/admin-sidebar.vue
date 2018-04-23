<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel-group ch-left-panel-group" id="panel-52625">
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-78670"><i class="fa fa-tachometer" aria-hidden="true"></i>&nbsp;主控板</a>
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
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-915732"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;最新消息管理系統</a>
                    </div>
                    <div id="panel-element-915732" class="panel-collapse collapse" v-bind:class="{ in: isPost }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/add">新增最新消息</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/list">最新消息列表</a></li>
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/post/category">文章類別管理</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-517968"><i class="fa fa-picture-o" aria-hidden="true"></i>&nbsp;媒體與檔案</a>
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
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-749932"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;產品管理系統</a>
                    </div>
                    <div id="panel-element-749932" class="panel-collapse collapse" v-bind:class="{ in: isProduct }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/product/add">新增產品</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/product/list">產品列表</a></li>
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/product/category">商品類別管理</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-334892"><i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;網站頁面列表</a>
                    </div>
                    <div id="panel-element-334892" class="panel-collapse collapse" v-bind:class="{ in: isPage }">
                        <div class="panel-body">
                            <ul>
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/page/add">新增頁面</a></li> -->
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/page/list">頁面列表</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/page/managment">網站資訊管理</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-559300"><i class="fa fa-file" aria-hidden="true"></i>&nbsp;特殊頁面管理</a>
                    </div>
                    <div id="panel-element-559300" class="panel-collapse collapse" v-bind:class="{ in: isSupport }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/support/managment">新增工業局軟體標</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/support/list">工業局軟體標管理</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/support/content">工業局軟體標說明管理</a></li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-66654789"><i class="fa fa-video-camera" aria-hidden="true"></i>&nbsp;影音管理系統</a>
                    </div>
                    <div id="panel-element-66654789" class="panel-collapse collapse" v-bind:class="{ in: isVideo }">
                        <div class="panel-body">
                            <ul>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/video/add">新增影音</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/video/managment">影片管理</a></li>
                            </ul>
                        </div>
                    </div>
                </div> -->
                <div class="panel panel-default ch-panel">
                    <div class="panel-heading">
                         <a class="panel-title" data-toggle="collapse" data-parent="#panel-52625" href="#panel-element-66654789"><i class="fa fa-handshake-o" aria-hidden="true"></i>&nbsp;合作夥伴管理系統</a>
                    </div>
                    <div id="panel-element-66654789" class="panel-collapse collapse" v-bind:class="{ in: isPartner }">
                        <div class="panel-body">
                            <ul>
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/partner/add">新增合作夥伴位置</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/partner/managment">合作夥伴位置管理</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/partner/category">合作夥伴分類管理</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/partner/location">合作夥伴區域管理</a></li> -->
                                <!-- <li><a class="btn btn-sm btn-simple btn-block" href="#">頁面排序設定</a></li> -->
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/partner/success">新增合作夥伴</a></li>
                                <li><a class="btn btn-sm btn-simple btn-block" href="/cyberholic-system/partner/successList">合作夥伴管理</a></li>

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
                isBusiness: false,
                isSupport: false,
                isPartner: false
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
            if (currentPath.match('/support')) {
                this.isSupport = true;
            }
            if (currentPath.match('/partner')) {
                this.isPartner = true;
            }
            if (currentPath.match('/page')) {
                this.isPage = true;
            }
            // console.log(path);
            // /business
        },
        methods: {
        }
    }
</script>
