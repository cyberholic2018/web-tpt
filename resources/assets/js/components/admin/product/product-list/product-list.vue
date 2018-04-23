<template lang="html">
    <div class="row">
        <div class="col-md-12" v-if="isLoaded">
            <form v-on:submit.prevent="searchPost">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for..." v-model="keyword">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="submit">搜尋文章</button>
                  </span>
                </div><!-- /input-group -->
            </form>
            <div v-if="products.length === 0" class="alert alert-info" role="alert">
                目前沒有商品，趕快去新增一個吧!
            </div>
            <table v-else class="table field-table">
                <thead>
                    <tr>
                        <th width="30"><input type="checkbox" v-model="allSelect" v-on:change="toggleAllSelect()"></th>
                        <th width="30"></th>
                        <th @click="toggleOrder('title')">商品名稱</th>
                        <th @click="toggleOrder('author')">建立者</th>
                        <th @click="toggleOrder('category')">類別</th>
                        <!-- <th @click="toggleOrder('locale')">語系</th> -->
                        <th @click="toggleOrder('created_at')">建立時間</th>
                        <!-- <th width="50" style="text-align: center">狀態</th> -->
                        <!-- <th width="50" style="text-align: center">編輯</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" >
                        <td><input type="checkbox" v-model="item.isSelect"></td>
                        <td>
                            <img v-if="item.featureImage" v-bind:src="thumb(item.featureImage)" width="30" alt="">
                            <img v-else src="https://dummyimage.com/100x100/ccc/fff.gif&text=？" width="30" alt="No image.">
                        </td>
                        <td><a :href="editLink(item)">{{ item.title }}</a></td>
                        <td>{{ item.authorName }}</td>
                        <td>{{ item.category }}</td>
                        <!-- <td>
                            <span v-if="item.locale == 'en'"><strong>英文</strong></span>
                            <span v-if="item.locale == 'zh-TW'"><strong>繁體中文</strong></span>
                        </td> -->
                        <td>{{ item.created_at }}</td>
                        <!-- <td style="padding-top: 8px;">
                            <toggle-button v-model="item.isPublish" @change="togglePublish(item)"/>
                        </td> -->
                        <!-- <td align="center"><span @click="editProduct(item)" class="glyphicon glyphicon-pencil" style="cursor: pointer"></span></td> -->
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
                                            <option value="deleteProduct">刪除</option>
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
                products: [],
                next_page_url: null,
                prev_page_url: null,
                total: null,
                current_page: null,
                eachPage: [],
                allSelect: false,
                token: $('meta[name="csrf-token"]').attr('content'),
                listFunction: 'default',
                urlPath: '/admin/product/get',
                defaultOrder: 'asc',
                keyword: null,
            }
        },
        created: function () {
            var self = this;

            this.getProductData('/admin/product/get');
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

                this.products.forEach(function (item) {
                    if (!item.isSelect) {
                        status = false;
                    }
                });

                return status;
            },
            selectedProducts: function () {
                var selectedRows = [];

                this.products.forEach(function (item) {
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
                    this.products.forEach(function (item) {
                        item.isSelect = false;
                    });
                } else {
                    this.products.forEach(function (item) {
                        item.isSelect = true;
                    });
                }
            },
            editLink: function (item) {
                return '/cyberholic-system/product/edit/' + item.guid;
            },
            doListFunction: function () {
                var self = this;

                switch (this.listFunction) {
                    case 'deleteProduct':
                        var checkDelete = confirm('確認要刪除所有已選取的商品嗎?');

                            if (checkDelete) {
                                this.deleteProducts();
                            } else {
                                console.log('stop');
                            }
                        break;
                    default:
                        console.log(this.listFunction);
                }

            },
            editProduct: function (item) {
                window.location = '/cyberholic-system/product/edit/' + item.guid;
            },
            deleteProducts: function () {
                var self = this;
                var token = this.token;

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/product/delete',
                    type: 'POST',
                    dataType: 'json',
                    cache: false,
                    data: {
                        data: self.selectedProducts
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(result) {
                    self.showMessage('success', '商品刪除成功');
                    self.getProductData('/admin/product/get');
                })
                .fail(function() {
                    self.showMessage('success', '商品刪除失敗');
                })
                .always(function() {
                    // self.getProductData('/admin/product/get');
                    $('.loading-bar').fadeOut('100');
                });

            },
            nextPage: function () {
                this.getProductData(this.next_page_url);
            },
            prevPage: function () {
                this.getProductData(this.prev_page_url);
            },
            gotoPage: function (item) {
                this.getProductData(this.urlPath + '?page=' + item.pageNumber);
            },
            searchPost: function () {
                var self = this;

                $('.loading-bar').fadeIn('100');

                if (self.keyword === null) {
                    this.urlPath = '/admin/product/get';
                    this.getProductData('/admin/product/get');
                } else if (self.keyword === '') {
                    this.urlPath = '/admin/product/get';
                    this.getProductData('/admin/product/get');
                } else {
                    this.urlPath = '/admin/product/search/' + self.keyword;
                    this.getProductData('/admin/product/search/' + self.keyword);
                }
            },
            getProductData: function (url) {
                var self = this;
                var token = this.token;

                var getProducts = new Promise(function (resolve, reject) {
                    $.ajax({
                        url: url,
                        type: 'GET',
                        cache: false,
                        dataType: 'json',
                        data: {
                            flag: self.flag ? flag : 'id',
                            order: self.defaultOrder
                        }
                    })
                    .done(function(result) {
                        resolve(result);
                    })
                    .fail(function(error) {
                        reject(error);
                    });
                });
                var getCategory = new Promise(function (resolve, reject) {
                    $.ajax({
                        url: '/admin/category/get',
                        type: 'POST',
                        cache: false,
                        data: {
                            type: 'product'
                        },
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    })
                    .done(function(result) {
                        resolve(result);
                    })
                    .fail(function(error) {
                        reject(error);
                    });
                });

                Promise.all([getProducts, getCategory])
                       .then(function (results) {
                           var productData = results[0];
                           var categoryData = results[1];
                           var categoryTitle;

                           self.products = [];
                           self.next_page_url = productData.next_page_url;
                           self.prev_page_url = productData.prev_page_url;
                           self.current_page = productData.current_page;
                           self.total = productData.total;
                           self.eachPage = [];

                           productData.data.forEach(function (item) {
                               categoryTitle = null

                               for (var i = 0; i < categoryData.length; i++) {
                                   if (item.category === categoryData[i].guid) {
                                       categoryTitle = categoryData[i].title;
                                   }
                               }

                               self.products.push({
                                   guid: item.guid,
                                   title: item.title,
                                   authorName: item.authorName,
                                   category: categoryTitle,
                                   price: item.price,
                                   locale: item.locale,
                                   featureImage: item.featureImage,
                                   isPublish: Boolean(item.isPublish),
                                   created_at: item.created_at,
                                   isSelect: false
                               });
                           });

                           for (var i = 0; i < productData.last_page; i++) {
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
            toggleOrder: function (flag) {
                this.defaultOrder = this.defaultOrder == 'asc' ? 'desc' : 'asc';
                this.getProductData(this.urlPath, flag);
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
