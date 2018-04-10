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
/******/ 	return __webpack_require__(__webpack_require__.s = 299);
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(300);


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('checkout', __webpack_require__(301));

var app = new Vue({
    el: '#checkout'
});

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(302)
/* template */
var __vue_template__ = __webpack_require__(303)
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
Component.options.__file = "resources\\assets\\js\\components\\frontend\\checkout\\checkout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64bf292e", Component.options)
  } else {
    hotAPI.reload("data-v-64bf292e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

$('.loading-bar').fadeOut('100');
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            token: $('meta[name="csrf-token"]').attr('content'),
            // shippingMethod: $('#shipping_method').val(),
            // shippingCosts: 60,
            amount: null,
            amountString: null,
            shippingTag: $('#shipping_method').val(),
            paymentMethod: null,
            point: null,
            percentage: 0,
            pointUsage: 0,
            owner: null,
            isCouponUse: false,
            Temperature: null,
            cart: [],
            couponNumber: '',
            shippingMethods: [],
            customerParametor: {
                ReceiverName: '',
                ReceiverCellPhone: '',
                ReceiverEmail: '',
                ReceiverCity: '',
                ReceiverPort: '',
                ReceiverAddress: '',
                remarks: '',
                newMemberPassword: '',
                receipt: '',
                taxId: ''
            },
            formValidation: {
                ReceiverName: true,
                ReceiverCellPhone: true,
                ReceiverEmail: true,
                ReceiverPort: true,
                ReceiverCity: true,
                ReceiverAddress: true
            },
            cvsParametor: {
                MerchantTradeNo: null,
                LogisticsSubType: '',
                CVSStoreID: '',
                CVSStoreName: null,
                CVSAddress: null,
                CVSTelephone: null
            },
            isAuth: false,
            isAllow: false,
            addNewMember: false
        };
    },

    created: function created() {
        var self = this;
        var token = this.token;

        var checkAuthPromise = new Promise(function (resolve, reject) {
            $.ajax({
                url: '/checkAuth',
                type: 'POST',
                cache: false,
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (response) {
                resolve(response);
            }).fail(function (error) {
                reject(error);
            });
        });

        var getShippingMethodPromise = new Promise(function (resolve, reject) {
            $.ajax({
                url: '/shipping/get',
                type: 'GET',
                cache: false,
                dataType: 'json'
            }).done(function (response) {
                resolve(response.data);
            }).fail(function (error) {
                reject(error);
            });
        });

        var getCartContentPromise = new Promise(function (resolve, reject) {
            $.ajax({
                url: '/cart/get',
                type: 'GET',
                cache: false,
                dataType: 'json'
            }).done(function (response) {
                resolve(response);
            }).fail(function (error) {
                reject(error);
            });
        });

        var checkCartTempPromise = new Promise(function (resolve, reject) {
            $.ajax({
                url: '/cart/checkTemp',
                type: 'GET',
                cache: false,
                dataType: 'json'
            }).done(function (response) {
                resolve(response);
            }).fail(function (error) {
                reject(error);
            });
        });

        Promise.all([checkAuthPromise, getShippingMethodPromise, getCartContentPromise, checkCartTempPromise]).then(function (results) {
            var authStatus = results[0];
            var shippingMethods = results[1];
            var cartContent = results[2];
            var cartTemp = results[3];

            self.isAuth = authStatus.auth;

            if (authStatus.auth) {
                self.getPoint();
            } else {
                self.point = 0;
                self.owner = 'guest';
            }

            self.Temperature = cartTemp.Temperature;

            shippingMethods.forEach(function (item) {
                if (item.shippingTemperature === cartTemp.Temperature) {
                    self.shippingMethods.push(item);
                }
            });

            self.amount = parseInt(cartContent.amount.replace(/,/g, ''));
            self.amountString = cartContent.amount;

            if (cartContent.cart.length === 0) {
                window.location.href = '/';
            }

            cartContent.cart.forEach(function (item) {
                self.cart.push({
                    id: item.id,
                    Name: item.id.title,
                    price: item.price,
                    qty: item.qty,
                    rowId: item.rowId,
                    total: item.total
                });
            });
        });
    },
    computed: {
        shippingCosts: function shippingCosts() {
            var self = this;

            var shippingPrice = 0;

            this.methodsTranslate.forEach(function (item) {
                if (self.shippingTag == item.id) {
                    if (item.freeShipping && self.amount >= item.freeShippingMininum) {
                        // console.log(item);
                        shippingPrice = 0;
                    } else {
                        shippingPrice = item.shippingPrice;
                    }
                }
            });

            return shippingPrice;
        },
        shippingMethod: function shippingMethod() {
            var self = this;

            var shippingMethod = 'delivery';

            this.shippingMethods.forEach(function (item) {
                if (self.shippingTag == item.id) {
                    shippingMethod = item.shippingType;
                }
            });

            return shippingMethod;
        },
        methodsTranslate: function methodsTranslate() {
            var shippingMethods = this.shippingMethods;
            var cache = [];

            shippingMethods.forEach(function (item) {
                cache.push({
                    freeShipping: item.freeShipping == 1 ? true : false,
                    freeShippingMininum: item.freeShippingMininum,
                    id: item.id,
                    shippingPrice: item.shippingPrice,
                    shippingTemperature: item.shippingTemperature,
                    shippingTitle: item.shippingTitle,
                    shippingType: item.shippingType
                });
            });
            return cache;
        }
    },
    methods: {
        getAddress: function getAddress() {
            var self = this;

            $.ajax({
                url: '/getAddress/' + self.owner,
                type: 'GET',
                dataType: 'json'
            }).done(function (response) {
                // console.log(response);
                // customerParametor: {
                //     ReceiverName: '',
                //     ReceiverCellPhone: '',
                //     ReceiverEmail: '',
                //     ReceiverCity: '',
                //     ReceiverPort: '',
                //     ReceiverAddress: '',
                //     remarks: '',
                //     newMemberPassword: ''
                // },

                self.customerParametor.ReceiverName = response.fullName;
                self.customerParametor.ReceiverCellPhone = response.cellPhone;
                // self.customerParametor.ReceiverEmail = response.email;
                self.customerParametor.ReceiverCity = response.city;
                self.customerParametor.ReceiverPort = response.postcode;
                self.customerParametor.ReceiverAddress = response.address;
            }).fail(function () {}).always(function () {});
        },
        getPoint: function getPoint() {
            var self = this;

            $.ajax({
                url: '/checkout/getPoint',
                type: 'GET',
                dataType: 'json'
            }).done(function (response) {
                self.point = response.data.point;
                self.percentage = response.data.percentage;
                self.owner = response.data.guid;
                self.customerParametor.ReceiverEmail = response.data.email;

                console.log(response);
                self.getAddress();
                $('#point-input').attr('max', response.data.point);
            }).fail(function (error) {
                var status = error.status;

                if (status === 401) {
                    self.point = 0;
                    self.percentage = 0;
                    self.owner = 'guest';
                }
            }).always(function () {});
        },
        createOrder: function createOrder() {
            var self = this;
            var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
            var method;

            // return console.log(this.customerParametor.taxId.length);

            if (this.paymentMethod == 'cod' && this.shippingMethod == 'cvs') {
                method = 'cvsCod';
            } else if (this.shippingMethod == 'cvs' && this.paymentMethod !== 'cod') {
                method = 'cvs';
            } else if (this.shippingMethod !== 'cvs') {
                method = 'aoi';
            }

            if (this.customerParametor.taxId.length > 0) {
                if (this.customerParametor.taxId.length !== 8) {
                    return this.showMessage('warning', '統一編號錯誤');
                }
            }

            this.validateForm();

            if (!Number.isInteger(parseInt(this.customerParametor.ReceiverCellPhone)) || this.customerParametor.ReceiverCellPhone.length < 10 || this.customerParametor.ReceiverCellPhone.length > 10) {
                this.showMessage('warning', '請確認行動電話格式正確。');
                return;
            }

            // return console.log(emailRule.test(this.customerParametor.ReceiverEmail));
            if (!emailRule.test(this.customerParametor.ReceiverEmail)) {
                this.showMessage('warning', '請確認電子郵件格式正確。');
                return;
            }

            if (!this.isAllow) {
                this.showMessage('warning', '請確認運送資訊填寫是否完整。');
                return;
            }

            switch (method) {
                case 'cvsCod':
                    // 超商取貨付款
                    this.cvsCod();
                    break;
                case 'cvs':
                    // 超商純取貨
                    this.aoiMethod();
                    break;
                case 'aoi':
                    //All in one
                    this.aoiMethod();
                    break;
                default:

            }
        },
        aoiMethod: function aoiMethod() {
            if (this.paymentMethod === 'cod' || this.paymentMethod === null) {
                alert('請選擇付款方式');
                return;
            }
            var self = this;
            var form = document.createElement("form");
            var _token = document.createElement("input");
            var ChoosePayment = document.createElement("input");
            var TotalAmount = document.createElement("input");
            var cartInfo = document.createElement("textArea");
            var pointUsage = document.createElement("input");
            var owner = document.createElement("input");
            var shippingMethod = document.createElement("input");
            var shippingCosts = document.createElement("input");
            var shippingTarget = document.createElement("textArea");
            var addNewMember = document.createElement("input");
            var password = document.createElement("input");
            var Temperature = document.createElement("input");
            var taxId = document.createElement("input");
            var receipt = document.createElement("input");
            var pointCount = document.createElement("input");

            form.id = "checkout-form";

            _token.setAttribute("type", "hidden");

            form.method = "POST";
            form.action = "/order-payment";

            _token.value = this.token;
            _token.name = "_token";
            form.appendChild(_token);

            pointCount.value = Math.ceil((parseInt(this.amount) - parseInt(this.pointUsage) + parseInt(this.shippingCosts)) * (parseInt(this.percentage) / 100));
            pointCount.name = "pointCount";
            form.appendChild(pointCount);

            taxId.value = this.customerParametor.taxId;
            taxId.name = "taxId";
            form.appendChild(taxId);

            receipt.value = this.customerParametor.receipt;
            receipt.name = "receipt";
            form.appendChild(receipt);

            ChoosePayment.value = this.paymentMethod;
            ChoosePayment.name = "ChoosePayment";
            form.appendChild(ChoosePayment);

            Temperature.value = this.Temperature;
            Temperature.name = "Temperature";
            form.appendChild(Temperature);

            pointUsage.value = this.pointUsage;
            pointUsage.name = "pointUsage";
            form.appendChild(pointUsage);

            owner.value = this.owner;
            owner.name = "owner";
            form.appendChild(owner);

            // TotalAmount.value = (this.amount - this.pointUsage) + this.shippingCosts;
            TotalAmount.value = this.amount;
            TotalAmount.name = "TotalAmount";
            form.appendChild(TotalAmount);

            cartInfo.value = JSON.stringify(this.cart);
            cartInfo.name = "cartInfo";
            form.appendChild(cartInfo);

            shippingMethod.value = this.shippingMethod;
            shippingMethod.name = "shippingMethod";
            form.appendChild(shippingMethod);

            shippingCosts.value = this.shippingCosts;
            shippingCosts.name = "shippingCosts";
            form.appendChild(shippingCosts);

            if (this.shippingMethod === 'cvs') {
                if (this.cvsParametor.MerchantTradeNo === null) {
                    alert('請先選擇取貨超商。');
                    return;
                }

                shippingTarget.value = JSON.stringify({
                    MerchantTradeNo: this.cvsParametor.MerchantTradeNo,
                    LogisticsSubType: this.cvsParametor.LogisticsSubType,
                    CVSStoreID: this.cvsParametor.CVSStoreID,
                    CVSStoreName: this.cvsParametor.CVSStoreName,
                    CVSAddress: this.cvsParametor.CVSAddress,
                    CVSTelephone: this.cvsParametor.CVSTelephone,
                    ReceiverName: this.customerParametor.ReceiverName,
                    ReceiverCellPhone: this.customerParametor.ReceiverCellPhone,
                    ReceiverEmail: this.customerParametor.ReceiverEmail
                });
                shippingTarget.name = "shippingTarget";
                form.appendChild(shippingTarget);
            } else {
                shippingTarget.value = JSON.stringify(_defineProperty({
                    ReceiverName: this.customerParametor.ReceiverName,
                    ReceiverCellPhone: this.customerParametor.ReceiverCellPhone,
                    ReceiverEmail: this.customerParametor.ReceiverEmail,
                    ReceiverCity: this.customerParametor.ReceiverCity,
                    ReceiverPort: this.customerParametor.ReceiverPort,
                    ReceiverAddress: this.customerParametor.ReceiverAddress
                }, 'ReceiverEmail', this.customerParametor.ReceiverEmail));
                shippingTarget.name = "shippingTarget";
                form.appendChild(shippingTarget);
            }

            addNewMember.value = this.addNewMember;
            addNewMember.name = "addNewMember";
            form.appendChild(addNewMember);

            password.value = this.customerParametor.newMemberPassword;
            password.name = "password";
            form.appendChild(password);

            document.body.appendChild(form);
            // return;
            form.submit();
            $('.loading-bar').fadeIn('100');
        },
        cvsCod: function cvsCod() {
            var self = this;
            var form = document.createElement("form");
            var LogisticsSubType = document.createElement("input");
            var ReceiverName = document.createElement("input");
            var ReceiverCellPhone = document.createElement("input");
            var ReceiverEmail = document.createElement("input");
            var ChoosePayment = document.createElement("input");
            var CVSStoreID = document.createElement("input");
            var TotalAmount = document.createElement("input");
            var IsCollection = document.createElement("input");
            var cartInfo = document.createElement("textArea");
            var pointUsage = document.createElement("input");
            var shippingMethod = document.createElement("input");
            var shippingTarget = document.createElement("textArea");
            var owner = document.createElement("input");
            var shippingCosts = document.createElement("input");
            var _token = document.createElement("input");
            var addNewMember = document.createElement("input");
            var password = document.createElement("input");
            var Temperature = document.createElement("input");
            var taxId = document.createElement("input");
            var receipt = document.createElement("input");
            var pointCount = document.createElement("input");

            if (this.amount > 4000) {
                this.showMessage('warning', '超商取貨付款最高代收金額為4000元，請更新您的訂單。');
                return;
            }

            form.id = "checkout-form";

            _token.setAttribute("type", "hidden");

            form.method = "POST";
            form.action = "/shop_option_reply";

            _token.value = this.token;
            _token.name = "_token";
            form.appendChild(_token);

            pointCount.value = Math.ceil((parseInt(this.amount) - parseInt(this.pointUsage) + parseInt(this.shippingCosts)) * (parseInt(this.percentage) / 100));
            pointCount.name = "pointCount";
            form.appendChild(pointCount);

            taxId.value = this.customerParametor.taxId;
            taxId.name = "taxId";
            form.appendChild(taxId);

            receipt.value = this.customerParametor.receipt;
            receipt.name = "receipt";
            form.appendChild(receipt);

            LogisticsSubType.value = this.cvsParametor.LogisticsSubType;
            LogisticsSubType.name = "LogisticsSubType";
            form.appendChild(LogisticsSubType);

            Temperature.value = this.Temperature;
            Temperature.name = "Temperature";
            form.appendChild(Temperature);

            IsCollection.value = 'Y';
            IsCollection.name = "IsCollection";
            form.appendChild(IsCollection);

            CVSStoreID.value = this.cvsParametor.CVSStoreID;
            CVSStoreID.name = "CVSStoreID";
            form.appendChild(CVSStoreID);

            ReceiverName.value = this.customerParametor.ReceiverName;
            ReceiverName.name = "ReceiverName";
            form.appendChild(ReceiverName);

            ReceiverCellPhone.value = this.customerParametor.ReceiverCellPhone;
            ReceiverCellPhone.name = "ReceiverCellPhone";
            form.appendChild(ReceiverCellPhone);

            ChoosePayment.value = this.paymentMethod;
            ChoosePayment.name = "ChoosePayment";
            form.appendChild(ChoosePayment);

            pointUsage.value = this.pointUsage;
            pointUsage.name = "pointUsage";
            form.appendChild(pointUsage);

            ReceiverEmail.value = this.customerParametor.ReceiverEmail;
            ReceiverEmail.name = "ReceiverEmail";
            form.appendChild(ReceiverEmail);

            owner.value = this.owner;
            owner.name = "owner";
            form.appendChild(owner);

            TotalAmount.value = this.amount;
            TotalAmount.name = "TotalAmount";
            form.appendChild(TotalAmount);

            shippingMethod.value = this.shippingMethod;
            shippingMethod.name = "shippingMethod";
            form.appendChild(shippingMethod);

            shippingCosts.value = this.shippingCosts;
            shippingCosts.name = "shippingCosts";
            form.appendChild(shippingCosts);

            cartInfo.value = JSON.stringify(this.cart);
            cartInfo.name = "cartInfo";
            form.appendChild(cartInfo);

            if (this.cvsParametor.MerchantTradeNo === null) {
                alert('請先選擇取貨超商。');
                return;
            }

            shippingTarget.value = JSON.stringify({
                MerchantTradeNo: this.cvsParametor.MerchantTradeNo,
                LogisticsSubType: this.cvsParametor.LogisticsSubType,
                CVSStoreID: this.cvsParametor.CVSStoreID,
                CVSStoreName: this.cvsParametor.CVSStoreName,
                CVSAddress: this.cvsParametor.CVSAddress,
                CVSTelephone: this.cvsParametor.CVSTelephone,
                ReceiverName: this.customerParametor.ReceiverName,
                ReceiverCellPhone: this.customerParametor.ReceiverCellPhone,
                ReceiverEmail: this.customerParametor.ReceiverEmail
            });
            shippingTarget.name = "shippingTarget";
            form.appendChild(shippingTarget);

            addNewMember.value = this.addNewMember;
            addNewMember.name = "addNewMember";
            form.appendChild(addNewMember);

            password.value = this.customerParametor.newMemberPassword;
            password.name = "password";
            form.appendChild(password);

            document.body.appendChild(form);
            form.submit();
            $('.loading-bar').fadeIn('100');
        },
        changePointUse: function changePointUse(action) {
            switch (action) {
                case 'up':
                    if (this.pointUsage >= this.point) {
                        this.pointUsage = this.point;
                        return;
                    } else if (this.pointUsage < 0) {
                        this.pointUsage = 0;
                        return;
                    } else {
                        this.pointUsage = parseInt(this.pointUsage) + 1;
                    }

                    break;
                case 'down':
                    if (this.pointUsage <= 0) {
                        this.pointUsage = 0;
                        return;
                    } else if (this.pointUsage > this.point) {
                        this.pointUsage = this.point;
                    } else {
                        this.pointUsage = parseInt(this.pointUsage) - 1;
                    }

                    break;
                default:

            }
        },
        pointInputValid: function pointInputValid() {
            if (this.pointUsage > this.point) {
                this.pointUsage = this.point;
            } else if (this.pointUsage < 0) {
                this.pointUsage = 0;
            } else if (this.pointUsage == "") {
                this.pointUsage = 0;
            }
        },
        validateForm: function validateForm() {
            var self = this;

            if (this.customerParametor.ReceiverName.length == 0) {
                this.formValidation.ReceiverName = false;
            } else {
                this.formValidation.ReceiverName = true;
            }

            if (this.customerParametor.ReceiverCellPhone.length === 0) {
                this.formValidation.ReceiverCellPhone = false;
            } else {
                this.formValidation.ReceiverCellPhone = true;
            }

            if (this.customerParametor.ReceiverEmail.length === 0) {
                this.formValidation.ReceiverEmail = false;
            } else {
                this.formValidation.ReceiverEmail = true;
            }

            if (this.customerParametor.ReceiverPort.length == 0) {
                this.formValidation.ReceiverPort = false;
            } else {
                this.formValidation.ReceiverPort = true;
            }

            if (this.customerParametor.ReceiverCity.length == 0) {
                this.formValidation.ReceiverCity = false;
            } else {
                this.formValidation.ReceiverCity = true;
            }

            if (this.customerParametor.ReceiverAddress.length === 0) {
                this.formValidation.ReceiverAddress = false;
            } else {
                this.formValidation.ReceiverAddress = true;
            }

            if (this.shippingMethod === 'cvs') {
                if (this.formValidation.ReceiverName && this.formValidation.ReceiverCellPhone && this.customerParametor.ReceiverEmail) {
                    this.isAllow = true;
                } else {
                    this.isAllow = false;
                }
            } else {
                if (this.formValidation.ReceiverName && this.formValidation.ReceiverCellPhone && this.customerParametor.ReceiverEmail && this.customerParametor.ReceiverPort && this.customerParametor.ReceiverCity && this.customerParametor.ReceiverAddress) {
                    this.isAllow = true;
                } else {
                    this.isAllow = false;
                }
            }
        },
        chooseCvs: function chooseCvs(shop) {
            var self = this;

            window.open('/getCvsTarget?shop=' + shop, 'cvsmap', 'width=1002,height=589');
            window.GetCvs = function (cvs) {
                var shop;

                switch (cvs.LogisticsSubType) {
                    case 'FAMIC2C':
                        shop = '全家店到店 - ';
                        break;
                    case 'UNIMARTC2C':
                        shop = '7-11 店到店 - ';
                        break;
                    case 'HILIFEC2C':
                        shop = '萊爾富店到店 - ';
                        break;
                    default:

                }
                self.cvsParametor.MerchantTradeNo = cvs.MerchantTradeNo;
                self.cvsParametor.LogisticsSubType = cvs.LogisticsSubType;
                self.cvsParametor.CVSStoreID = cvs.CVSStoreID;
                self.cvsParametor.CVSStoreName = shop + cvs.CVSStoreName;
                self.cvsParametor.CVSAddress = cvs.CVSAddress;
                self.cvsParametor.CVSTelephone = cvs.CVSTelephone;
            };
        },
        useCoupon: function useCoupon() {
            var self = this;
            var token = this.token;

            $.ajax({
                url: '/coupon/get/' + this.couponNumber,
                type: 'POST',
                dataType: 'json',
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function () {
                console.log("success");
            }).fail(function (status) {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        },
        showMessage: function showMessage(type, string) {
            toastr[type](string);
        }
    }
});

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.createOrder($event)
          }
        }
      },
      [
        _c("div", { staticClass: "col-md-7" }, [
          _c("div", { staticClass: "shipping-form" }, [
            _c("h4", [_vm._v("商品寄送資訊")]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-row" }, [
                  _c("label", { attrs: { for: "shipping-name" } }, [
                    _vm._v("收件人姓名 *")
                  ]),
                  _vm._v(" "),
                  !_vm.formValidation.ReceiverName
                    ? _c("strong", { staticStyle: { color: "#600000" } }, [
                        _vm._v("  此欄位為必填 *")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.customerParametor.ReceiverName,
                        expression: "customerParametor.ReceiverName"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "shipping-name",
                      placeholder: "",
                      required: ""
                    },
                    domProps: { value: _vm.customerParametor.ReceiverName },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.customerParametor,
                          "ReceiverName",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "shipping-phone" } }, [
                    _vm._v("收件人行動電話 *")
                  ]),
                  _vm._v(" "),
                  !_vm.formValidation.ReceiverCellPhone
                    ? _c("strong", { staticStyle: { color: "#600000" } }, [
                        _vm._v("  此欄位為必填 *")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.customerParametor.ReceiverCellPhone,
                        expression: "customerParametor.ReceiverCellPhone"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "shipping-phone",
                      placeholder: "",
                      required: ""
                    },
                    domProps: {
                      value: _vm.customerParametor.ReceiverCellPhone
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.customerParametor,
                          "ReceiverCellPhone",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "shipping-email" } }, [
                    _vm._v("收件人電子郵件 *")
                  ]),
                  _vm._v(" "),
                  !_vm.formValidation.ReceiverEmail
                    ? _c("strong", { staticStyle: { color: "#600000" } }, [
                        _vm._v("  此欄位為必填 *")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.customerParametor.ReceiverEmail,
                        expression: "customerParametor.ReceiverEmail"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      id: "shipping-email",
                      placeholder: "",
                      required: ""
                    },
                    domProps: { value: _vm.customerParametor.ReceiverEmail },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.customerParametor,
                          "ReceiverEmail",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.shippingMethod == "delivery"
              ? _c("div", { staticClass: "row" }, [
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-row" }, [
                      _c("label", { attrs: { for: "shipping-city" } }, [
                        _vm._v("縣市 *")
                      ]),
                      _vm._v(" "),
                      !_vm.formValidation.ReceiverCity
                        ? _c("strong", { staticStyle: { color: "#600000" } }, [
                            _vm._v("  此欄位為必填 *")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.customerParametor.ReceiverCity,
                            expression: "customerParametor.ReceiverCity"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "shipping-city",
                          placeholder: "",
                          required: ""
                        },
                        domProps: { value: _vm.customerParametor.ReceiverCity },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.customerParametor,
                              "ReceiverCity",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "shipping-port" } }, [
                        _vm._v("郵遞區號 *")
                      ]),
                      _vm._v("  \n                            "),
                      _c(
                        "a",
                        {
                          attrs: {
                            target: "_blank",
                            href:
                              "https://www.post.gov.tw/post/internet/SearchZone/index.jsp?ID=130107"
                          }
                        },
                        [_vm._v("郵遞區號查詢")]
                      ),
                      _vm._v(" "),
                      !_vm.formValidation.ReceiverPort
                        ? _c("strong", { staticStyle: { color: "#600000" } }, [
                            _vm._v("  此欄位為必填 *")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.customerParametor.ReceiverPort,
                            expression: "customerParametor.ReceiverPort"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "shipping-port",
                          placeholder: "",
                          required: ""
                        },
                        domProps: { value: _vm.customerParametor.ReceiverPort },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.customerParametor,
                              "ReceiverPort",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "shipping-address" } }, [
                        _vm._v("地址 *")
                      ]),
                      _vm._v(" "),
                      !_vm.formValidation.ReceiverAddress
                        ? _c("strong", { staticStyle: { color: "#600000" } }, [
                            _vm._v("  此欄位為必填 *")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.customerParametor.ReceiverAddress,
                            expression: "customerParametor.ReceiverAddress"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "shipping-address",
                          placeholder: "",
                          required: ""
                        },
                        domProps: {
                          value: _vm.customerParametor.ReceiverAddress
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.customerParametor,
                              "ReceiverAddress",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "shipping-note" } }, [
                _vm._v("訂單備註")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customerParametor.remarks,
                    expression: "customerParametor.remarks"
                  }
                ],
                staticClass: "form-control",
                staticStyle: { resize: "vertical", "min-height": "100px" },
                attrs: { name: "name", id: "shipping-note" },
                domProps: { value: _vm.customerParametor.remarks },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.customerParametor,
                      "remarks",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            !_vm.isAuth
              ? _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addNewMember,
                        expression: "addNewMember"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      id: "check-add-user",
                      placeholder: ""
                    },
                    domProps: {
                      checked: Array.isArray(_vm.addNewMember)
                        ? _vm._i(_vm.addNewMember, null) > -1
                        : _vm.addNewMember
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.addNewMember,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.addNewMember = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.addNewMember = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.addNewMember = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "check-add-user" } }, [
                    _vm._v("非會員申請加入會員")
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.isAuth && _vm.addNewMember
              ? _c("div", { staticClass: "form-group" }, [
                  _c("p", [
                    _vm._v(
                      "您輸入的Email即為帳號名稱，請在下方設定密碼，立即完成您的帳號建立。如果您已經建立過帳號，可直接在網頁上方登入。"
                    )
                  ]),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "new-member-password" } }, [
                    _vm._v("設定密碼 *")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.customerParametor.newMemberPassword,
                        expression: "customerParametor.newMemberPassword"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      id: "new-member-password",
                      placeholder: "",
                      required: ""
                    },
                    domProps: {
                      value: _vm.customerParametor.newMemberPassword
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.customerParametor,
                          "newMemberPassword",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h4", [_vm._v("三聯式發票資訊")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "您的發票會與訂單一併寄出，若您需要索取三聯式發票，請於下方欄位輸入即可。"
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "shipping-receipt" } }, [
              _vm._v("發票抬頭")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customerParametor.receipt,
                  expression: "customerParametor.receipt"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "shipping-receipt", placeholder: "" },
              domProps: { value: _vm.customerParametor.receipt },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.customerParametor,
                    "receipt",
                    $event.target.value
                  )
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "shipping-taxid" } }, [
              _vm._v("統一編號")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customerParametor.taxId,
                  expression: "customerParametor.taxId"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "shipping-taxid", placeholder: "" },
              domProps: { value: _vm.customerParametor.taxId },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customerParametor, "taxId", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-5" }, [
          _c("h4", [_vm._v("訂單資訊")]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "payment-gateway" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.cart, function(item) {
                    return _c("tr", [
                      _c("td", [
                        _vm._v(_vm._s(item.id.title) + " x " + _vm._s(item.qty))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticStyle: {
                            "text-align": "right",
                            "min-width": "50px"
                          }
                        },
                        [_vm._v("NT$ " + _vm._s(item.total))]
                      )
                    ])
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("小計")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticStyle: {
                          "text-align": "right",
                          "min-width": "50px"
                        }
                      },
                      [_vm._v("NT$ " + _vm._s(_vm.amountString))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("運送方式")]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "ul",
                        { staticClass: "shipping-method-list" },
                        _vm._l(_vm.methodsTranslate, function(item) {
                          return _c("li", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shippingTag,
                                  expression: "shippingTag"
                                }
                              ],
                              attrs: {
                                type: "radio",
                                name: "shipping-method",
                                id:
                                  item.shippingType +
                                  item.shippingTemperature +
                                  item.id
                              },
                              domProps: {
                                value: item.id,
                                checked: _vm._q(_vm.shippingTag, item.id)
                              },
                              on: {
                                change: function($event) {
                                  _vm.shippingTag = item.id
                                }
                              }
                            }),
                            _vm._v(" "),
                            item.freeShipping &&
                            _vm.amount >= item.freeShippingMininum
                              ? _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        item.shippingType +
                                        item.shippingTemperature +
                                        item.id
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.shippingTitle) + " 滿額免運"
                                    )
                                  ]
                                )
                              : _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        item.shippingType +
                                        item.shippingTemperature +
                                        item.id
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.shippingTitle) +
                                        " NT$ " +
                                        _vm._s(item.shippingPrice)
                                    )
                                  ]
                                )
                          ])
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.owner !== "guest"
                    ? _c("tr", [
                        _c("td", [
                          _vm._v("購物金使用：剩餘 " + _vm._s(_vm.point) + "元")
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { align: "right" } }, [
                          _c(
                            "div",
                            {
                              staticClass: "form-group",
                              staticStyle: { width: "125px" }
                            },
                            [
                              _c("div", { staticClass: "input-group" }, [
                                _c("span", { staticClass: "input-group-btn" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-default",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.changePointUse("down")
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-minus",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.pointUsage,
                                      expression: "pointUsage"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "has-error": _vm.pointUsage > _vm.point
                                  },
                                  staticStyle: {
                                    "text-align": "center",
                                    padding: "0px 10px"
                                  },
                                  attrs: {
                                    type: "number",
                                    id: "point-input",
                                    blur: _vm.pointInputValid(),
                                    min: "0"
                                  },
                                  domProps: { value: _vm.pointUsage },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.pointUsage = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "input-group-btn" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-default",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.changePointUse("up")
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-plus",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.shippingMethod == "cvs"
                    ? _c("tr", [
                        _c("td", { attrs: { colspan: "2" } }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("strong", [_vm._v("配送門市選擇 *")]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", {
                              staticClass: "cvs-btn mg-icon mg-icon-cvs-7-11",
                              on: {
                                click: function($event) {
                                  _vm.chooseCvs("UNIMARTC2C")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", {
                              staticClass:
                                "cvs-btn mg-icon mg-icon-cvs-familymart",
                              on: {
                                click: function($event) {
                                  _vm.chooseCvs("FAMIC2C")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", {
                              staticClass: "cvs-btn mg-icon mg-icon-cvs-hilife",
                              on: {
                                click: function($event) {
                                  _vm.chooseCvs("HILIFEC2C")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "form-control" }, [
                              _vm._v(_vm._s(_vm.cvsParametor.CVSStoreName))
                            ])
                          ])
                        ])
                      ])
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticStyle: {
                        "text-align": "right",
                        "min-width": "50px"
                      }
                    },
                    [
                      _vm._v(
                        "NT$ " +
                          _vm._s(
                            _vm.amount -
                              _vm.pointUsage +
                              parseInt(_vm.shippingCosts)
                          )
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.owner == "guest"
                  ? _c("tr", [_vm._m(2)])
                  : _c("tr", [
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticStyle: {
                            "text-align": "right",
                            "min-width": "50px"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                Math.ceil(
                                  (parseInt(_vm.amount) -
                                    parseInt(_vm.pointUsage)) *
                                    (parseInt(_vm.percentage) / 100)
                                )
                              ) +
                              " 元\n                            "
                          )
                        ]
                      )
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.shippingMethod == "cvs"
            ? _c("div", { staticClass: "col-md-12" })
            : _vm._e(),
          _vm._v(" "),
          _c("h4", [_vm._v("付款方式")]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "payment-methods" }, [
            _vm.shippingMethod == "cvs"
              ? _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "payment-cod" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.paymentMethod,
                          expression: "paymentMethod"
                        }
                      ],
                      attrs: {
                        type: "radio",
                        id: "payment-cod",
                        name: "payment-method-option",
                        value: "cod"
                      },
                      domProps: { checked: _vm._q(_vm.paymentMethod, "cod") },
                      on: {
                        change: function($event) {
                          _vm.paymentMethod = "cod"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("strong", [_vm._v("貨到付款")]),
                    _vm._v(" "),
                    _vm.paymentMethod == "cod"
                      ? _c("div", [
                          _c("p", [
                            _vm._v(
                              "貨到付款，若運送方式為超商取貨的話，付款方式即為到店取貨付款。"
                            )
                          ])
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "payment-ATM" } }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentMethod,
                      expression: "paymentMethod"
                    }
                  ],
                  attrs: {
                    type: "radio",
                    id: "payment-ATM",
                    name: "payment-method-option",
                    value: "ATM"
                  },
                  domProps: { checked: _vm._q(_vm.paymentMethod, "ATM") },
                  on: {
                    change: function($event) {
                      _vm.paymentMethod = "ATM"
                    }
                  }
                }),
                _vm._v(" "),
                _c("strong", [_vm._v("ATM轉帳付款")]),
                _vm._v(" "),
                _vm.paymentMethod == "ATM"
                  ? _c("div", [
                      _c("p", [
                        _vm._v(
                          "提供線上或者實體ATM轉帳付款的服務，確認付款完成後將會進行後續出貨的動作。"
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "payment-Credit" } }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.paymentMethod,
                      expression: "paymentMethod"
                    }
                  ],
                  attrs: {
                    type: "radio",
                    id: "payment-Credit",
                    name: "payment-method-option",
                    value: "Credit"
                  },
                  domProps: { checked: _vm._q(_vm.paymentMethod, "Credit") },
                  on: {
                    change: function($event) {
                      _vm.paymentMethod = "Credit"
                    }
                  }
                }),
                _vm._v(" "),
                _c("strong", [_vm._v("信用卡付款")]),
                _vm._v(" "),
                _vm.paymentMethod == "Credit"
                  ? _c("div", [
                      _c("p", [
                        _vm._v(
                          "提供線上刷卡的服務，確認付款完成後將會進行後續出貨的動作。"
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.paymentMethod == "cod" && _vm.shippingMethod == "cvs"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success btn-lg btn-block",
                  attrs: { type: "submit", name: "button" }
                },
                [_vm._v("超商取貨付款")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.shippingMethod == "cvs" && _vm.paymentMethod !== "cod"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success btn-lg btn-block",
                  attrs: { type: "submit", name: "button" }
                },
                [_vm._v("超商取貨")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.shippingMethod !== "cvs"
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success btn-lg btn-block",
                  attrs: { type: "submit", name: "button" }
                },
                [_vm._v("確認購買")]
              )
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("商品")]),
        _vm._v(" "),
        _c(
          "th",
          { staticStyle: { "text-align": "right", "min-width": "50px" } },
          [_vm._v("價格")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("總計")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "2" } }, [
      _c("br"),
      _vm._v(" "),
      _c("strong", [
        _c("a", { attrs: { href: "/register" } }, [
          _vm._v("加入會員即可獲得購物金50元，並享有購物金額10%紅利累積回饋")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("可累計購物金")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64bf292e", module.exports)
  }
}

/***/ })

/******/ });