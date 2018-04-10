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
/******/ 	return __webpack_require__(__webpack_require__.s = 274);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('order-list', __webpack_require__(276));

var app = new Vue({
    el: '#order-list'
});

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(277)
/* template */
var __vue_template__ = __webpack_require__(278)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\backend\\order\\order-list\\order-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6df4965f", Component.options)
  } else {
    hotAPI.reload("data-v-6df4965f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            merchantID: '',
            orderList: [],
            next_page_url: null,
            prev_page_url: null,
            total: null,
            current_page: null,
            eachPage: [],
            itemShowed: {},
            orderStatus: 'all',
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    watch: {
        orderStatus: function orderStatus(val) {
            console.log(val);
            this.getOrders('/order/get/' + val);
        }
    },
    created: function created() {
        this.getOrders('/order/get/' + this.orderStatus);
        $('.loading-bar').fadeOut('100');
    },
    methods: {
        toggleStatusModify: function toggleStatusModify() {
            console.log(this.itemShowed.statusModify);
            this.itemShowed.statusModify = this.itemShowed.statusModify ? false : true;
        },
        searchOrder: function searchOrder() {
            console.log(this.merchantID);
            this.getOrders('/order/search/' + this.merchantID);
        },
        statusViewChange: function statusViewChange(status) {
            this.orderStatus = status;
        },
        getOrders: function getOrders(url) {
            var self = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json'
            }).done(function (response) {
                self.orderList = [];
                self.next_page_url = response.next_page_url;
                self.prev_page_url = response.prev_page_url;
                self.current_page = response.current_page;
                self.total = response.total;
                self.eachPage = [];

                response.data.forEach(function (item) {
                    self.orderList.push({
                        guid: item.guid,
                        owner: item.owner,
                        merchantID: item.merchantID,
                        content: JSON.parse(item.content),
                        amount: item.amount,
                        pointUsage: item.pointUsage,
                        status: item.status,
                        orderStatus: item.orderStatus,
                        paymentStatus: item.paymentStatus,
                        paymentMethod: item.paymentMethod,
                        shippingMethod: item.shippingMethod,
                        ExpireDate: item.ExpireDate,
                        BankCode: item.BankCode,
                        PaymentType: item.PaymentType,
                        vAccount: item.vAccount,
                        shippingTarget: JSON.parse(item.shippingTarget),
                        remarks: item.remarks,
                        created_at: item.created_at,
                        statusModify: false
                    });
                });

                for (var i = 0; i < response.last_page; i++) {
                    self.eachPage.push({
                        pageNumber: i + 1
                    });
                }
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        },
        openModal: function openModal(item) {
            // console.log(item);
            this.itemShowed = {};
            this.itemShowed = item;

            if (this.itemShowed.statusModify) {
                this.itemShowed.statusModify = false;
            }

            $('#detail-modal').modal('show');
        },
        generateCvs: function generateCvs(temp) {
            var self = this;
            var token = this.token;

            $('.loading-bar').show();

            $.ajax({
                url: '/order/generate-cvs',
                type: 'POST',
                dataType: 'json',
                data: {
                    LogisticsType: self.itemShowed.shippingMethod === 'cvs' ? 'CVS' : 'Home',
                    LogisticsSubType: self.itemShowed.shippingMethod === 'cvs' ? self.itemShowed.shippingTarget.LogisticsSubType : 'TCAT',
                    ReceiverPort: self.itemShowed.shippingMethod !== 'cvs' ? self.itemShowed.shippingTarget.ReceiverPort : '',
                    Temperature: temp,
                    ReceiverAddress: self.itemShowed.shippingMethod !== 'cvs' ? self.itemShowed.shippingTarget.ReceiverCity + self.itemShowed.shippingTarget.ReceiverAddress : '',
                    TotalAmount: self.itemShowed.amount,
                    guid: self.itemShowed.guid,
                    ReceiverName: self.itemShowed.shippingTarget.ReceiverName,
                    ReceiverCellPhone: self.itemShowed.shippingTarget.ReceiverCellPhone,
                    ReceiverEmail: 'vincent7697@gmail.com',
                    CVSStoreID: self.itemShowed.shippingTarget.CVSStoreID
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (response) {
                if (response.RtnCode === '300') {
                    self.itemShowed.status = 'shippingGenerated';
                    self.itemShowed.shippingTarget.MerchantID = response.MerchantID;
                    self.itemShowed.shippingTarget.AllPayLogisticsID = response.AllPayLogisticsID;
                    self.itemShowed.shippingTarget.CVSPaymentNo = response.CVSPaymentNo;
                    self.itemShowed.shippingTarget.CVSValidationNo = response.CVSValidationNo;

                    self.orderList.forEach(function (item) {
                        if (item.guid === self.itemShowed.guid) {
                            item.status = 'shippingGenerated';
                            item.shippingTarget.MerchantID = response.MerchantID;
                            item.shippingTarget.AllPayLogisticsID = response.AllPayLogisticsID;
                            item.shippingTarget.CVSPaymentNo = response.CVSPaymentNo;
                            item.shippingTarget.CVSValidationNo = response.CVSValidationNo;
                        }
                    });
                }
            }).fail(function () {
                console.log("error");
            }).always(function () {
                $('.loading-bar').hide();
                console.log("complete");
            });
        },
        modifyOrderStatus: function modifyOrderStatus() {
            var self = this;
            var token = this.token;

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: '/order/updateStatus',
                type: 'POST',
                dataType: 'json',
                data: {
                    guid: self.itemShowed.guid,
                    orderStatus: self.itemShowed.orderStatus
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (response) {
                console.log(response);
                $('#detail-modal').modal('hide');
            }).fail(function () {
                console.log("error");
            }).always(function () {
                $('.loading-bar').fadeOut('100');
                console.log("complete");
            });
        },
        generateSheet: function generateSheet() {
            var self = this;
            var token = this.token;

            $('.loading-bar').show();

            $.ajax({
                url: '/order/generate-sheet',
                type: 'POST',
                dataType: 'json',
                data: {
                    LogisticsSubType: self.itemShowed.shippingMethod !== 'cvs' ? 'Home' : self.itemShowed.shippingTarget.LogisticsSubType,
                    MerchantID: self.itemShowed.shippingTarget.MerchantID,
                    AllPayLogisticsID: self.itemShowed.shippingTarget.AllPayLogisticsID,
                    CVSPaymentNo: self.itemShowed.shippingTarget.CVSPaymentNo,
                    CVSValidationNo: self.itemShowed.shippingTarget.CVSValidationNo
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (response) {}).fail(function (xhr, status, error) {
                var ifrm = document.createElement("iframe");

                ifrm.id = 'sheet-iframe';
                ifrm.style.width = "100%";
                ifrm.style.height = "200px";
                ifrm.style.border = "0";

                document.getElementById('sheet-frame-container').appendChild(ifrm);
                document.getElementById('sheet-iframe').contentDocument.write(xhr.responseText);
                $('#sheet-modal').modal('show');

                $('body').on('click', function () {
                    $('#sheet-iframe').remove();
                });
            }).always(function () {
                $('.loading-bar').hide();
                console.log("complete");
            });
        },
        nextPage: function nextPage() {
            this.getOrders(this.next_page_url);
        },
        prevPage: function prevPage() {
            this.getOrders(this.prev_page_url);
        },
        gotoPage: function gotoPage(item) {
            this.getOrders('/order/get?page=' + item.pageNumber);
        }
    }
});

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.searchOrder($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "input-group", staticStyle: { width: "250px" } },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.merchantID,
                    expression: "merchantID"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "訂單編號" },
                domProps: { value: _vm.merchantID },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.merchantID = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("ul", { staticClass: "order-cate-list" }, [
        _c(
          "li",
          {
            class: { active: _vm.orderStatus == "all" },
            on: {
              click: function($event) {
                _vm.statusViewChange("all")
              }
            }
          },
          [_vm._v("全部")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.orderStatus == "unpaid" },
            on: {
              click: function($event) {
                _vm.statusViewChange("unpaid")
              }
            }
          },
          [_vm._v("未付款")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            class: { active: _vm.orderStatus == "paid" },
            on: {
              click: function($event) {
                _vm.statusViewChange("paid")
              }
            }
          },
          [_vm._v("已付款")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("table", { staticClass: "table field-table" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.orderList, function(item) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(item.merchantID))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.created_at))]),
              _vm._v(" "),
              _c("td", [
                item.paymentStatus === "unpaid"
                  ? _c(
                      "span",
                      { staticStyle: { color: "red", "font-weight": "bold" } },
                      [_vm._v("未付款")]
                    )
                  : _c(
                      "span",
                      {
                        staticStyle: { color: "green", "font-weight": "bold" }
                      },
                      [_vm._v("已付款")]
                    )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(item.content[0].Name) +
                    " x " +
                    _vm._s(item.content[0].qty) +
                    " ..."
                )
              ]),
              _vm._v(" "),
              _c("td", [
                item.orderStatus == "undisposed"
                  ? _c(
                      "span",
                      {
                        staticStyle: { color: "brown", "font-weight": "bold" }
                      },
                      [_vm._v("未處理")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.orderStatus == "disposed"
                  ? _c(
                      "span",
                      {
                        staticStyle: { color: "green", "font-weight": "bold" }
                      },
                      [_vm._v("已出貨")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.orderStatus == "canceled"
                  ? _c(
                      "span",
                      { staticStyle: { color: "red", "font-weight": "bold" } },
                      [_vm._v("已取消")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.orderStatus == "success"
                  ? _c(
                      "span",
                      { staticStyle: { color: "blue", "font-weight": "bold" } },
                      [_vm._v("完成")]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { "text-align": "center" } }, [
                _vm._v(_vm._s(item.amount))
              ]),
              _vm._v(" "),
              _c("td", { attrs: { align: "center" } }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default btn-sm",
                    on: {
                      click: function($event) {
                        _vm.openModal(item)
                      }
                    }
                  },
                  [_vm._v("查看")]
                )
              ])
            ])
          })
        )
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "pagination" },
        [
          _vm.prev_page_url
            ? _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        _vm.prevPage()
                      }
                    }
                  },
                  [_vm._v("上一頁")]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.eachPage, function(item) {
            return _c("li", [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      _vm.gotoPage(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item.pageNumber))]
              )
            ])
          }),
          _vm._v(" "),
          _vm.next_page_url
            ? _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        _vm.nextPage()
                      }
                    }
                  },
                  [_vm._v("下一頁")]
                )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "detail-modal", role: "dialog" }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-md" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("table", { staticClass: "table product-detail-table" }, [
                  _c("tr", [
                    _c("td", [_vm._v("訂單編號")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.itemShowed.merchantID))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("商品內容")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("table", { staticClass: "table" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.itemShowed.content, function(item) {
                            return _c("tr", [
                              _c("td", [_vm._v(_vm._s(item.Name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.qty))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.price))])
                            ])
                          })
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("訂單金額")]),
                    _vm._v(" "),
                    _c("td", [_vm._v("NT$ " + _vm._s(_vm.itemShowed.amount))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("付款方式")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.itemShowed.paymentMethod === "ATM"
                        ? _c("span", [_vm._v("ATM轉帳")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.paymentMethod === "Credit"
                        ? _c("span", [_vm._v("信用卡付款")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.paymentMethod === "cod"
                        ? _c("span", [_vm._v("貨到付款")])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [
                      _vm._v(
                        "\n                                    付款狀態\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.itemShowed.paymentStatus === "paid"
                        ? _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "bold",
                                color: "green"
                              }
                            },
                            [_vm._v("已付款")]
                          )
                        : _c(
                            "span",
                            {
                              staticStyle: {
                                "font-weight": "bold",
                                color: "red"
                              }
                            },
                            [_vm._v("未付款")]
                          ),
                      _vm._v(" "),
                      _vm.itemShowed.paymentMethod !== "cod" &&
                      _vm.itemShowed.paymentStatus === "paid" &&
                      _vm.itemShowed.status === "unpaid" &&
                      _vm.itemShowed.shippingMethod === "delivery"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-success btn-xs",
                              staticStyle: { "margin-left": "10px" },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.generateCvs("0001")
                                }
                              }
                            },
                            [_vm._v("已付款，產生常溫物流單")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.paymentMethod !== "cod" &&
                      _vm.itemShowed.paymentStatus === "paid" &&
                      _vm.itemShowed.status === "unpaid" &&
                      _vm.itemShowed.shippingMethod === "delivery"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-success btn-xs",
                              staticStyle: { "margin-left": "10px" },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.generateCvs("0002")
                                }
                              }
                            },
                            [_vm._v("已付款，產生低溫物流單")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.paymentMethod !== "cod" &&
                      _vm.itemShowed.paymentStatus === "paid" &&
                      _vm.itemShowed.status === "unpaid" &&
                      _vm.itemShowed.shippingMethod === "cvs"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-success btn-xs",
                              staticStyle: { "margin-left": "10px" },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.generateCvs("0002")
                                }
                              }
                            },
                            [_vm._v("已付款，產生超商物流單")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.paymentMethod !== "cod" &&
                      _vm.itemShowed.paymentStatus === "paid" &&
                      _vm.itemShowed.status === "shippingGenerated"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-xs",
                              staticStyle: { "margin-left": "10px" },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.generateSheet()
                                }
                              }
                            },
                            [_vm._v("已產生物流單，點我列印繳費單")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.paymentMethod === "cod"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-success btn-xs",
                              staticStyle: { "margin-left": "10px" },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.generateSheet()
                                }
                              }
                            },
                            [_vm._v("已產生貨到付款物流單，點我列印繳費單")]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("訂單狀態")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.itemShowed.statusModify
                        ? _c("div", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.itemShowed.orderStatus,
                                    expression: "itemShowed.orderStatus"
                                  }
                                ],
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.itemShowed,
                                      "orderStatus",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _vm.itemShowed.orderStatus == "undisposed"
                                  ? _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "undisposed",
                                          selected: ""
                                        }
                                      },
                                      [_vm._v("未處理")]
                                    )
                                  : _c(
                                      "option",
                                      { attrs: { value: "undisposed" } },
                                      [_vm._v("未處理")]
                                    ),
                                _vm._v(" "),
                                _vm.itemShowed.orderStatus == "disposed"
                                  ? _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "disposed",
                                          selected: ""
                                        }
                                      },
                                      [_vm._v("已出貨")]
                                    )
                                  : _c(
                                      "option",
                                      { attrs: { value: "disposed" } },
                                      [_vm._v("已出貨")]
                                    ),
                                _vm._v(" "),
                                _vm.itemShowed.orderStatus == "canceled"
                                  ? _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "canceled",
                                          selected: ""
                                        }
                                      },
                                      [_vm._v("已取消")]
                                    )
                                  : _c(
                                      "option",
                                      { attrs: { value: "canceled" } },
                                      [_vm._v("已取消")]
                                    ),
                                _vm._v(" "),
                                _vm.itemShowed.orderStatus == "success"
                                  ? _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "success",
                                          selected: ""
                                        }
                                      },
                                      [_vm._v("完成")]
                                    )
                                  : _c(
                                      "option",
                                      { attrs: { value: "success" } },
                                      [_vm._v("完成")]
                                    )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                attrs: { type: "button", name: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.modifyOrderStatus()
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-check",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            )
                          ])
                        : _c("div", [
                            _vm.itemShowed.orderStatus == "undisposed"
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "brown",
                                      "font-weight": "bold"
                                    }
                                  },
                                  [_vm._v("未處理")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.itemShowed.orderStatus == "disposed"
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "green",
                                      "font-weight": "bold"
                                    }
                                  },
                                  [_vm._v("已出貨")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.itemShowed.orderStatus == "canceled"
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "red",
                                      "font-weight": "bold"
                                    }
                                  },
                                  [_vm._v("已取消")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.itemShowed.orderStatus == "success"
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      color: "blue",
                                      "font-weight": "bold"
                                    }
                                  },
                                  [_vm._v("完成")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                attrs: { type: "button", name: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.toggleStatusModify()
                                  }
                                }
                              },
                              [_vm._v("更改狀態")]
                            )
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("運送方式")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.itemShowed.shippingMethod === "delivery"
                        ? _c("span", [_vm._v("國內宅配")])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.shippingMethod === "cvs"
                        ? _c("span", [_vm._v("超商取貨")])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("客戶資訊")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.itemShowed.shippingTarget
                        ? _c("table", { staticClass: "table" }, [
                            _c("tr", [
                              _c("td", [_vm._v("客戶名稱")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.itemShowed.shippingTarget.ReceiverName
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("客戶電話")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.itemShowed.shippingTarget
                                      .ReceiverCellPhone
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("電子郵件")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.itemShowed.shippingTarget.ReceiverEmail
                                  )
                                )
                              ])
                            ])
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("運送標的")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm.itemShowed.shippingMethod === "cvs"
                        ? _c("table", { staticClass: "table" }, [
                            _c("tr", [
                              _c("td", [_vm._v("取貨店家")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.itemShowed.shippingTarget.CVSStoreName
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("店家地址")]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(
                                    _vm.itemShowed.shippingTarget.CVSAddress
                                  )
                                )
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.itemShowed.shippingMethod === "delivery"
                        ? _c("span", [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(
                                  _vm.itemShowed.shippingTarget.ReceiverPort +
                                    _vm.itemShowed.shippingTarget.ReceiverCity +
                                    _vm.itemShowed.shippingTarget
                                      .ReceiverAddress
                                ) +
                                "\n                                    "
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._m(4)
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(5)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-btn" }, [
      _c(
        "button",
        { staticClass: "btn btn-default", attrs: { type: "submit" } },
        [_vm._v("搜尋訂單")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("訂單編號")]),
        _vm._v(" "),
        _c("th", [_vm._v("購買日期時間")]),
        _vm._v(" "),
        _c("th", [_vm._v("付款狀態")]),
        _vm._v(" "),
        _c("th", [_vm._v("訂單內容")]),
        _vm._v(" "),
        _c("th", [_vm._v("訂單狀態")]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center" } }, [
          _vm._v("訂單金額")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "text-align": "center" } }, [_vm._v("操作")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("h4", { staticClass: "modal-title" }, [_vm._v("訂單詳細資訊")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("商品")]),
        _vm._v(" "),
        _c("th", [_vm._v("數量")]),
        _vm._v(" "),
        _c("th", [_vm._v("單價")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "sheet-modal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-md" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [_vm._v("配送單資訊")])
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "modal-body",
              attrs: { id: "sheet-frame-container" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-default",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              )
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6df4965f", module.exports)
  }
}

/***/ })

/******/ });