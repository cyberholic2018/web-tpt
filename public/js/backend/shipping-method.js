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
/******/ 	return __webpack_require__(__webpack_require__.s = 279);
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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(280);


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('shipping-method', __webpack_require__(281));

var app = new Vue({
    el: '#shipping-method'
});

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(282)
/* template */
var __vue_template__ = __webpack_require__(283)
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
Component.options.__file = "resources\\assets\\js\\components\\backend\\order\\shipping-method\\shipping-method.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ad91347", Component.options)
  } else {
    hotAPI.reload("data-v-1ad91347", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 282:
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

$('.loading-bar').fadeOut('100');
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            shippingMehtod: {
                shippingTitle: null,
                shippingPrice: null,
                freeShipping: false,
                shippingType: null,
                shippingTemperature: null,
                freeShippingMininum: null
            },
            editShippingMethod: {
                shippingTitle: null,
                shippingPrice: null,
                freeShipping: false,
                shippingType: null,
                shippingTemperature: null,
                freeShippingMininum: null
            },
            mode: 'add',
            shippingMehtods: [],
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    created: function created() {
        this.getShippingMethod();
    },
    computed: {
        methodTranslate: function methodTranslate() {
            var shippingMehtod = this.shippingMehtod;

            return {
                shippingTitle: shippingMehtod.shippingTitle,
                shippingPrice: shippingMehtod.shippingPrice,
                freeShipping: shippingMehtod.freeShipping ? 1 : 0,
                shippingType: shippingMehtod.shippingType,
                shippingTemperature: shippingMehtod.shippingTemperature,
                freeShippingMininum: shippingMehtod.freeShippingMininum
            };
        },
        editMethodTranslate: function editMethodTranslate() {
            var shippingMehtod = this.editShippingMethod;

            shippingMehtod.freeShipping = shippingMehtod.freeShipping ? 1 : 0;

            return shippingMehtod;
        }
    },
    watch: {
        shippingMehtod: {
            handler: function handler(shippingMehtod, oldVal) {
                var self = this;

                if (shippingMehtod.shippingType == 'cvs') {
                    shippingMehtod.shippingTemperature = 'room';
                }
                console.log(shippingMehtod);
            },
            deep: true
        }
    },
    methods: {
        addShippingMethod: function addShippingMethod() {
            var self = this;
            var token = this.token;

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: '/admin/shipping/addShippingMethod',
                type: 'POST',
                dataType: 'json',
                data: self.methodTranslate,
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function () {
                self.showMessage('success', '新增運送方式成功。');
                self.getShippingMethod();
                $('#addShipping').modal('hide');
                console.log("success");
            }).fail(function () {
                self.showMessage('error', '新增運送方式失敗。');
                console.log("error");
            }).always(function () {
                console.log("complete");
                $('.loading-bar').fadeOut('100');
            });
        },
        getShippingMethod: function getShippingMethod() {
            var self = this;

            $.ajax({
                url: '/admin/shipping/getShippingMethods',
                type: 'GET',
                dataType: 'json'
            }).done(function (response) {
                self.shippingMehtods = [];
                self.shippingMehtods = response.data;
                console.log("success");
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        },
        editShipping: function editShipping(item) {
            $('#editShipping').modal('show');
            this.editShippingMethod = item;
        },
        deleteShipping: function deleteShipping(item) {
            var self = this;
            var token = this.token;
            var check = confirm('請問是否要刪除此筆運送方式？');

            if (!check) {
                return;
            }

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: '/admin/shipping/deleteShippingMethod/' + item.id,
                type: 'POST',
                dataType: 'json',
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function () {
                self.showMessage('success', '刪除運送方式成功。');
                self.getShippingMethod();
                console.log("success");
            }).fail(function () {
                self.showMessage('error', '刪除運送方式失敗。');
                console.log("error");
            }).always(function () {
                console.log("complete");
                $('.loading-bar').fadeOut('100');
            });
        },
        editShippingMethodAction: function editShippingMethodAction() {
            var self = this;
            var token = this.token;

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: '/admin/shipping/editShippingMethod',
                type: 'POST',
                dataType: 'json',
                data: self.editMethodTranslate,
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function () {
                self.showMessage('success', '編輯運送方式成功。');
                self.getShippingMethod();
                $('#editShipping').modal('hide');
                console.log("success");
            }).fail(function () {
                self.showMessage('error', '編輯運送方式失敗。');
                console.log("error");
            }).always(function () {
                console.log("complete");
                $('.loading-bar').fadeOut('100');
            });
        },
        showMessage: function showMessage(type, string) {
            toastr[type](string);
        }
    }
});

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#addShipping",
            "data-backdrop": "static"
          }
        },
        [_vm._v("\n            新增運費規格\n        ")]
      ),
      _vm._v(" "),
      _c("table", { staticClass: "table field-table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.shippingMehtods, function(item) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(item.shippingTitle))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.shippingPrice))]),
              _vm._v(" "),
              _c("td", { attrs: { align: "center" } }, [
                _c("i", {
                  staticClass: "fa fa-pencil-square-o method-btn",
                  attrs: { "aria-hidden": "true" },
                  on: {
                    click: function($event) {
                      _vm.editShipping(item)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("td", { attrs: { align: "center" } }, [
                _c("i", {
                  staticClass: "fa fa-trash method-btn",
                  attrs: { "aria-hidden": "true" },
                  on: {
                    click: function($event) {
                      _vm.deleteShipping(item)
                    }
                  }
                })
              ])
            ])
          })
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "addShipping",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "addShippingLabel"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.addShippingMethod($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "shippingTitle" } }, [
                          _vm._v("運費說明")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.shippingMehtod.shippingTitle,
                              expression: "shippingMehtod.shippingTitle"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "shippingTitle",
                            name: "shippingTitle",
                            required: "",
                            autofocus: ""
                          },
                          domProps: { value: _vm.shippingMehtod.shippingTitle },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.shippingMehtod,
                                "shippingTitle",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "shippingType" } }, [
                          _vm._v("運送類型")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.shippingMehtod.shippingType,
                                expression: "shippingMehtod.shippingType"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "shippingType", required: "" },
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
                                  _vm.shippingMehtod,
                                  "shippingType",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "delivery" } }, [
                              _vm._v("宅配運送")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "cvs" } }, [
                              _vm._v("超商取貨")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.shippingMehtod.shippingType == "delivery"
                        ? _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "shippingTemperature" } },
                              [_vm._v("運送類型")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.shippingMehtod.shippingTemperature,
                                    expression:
                                      "shippingMehtod.shippingTemperature"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "shippingTemperature",
                                  required: ""
                                },
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
                                      _vm.shippingMehtod,
                                      "shippingTemperature",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "room" } }, [
                                  _vm._v("常溫配送")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "refrigeration" } },
                                  [_vm._v("低溫配送")]
                                )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "shippingPrice" } }, [
                          _vm._v("運費金額 NT$")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.shippingMehtod.shippingPrice,
                              expression: "shippingMehtod.shippingPrice"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            id: "shippingPrice",
                            name: "shippingPrice",
                            required: "",
                            min: "0"
                          },
                          domProps: { value: _vm.shippingMehtod.shippingPrice },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.shippingMehtod,
                                "shippingPrice",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.shippingMehtod.freeShipping,
                              expression: "shippingMehtod.freeShipping"
                            }
                          ],
                          attrs: {
                            type: "checkbox",
                            name: "freeShipping",
                            id: "freeShipping"
                          },
                          domProps: {
                            checked: Array.isArray(
                              _vm.shippingMehtod.freeShipping
                            )
                              ? _vm._i(_vm.shippingMehtod.freeShipping, null) >
                                -1
                              : _vm.shippingMehtod.freeShipping
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.shippingMehtod.freeShipping,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.shippingMehtod.freeShipping = $$a.concat(
                                      [$$v]
                                    ))
                                } else {
                                  $$i > -1 &&
                                    (_vm.shippingMehtod.freeShipping = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.$set(
                                  _vm.shippingMehtod,
                                  "freeShipping",
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _c("label", { attrs: { for: "freeShipping" } }, [
                          _vm._v("免運費")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.shippingMehtod.freeShipping
                        ? _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "freeShippingMininum" } },
                              [_vm._v("免運額限")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shippingMehtod.freeShippingMininum,
                                  expression:
                                    "shippingMehtod.freeShippingMininum"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                name: "freeShippingMininum",
                                id: "freeShippingMininum",
                                min: "0"
                              },
                              domProps: {
                                value: _vm.shippingMehtod.freeShippingMininum
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shippingMehtod,
                                    "freeShippingMininum",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "editShipping",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "editShippingLabel"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.editShippingMethodAction($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "shippingTitle" } }, [
                          _vm._v("運費說明")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editShippingMethod.shippingTitle,
                              expression: "editShippingMethod.shippingTitle"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "shippingTitle",
                            name: "shippingTitle",
                            required: "",
                            autofocus: ""
                          },
                          domProps: {
                            value: _vm.editShippingMethod.shippingTitle
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editShippingMethod,
                                "shippingTitle",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "shippingType" } }, [
                          _vm._v("運送類型")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editShippingMethod.shippingType,
                                expression: "editShippingMethod.shippingType"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "shippingType", required: "" },
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
                                  _vm.editShippingMethod,
                                  "shippingType",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "delivery" } }, [
                              _vm._v("宅配運送")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "cvs" } }, [
                              _vm._v("超商取貨")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.editShippingMethod.shippingType == "delivery"
                        ? _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "shippingTemperature" } },
                              [_vm._v("運送類型")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      _vm.editShippingMethod
                                        .shippingTemperature,
                                    expression:
                                      "editShippingMethod.shippingTemperature"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "shippingTemperature",
                                  required: ""
                                },
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
                                      _vm.editShippingMethod,
                                      "shippingTemperature",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "room" } }, [
                                  _vm._v("常溫配送")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "refrigeration" } },
                                  [_vm._v("低溫配送")]
                                )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "shippingPrice" } }, [
                          _vm._v("運費金額 NT$")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editShippingMethod.shippingPrice,
                              expression: "editShippingMethod.shippingPrice"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            id: "shippingPrice",
                            name: "shippingPrice",
                            required: "",
                            min: "0"
                          },
                          domProps: {
                            value: _vm.editShippingMethod.shippingPrice
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editShippingMethod,
                                "shippingPrice",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editShippingMethod.freeShipping,
                              expression: "editShippingMethod.freeShipping"
                            }
                          ],
                          attrs: {
                            type: "checkbox",
                            name: "freeShipping",
                            id: "freeShipping"
                          },
                          domProps: {
                            checked: Array.isArray(
                              _vm.editShippingMethod.freeShipping
                            )
                              ? _vm._i(
                                  _vm.editShippingMethod.freeShipping,
                                  null
                                ) > -1
                              : _vm.editShippingMethod.freeShipping
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.editShippingMethod.freeShipping,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.editShippingMethod.freeShipping = $$a.concat(
                                      [$$v]
                                    ))
                                } else {
                                  $$i > -1 &&
                                    (_vm.editShippingMethod.freeShipping = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.$set(
                                  _vm.editShippingMethod,
                                  "freeShipping",
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _c("label", { attrs: { for: "freeShipping" } }, [
                          _vm._v("免運費")
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.editShippingMethod.freeShipping
                        ? _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { attrs: { for: "freeShippingMininum" } },
                              [_vm._v("免運額限")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.editShippingMethod.freeShippingMininum,
                                  expression:
                                    "editShippingMethod.freeShippingMininum"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                name: "freeShippingMininum",
                                id: "freeShippingMininum",
                                min: "0"
                              },
                              domProps: {
                                value:
                                  _vm.editShippingMethod.freeShippingMininum
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.editShippingMethod,
                                    "freeShippingMininum",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("運送方式")]),
        _vm._v(" "),
        _c("th", [_vm._v("運送費用")]),
        _vm._v(" "),
        _c("th", { attrs: { align: "center", width: "40" } }, [_vm._v("操作")]),
        _vm._v(" "),
        _c("th", { attrs: { align: "center", width: "40" } }, [_vm._v("刪除")])
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
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "addShippingLabel" } },
        [_vm._v("運費設定視窗")]
      )
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
        [_vm._v("關閉")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("新增設定")]
      )
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
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "editShippingLabel" } },
        [_vm._v("運費設定視窗")]
      )
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
        [_vm._v("關閉")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("儲存設定")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ad91347", module.exports)
  }
}

/***/ })

/******/ });