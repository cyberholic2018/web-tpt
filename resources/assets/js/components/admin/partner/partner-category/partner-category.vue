<template>
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        類別管理
                    </h3>
                </div>
                <div class="panel-body">
                    <table class="table field-table">
                        <thead>
                            <tr>
                                <th width="60"></th>
                                <th>類別名稱</th>
                                <th width="50" style="text-align: center">編輯</th>
                                <th width="50" style="text-align: center">刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in categories">
                                <td>
                                    <span>{{item.locale}}</span>
                                    <!-- <img width="40" v-bind:src="item.featureImage"> -->
                                </td>
                                <td>
                                    <span>{{ item.name }}</span>
                                </td>
                                <td align="center">
                                    <span @click="openEditModal(item)" class="glyphicon glyphicon-pencil"></span>
                                </td>
                                <td align="center"><span @click="deleteCategory(item.guid)" class="glyphicon glyphicon-trash"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">

                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        新增類別
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">
                            類別名稱
                        </label>
                        <input type="email" class="form-control" v-model="addCategoryForm.categoryName" @keyup.enter="addCategory()"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">
                            類別語系
                        </label>
                        <select class="form-control" v-model="addCategoryForm.locale">
                            <option value="en">英文</option>
                            <option value="zh-TW">繁體中文</option>
                        </select>
                    </div>
                    <!-- 暫不使用子父類別功能 -->


                    <!-- <div class="form-group">
                        <label for="exampleInputPassword1">
                            上層
                        </label>
                        <select class="form-control" id="parent-select" name="" v-model="addCategoryForm.categoryParent" >
                            <option value="null">--不指定--</option>
                            <option v-for="item in categories" v-bind:value="item.guid"> {{ item.name }}</option>
                        </select>
                    </div> -->
                    <div class="form-group" v-if="false">
                        <label for="exampleInputEmail1">
                            類別描述
                        </label>
                        <ckeditor
                            id="add-area"
                            class="ch-product-description"
                            :config="ckConfig"
                            v-model="addCategoryForm.description">
                        </ckeditor>
                        <!-- <textarea class="form-control" name="name" rows="10" style="resize: vertical" v-model="addCategoryForm.description"></textarea> -->
                    </div>
                    <!-- <button v-if="false" class="btn btn-success" type="button" name="button" @click="addImage()">選擇圖片</button> -->
                    <!-- <div v-if="false" style="text-align: center">
                        <img v-bind:src="addCategoryForm.featureImage" width="50%">
                    </div> -->
                </div>
                <div class="panel-footer">
                    <button class="btn btn-primary" @click="addCategory()">
                        新增
                    </button>
                </div>
            </div>
        </div>
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">編輯類別</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">
                                類別名稱
                            </label>
                            <input type="email" class="form-control" v-model="editCategoryForm.categoryName" @keyup.enter="addCategory()"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">
                                類別語系
                            </label>
                            <select class="form-control" v-model="editCategoryForm.locale">
                                <option value="en">英文</option>
                                <option value="zh-TW">繁體中文</option>
                            </select>
                        </div>
                        <!-- <div class="form-group">
                            <label for="exampleInputEmail1">
                                類別描述
                            </label>
                            <ckeditor
                                id="edit-area"
                                class="ch-product-description"
                                :config="ckConfig"
                                v-model="editCategoryForm.description">
                            </ckeditor>
                        </div> -->
                        <!-- <button class="btn btn-success" type="button" name="button" @click="editImage()">選擇圖片</button>
                        <div style="text-align: center">
                            <img v-bind:src="editCategoryForm.featureImage" width="50%">
                        </div> -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" @click="editCategory(editCategoryForm)">儲存類別</button>
                    </div>
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
                addCategoryForm: {
                    categoryName: '',
                    categoryParent: null,
                    type: 'partnerType',
                    featureImage: 'null',
                    description: 'null'
                },
                editCategoryForm: {
                    guid: null,
                    categoryName: null,
                    categoryParent: null,
                    type: 'partnerType',
                    featureImage: 'null',
                    description: 'null'
                },
                ckConfig: {
                    height: 300,
                    allowedContent: true,
                    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=' + $('meta[name="csrf-token"]').attr('content'),
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token=' + $('meta[name="csrf-token"]').attr('content')
                },
                categories: [],
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        created: function () {
            this.getCategories();
            $('.loading-bar').fadeOut('100');
        },
        methods: {
            addCategory: function () {
                var self = this;
                var token = this.token;

                if (self.addCategoryForm.categoryParent === undefined) {
                    self.addCategoryForm.categoryParent = null;
                }

                if (self.addCategoryForm.categoryName.trim() === '') {
                    this.showMessage('warning', '欄位名稱不可為空白');
                    return;
                }

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/category/add',
                    type: 'POST',
                    cache: false,
                    dataType: 'json',
                    data: self.addCategoryForm,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    self.showMessage('success', '新增類別成功');
                    self.addCategoryForm.categoryParent = null;
                    self.addCategoryForm.categoryName = null;
                    self.addCategoryForm.description = null;
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    self.getCategories();
                    $('.loading-bar').fadeOut('100');
                });

            },
            addImage: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=1280,height=1024');
                window.SetUrl = function (url, file_path) {
                    self.addCategoryForm.featureImage = file_path;
                };
            },
            editImage: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=1280,height=1024');
                window.SetUrl = function (url, file_path) {
                    self.editCategoryForm.featureImage = file_path;
                };
            },
            editCategory: function (item) {
                var self = this;
                var token = this.token;

                if (item.categoryName.trim() === '') {
                    this.showMessage('warning', '欄位名稱不可為空白');
                    return;
                }

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/category/update',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        category: item.guid,
                        name: item.categoryName,
                        locale: item.locale,
                        parentId: item.categoryParent,
                        featureImage: item.featureImage,
                        description: item.description
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    self.getCategories();
                    self.showMessage('success', '類別編輯成功');
                    $('#myModal').modal('hide');
                })
                .fail(function(errorData) {
                    console.log("error");
                })
                .always(function() {
                    $('.edit-category-input').blur();
                    $('.loading-bar').fadeOut('100');
                    console.log("complete");
                });

            },
            deleteCategory: function (item) {
                var self = this;
                var token = this.token;
                var checkProperty = confirm("是否刪除類別?");

                if (checkProperty) {
                    $.ajax({
                        url: '/admin/category/delete',
                        type: 'POST',
                        dataType: 'json',
                        data: {category: item},
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    })
                    .done(function(result) {
                        self.showMessage('success', result.message);
                    })
                    .fail(function(errorData) {
                        self.showMessage('error', errorData.responseJSON.message);
                    })
                    .always(function() {
                        self.getCategories();
                    });
                }


            },
            openEditModal: function (item) {

                this.editCategoryForm.categoryName = item.name;
                this.editCategoryForm.categoryParent = item.categoryParent;
                this.editCategoryForm.description = item.description;
                this.editCategoryForm.featureImage = item.featureImage;
                this.editCategoryForm.guid = item.guid;

                $('#myModal').modal('show');
            },
            toggleEditMode: function (item) {
                var self = this;
                var isEdit = item.isEdit;

                if (isEdit) {
                    item.isEdit = false;
                } else {
                    item.isEdit = true;
                    setTimeout(function () {
                        $('.edit-category-input').focus();
                    }, 50);

                }

            },
            getCategories: function () {
                var self = this;
                var token = this.token;

                $.ajax({
                    url: '/admin/category/get',
                    type: 'POST',
                    cache: false,
                    data: {
                        type: 'partnerType'
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    self.categories = [];
                    result.forEach(function(item) {
                        self.categories.push({
                            'categoryParent': item.parentId,
                            'name': item.title,
                            'guid': item.guid,
                            'locale': item.locale,
                            'featureImage': item.featureImage,
                            'isEdit': false,
                            'description': item.description
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
