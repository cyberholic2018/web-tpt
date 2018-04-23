/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
/******/ })
/************************************************************************/
/******/ ({

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(189);


/***/ }),

/***/ 189:
/***/ (function(module, exports) {

$(function () {
    $('#toogle-search-form').on('click', function () {
        $('#search-section').fadeToggle('fast');

        if ($('#search-section')[0].className === "open") {
            $(this).html('<i class="fa fa-search" aria-hidden="true"></i>');
            $('#search-section').removeClass('open');
        } else {
            if (document.getElementById('search-section').style.display === 'block') {
                $(this).html('<i class="fa fa-times" aria-hidden="true"></i>');
                $('#search-section').addClass('open');
            }
        }
    });

    $('.scroll-down-btn').on('click', function () {
        var body = window.opera ? document.compatMode == "CSS1Compat" ? $('html') : $('body') : $('html,body');

        body.animate({
            scrollTop: $('.numbertwo').offset().top
        }, 1000);
    });

    $('#side-bar-btn').on('click', function () {
        if ($(this).hasClass('active')) {
            closeMenu($(this));
        } else {
            showMenu($(this));
        }
    }), $('.gray-layer').on('click', function () {
        closeMenu($('#side-bar-btn'));
    }),

    //Check to see if the window is top if not then display button
    scrollupBtn();
    $(window).scroll(function () {
        scrollupBtn();
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // $('img').lazyload();

    $('.nav-btn').click(function () {
        $('.nav-btn').toggleClass('open');
        $('body').toggleClass('hide-overflow');
        $('.mg-nav-section').fadeToggle();
    });

    $(window).resize(function () {
        var width = $(window).width();

        if (width > 991) {
            $('.mg-nav-section').show();
            $('.nav-btn').removeClass('open');
        } else {
            $('.mg-nav-section').hide();
        }
        if ($(this).width() > 991) {
            $('ul.main-nav').find('li').hover(function () {
                $(this).find('ul').css("display", "block");
            }, function () {
                $(this).find('ul').css("display", "none");
            });
        } else {
            $('ul.main-nav').find('li').hover(function () {
                $(this).find('ul').css("display", "none");
            });
        }
    });

    $('ul.main-nav').find('li').on('click', function () {
        var list = $(this);
        var downArrow = list.find('i.fa-angle-down');
        var subUl = list.find('ul');

        subUl.fadeToggle();
    });

    var cartContent = [];

    // Object.observe(cartContent, function(change) {
    // }),

    function scrollupBtn() {
        if ($(window).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    }

    function showMenu(btn) {
        $('body').css('overflow', 'hidden');
        $('#side-bar-btn').addClass('active');
        $('.menu-panel').fadeIn(200, function () {
            $('.menu-section').removeClass('hide').addClass('fadeInLeft animated');
            btn.css('margin-left', '300px');
        });
    }

    function closeMenu(btn) {
        $('body').css('overflow', 'initial');
        $('#side-bar-btn').removeClass('active');
        $('.menu-section').removeClass('fadeInLeft animated').addClass('fadeOutLeft animated').fadeOut(500, function () {
            $('.menu-panel').fadeOut(200, function () {
                $('.menu-section').removeClass('fadeOutLeft animated').addClass('hide').removeAttr('style');
            });
        });

        btn.css('margin-left', '0px');
    }

    function addSingleProduct(guid) {

        $('.add-btn').hide();
        $('.add-loading').show();
        $.ajax({
            url: '/cart/add/single/' + guid,
            type: 'GET',
            dataType: 'json'
        }).done(function (response) {
            console.log(response);
            toastr["success"]("成功加入購物車");
        }).fail(function () {
            console.log("error");
        }).always(function () {
            $('.add-btn').show();
            $('.add-loading').hide();
            console.log("complete");
        });
    }
});

/***/ })

/******/ });