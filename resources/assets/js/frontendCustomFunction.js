
$(function () {

    updateLayout();


    $('#nav-btn').click(function () {
        $(this).toggleClass('open');
        $('.site-nav').slideToggle();
    });

    $(window).resize(function () {
        updateLayout();
    });

    function updateLayout() {
        var width = $(window).width();

        if (width > 986) {
            $('.site-nav').show();
            $('#nav-btn').removeClass('open');
        } else {
            $('.site-nav').hide();
        }

        if (width > 1182) {
            $('#logo-section').addClass('col-md-3').removeClass('col-md-12');
            $('#nav-section').addClass('col-md-9').removeClass('col-md-12');
            $('.site-nav').addClass('pull-right');
        } else {
            $('#logo-section').addClass('col-md-12').removeClass('col-md-3');
            $('#nav-section').addClass('col-md-12').removeClass('col-md-9');
            $('.site-nav').removeClass('pull-right');
        }
    }
});

$(document).ready(function() {
    $('.loading-bar').fadeOut('fast');
});
