<template>
    <div class="row">
        <div class="col-md-6">
            <table width="100%" class="contact-form">
                <tr>
                    <td>
                        <label for="name">您的大名(必填)</label>
                        <input class="form-control" type="text" name="name" v-model="formContent.name">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="email">E-mail(必填)</label>
                        <input class="form-control" type="text" name="email" v-model="formContent.email">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="phone">電話號碼(必填)</label>
                        <input class="form-control" type="text" name="phone" v-model="formContent.phone">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="where">您是從哪裡知道我們的?</label>
                        <input class="form-control" type="text" name="where" v-model="formContent.where">
                    </td>
                </tr>
            </table>
        </div>
        <div class="col-md-6">
            <table width="100%" class="contact-form">
                <tr>
                    <td>
                        <label for="type">諮詢項目</label>
                        <select class="form-control" name="type" v-model="formContent.type">
                            <option value="NULL">諮詢內容</option>
                            <option value="詢價(報價)">詢價(報價)</option>
                            <option value="售後服務">售後服務</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="content">諮詢內容 (必填)</label>
                        <textarea class="form-control" style="resize: vertical;" name="content" rows="8" v-model="formContent.content"></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <div class="col-md-12">
            <table width="100%" class="contact-form">
                <tr>
                    <td align="center">
                        <div class="g-recaptcha" data-sitekey="6Lf13TIUAAAAAFeq8picDJ9DVpMwioBqfFQZdhc2"></div>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <button type="button" class="btn btn-lg contact-submit-btn" name="button" @click="sendContact()">送出</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    $('.loading-bar').fadeOut('100');

    export default {
        data() {
            return {
                formContent: {
                    name: null,
                    email: null,
                    phone: null,
                    where: null,
                    type: "NULL",
                    content: null
                },
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        methods: {
            sendContact: function () {
                var self = this;
                var token = this.token;
                var captchaValidate = grecaptcha.getResponse();
                var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

                if (this.formContent.name === null) {
                    this.showMessage('warning', '請填入您的姓名');
                    return;
                }

                if (this.formContent.name !== undefined) {
                    if (this.formContent.name.trim() === '') {
                        this.showMessage('warning', '請填入您的姓名');
                        return;
                    }
                }

                if (this.formContent.email === null) {
                    this.showMessage('warning', '請填入您的電子郵件');
                    return;
                }

                if (this.formContent.email !== undefined) {
                    if (this.formContent.email.trim() === '') {
                        this.showMessage('warning', '請填入您的電子郵件');
                        return;
                    }

                    if(this.formContent.email.search(emailRule) === -1){
                        this.showMessage('warning', '電子郵件格式錯誤');
                        return;
                    }
                }

                if (this.formContent.phone === null) {
                    this.showMessage('warning', '請填入您的電話號碼');
                    return;
                }

                if (this.formContent.phone !== undefined) {
                    if (this.formContent.phone.trim() === '') {
                        this.showMessage('warning', '請填入您的電話號碼');
                        return;
                    }
                }

                if (this.formContent.content === null) {
                    this.showMessage('warning', '請填入您的諮詢內容');
                    return;
                }

                if (this.formContent.content !== undefined) {
                    if (this.formContent.content.trim() === '') {
                        this.showMessage('warning', '請填入您的諮詢內容');
                        return;
                    }
                }

                if (this.formContent.type === "NULL") {
                    this.showMessage('warning', '請選擇您的諮詢類別');
                    return;
                }

                if (captchaValidate !== '') {
                    $('.mail-sending').fadeIn('100');

                    $.ajax({
                        url: '/mail/send',
                        type: 'POST',
                        dataType: 'json',
                        data: self.formContent,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    })
                    .done(function() {
                        alert('信件寄送成功!');
                        self.formContent = {
                            name: null,
                            email: null,
                            phone: null,
                            where: null,
                            type: null,
                            content: null
                        }
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        $('.mail-sending').fadeOut('100');
                    });

                } else {
                    this.showMessage('warning', '請勾選驗證');
                    return;
                }
            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
