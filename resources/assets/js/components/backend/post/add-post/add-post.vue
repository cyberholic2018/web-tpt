<template>
    <div class="row" v-if="isLoaded">
        <div class="col-md-9">
            <input type="text" class="form-control ch-product-title" name="title" value="" placeholder="文章標題" v-model="postContent.title">
            <ckeditor
                class="ch-product-description"
                :config="ckConfig"
                v-model="postContent.content">
            </ckeditor>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        文章資訊
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="tabbable ch-tab" id="tabs-865853">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#panel-119853" data-toggle="tab">SEO 設定</a>
                            </li>
                        </ul>
                        <div class="tab-content ch-tab-content">
                            <div class="tab-pane active" id="panel-119853">
                                <table class="table field-table">
                                    <tr>
                                        <td width="130">
                                            <label for="seoTitle">網站標題</label>
                                        </td>
                                        <td>
                                            <input type="text" name="seoTitle" class="form-control" v-model="postContent.seoTitle">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="seoKeyword">關鍵字 (*以 , 分隔)</label>
                                        </td>
                                        <td>
                                            <input type="text" name="seoKeyword" class="form-control" v-model="postContent.seoKeyword">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>社群圖片</label>
                                        </td>
                                        <td>
                                            <button class="btn btn-info" type="button" v-if="(postContent.socialImage === null) || (postContent.socialImage === '')" @click="addSeoImage()">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                            <div v-else class="ch-social-image">
                                                <img v-bind:src="postContent.socialImage" width="50%">
                                                <button type="button" class="btn btn-primary" @click="addSeoImage()"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <button type="button" class="btn btn-danger" @click="postContent.socialImage = null"><i class="fa fa-times" aria-hidden="true"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for="seoDescription">社群描述</label>
                                        </td>
                                        <td>
                                            <textarea type="text" name="seoDescription" class="form-control" style="resize: vertical;" v-model="postContent.seoDescription"></textarea>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
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
            						<a href="#panel-44467" data-toggle="tab">發布排程</a>
            					</li>
            				</ul>
            				<div class="tab-content ch-tab-content">
            					<div class="tab-pane active" id="panel-44467">
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <label for="isPublish">文章狀態</label>
                                            </td>
                                            <td align="right">
                                                <toggle-button v-model="postContent.isPublish"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label for="datetime">發布時間</label></td>
                                            <td width="30" align="right">
                                                <i  class="fa fa-times"
                                                    aria-hidden="true"
                                                    @click="postContent.schedulePost = null"
                                                    v-if="postContent.schedulePost != null"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <date-picker
                                                    v-model="postContent.schedulePost"
                                                    placeholder="選擇文章發布時間"
                                                    :config="config">
                                                </date-picker>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label for="schedule-down">下線時間</label></td>
                                            <td align="right">
                                                <i  class="fa fa-times"
                                                    aria-hidden="true"
                                                    @click="postContent.scheduleDelete = null"
                                                    v-if="postContent.scheduleDelete != null"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <date-picker
                                                    v-model="postContent.scheduleDelete"
                                                    placeholder="選擇文章下線時間"
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
                        <button v-if="isDirty" type="button" class="btn btn-success btn-sm btn-block" name="button" @click="savePost()">發布文章</button>
                        <button v-else type="button" class="btn btn-success btn-sm btn-block" name="button" disabled>發布文章</button>
    				</div>
    			</div>
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						類別選擇
    					</h3>
    				</div>
    				<div class="panel-body">
                        <select class="form-control" v-model="postContent.category">
                            <option value="null">--不指定--</option>
                            <option v-for="item in categories" v-bind:value="item.guid">{{item.name}}</option>
                        </select>
    				</div>
    			</div>
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						代表圖片
    					</h3>
    				</div>
    				<div class="panel-body">
                        <a v-if="postContent.featureImage === null" @click="selectFeatureImg()">設定代表圖片</a>
                        <div v-else class="">
                            <img v-bind:src="thumb(postContent.featureImage)" id="featurePreview" style="width: 100%" @click="selectFeatureImg()">
                            <p>點選圖片以編輯或更新</p>
                            <a @click="deleteFeatureImg()">刪除代表圖片</a>
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
                postContent: {
                    title: null,
                    category: 'null',
                    content: null,
                    featureImage: null,
                    seoTitle: null,
                    seoKeyword: null,
                    socialImage: null,
                    seoDescription: null,
                    isPublish: false,
                    schedulePost: null,
                    scheduleDelete: null
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
                token: $('meta[name="csrf-token"]').attr('content')
            }
        },
        created: function () {
            var self = this;

            if (this.guid) {
                this.getPost();
                this.isEdit = true;
            } else {
                self.isLoaded = true;
            }
            this.getCategories();
            $('.loading-bar').fadeOut('100');
        },
        watch: {
            postContent: {
                handler: function (postContent, oldVal) {
                    var self = this;

                    this.isDirty = true;
                },
                deep: true
            }
        },
        computed: {
            schedulePostDate: function () {
                if (this.postContent.schedulePost) {
                    return moment(this.postContent.schedulePost).format();
                } else {
                    return null;
                }
            },
            scheduleDeleteDate: function () {
                if (this.postContent.scheduleDelete) {
                    return moment(this.postContent.scheduleDelete).format();
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
                if (!this.postContent.title) {
                    return false;
                } else if (this.postContent.title.trim() === '') {
                    return false;
                } else {
                    return true;
                }
            },
            checkContent: function () {
                if (!this.postContent.content) {
                    return false;
                } else if (this.postContent.content.trim() === '') {
                    return false;
                } else {
                    return true;
                }
            },
            checkTime: function () {
                return true;
                if ((this.productContent.schedulePost !== null) && (this.productContent.scheduleDelete !== null)) {
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
                return this.checkTitle && this.checkContent && this.checkTime;
            }
        },
        methods: {
            getPost: function () {
                var self = this;

                $.ajax({
                    url: '/admin/post/get/' + this.guid,
                    type: 'GET',
                    cache: false
                })
                .done(function(result) {
                    self.postContent.title = result.title;
                    self.postContent.category = result.category;
                    self.postContent.content = result.content;
                    self.postContent.featureImage = result.featureImage;
                    self.postContent.seoTitle = result.seoTitle;
                    self.postContent.seoKeyword = result.seoKeyword;
                    self.postContent.socialImage = result.socialImage;
                    self.postContent.seoDescription = result.seoDescription;
                    self.postContent.isPublish = Boolean(result.isPublish);
                    self.postContent.schedulePost = (result.schedulePost != null) ? moment(result.schedulePost) : null;
                    self.postContent.scheduleDelete = (result.scheduleDelete != null) ? moment(result.scheduleDelete) : null;

                    self.isLoaded = true;
                    self.isDirty = false;
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
            },
            savePost: function () {
                var self = this;
                var token = this.token;

                if (this.isAllowToSave) {
                    if (this.isEdit) {
                        $.ajax({
                            url: '/admin/post/edit/' + self.guid,
                            type: 'POST',
                            cache: false,
                            dataType: 'json',
                            data: {
                                title: self.postContent.title,
                                category: self.postContent.category,
                                content: self.postContent.content,
                                featureImage: self.postContent.featureImage,
                                seoTitle: self.postContent.seoTitle,
                                seoKeyword: self.postContent.seoKeyword,
                                socialImage: self.postContent.socialImage,
                                seoDescription: self.postContent.seoDescription,
                                isPublish: self.postContent.isPublish,
                                schedulePost: self.schedulePostDate,
                                scheduleDelete: self.scheduleDeleteDate
                            },
                            beforeSend: function(xhr) {
                                xhr.setRequestHeader('X-CSRF-TOKEN', token);
                            }
                        })
                        .done(function() {
                            window.location.href="/cyberholic-system/post/list";
                            console.log("success");
                        })
                        .fail(function() {
                            console.log("error");
                        })
                        .always(function() {
                            console.log("complete");
                        });

                    } else {
                        $.ajax({
                            url: '/admin/post/add',
                            type: 'POST',
                            cache: false,
                            dataType: 'json',
                            data: {
                                title: self.postContent.title,
                                category: self.postContent.category,
                                content: self.postContent.content,
                                featureImage: self.postContent.featureImage,
                                seoTitle: self.postContent.seoTitle,
                                seoKeyword: self.postContent.seoKeyword,
                                socialImage: self.postContent.socialImage,
                                seoDescription: self.postContent.seoDescription,
                                isPublish: self.postContent.isPublish,
                                schedulePost: self.schedulePostDate,
                                scheduleDelete: self.scheduleDeleteDate
                            },
                            beforeSend: function(xhr) {
                                xhr.setRequestHeader('X-CSRF-TOKEN', token);
                            }
                        })
                        .done(function(result) {
                            window.location.href="/cyberholic-system/post/list";
                            console.log(result);
                        })
                        .fail(function() {
                            console.log("error");
                        })
                        .always(function() {
                            console.log("complete");
                        });
                    }

                } else {
                    console.log('not allow');
                }
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
                    self.postContent.featureImage = file_path;
                };
            },
            deleteFeatureImg: function () {
                this.postContent.featureImage = null;
            },
            getCategories: function () {
                var self = this;
                var token = this.token;

                $.ajax({
                    url: '/admin/category/get',
                    type: 'POST',
                    cache: false,
                    data: {
                        type: 'post'
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
            addSeoImage: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.postContent.socialImage = file_path;
                };
            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
