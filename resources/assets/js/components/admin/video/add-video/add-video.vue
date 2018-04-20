<template>
    <div class="row">
        <div class="col-md-8">
            <table class="field-table">
                <tr>
                    <td>
                        影像名稱
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" class="form-control" placeholder="影像名稱" v-model="videoMeta.title">
                    </td>
                </tr>
                <tr>
                    <td>
                        影像網址
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" class="form-control" placeholder="Youtube url" v-model="videoMeta.url">
                    </td>
                </tr>

            </table>

            <br>

            <ckeditor
                class="ch-product-description"
                id="short-description"
                :config="ckConfig"
                v-model="videoMeta.description">
            </ckeditor>
        </div>
        <div class="col-md-4">
            <table class="field-table">
                <tr v-if="previewVideo(videoMeta.url)">
                    <td>
                        預覽
                    </td>
                </tr>
                <tr v-if="previewVideo(videoMeta.url)">
                    <td>
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" v-bind:src="previewVideo(videoMeta.url)"></iframe>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" name="button" class="btn btn-success btn-block" @click="addVideo()">儲存影音</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Ckeditor from 'vue-ckeditor2';
    $('.loading-bar').fadeOut('100');

    export default {
        components: {
            Ckeditor
        },
        data() {
            return {
                isEdit: false,
                token: $('meta[name="csrf-token"]').attr('content'),
                id: $('#row-id').val(),
                videoMeta: {
                    title: null,
                    url: null,
                    description: null
                },
                ckConfig: {
                    height: 300,
                    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=' + $('meta[name="csrf-token"]').attr('content'),
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token=' + $('meta[name="csrf-token"]').attr('content')
                },
            }
        },
        created: function () {
            if (this.id) {
                this.getVideo(this.id);
                this.isEdit = true;
            } else {
                self.isLoaded = true;
            }
        },
        methods: {
            addVideo: function () {
                var self = this;
                var token = this.token;

                if (this.videoMeta.title) {
                    if (this.videoMeta.title.trim() === "") {
                        this.showMessage('warning', "名稱欄位不可為空");
                        return ;
                    }
                } else {
                    this.showMessage('warning', "名稱欄位不可為空");
                    return ;
                }

                if (this.videoMeta.url) {
                    if (this.videoMeta.url.trim() === "") {
                        this.showMessage('warning', "網址欄位不可為空");
                        return ;
                    }
                } else {
                    this.showMessage('warning', "網址欄位不可為空");
                    return ;
                }

                if (this.videoMeta.description) {
                    if (this.videoMeta.description.trim() === "") {
                        this.showMessage('warning', "內容欄位不可為空");
                        return ;
                    }
                } else {
                    this.showMessage('warning', "內容欄位不可為空");
                    return ;
                }

                $.ajax({
                    url: self.isEdit ? '/admin/video/update/' + self.id : '/admin/video/add',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        title: self.videoMeta.title,
                        url: self.previewVideo(self.videoMeta.url),
                        description: self.videoMeta.description
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    window.location.href="/cyberholic-system/video/managment";
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            getVideo: function (id) {
                var self = this;

                $.ajax({
                    url: '/admin/video/get/' + id,
                    type: 'GET',
                    dataType: 'json'
                })
                .done(function(response) {
                    self.videoMeta.title = response.title;
                    self.videoMeta.url = response.url;
                    self.videoMeta.description = response.description;
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            previewVideo: function (url) {
                if (this.videoMeta.url) {
                    if (this.videoMeta.url.match('https')) {
                        if (this.videoMeta.url.match("embed/")) {
                            return url;
                        } else {
                            return url.replace("watch?v=", "embed/");
                        }

                    }
                } else {
                    return null;
                }

            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
