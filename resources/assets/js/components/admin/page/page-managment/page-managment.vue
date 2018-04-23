<template>
    <div class="row">
        <div class="col-md-12">
            <div class="tabbable ch-tab" id="tabs-750563">
            	<ul class="nav nav-tabs">
            		<li class="active">
            			<a href="#panel-508832" data-toggle="tab">網站資訊</a>
            		</li>
            		<li>
            			<a href="#panel-937041" data-toggle="tab">首頁輪播</a>
            		</li>
                    <!-- <li>
            			<a href="#panel-852432" data-toggle="tab">其他資訊</a>
            		</li> -->
            	</ul>
            	<div class="tab-content" style="padding:10px;">
            		<div class="tab-pane active" id="panel-508832">
                        <div class="row">
                            <div class="col-md-6">
                                <table class="table field-table">
                                    <tr>
                                        <td><label>網站標題</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="siteMeta.title"></td>
                                    </tr>
                                    <tr>
                                        <td><label>網站關鍵字</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="siteMeta.keyword"></td>
                                    </tr>
                                    <tr>
                                        <td>網站描述</td>
                                    </tr>
                                    <tr>
                                        <td><textarea class="form-control" v-model="siteMeta.description" style="resize: vertical;"></textarea></td>
                                    </tr>
                                    <tr>
                                        <td><label>網站縮圖</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button class="btn btn-info" type="button" v-if="(siteMeta.shortcut === null) || (siteMeta.shortcut === '')" @click="addShortCut()">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                            <img style="max-width: 50%" v-bind:src="siteMeta.shortcut" @click="addShortCut()" v-else>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                        </div>

            		</div>
            		<div class="tab-pane" id="panel-937041">
            			<div class="row">
            			    <div class="col-md-6">
                                <table class="table field-table">
                                    <tr>
                                        <td>
                                            <label>圖片標題</label>
                                            <button type="button" class="btn btn-success pull-right" @click="addBanner()">新增至輪播區</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="picTitle"></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>圖片</label>
                                            <button class="btn btn-info pull-right" type="button" @click="addImage()">
                                                <i class="fa fa-plus" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img width="100%" v-bind:src="picUrl"></td>
                                    </tr>
                                </table>
            			    </div>
                            <div class="col-md-6">
                                <div class="panel panel-default" v-for="(item, index) in siteMeta.index_album">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">
                                            {{ item.title }}
                                            <a class="pull-right" @click="siteMeta.index_album.splice(index, 1)"><i class="fa fa-times" aria-hidden="true"></i></a>
                                        </h3>
                                    </div>
                                    <div class="panel-body">
                                        <img width="100%" v-bind:src="item.url">
                                    </div>
                                </div>
                            </div>
            			</div>
            		</div>
                    <!-- <div class="tab-pane" id="panel-852432">
                        <div class="row">
                            <div class="col-md-6">
                                <table class="table field-table">
                                    <tr>
                                        <td><label>連絡電話</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="siteMeta.other.phone"></td>
                                    </tr>
                                    <tr>
                                        <td><label>電子郵件</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="siteMeta.other.email"></td>
                                    </tr>
                                    <tr>
                                        <td><label>Facebook</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="siteMeta.other.facebook"></td>
                                    </tr>
                                    <tr>
                                        <td><label>Youtube</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="siteMeta.other.youtube"></td>
                                    </tr>
                                    <tr>
                                        <td><label>Instagram</label></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" class="form-control" v-model="siteMeta.other.instagram"></td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                    </div> -->
            	</div>
            </div>

            <div v-if="isDirty">
                <button type="button" class="btn btn-primary" v-if="isEdit" @click="editMeta()">儲存設定</button>
                <button type="button" class="btn btn-primary" v-else @click="newMeta()">新增設定</button>
            </div>
            <div v-else>
                <button type="button" class="btn btn-primary" v-if="isEdit" disabled>儲存設定</button>
                <button type="button" class="btn btn-primary" v-else disabled>新增設定</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                siteMeta: {
                    title: null,
                    keyword: null,
                    description: null,
                    shortcut: null,
                    index_album: [],
                    other: {
                        phone: '',
                        email: '',
                        facebook: '',
                        youtube: '',
                        instagram: '',
                    }
                },
                picTitle: null,
                picUrl: null,
                isEdit: false,
                isDirty: false,
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        created: function () {
            this.getMeta();
            $('.loading-bar').fadeOut('100');
        },
        watch: {
            siteMeta: {
                handler: function (siteMeta, oldVal) {
                    this.isDirty = true;
                },
                deep: true
            }
        },
        methods: {
            getMeta: function () {
                var self = this;
                $.ajax({
                    url: '/admin/page/meta/get',
                    type: 'GET',
                    cache: false,
                    dataType: 'json'
                })
                .done(function(result) {
                    self.siteMeta.title = result.data.title;
                    self.siteMeta.keyword = result.data.keyword;
                    self.siteMeta.description = result.data.description;
                    self.siteMeta.shortcut = result.data.shortcut;
                    self.siteMeta.index_album = JSON.parse(result.data.index_album);
                    self.siteMeta.other = JSON.parse(result.data.other);

                    self.isEdit = true;
                    self.isDirty = false;
                })
                .fail(function() {
                    self.isEdit = false;
                });

            },
            addShortCut: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.siteMeta.shortcut = file_path;
                };
            },
            addImage: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.picUrl = file_path;
                };
            },
            addBanner: function () {
                var self = this;

                if (this.picUrl) {
                    this.siteMeta.index_album.push({
                        title: this.picTitle,
                        url: this.picUrl
                    });

                    this.picTitle = null;
                    this.picUrl = null;
                } else {
                    alert('請選擇圖片');
                }

            },
            newMeta: function () {
                var self = this;
                var token = this.token;

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/page/meta/set',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        title: self.siteMeta.title,
                        keyword: self.siteMeta.keyword,
                        description: self.siteMeta.description,
                        shortcut: self.siteMeta.shortcut,
                        index_album: JSON.stringify(self.siteMeta.index_album),
                        other: JSON.stringify(self.siteMeta.other),
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '編輯成功');
                    self.getMeta();
                })
                .fail(function() {
                    self.showMessage('error', '編輯失敗');
                    console.log("error");
                })
                .always(function() {
                    $('.loading-bar').fadeOut('100');
                    console.log("complete");
                });

            },
            editMeta: function () {
                var self = this;
                var token = this.token;

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/page/meta/edit',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        title: self.siteMeta.title,
                        keyword: self.siteMeta.keyword,
                        description: self.siteMeta.description,
                        shortcut: self.siteMeta.shortcut,
                        index_album: JSON.stringify(self.siteMeta.index_album),
                        other: JSON.stringify(self.siteMeta.other),
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '編輯成功');
                    self.getMeta();
                })
                .fail(function() {
                    self.showMessage('error', '編輯失敗');
                    console.log("error");
                })
                .always(function() {
                    $('.loading-bar').fadeOut('100');
                    console.log("complete");
                });
            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
