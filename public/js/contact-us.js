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
/******/ 	return __webpack_require__(__webpack_require__.s = 345);
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

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('contact-us', __webpack_require__(347));

var app = new Vue({
    el: '#contact-us'
});

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(348)
/* template */
var __vue_template__ = __webpack_require__(349)
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
Component.options.__file = "resources\\assets\\js\\components\\frontend\\contact-us\\contact-us.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c156249", Component.options)
  } else {
    hotAPI.reload("data-v-3c156249", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 348:
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

$('.loading-bar').fadeOut('100');

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            formContent: {
                name: null,
                email: null,
                phone: null,
                where: null,
                type: "NULL",
                content: null
            },
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    methods: {
        sendContact: function sendContact() {
            var self = this;
            var token = this.token;
            var captchaValidate = grecaptcha.getResponse();
            var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

            if (this.formContent.name === null) {
                this.showMessage('warning', '請填入您的姓名');
                return;
            }

            if (this.formContent.name !== undefined) {
                if (this.formContent.name.trim() === '') {
                    this.showMessage('warning', '請填入您的姓名');
                    return;
                }
            }

            if (this.formContent.email === null) {
                this.showMessage('warning', '請填入您的電子郵件');
                return;
            }

            if (this.formContent.email !== undefined) {
                if (this.formContent.email.trim() === '') {
                    this.showMessage('warning', '請填入您的電子郵件');
                    return;
                }

                if (this.formContent.email.search(emailRule) === -1) {
                    this.showMessage('warning', '電子郵件格式錯誤');
                    return;
                }
            }

            if (this.formContent.phone === null) {
                this.showMessage('warning', '請填入您的電話號碼');
                return;
            }

            if (this.formContent.phone !== undefined) {
                if (this.formContent.phone.trim() === '') {
                    this.showMessage('warning', '請填入您的電話號碼');
                    return;
                }
            }

            if (this.formContent.content === null) {
                this.showMessage('warning', '請填入您的諮詢內容');
                return;
            }

            if (this.formContent.content !== undefined) {
                if (this.formContent.content.trim() === '') {
                    this.showMessage('warning', '請填入您的諮詢內容');
                    return;
                }
            }

            if (this.formContent.type === "NULL") {
                this.showMessage('warning', '請選擇您的諮詢類別');
                return;
            }

            if (captchaValidate !== '') {
                $('.mail-sending').fadeIn('100');

                $.ajax({
                    url: '/mail/send',
                    type: 'POST',
                    dataType: 'json',
                    data: self.formContent,
                    beforeSend: function beforeSend(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                }).done(function () {
                    alert('信件寄送成功!');
                    self.formContent = {
                        name: null,
                        email: null,
                        phone: null,
                        where: null,
                        type: null,
                        content: null
                    };
                }).fail(function () {
                    console.log("error");
                }).always(function () {
                    $('.mail-sending').fadeOut('100');
                });
            } else {
                this.showMessage('warning', '請勾選驗證');
                return;
            }
        },
        showMessage: function showMessage(type, string) {
            toastr[type](string);
        }
    }
});

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("table", { staticClass: "contact-form", attrs: { width: "100%" } }, [
        _c("tr", [
          _c("td", [
            _c("label", { attrs: { for: "name" } }, [_vm._v("您的大名(必填)")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formContent.name,
                  expression: "formContent.name"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "name" },
              domProps: { value: _vm.formContent.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formContent, "name", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            _c("label", { attrs: { for: "email" } }, [_vm._v("E-mail(必填)")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formContent.email,
                  expression: "formContent.email"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "email" },
              domProps: { value: _vm.formContent.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formContent, "email", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            _c("label", { attrs: { for: "phone" } }, [
              _vm._v("電話號碼(必填)")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formContent.phone,
                  expression: "formContent.phone"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "phone" },
              domProps: { value: _vm.formContent.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formContent, "phone", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            _c("label", { attrs: { for: "where" } }, [
              _vm._v("您是從哪裡知道我們的?")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formContent.where,
                  expression: "formContent.where"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "where" },
              domProps: { value: _vm.formContent.where },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formContent, "where", $event.target.value)
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-6" }, [
      _c("table", { staticClass: "contact-form", attrs: { width: "100%" } }, [
        _c("tr", [
          _c("td", [
            _c("label", { attrs: { for: "type" } }, [_vm._v("諮詢項目")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formContent.type,
                    expression: "formContent.type"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "type" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.formContent,
                      "type",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "NULL" } }, [
                  _vm._v("諮詢內容")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "詢價(報價)" } }, [
                  _vm._v("詢價(報價)")
                ]),
                _vm._v(" "),
                _c("option", { attrs: { value: "售後服務" } }, [
                  _vm._v("售後服務")
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("td", [
            _c("label", { attrs: { for: "content" } }, [
              _vm._v("諮詢內容 (必填)")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formContent.content,
                  expression: "formContent.content"
                }
              ],
              staticClass: "form-control",
              staticStyle: { resize: "vertical" },
              attrs: { name: "content", rows: "8" },
              domProps: { value: _vm.formContent.content },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formContent, "content", $event.target.value)
                }
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c("table", { staticClass: "contact-form", attrs: { width: "100%" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c("tr", [
          _c("td", { attrs: { align: "center" } }, [
            _c(
              "button",
              {
                staticClass: "btn btn-lg contact-submit-btn",
                attrs: { type: "button", name: "button" },
                on: {
                  click: function($event) {
                    _vm.sendContact()
                  }
                }
              },
              [_vm._v("送出")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", { attrs: { align: "center" } }, [
        _c("div", {
          staticClass: "g-recaptcha",
          attrs: { "data-sitekey": "6Lf13TIUAAAAAFeq8picDJ9DVpMwioBqfFQZdhc2" }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c156249", module.exports)
  }
}

/***/ })

/******/ });