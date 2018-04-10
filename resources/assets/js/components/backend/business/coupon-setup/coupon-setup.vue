<template>
    <div class="row">
        <div class="col-md-12" v-if="isLoaded">
            <div v-if="coupons.length === 0" class="alert alert-info" role="alert">
                目前沒有優惠券，趕快去新增一個吧!
            </div>
            <table v-else class="table field-table">
                <thead>
                    <tr>
                        <th width="30"><input type="checkbox" v-model="allSelect" v-on:change="toggleAllSelect()"></th>
                        <th>優惠券序號</th>
                        <th>優惠券類別</th>
                        <th>折扣金額</th>
                        <th>建立時間</th>
                        <th width="50" style="text-align: center">狀態</th>
                        <th width="50" style="text-align: center">編輯</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in coupons" >
                        <td><input type="checkbox" v-model="item.isSelect"></td>
                        <td>{{ item.serialNumber }}</td>
                        <td>{{ item.discountType }}</td>
                        <td>{{ item.couponAmount }}</td>
                        <td>{{ item.created_at }}</td>
                        <td style="padding-top: 8px;">
                            <toggle-button v-model="item.isPublish" @change="togglePublish(item)"/>
                        </td>
                        <td align="center"><span @click="editPost(item)" class="glyphicon glyphicon-pencil" style="cursor: pointer"></span></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td><input type="checkbox" v-model="allSelect" v-on:change="toggleAllSelect()"></td>
                        <td colspan="7">
                            <table>
                                <tr>
                                    <td>
                                        <select class="form-control" v-model="listFunction" style="width:120px">
                                            <option value="default">請選擇動作</option>
                                            <option value="deletePost">刪除</option>
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
                coupons: [],
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

            this.getPostData('/admin/business/coupon/get');
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

                this.coupons.forEach(function (item) {
                    if (!item.isSelect) {
                        status = false;
                    }
                });

                return status;
            },
            selectedCoupons: function () {
                var selectedRows = [];

                this.coupons.forEach(function (item) {
                    if (item.isSelect) {
                        selectedRows.push(item.guid);
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
                    this.coupons.forEach(function (item) {
                        item.isSelect = false;
                    });
                } else {
                    this.coupons.forEach(function (item) {
                        item.isSelect = true;
                    });
                }
            },
            doListFunction: function () {
                var self = this;

                switch (this.listFunction) {
                    case 'deletePost':
                        var checkDelete = confirm('確認要刪除所有已選取的優惠券嗎?');

                            if (checkDelete) {
                                this.deleteCoupons();
                            } else {
                                console.log('stop');
                            }
                        break;
                    default:
                        console.log(this.listFunction);
                }

            },
            editCoupon: function (item) {
                console.log(item);
                // window.location = '/cyberholic-system/post/edit/' + item.guid;
            },
            deleteCoupons: function () {
                var self = this;
                var token = this.token;

                // return console.log(self.selectedCoupons);

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/business/coupon/delete',
                    type: 'POST',
                    dataType: 'json',
                    cache: false,
                    data: {
                        data: self.selectedCoupons
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    self.showMessage('success', '優惠券刪除成功');
                    self.getPostData('/admin/business/coupon/get');
                })
                .fail(function() {
                    self.showMessage('success', '優惠券刪除失敗');
                })
                .always(function() {
                    $('.loading-bar').fadeOut('100');
                });

            },
            nextPage: function () {
                this.getPostData(this.next_page_url);
            },
            prevPage: function () {
                this.getPostData(this.prev_page_url);
            },
            gotoPage: function (item) {
                this.getPostData('/admin/business/coupon/get?page=' + item.pageNumber);
            },
            getPostData: function (url) {
                var self = this;

                var getPosts = new Promise(function (resolve, reject) {
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

                Promise.all([getPosts])
                       .then(function (results) {
                           var couponData = results[0];

                           self.coupons = [];
                           self.next_page_url = couponData.next_page_url;
                           self.prev_page_url = couponData.prev_page_url;
                           self.current_page = couponData.current_page;
                           self.total = couponData.total;
                           self.eachPage = [];

                           couponData.data.forEach(function (item) {

                               self.coupons.push({
                                   guid: item.guid,
                                   serialNumber: item.serialNumber,
                                   discountType: item.discountType,
                                   couponAmount: item.couponAmount,
                                   created_at: item.created_at,
                                   isPublish: Boolean(item.isPublish),
                                   isSelect: false
                               });
                           });

                           for (var i = 0; i < couponData.last_page; i++) {
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
            showMessage: function (type, string) {
                toastr[type](string)
                this.message = string;
            }
        }
    }
</script>
