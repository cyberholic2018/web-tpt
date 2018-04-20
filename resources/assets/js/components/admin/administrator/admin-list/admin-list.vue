<template>
    <div class="row">
        <div class="col-md-12" style="position: relative">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#createAdminModal" style="position: absolute; right: 10px; top: -52px;">
              <span class="glyphicon glyphicon-plus"></span> 新增管理者
            </button>

            <table class="table field-table">
                <thead>
                    <tr>
                        <th>帳號</th>
                        <th>名稱</th>
                        <th>建立時間</th>
                        <th width="50">狀態</th>
                        <th width="50" style="text-align: center">編輯</th>
                        <th width="50" style="text-align: center">刪除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in accounts" >
                        <td>{{ item.email }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.status }}</td>
                        <td align="center"><span @click="editAdmin(item)" class="glyphicon glyphicon-pencil"></span></td>
                        <td align="center"><span @click="deleteAdmin(item)" class="glyphicon glyphicon-trash"></span></td>
                    </tr>
                </tbody>
            </table>

            <!-- 新增帳號視窗 -->
            <div class="modal fade" id="createAdminModal" tabindex="-1" role="dialog" aria-labelledby="createAdminModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="createAdminModalLabel">新增管理者帳號</h4>
                        </div>
                        <div class="modal-body">
                            <table class="field-table">
                                <tr>
                                    <td>顯示名稱</td>
                                    <td>
                                        <input class="form-control" type="text" name="name" v-model="fieldContent.name" autofocus="true">
                                    </td>
                                </tr>
                                <tr>
                                    <td>E-Mail</td>
                                    <td>
                                        <input class="form-control" type="text" name="email" v-model="fieldContent.email">
                                    </td>
                                </tr>
                                <tr>
                                    <td>密碼</td>
                                    <td>
                                        <input class="form-control" type="password" name="password" v-model="fieldContent.password">
                                    </td>
                                </tr>
                                <tr>
                                    <td>確認密碼</td>
                                    <td>
                                        <input class="form-control" type="password" name="check-password" v-model="fieldContent.confirmPassword">
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                            <button type="button" class="btn btn-primary" @click="addUser()">新增</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 訊息區塊 -->
            <div class="modal fade" id="messageModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body message-modal-body">
                        {{ message }}
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
                fieldContent: {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                },
                fieldValidation: {
                    name: false,
                    email: false,
                    password: false,
                    confirmPassword: false
                },
                accounts: [],
                token: $('meta[name="csrf-token"]').attr('content'),
                message: ''
            }
        },
        created: function () {
            var self = this;

            this.getUser();
        },
        computed: {
            formValidation: function() {
                return this.fieldValidation.name && this.fieldValidation.email && this.fieldValidation.password && this.fieldValidation.confirmPassword;
            },
        },
        methods: {
            getUser: function () {
                var self = this;

                $.ajax({
                    url: '/admin/admin/list',
                    type: 'GET',
                    dataType: 'json',
                    data: {param1: 'value1'}
                })
                .done(function(result) {
                    self.accounts = result.data;
                    $('.loading-bar').fadeOut('100');
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });
            },
            addUser: function () {
                var token = this.token;
                var fieldContent = this.fieldContent;
                var self = this;

                if (this.fieldContent.password !== this.fieldContent.confirmPassword) {
                    self.showMessage('warning', '密碼欄位不一致，請確認。');
                    return;
                }

                this.formValidator();
                if (this.formValidation) {
                    $('.loading-bar').fadeIn('100');
                    $.ajax({
                        url: "/admin/admin/add",
                        type: 'POST',
                        cache: false,
                        data: fieldContent,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    }).done(function(result) {
                        self.showMessage('success', '管理者帳號建立成功');
                        fieldContent.name = '';
                        fieldContent.email = '';
                        fieldContent.password = '';
                        fieldContent.confirmPassword = '';
                    }).fail(function(result) {
                        var errorData = JSON.parse(result.responseText);
                        if (errorData.email) {
                            self.showMessage('error', '帳號已存在，請重新輸入');
                        }
                        if (errorData.password) {
                            self.showMessage('warning', '密碼長度必須大於六個字元');
                        }
                    }).always(function() {
                        self.getUser();
                        $('.loading-bar').fadeOut('100');
                    });
                } else {
                    self.showMessage('warning', '請檢查欄位');
                }

            },
            editAdmin: function (item) {
                console.log(item.guid);
            },
            deleteAdmin: function (item) {
                var self = this;
                var token = this.token;
                var checkProperty = confirm("是否刪除帳號?");

                if (checkProperty) {
                    $.ajax({
                        url: '/admin/admin/delete',
                        type: 'POST',
                        cache: false,
                        dataType: 'json',
                        data: {
                            adminUser: item.guid
                        },
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
                        self.getUser();
                    });
                } else {
                    return;
                }

            },
            formValidator: function () {
                var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

                if (this.fieldContent.name.trim() !== '') {
                    this.fieldValidation.name = true;
                } else {
                    this.fieldValidation.name = false;
                }

                if (emailRule.test(this.fieldContent.email)) {
                    this.fieldValidation.email = true;
                } else {
                    this.fieldValidation.email = false;
                }

                if ((this.fieldContent.password.trim() !== this.fieldContent.confirmPassword.trim()) ||
                    (this.fieldContent.password.trim() == '') ||
                    (this.fieldContent.confirmPassword.trim() == '')) {
                    this.fieldValidation.password = false;
                    this.fieldValidation.confirmPassword = false;
                } else {
                    this.fieldValidation.password = true;
                    this.fieldValidation.confirmPassword = true;
                }
            },
            showMessage: function (type, string) {
                toastr[type](string)
                this.message = string;
            }
        }
    }
</script>
