(function(global) {
    'use strict';

    var CH = CH || {};

    /**
     *
     */
    CH.stringFormat = function(guid) { 

        console.log(guid);
        // $.ajax({
        //     url: '/cart/add/single/' + guid,
        //     type: 'GET',
        //     dataType: 'json',
        // })
        // .done(function(response) {
        //     console.log(response);
        //     toastr["success"]("成功加入購物車");
        // })
        // .fail(function() {
        //     console.log("error");
        // })
        // .always(function() {
        //     $('.add-btn').show();
        //     $('.add-loading').hide();
        //     console.log("complete");
        // });
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
