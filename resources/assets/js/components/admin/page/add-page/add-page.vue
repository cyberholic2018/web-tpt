<template>
    <div class="row" v-if="isLoaded">
        <div class="col-md-9">
            <input type="text" class="form-control ch-product-title" name="title" value="" placeholder="文章標題" v-model="pageContent.title">
            <ckeditor
                class="ch-product-description"
                :config="ckConfig"
                v-model="pageContent.content">
            </ckeditor>
        </div>

        <div class="col-md-3">
            <div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title">
    					代表圖片
    				</h3>
    			</div>
    			<div class="panel-body">
                    <a v-if="pageContent.featureImage === null" @click="selectFeatureImg()">設定代表圖片</a>
                    <div v-else class="">
                        <img v-bind:src="pageContent.featureImage" id="featurePreview" style="width: 100%" @click="selectFeatureImg()">
                        <p>點選圖片以編輯或更新</p>
                        <a @click="deleteFeatureImg()">刪除代表圖片</a>
                    </div>
    			</div>
    		</div>
            <div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title">
    					儲存頁面區塊
    				</h3>
    			</div>
    			<!-- <div class="panel-body">
                    <select class="form-control" v-model="pageContent.locale">
                        <option value="en">英文</option>
                        <option value="zh-TW">繁體中文</option>
                    </select>
    			</div> -->
                <div class="panel-footer">
                    <button class="btn btn-success" type="button" name="button" @click="savePage">儲存頁面</button>
                </div>
    		</div>
        </div>

    </div>
</template>

<script>
    import Ckeditor from 'vue-ckeditor2';

    export default {
        components: {
            Ckeditor
        },
        data() {
            return {
                isLoaded: false,
                isEdit: false,
                guid: $('#row-guid').val(),
                pageContent: {
                    title: null,
                    content: null,
                    locale: 'en',
                    featureImage: null
                },
                ckConfig: {
                    height: 300,
                    allowedContent: true,
                    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=' + $('meta[name="csrf-token"]').attr('content'),
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token=' + $('meta[name="csrf-token"]').attr('content')
                },
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        created: function () {
            if (this.guid) {
                this.getPage(this.guid);
                this.isEdit = true;
            } else {
                this.isLoaded = true;
            }
        },
        computed: {
        },
        methods: {
            savePage: function () {
                var self = this;
                var token = this.token;
                var pageContent = {
                    title: this.pageContent.title,
                    content: JSON.stringify({
                        locale: this.pageContent.locale,
                        content: this.pageContent.content
                    }),
                    featureImage: this.pageContent.featureImage
                };

                $.ajax({
                    url: self.isEdit ? '/admin/page/update/' + self.guid : '/admin/page/add',
                    type: 'POST',
                    dataType: 'json',
                    data: pageContent,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    window.location = '/cyberholic-system/page/list';
                    console.log("success");
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            selectFeatureImg: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.pageContent.featureImage = file_path;
                };
            },
            getPage: function (guid) {
                var self = this;

                $.ajax({
                    url: '/admin/page/get/' + guid,
                    type: 'GET',
                    dataType: 'json',
                })
                .done(function(response) {
                    self.pageContent.title = response.title;
                    self.pageContent.content = JSON.parse(response.content).content;
                    self.pageContent.locale = JSON.parse(response.content).locale;
                    self.pageContent.featureImage = response.featureImage;

                    self.isLoaded = true;
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            deleteFeatureImg: function () {
                this.pageContent.featureImage = null;
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
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
