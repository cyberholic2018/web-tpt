<template>
    <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">
                    重置密碼
                </h3>
            </div>
            <div class="panel-body">
                <table class="field-table">
                    <tr>
                        <td>
                            <label for="oldPassword">請輸入舊密碼</label>
                            <input class="form-control" type="password" name="oldPassword" v-model="passwordForm.oldPassword">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="newPassword">請輸入新密碼</label>
                            <input class="form-control" type="password" name="newPassword" v-model="passwordForm.newPassword">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="confirmedPassword">確認密碼</label>
                            <input class="form-control" type="password" name="confirmedPassword" v-model="passwordForm.confirmedPassword">
                        </td>
                    </tr>
                </table>
            </div>
            <div class="panel-footer">
                <button class="btn btn-success btn-sm btn-block" type="button" name="button" @click="resetPassword()">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                passwordForm: {
                    oldPassword: '',
                    newPassword: '',
                    confirmedPassword: ''
                },
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        created: function () {
            $('.loading-bar').fadeOut('100');
        },
        methods: {
            resetPassword: function () {
                var self = this;

                $.ajax({
                    url: '/admin/admin/reset',
                    type: 'POST',
                    dataType: 'json',
                    data: self.passwordForm,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', self.token);
                    }
                })
                .done(function(result) {
                    self.showMessage('success', result.message);
                })
                .fail(function(errorData) {
                    if (errorData.status === 422) {
                        self.showMessage('error', '請檢察欄位是否輸入齊全');
                    } else if (errorData.status === 423) {
                        self.showMessage('error', errorData.responseJSON.message);
                    }
                })
                .always(function() {
                    self.passwordForm.oldPassword = '';
                    self.passwordForm.newPassword = '';
                    self.passwordForm.confirmedPassword = '';
                });
            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
