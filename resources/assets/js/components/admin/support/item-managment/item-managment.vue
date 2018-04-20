<template>
    <div class="row">
        <div class="col-md-10">
            <table class="table field-table">
                <tr>
                    <td>
                        <input class="form-control" type="text" placeholder="標案名稱" v-model="supportContent.fileName">
                    </td>
                </tr>
                <!-- <tr>
                    <td>
                        <button class="btn btn-primary" type="button" @click="selectFile()">選擇檔案</button>
                        {{ supportContent.downloadLink }}
                    </td>
                </tr> -->
                <!-- <tr>
                    <td>
                        <input class="form-control" type="text" placeholder="支援環境" v-model="supportContent.osCondition">
                    </td>
                </tr> -->
                <tr>
                    <td>
                        <select class="form-control" v-model="supportContent.type">
                            <option value="共契投標專區">共契投標專區</option>
                            <option v-bind:value="item.guid" v-for="item in categories">{{ item.name }}</option>
                            <!-- <option value="驅動程式">驅動程式</option>
                            <option value="技術文件">技術文件</option> -->
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ckeditor
                            class="ch-product-description"
                            id="short-description"
                            :config="ckConfig"
                            v-model="supportContent.description">
                        </ckeditor>
                        <!-- <textarea style="resize: vertical;" class="form-control" v-model="supportContent.description"></textarea> -->
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        <hr>

                    </td>
                </tr>
            </table>
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <label>語系選擇</label>
                <select class="form-control" v-model="supportContent.locale">
                    <option value="zh-TW">繁體中文</option>
                    <option value="en">英文</option>
                </select>
            </div>
            <button class="btn btn-success" type="button" name="button" @click="saveSupport()">新增標案</button>
        </div>
    </div>
</template>

<script>
    import Ckeditor from 'vue-ckeditor2';
    $('.loading-bar').fadeOut('100');

    export default {
        components: {
            Ckeditor,
        },
        data() {
            return {
                isEdit: false,
                id: $('#row-id').val(),
                supportContent: {
                    fileName: null,
                    osCondition: 'null',
                    description: null,
                    locale: null,
                    type: '共契投標專區',
                    downloadLink: '/favicon.ico'
                },
                ckConfig: {
                    height: 600,
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
            if (this.id) {
                this.getSupport();
                this.isEdit = true;
            } else {
                self.isLoaded = true;
            }

            this.getCategories();
        },
        methods: {
            selectFile: function () {
                var self = this;

                window.open('/laravel-filemanager' + '?type=Files', 'FileManager', 'width=900,height=600');
                window.SetUrl = function (url, file_path) {
                    self.supportContent.downloadLink = file_path;
                };
            },
            getSupport: function () {
                var self = this;

                $.ajax({
                    url: '/admin/support/get/' + self.id,
                    type: 'GET',
                    cache: false,
                    dataType: 'json'
                })
                .done(function(result) {
                    self.supportContent.fileName = result.fileName;
                    self.supportContent.osCondition = result.osCondition;
                    self.supportContent.description = result.description;
                    self.supportContent.locale = result.locale;
                    self.supportContent.type = result.type;
                    self.supportContent.downloadLink = result.downloadLink;
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            saveSupport: function () {
                var self = this;
                var token = this.token;

                if (this.supportContent.fileName === null) {
                    this.showMessage('warning', '請輸入檔案名稱');
                    return;
                }
                if (this.supportContent.type === 'null') {
                    this.showMessage('warning', '請選擇支援類別');
                    return;
                }
                if (this.supportContent.downloadLink === null) {
                    this.showMessage('warning', '請選擇檔案');
                    return;
                }

                $.ajax({
                    url: self.isEdit ? '/admin/support/update/' + self.id : '/admin/support/add',
                    type: 'POST',
                    dataType: 'json',
                    data: self.supportContent,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    window.location.href="/cyberholic-system/support/list";
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

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
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
