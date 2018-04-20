<template>
    <div class="row">
        <div class="col-md-3">
            <ul class="product-category">
                <li v-for="item in categories" v-bind:id="item.guid" v-bind:class="{ active: item.isActive }" @click="getByCategory(item.guid)">{{ item.title }}</li>
            </ul>
        </div>
        <div class="col-md-9">
            <!-- <div v-for="item in products" class="product-content" :style="item.productStyle">
                <div class="product-title">
                    <a :href="gotDetail(item.guid)">{{ item.title }}</a>
                </div>
            </div> -->
            <div v-for="item in products" class="row product-content-horizon">
                <div class="col-md-4 product-feature-image" :style="item.productStyle">
                    <!-- <img v-bind:src="item.featureImage"> -->
                </div>
                <div class="col-md-8 product-info">
                    <a class="product-title" :href="gotDetail(item.guid)">
                        <h4>{{ item.title }}</h4>
                    </a>
                    <hr>
                    <div class="product-content" v-html="item.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    $('.loading-bar').fadeOut('100');
    export default {
        data() {
            return {
                categories: [],
                products: [],
                firstLoad: true
            }
        },
        created: function () {
            this.getCategory();
        },
        methods: {
            gotDetail: function (guid) {
                return '/solutionDetail/' + guid;
            },
            getByCategory: function (guid) {
                var self = this;

                $.ajax({
                    url: '/products/byCategory/' + guid,
                    type: 'get',
                    cache: false,
                    dataType: 'json',
                    data: {param1: 'value1'}
                })
                .done(function(result) {
                    console.log(result);
                    self.products = [];

                    result.data.data.forEach(function (item) {
                        self.products.push({
                            guid: item.guid,
                            title: item.title,
                            featureImage: item.featureImage,
                            content: item.shortDescription,
                            productStyle: 'background: url("' + item.featureImage + '") center center / contain no-repeat;'
                        });
                    });

                    self.categories.forEach(function (item) {
                        if (item.guid === guid) {
                            item.isActive = true;
                        } else {
                            item.isActive = false;
                        }
                    });

                    if (window.location.search.split('=')[1] !== undefined) {
                        if (self.firstLoad) {
                            setTimeout(function () {
                                $('#' + window.location.search.split('=')[1]).click();
                            }, 10);
                            self.firstLoad = false;
                        }
                    }
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            getCategory: function () {
                var self = this;

                $.ajax({
                    url: '/products/category',
                    type: 'GET',
                    cache: false,
                    dataType: 'json'
                })
                .done(function(result) {
                    result.data.forEach(function (item) {
                        self.categories.push({
                            title: item.title,
                            guid: item.guid,
                            isActive: false
                        });
                    });

                    self.categories[0].isActive = true;

                    self.getByCategory(self.categories[0].guid);
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            }
        }
    }
</script>
