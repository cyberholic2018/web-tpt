<template>
    <div class="row" v-if="isLoaded">
        <div class="col-md-9">
            <input type="text" class="form-control ch-product-title" name="title" value="" placeholder="商品名稱" v-model="productContent.title">
            <ckeditor
                class="ch-product-description"
                :config="ckConfig"
                v-model="productContent.description">
            </ckeditor>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        商品資訊
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="tabbable ch-tab" id="tabs-865853">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#panel-817886" data-toggle="tab">庫存管理</a>
                            </li>
                            <li>
                                <a href="#panel-691273" data-toggle="tab">商品細節</a>
                            </li>
                            <li>
                                <a href="#panel-119853" data-toggle="tab">SEO 設定</a>
                            </li>
                        </ul>
                        <div class="tab-content ch-tab-content">
                            <div class="tab-pane active" id="panel-817886">
                                <table class="table field-table">
                                    <tr>
                                        <td width="130"><label for="serialNumber">商品編號</label></td>
                                        <td><input class="form-control" type="text" name="serialNumber" v-model="productContent.serialNumber"></td>
                                    </tr>
                                    <tr>
                                        <td><label for="reserveStatus">庫存管理</label></td>
                                        <td>
                                            <toggle-button v-model="productContent.reserveStatus"/>
                                        </td>
                                    </tr>
                                    <tr v-if="productContent.reserveStatus">
                                        <td><label>庫存狀態</label></td>
                                        <td>
                                            <select class="form-control" v-model="productContent.status">
                                                <option value="instock">尚有庫存</option>
                                                <option value="outofstock">缺貨</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr v-if="(productContent.status === 'instock') && (productContent.reserveStatus)">
                                        <td><label>商品數量</label></td>
                                        <td><input type="number" class="form-control" v-model="productContent.quantity"></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="">貨運溫層</label>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="radio" id="room" name="Temperature" value="room" v-model="productContent.Temperature">
                                                <label for="room">常溫配送</label>
                                            </div>
                                            <div class="form-group">
                                                <input type="radio" id="refrigeration" name="Temperature" value="refrigeration" v-model="productContent.Temperature">
                                                <label for="refrigeration">冷藏配送</label>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tab-pane" id="panel-691273">
                                <table class="table field-table">
                                    <tr>
                                        <td width="130">
                                            <label>重量 (kg)</label>
                                        </td>
                                        <td>
                                            <input class="form-control" type="number" name="" value="">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="130">
                                            <label>尺寸 (cm)</label>
                                        </td>
                                        <td>
                                            <input style="float: left; width: 32%" placeholder="長度" class="form-control" type="number" v-model="productContent.productInformation.size.productLength">
                                            <input style="float: left; width: 32%; margin-left: 2%" placeholder="寬度" class="form-control" type="number" v-model="productContent.productInformation.size.productWidth">
                                            <input style="float: left; width: 32%; margin-left: 2%" placeholder="高度" class="form-control" type="number" v-model="productContent.productInformation.size.productHeight">
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tab-pane" id="panel-119853">
                                <table class="table field-table">
                                    <tr>
                                        <td width="130">
                                            <label for="seoTitle">網站標題</label>
                                        </td>
                                        <td>
                                            <input type="text" name="seoTitle" class="form-control" v-model="productContent.seoTitle">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="seoKeyword">關鍵字 (*以 , 分隔)</label>
                                        </td>
                                        <td>
                                            <input type="text" name="seoKeyword" class="form-control" v-model="productContent.seoKeyword">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>社群圖片</label>
                                        </td>
                                        <td>
                                            <button class="btn btn-info" type="button" v-if="(productContent.socialImage === null) || (productContent.socialImage === '')" @click="addSeoImage()">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                            <div v-else class="ch-social-image">
                                                <img v-bind:src="productContent.socialImage" width="50%">
                                                <button type="button" class="btn btn-primary" @click="addSeoImage()"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <button type="button" class="btn btn-danger" @click="productContent.socialImage = null"><i class="fa fa-times" aria-hidden="true"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="seoDescription">社群描述</label>
                                        </td>
                                        <td>
                                            <textarea type="text" name="seoDescription" class="form-control" style="resize: vertical;" v-model="productContent.seoDescription"></textarea>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        商品簡述
                    </h3>
                </div>
                <div class="panel-body">
                    <ckeditor
                        class="ch-product-description"
                        :config="ckConfig"
                        v-model="productContent.shortDescription">
                    </ckeditor>
                </div>
            </div>
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
                        <div class="tabbable" id="tabs-464193">
            				<ul class="nav nav-tabs ch-tab">
            					<li class="active">
            						<a href="#panel-183169" data-toggle="tab">價格設定</a>
            					</li>
            					<li>
            						<a href="#panel-44467" data-toggle="tab">上架排程</a>
            					</li>
            				</ul>
            				<div class="tab-content ch-tab-content">
            					<div class="tab-pane active" id="panel-183169">
            						<label for="price">原價 NT$:</label>
                                    <input type="number" class="form-control" name="price" v-model="productContent.price">
                                    <label for="discountedPrice">促銷價 NT$:</label>
                                    <input type="number" class="form-control" name="discountedPrice" v-model="productContent.discountedPrice">
            					</div>
            					<div class="tab-pane" id="panel-44467">
                                    <table width="100%">
                                        <tr>
                                            <td><label>發佈狀態</label></td>
                                            <td><toggle-button v-model="productContent.isPublish"/></td>
                                        </tr>
                                        <tr>
                                            <td><label for="datetime">上架時間</label></td>
                                            <td width="30" align="right">
                                                <i  class="fa fa-times"
                                                    aria-hidden="true"
                                                    @click="productContent.schedulePost = null"
                                                    v-if="productContent.schedulePost != null"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <date-picker
                                                    v-model="productContent.schedulePost"
                                                    placeholder="選擇商品上架時間"
                                                    :config="config">
                                                </date-picker>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label for="schedule-down">下架時間</label></td>
                                            <td align="right">
                                                <i  class="fa fa-times"
                                                    aria-hidden="true"
                                                    @click="productContent.scheduleDelete = null"
                                                    v-if="productContent.scheduleDelete != null"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <date-picker
                                                    v-model="productContent.scheduleDelete"
                                                    placeholder="選擇商品下架時間"
                                                    :config="scheduleDeleteConfig">
                                                </date-picker>
                                            </td>
                                        </tr>
                                    </table>
            					</div>
            				</div>
            			</div>
    				</div>
    				<div class="panel-footer">
                        <button v-if="isDirty" type="button" class="btn btn-success btn-sm btn-block" name="button" @click="saveProduct()">
                            <span v-if="isEdit">編輯商品</span>
                            <span v-else>發布商品</span>
                        </button>
                        <button v-else type="button" class="btn btn-success btn-sm btn-block" name="button" disabled>
                            <span v-if="isEdit">編輯商品</span>
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
                    Temperature: 'room',
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
                    allowedContent: true,
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
                            description: self.productContent.description,
                            shortDescription: self.productContent.shortDescription,
                            serialNumber: self.productContent.serialNumber,
                            quantity: self.productContent.quantity,
                            category: self.productContent.category,
                            price: self.productContent.price,
                            Temperature: self.productContent.Temperature,
                            isPublish: self.productContent.isPublish,
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
                    self.productContent.discountedPrice = result.discountedPrice;
                    self.productContent.category = result.category;
                    self.productContent.featureImage = result.featureImage;
                    self.productContent.album = JSON.parse(result.album);
                    self.productContent.description = result.description;
                    self.productContent.shortDescription = result.shortDescription;
                    self.productContent.status = result.status;
                    self.productContent.Temperature = result.Temperature;
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
