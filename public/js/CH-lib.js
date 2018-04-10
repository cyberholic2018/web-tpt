(function(global) {
    'use strict';

    var CH = CH || {};

    var isRoom = false;
    var isEmpty = false;

    window.token = $('meta[name="csrf-token"]').attr('content');

    /**
     * Get Cart information
     */
    CH.getCartContent = function () {

        return 'test';
    }

    /**
     * 立即結帳
     */
    CH.checkoutImmediately = function(guid) {
        var self = this;

        $.ajax({
            url: '/cart/add/single/' + guid,
            type: 'POST',
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-CSRF-TOKEN', window.token);
            }
        })
        .done(function(response) {
            toastr["success"]("成功加入購物車");
            $('button.cart').find('img').attr('src', '/img/icon/cart-full.svg');
            window.location.href = '/cart';
        })
        .fail(function() {
            // console.log("error");
        })
        .always(function() {
            $('.add-btn').show();
            $('.add-loading').hide();
            $('.loading-bar').fadeOut('100');
            // console.log("complete");
        });

    }


    /**
     * 新增單一商品至購物車
     */
    CH.addSingleProductToCart = function(guid) {
        $('.loading-bar').fadeIn('100');

        $.ajax({
            url: '/cart/get',
            type: 'GET',
            dataType: 'json'
        })
        .done(function(response) {
            var cartContent = response.cart;
            isRoom = false;
            isEmpty = false;

            if (cartContent.length == 0) {
                isEmpty = true;
            }


            cartContent.forEach(function (item) {
                if (item.id.Temperature == 'room') {
                    isRoom = true;
                }
            });

            getProduct(guid);
            $('button.cart').find('img').attr('src', '/img/icon/cart-full.svg');
        })
        .fail(function() {
            // console.log("error");
        })
        .always(function() {
            $('.add-btn').show();
            $('.add-loading').hide();
            $('.loading-bar').fadeOut('100');
            // console.log("complete");
        });
    };

    /**
     * 新增多數商品至購物車
     */
    CH.addProductToCart = function (guid, quantity) {
        $('.loading-bar').fadeIn('100');

        $.ajax({
            url: '/cart/get',
            type: 'GET',
            dataType: 'json'
        })
        .done(function(response) {
            var cartContent = response.cart;
            isRoom = false;
            isEmpty = false;

            if (cartContent.length == 0) {
                isEmpty = true;
            }

            // console.log(cartContent)

            cartContent.forEach(function (item) {
                if (item.id.Temperature == 'room') {
                    isRoom = true;
                }
            });

            // return console.log(isRoom);

            $('button.cart').find('img').attr('src', '/img/icon/cart-full.svg');

            getProduct(guid, quantity);
        })
        .fail(function() {
            // console.log("error");
        })
        .always(function() {
            $('.add-btn').show();
            $('.add-loading').hide();
            $('.loading-bar').fadeOut('100');
            // console.log("complete");
        });
    }

    /**
     * 新增單數商品
     */
    function addSingle(guid) {
        $('.loading-bar').fadeIn('100');

        $.ajax({
            url: '/cart/add/single/' + guid,
            type: 'POST',
            dataType: 'json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-CSRF-TOKEN', window.token);
            }
        })
        .done(function(response) {
            // console.log(response);
            toastr["success"]("成功加入購物車");
            // console.log(CH.getCartContent());
            $('button.cart').find('img').attr('src', '/img/icon/cart-full.svg');
        })
        .fail(function() {
            // console.log("error");
        })
        .always(function() {
            $('.add-btn').show();
            $('.add-loading').hide();
            $('.loading-bar').fadeOut('100');
            // console.log("complete");
        });
    }

    /**
     * 新增複數商品
     */
    function addMultiple(guid, quantity) {
        $('.loading-bar').fadeIn('100');

        $.ajax({
            url: '/cart/add/' + guid,
            type: 'POST',
            dataType: 'json',
            data: {
                quantity: parseInt(quantity)
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-CSRF-TOKEN', window.token);
            }
        })
        .done(function(response) {
            // console.log(response);
            toastr["success"]("成功加入購物車");
            $('button.cart').find('img').attr('src', '/img/icon/cart-full.svg');
        })
        .fail(function() {
            // console.log("error");
        })
        .always(function() {
            $('.add-btn').show();
            $('.add-loading').hide();
            $('.loading-bar').fadeOut('100');
        });
    }

    /**
     * 查詢商品
     */
    function getProduct(guid, quantity) {
        $('.loading-bar').fadeIn('100');

        $.ajax({
            url: '/products/get/' + guid,
            type: 'GET',
            dataType: 'json',
        })
        .done(function(response) {

            if (isEmpty) {
                if (quantity === undefined) {
                    addSingle(guid);
                } else {
                    addMultiple(guid, quantity);
                }
                // console.log('加入購物車');
            } else {
                if (response.data.Temperature == 'room') {
                    if (isRoom) {
                        // console.log('加入購物車 room');
                        if (quantity === undefined) {
                            addSingle(guid);
                        } else {
                            addMultiple(guid, quantity);
                        }
                    } else {
                        toastr["warning"]("購物車內已放入鮮品，欲購買一般溫層之商品請重新建立訂單。");
                        // console.log('購物車內已放入鮮品，欲購買一般溫層之商品請重新建立訂單。');
                    }
                }
                if (response.data.Temperature == 'refrigeration') {
                    if (isRoom) {
                        toastr["warning"]("購物車內已放入一般溫層之商品，欲購買鮮品請重新建立訂單。");
                        // console.log('購物車內已放入一般溫層之商品，欲購買鮮品請重新建立訂單。');
                    } else {
                        if (quantity === undefined) {
                            addSingle(guid);
                        } else {
                            addMultiple(guid, quantity);
                        }
                        // console.log('加入購物車。 refrigeration');
                    }
                }
            }

        })
        .fail(function() {
            // console.log("error");
        })
        .always(function() {
            // console.log("complete");
            $('.loading-bar').fadeOut('100');
        });

    }

    /**
     * 刪除單一商品
     */
    CH.removeSingleProduct = function(rowid) {
        var checkDelete = confirm("確認要移除此商品");

        if (checkDelete) {
            $.ajax({
                url: '/cart/delete/single/' + rowid,
                type: 'POST',
                dataType: 'json',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', window.token);
                }
            })
            .done(function(response) {
                // console.log(response);
                location.reload();
            })
            .fail(function() {
                // console.log("error");
                toastr["error"]("移除商品失敗");
            })
            .always(function() {
                $('.add-btn').show();
                $('.add-loading').hide();
                // console.log("complete");
            });
        }
    };

    if (typeof module != 'undefined' && module.exports) {
        module.exports = CH;
    } else if (typeof define === 'function' && define.amd) {
        define('CH', [], function() {
            return CH;
        });
    } else {
        global.CH = CH;
    }

}(this));
