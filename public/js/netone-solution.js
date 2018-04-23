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
/******/ 	return __webpack_require__(__webpack_require__.s = 340);
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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('netone-solution', __webpack_require__(342));

var app = new Vue({
    el: '#netone-solution'
});

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(343)
/* template */
var __vue_template__ = __webpack_require__(344)
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
Component.options.__file = "resources\\assets\\js\\components\\frontend\\netone-solution\\netone-solution.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bb77eeb", Component.options)
  } else {
    hotAPI.reload("data-v-2bb77eeb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 343:
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

$('.loading-bar').fadeOut('100');
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            categories: [],
            products: [],
            firstLoad: true
        };
    },

    created: function created() {
        this.getCategory();
    },
    methods: {
        gotDetail: function gotDetail(guid) {
            return '/solutionDetail/' + guid;
        },
        getByCategory: function getByCategory(guid) {
            var self = this;

            $.ajax({
                url: '/products/byCategory/' + guid,
                type: 'get',
                cache: false,
                dataType: 'json',
                data: { param1: 'value1' }
            }).done(function (result) {
                console.log(result);
                self.products = [];

                result.data.data.forEach(function (item) {
                    self.products.push({
                        guid: item.guid,
                        title: item.title,
                        featureImage: item.featureImage,
                        content: item.shortDescription,
                        productStyle: 'background: url("' + item.featureImage + '") center center / contain no-repeat;'
                    });
                });

                self.categories.forEach(function (item) {
                    if (item.guid === guid) {
                        item.isActive = true;
                    } else {
                        item.isActive = false;
                    }
                });

                if (window.location.search.split('=')[1] !== undefined) {
                    if (self.firstLoad) {
                        setTimeout(function () {
                            $('#' + window.location.search.split('=')[1]).click();
                        }, 10);
                        self.firstLoad = false;
                    }
                }
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        },
        getCategory: function getCategory() {
            var self = this;

            $.ajax({
                url: '/products/category',
                type: 'GET',
                cache: false,
                dataType: 'json'
            }).done(function (result) {
                result.data.forEach(function (item) {
                    self.categories.push({
                        title: item.title,
                        guid: item.guid,
                        isActive: false
                    });
                });

                self.categories[0].isActive = true;

                self.getByCategory(self.categories[0].guid);
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        }
    }
});

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-3" }, [
      _c(
        "ul",
        { staticClass: "product-category" },
        _vm._l(_vm.categories, function(item) {
          return _c(
            "li",
            {
              class: { active: item.isActive },
              attrs: { id: item.guid },
              on: {
                click: function($event) {
                  _vm.getByCategory(item.guid)
                }
              }
            },
            [_vm._v(_vm._s(item.title))]
          )
        })
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-9" },
      _vm._l(_vm.products, function(item) {
        return _c("div", { staticClass: "row product-content-horizon" }, [
          _c("div", {
            staticClass: "col-md-4 product-feature-image",
            style: item.productStyle
          }),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8 product-info" }, [
            _c(
              "a",
              {
                staticClass: "product-title",
                attrs: { href: _vm.gotDetail(item.guid) }
              },
              [_c("h4", [_vm._v(_vm._s(item.title))])]
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", {
              staticClass: "product-content",
              domProps: { innerHTML: _vm._s(item.content) }
            })
          ])
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2bb77eeb", module.exports)
  }
}

/***/ })

/******/ });