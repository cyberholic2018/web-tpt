<template>
    <div class="row">
        <div class="col-md-12 margin-top-30">
            <h3>焦點商品</h3>
        </div>

        <div class="col-md-3 margin-top-30" v-for="item in products">
            <div class="focus-product">
                <img class="focus-img" src="images/p-01.jpg" v-bind:src="item.featureImage">
                <div class="focus-info">
                    <span>{{ item.title }}</span>
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
                products: []
            }
        },
        created: function () {
            this.getProduct()
        },
        methods: {
            getProduct: function () {
                var self = this;

                $.ajax({
                    url: '/products/popular',
                    type: 'GET',
                    cache: false,
                    dataType: 'json'
                })
                .done(function(result) {
                    result.data.forEach(function (item) {
                        self.products.push({
                            guid: item.guid,
                            title: item.title,
                            featureImage: item.featureImage
                        });
                    });
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
