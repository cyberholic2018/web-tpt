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
                                <th>類別名稱</th>
                                <th width="50" style="text-align: center">編輯</th>
                                <th width="50" style="text-align: center">刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in categories">
                                <td>
                                    <input
                                        style="width:100%"
                                        class="edit-category-input"
                                        v-if="item.isEdit"
                                        type="text"
                                        @blur="toggleEditMode(item)"
                                        v-model='item.name'
                                        @keyup.enter="editCategory(item)">
                                    <span v-else="item.isEdit">{{ item.name }}</span>
                                </td>
                                <td align="center">
                                    <span @click="toggleEditMode(item)" class="glyphicon glyphicon-pencil"></span>
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
                </div>
                <div class="panel-footer">
                    <button class="btn btn-primary" @click="addCategory()">
                        新增
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                addCategoryForm: {
                    categoryName: '',
                    categoryParent: 'null',
                    type: 'support'
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
                    self.addCategoryForm.categoryParent = 'null';
                    self.addCategoryForm.categoryName = '';
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    self.getCategories();
                    $('.loading-bar').fadeOut('100');
                });

            },
            editCategory: function (item) {
                var self = this;
                var token = this.token;

                if (item.name.trim() === '') {
                    this.showMessage('warning', '欄位名稱不可為空白');
                    return;
                }

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/category/update',
                    type: 'POST',
                    dataType: 'json',
                    data: {category: item.guid},
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    console.log("success");
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
                        type: 'support'
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
                            'guid': item.guid,
                            'isEdit': false
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
