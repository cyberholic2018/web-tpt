<template>
    <div class="row">
        <div class="col-md-5">
            <form v-on:submit.prevent="saveContent">
                <div class="form-group">
                    <label for="success-title">合作夥伴名稱</label>
                    <input type="text" id="success-title" class="form-control" name="" value="" required v-model="content.title">
                </div>
                <div class="form-group">
                    <label for="success-link">合作夥伴連結</label>
                    <input type="text" id="success-link" class="form-control" name="" value="" v-model="content.link">
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-info" name="button" @click="addImage()">編輯代表圖片</button>
                    <br>
                    <br>
                    <img v-bind:src="content.featureImage" width="300">
                    <!-- <label for="success-featureimage">代表圖片</label>
                    <input type="text" id="success-featureimage" class="form-control" name="" value="" readonly> -->
                </div>
                <hr>
                <button type="submit" class="btn btn-primary" name="button">儲存合作夥伴</button>
            </form>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mode: $('input[name="edit-mode"]').val(),
                id: $('input[name="id"]').val(),
                content: {
                    title: null,
                    link: null,
                    featureImage: null
                },
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        created: function () {
            $('.loading-bar').fadeOut('100');
            if (this.mode === 'edit') {
                this.getContent();
            }
        },
        methods: {
            saveContent: function () {
                var self = this;
                var token = this.token;

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: self.mode === 'add' ? '/success/add' : '/success/edit/' + self.id,
                    type: 'POST',
                    dataType: 'json',
                    data: self.content,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '編輯成功');
                    window.location.href = '/cyberholic-system/partner/successList';
                    console.log("success");
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
            getContent: function () {
                var self = this;

                $.ajax({
                    url: '/success/get/' + self.id,
                    type: 'GET',
                    dataType: 'json'
                })
                .done(function(result) {
                    self.content.title = result.title;
                    self.content.link = result.customField1;
                    self.content.featureImage = result.content;
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            addImage: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.content.featureImage = file_path;
                };
            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
