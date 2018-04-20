<template>
    <div class="row" v-if="isLoaded">
        <div class="col-md-9">
            <input type="text" class="form-control ch-product-title" name="title" value="" placeholder="商品名稱" v-model="productContent.title">
            <div class="tabbable" id="tabs-664864">
                <ul class="nav nav-tabs">
                    <li v-for="(item, index) in tabContent" v-bind:class="{ active: item.isActive }">
                        <a
                            v-bind:class="item.tabId"
                            :href="tabHref(item.tabId)"
                            data-toggle="tab">{{item.title}}
                            <i class="fa fa-pencil edit-icon" aria-hidden="true" @click="editTab(item)"></i>
                            <i class="fa fa-trash edit-icon" aria-hidden="true" @click="delTab(index)"></i></a>
                    </li>
                    <li>
                        <a @click="addTab()"><i class="fa fa-plus" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div
                        v-for="item in tabContent"
                        class="tab-pane"
                        v-bind:class="{ active: item.isActive }"
                        v-bind:id="item.tabId">
                        <ckeditor
                            class="ch-product-description"
                            v-bind:id="item.editorId"
                            :config="ckConfig"
                            v-model="item.content">
                        </ckeditor>
                    </div>
                </div>
            </div>
            <hr>
            <h4>商品摘要</h4>
            <ckeditor
                class="ch-product-description"
                id="short-description"
                :config="ckConfig"
                v-model="productContent.shortDescription">
            </ckeditor>
        </div>

        <div class="col-md-3">
            <div class="panel-group" id="panel-77874">
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						發表
    					</h3>
    				</div>
    				<div class="panel-body">
    				</div>
    				<div class="panel-footer">
                        <button v-if="isDirty" type="button" class="btn btn-success btn-sm btn-block" name="button" @click="saveProduct()">
                            <span v-if="isEdit">更新商品</span>
                            <span v-else>發布商品</span>
                        </button>
                        <button v-else type="button" class="btn btn-success btn-sm btn-block" name="button" disabled>
                            <span v-if="isEdit">更新商品</span>
                            <span v-else>發布商品</span>
                        </button>
    				</div>
    			</div>
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						類別選擇
    					</h3>
    				</div>
    				<div class="panel-body">
                        <select class="form-control" v-model="productContent.category">
                            <option value="null">--不指定--</option>
                            <option v-for="item in categories" v-bind:value="item.guid">{{item.name}}</option>
                        </select>
    				</div>
    			</div>
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						語系選擇
    					</h3>
    				</div>
    				<div class="panel-body">
                        <select class="form-control" v-model="productContent.locale">
                            <option value="zh-TW">繁體中文</option>
                            <option value="en">英文</option>
                        </select>
    				</div>
    			</div>
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						商品圖片
    					</h3>
    				</div>
    				<div class="panel-body">
                        <a v-if="productContent.featureImage === null" @click="selectFeatureImg()">設定商品圖片</a>
                        <div v-else class="">
                            <img id="featurePreview" style="width: 100%" v-bind:src="thumb(productContent.featureImage)" @click="selectFeatureImg()">
                            <p>點選圖片以編輯或更新</p>
                            <a @click="deleteFeatureImg()">刪除商品圖片</a>
                        </div>
    				</div>
    			</div>
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						商品圖庫
    					</h3>
    				</div>
    				<div class="panel-body">
                        <div class="row">
                            <div
                                class="col-md-6 pruduct-image"
                                v-for="(item, index) in productContent.album">
                                <img v-bind:src="thumb(item.imageUrl)" width="100%">
                                <button class="btn btn-danger remove-pruduct-image" @click="productContent.album.splice(index, 1)">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="col-md-12">
                                <a @click="addImage()">新增商品圖庫圖片</a>
                            </div>
                        </div>
    				</div>
    			</div>
            </div>

        </div>

    </div>
</template>

<script>
    import Ckeditor from 'vue-ckeditor2';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import ToggleButton from 'vue-js-toggle-button';

    Vue.use(ToggleButton);

    export default {
        components: {
            Ckeditor,
            datePicker
        },
        data() {
            return {
                isLoaded: false,
                isEdit: false,
                guid: $('#row-guid').val(),
                productContent: {
                    title: null,
                    serialNumber: null,
                    description: null,
                    shortDescription: null,
                    price: null,
                    isPublish: false,
                    quantity: null,
                    discountedPrice: null,
                    schedulePost: null,
                    scheduleDelete: null,
                    locale: null,
                    status: 'instock',
                    socialImage: null,
                    seoTitle: null,
                    seoDescription: null,
                    seoKeyword: null,
                    productInformation: {
                        weight: null,
                        size: {
                            productLength: null,
                            productWidth: null,
                            productHeight: null
                        }
                    },
                    reserveStatus: false,
                    featureImage: null,
                    category: 'null',
                    album: []
                },
                ckConfig: {
                    height: 300,
                    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=' + $('meta[name="csrf-token"]').attr('content'),
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token=' + $('meta[name="csrf-token"]').attr('content')
                },
                categories:[],
                config: {
                    minDate: moment()
                },
                isDirty: false,
                tabContent: [],
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        created: function () {
            if (this.guid) {
                this.getProduct();
                this.isEdit = true;
            } else {
                this.isLoaded = true;

            }
            this.getCategories();

            $('.loading-bar').fadeOut('100');
        },
        watch: {
            productContent: {
                handler: function (productContent, oldVal) {
                    var self = this;

                    this.isDirty = true;
                },
                deep: true
            },
            tabContent : {
                handler: function (tabContent, oldVal) {
                    var self = this;

                    this.isDirty = true;
                },
                deep: true
            }
        },
        computed: {
            schedulePostDate: function () {
                if (this.productContent.schedulePost) {
                    return moment(this.productContent.schedulePost).format();
                } else {
                    return null;
                }
            },
            scheduleDeleteDate: function () {
                if (this.productContent.scheduleDelete) {
                    return moment(this.productContent.scheduleDelete).format();
                } else {
                    return null;
                }
            },
            scheduleDeleteConfig: function functionName() {
                if (this.schedulePostDate) {
                    return {
                        minDate: moment(this.schedulePostDate)
                    }
                } else {
                    return {
                        minDate: moment()
                    }
                }
            },
            checkTitle: function () {
                var checkTitle;

                if (this.productContent.title === null) {
                    this.showMessage('warning', '商品名稱不能為空。');
                    return checkTitle = false;
                } else {
                    return checkTitle = true;
                }
            },
            checkPrice: function () {
                var checkPrice;

                if (parseInt(this.productContent.discountedPrice) > parseInt(this.productContent.price)) {
                    this.showMessage('warning', '促銷價不能高於實際售價。');
                    return checkPrice = false;
                } else {
                    return checkPrice = true;
                }
            },
            checkTime: function () {
                if (this.productContent.schedulePost && this.productContent.scheduleDelete) {
                    var schedulePost = this.productContent.schedulePost._d.getTime();
                    var scheduleDelete = this.productContent.scheduleDelete._d.getTime();

                    if (schedulePost > scheduleDelete) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }

            },
            isAllowToSave: function () {
                return this.checkTitle && this.checkPrice && this.checkTime;
            }
        },
        methods: {
            tabHref: function (id) {
                return '#' + id;
            },
            thumb: function (url) {
                var urlArray = url.split('/');
                var newUrl = urlArray[0];

                for (var i = 1; i < (urlArray.length - 1); i++) {
                    newUrl = newUrl + '/' + urlArray[i];
                }

                newUrl = newUrl + '/thumbs/' + urlArray[urlArray.length - 1];

                return newUrl;
            },
            selectFeatureImg: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.productContent.featureImage = file_path;
                };
            },
            deleteFeatureImg: function () {
                this.productContent.featureImage = null;
            },
            addTab: function () {
                var self = this;
                var randomNum = 'tab' + Math.floor((Math.random() * 1000000) + 1);
                var titleInput = prompt('請輸入標籤名稱');

                if ((titleInput === '') || (titleInput === null)) {
                    return;
                } else {

                    self.tabContent.forEach(function (item) {
                        item.isActive = false;
                    });

                    self.tabContent.push({
                        title: titleInput,
                        tabId: randomNum,
                        editorId: randomNum + 'editor',
                        isActive: true,
                        content: null
                    });

                    if (self.tabContent.length > 1) {
                        $('.' + self.tabContent[self.tabContent.length - 2].tabId).click();
                    }
                }
            },
            editTab: function (item) {
                var newTitle = prompt('請輸入新的標籤名稱');

                if ((newTitle === '') || (newTitle === null)) {
                    this.showMessage('warning', '標籤名稱不得為空白');
                } else {
                    item.title = newTitle;
                }
            },
            delTab: function (index) {
                var check = confirm('確定要刪除此標籤? (一旦儲存後將無法回復!)');

                if (check) {
                    this.tabContent.splice(index, 1);
                }
            },
            addImage: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.productContent.album.push({
                        imageUrl: file_path
                    });
                };
            },
            addSeoImage: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.productContent.socialImage = file_path;
                };
            },
            saveProduct: function () {
                var self = this;
                var token = this.token;
                var schedulePost;
                var scheduleDelete;

                if (this.isAllowToSave) {
                    $.ajax({
                        url: self.isEdit ? '/admin/product/edit/' + self.guid : '/admin/product/add',
                        type: 'POST',
                        cache: false,
                        dataType: 'json',
                        data: {
                            title: self.productContent.title,
                            description: JSON.stringify(self.tabContent),
                            shortDescription: self.productContent.shortDescription,
                            serialNumber: self.productContent.serialNumber,
                            quantity: self.productContent.quantity,
                            category: self.productContent.category,
                            price: self.productContent.price,
                            isPublish: self.productContent.isPublish,
                            locale: self.productContent.locale,
                            reserveStatus: self.productContent.reserveStatus,
                            discountedPrice: self.productContent.discountedPrice,
                            socialImage: self.productContent.socialImage,
                            seoTitle: self.productContent.seoTitle,
                            seoDescription: self.productContent.seoDescription,
                            seoKeyword: self.productContent.seoKeyword,
                            featureImage: self.productContent.featureImage,
                            productInformation: JSON.stringify(self.productContent.productInformation),
                            album: JSON.stringify(self.productContent.album),
                            status: self.productContent.status,
                            schedulePost: self.schedulePostDate,
                            scheduleDelete: self.scheduleDeleteDate
                        },
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    })
                    .done(function(result) {
                        window.location.href="/cyberholic-system/product/list";
                        console.log(result);
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });
                } else {
                    console.log('not allow');
                }


            },
            getProduct: function () {
                var self = this;

                $.ajax({
                    url: '/admin/product/get/' + this.guid,
                    type: 'GET',
                    cache: false
                })
                .done(function(result) {
                    self.productContent.title = result.title;
                    self.productContent.serialNumber = result.serialNumber;
                    self.productContent.price = result.price;
                    self.productContent.locale = result.locale;
                    self.productContent.discountedPrice = result.discountedPrice;
                    self.productContent.category = result.category;
                    self.productContent.featureImage = result.featureImage;
                    self.productContent.album = JSON.parse(result.album);
                    self.tabContent = (result.description[0] === '[' ) ?  JSON.parse(result.description) : [];
                    self.productContent.shortDescription = result.shortDescription;
                    self.productContent.status = result.status;
                    self.productContent.reserveStatus = Boolean(result.reserveStatus);
                    self.productContent.isPublish = Boolean(result.isPublish);
                    self.productContent.quantity = result.quantity;
                    self.productContent.seoKeyword = result.seoKeyword;
                    self.productContent.seoTitle = result.seoTitle;
                    self.productContent.productInformation = JSON.parse(result.productInformation);
                    self.productContent.seoDescription = result.seoDescription;
                    self.productContent.socialImage = result.socialImage;
                    self.productContent.schedulePost = (result.schedulePost != null) ? moment(result.schedulePost) : null;
                    self.productContent.scheduleDelete = (result.scheduleDelete != null) ? moment(result.scheduleDelete) : null;

                    self.config = {
                        minDate: (result.schedulePost != null) ? moment(result.schedulePost) : null
                    }
                    self.isLoaded = true;
                    setTimeout(function () {
                        self.isDirty = false;
                    }, 50);

                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
            },
            getCategories: function () {
                var self = this;
                var token = this.token;

                $.ajax({
                    url: '/admin/category/get',
                    type: 'POST',
                    cache: false,
                    data: {
                        type: 'product'
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    self.categories = [];
                    result.forEach(function(item) {
                        self.categories.push({
                            'name': item.title,
                            'guid': item.guid
                        });
                    });

                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
