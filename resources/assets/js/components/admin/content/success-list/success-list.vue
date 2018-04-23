<template>
    <div class="row">
        <div class="col-md-12" v-if="isLoaded">
            <div v-if="content.length === 0" class="alert alert-info" role="alert">
                目前沒有影音項目，趕快去新增一個吧!
            </div>
            <table v-else class="table field-table">
                <thead>
                    <tr>
                        <th width="30"><input type="checkbox" v-model="allSelect" v-on:change="toggleAllSelect()"></th>
                        <th>合作夥伴</th>
                        <th>連結</th>
                        <th>建立時間</th>
                        <!-- <th width="50" style="text-align: center">編輯</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in content" >
                        <td><input type="checkbox" v-model="item.isSelect"></td>
                        <td><a v-bind:href="editVideo(item)">{{ item.title }}</a></td>
                        <td>{{ item.url }}</td>
                        <td>{{ item.created_at }}</td>
                        <!-- <td align="center"><span @click="editVideo(item)" class="glyphicon glyphicon-pencil" style="cursor: pointer"></span></td> -->
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><input type="checkbox" v-model="allSelect" v-on:change="toggleAllSelect()"></td>
                        <td colspan="6">
                            <table>
                                <tr>
                                    <td>
                                        <select class="form-control" v-model="listFunction" style="width:120px">
                                            <option value="default">請選擇動作</option>
                                            <option value="deleteSupport">刪除</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button class="btn btn-info" @click="doListFunction()">執行</button>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <ul class="pagination">
                <li v-if="prev_page_url">
                    <a href="#" @click="prevPage()">上一頁</a>
                </li>
                <li v-for="item in eachPage">
                    <a href="#" @click="gotoPage(item)">{{item.pageNumber}}</a>
                </li>
                <li v-if="next_page_url">
                    <a href="#" @click="nextPage()">下一頁</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ToggleButton from 'vue-js-toggle-button';

    Vue.use(ToggleButton);
    export default {
        data() {
            return {
                isLoaded: false,
                content: [],
                next_page_url: null,
                prev_page_url: null,
                total: null,
                current_page: null,
                eachPage: [],
                allSelect: false,
                token: $('meta[name="csrf-token"]').attr('content'),
                listFunction: 'default'
            }
        },
        created: function () {
            var self = this;

            this.getVideoData('/success/get');
        },
        watch: {
            isAllSelected: {
                handler: function (isAllSelected, oldVal) {
                    var self = this;

                    this.allSelect = isAllSelected;
                }
            }
        },
        computed: {
            isAllSelected: function () {
                var status = true;

                this.content.forEach(function (item) {
                    if (!item.isSelect) {
                        status = false;
                    }
                });

                return status;
            },
            selectedContent: function () {
                var selectedRows = [];

                this.content.forEach(function (item) {
                    if (item.isSelect) {
                        selectedRows.push(item.id);
                    }
                });

                return selectedRows;
            }
        },
        methods: {
            togglePublish: function (item) {
                console.log(item);
            },
            toggleAllSelect: function () {
                if (this.isAllSelected) {
                    this.content.forEach(function (item) {
                        item.isSelect = false;
                    });
                } else {
                    this.content.forEach(function (item) {
                        item.isSelect = true;
                    });
                }
            },
            doListFunction: function () {
                var self = this;

                switch (this.listFunction) {
                    case 'deleteSupport':
                        var checkDelete = confirm('確認要刪除所有已選取的支援項目嗎?');

                            if (checkDelete) {
                                this.deleteContent();
                            } else {
                                console.log('stop');
                            }
                        break;
                    default:
                        console.log(self.selectedContent);
                        console.log(this.listFunction);
                }

            },
            editVideo: function (item) {
                return '/cyberholic-system/partner/success/edit/' + item.id;
                // window.location = '/cyberholic-system/video/edit/' + item.id;
            },
            deleteContent: function () {
                var self = this;
                var token = this.token;

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/success/delete',
                    type: 'POST',
                    dataType: 'json',
                    cache: false,
                    data: {
                        data: self.selectedContent
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    self.showMessage('success', '支援項目刪除成功');
                    self.getVideoData('/success/get');
                })
                .fail(function() {
                    self.showMessage('success', '支援項目刪除失敗');
                })
                .always(function() {
                    // self.getVideoData('/success/get');
                    $('.loading-bar').fadeOut('100');
                });

            },
            nextPage: function () {
                this.getVideoData(this.next_page_url);
            },
            prevPage: function () {
                this.getVideoData(this.prev_page_url);
            },
            gotoPage: function (item) {
                this.getVideoData('/success/get?page=' + item.pageNumber);
            },
            getVideoData: function (url) {
                var self = this;

                var getContent = new Promise(function (resolve, reject) {
                    $.ajax({
                        url: url,
                        type: 'GET',
                        cache: false,
                        dataType: 'json'
                    })
                    .done(function(result) {
                        resolve(result);
                    })
                    .fail(function(error) {
                        reject(error);
                    });
                });

                Promise.all([getContent])
                       .then(function (results) {
                           var supportData = results[0];

                           self.content = [];
                           self.next_page_url = supportData.next_page_url;
                           self.prev_page_url = supportData.prev_page_url;
                           self.current_page = supportData.current_page;
                           self.total = supportData.total;
                           self.eachPage = [];

                           supportData.data.forEach(function (item) {

                               self.content.push({
                                   id: item.id,
                                   title: item.title,
                                   url: item.customField1,
                                   created_at: item.created_at,
                                   isSelect: false
                               });
                           });

                           for (var i = 0; i < supportData.last_page; i++) {
                               self.eachPage.push({
                                   pageNumber: i + 1,
                               });
                           }

                           self.isLoaded = true;
                           $('.loading-bar').fadeOut('100');
                       }).catch(function (e){
                           console.log(e);
                       });
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
                toastr[type](string)
                this.message = string;
            }
        }
    }
</script>
