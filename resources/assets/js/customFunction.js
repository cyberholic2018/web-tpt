toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


$(function () {
    $('#nav-btn').click(function () {
        $(this).toggleClass('open');
        $('.netone-nav').slideToggle();
    });

    $(window).resize(function () {
        var width = $(window).width();

        if (width > 768) {
            $('.netone-nav').show();
            $('#nav-btn').removeClass('open');
        } else {
            $('.netone-nav').hide();
        }
    });


});

$(document).ready(function() {
    $('.loading-bar').fadeOut('fast');
});
