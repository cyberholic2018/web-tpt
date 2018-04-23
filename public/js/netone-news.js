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
/******/ 	return __webpack_require__(__webpack_require__.s = 334);
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

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('netone-news', __webpack_require__(336));

var app = new Vue({
    el: '#netone-news'
});

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(337)
/* template */
var __vue_template__ = __webpack_require__(338)
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
Component.options.__file = "resources\\assets\\js\\components\\frontend\\netone-news\\netone-news.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8c20bc2", Component.options)
  } else {
    hotAPI.reload("data-v-f8c20bc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 337:
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

$('.loading-bar').fadeOut('100');

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            posts: [],
            next_page_url: null,
            prev_page_url: null,
            total: null,
            current_page: null,
            eachPage: []
        };
    },

    created: function created() {
        this.getPosts('/posts');
    },
    methods: {
        prevPage: function prevPage() {
            this.getPosts(this.prev_page_url);
        },
        nextPage: function nextPage() {
            this.getPosts(this.next_page_url);
        },
        gotoPage: function gotoPage(item) {
            this.getPosts('/posts?page=' + item.pageNumber);
        },
        goPostPage: function goPostPage(guid) {
            window.open('/news/' + guid);
        },
        getPosts: function getPosts(url) {
            var self = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json'
            }).done(function (result) {
                var regExHtml = /<[^>]*>/g;
                var regExA = /<a[^>]*>[^>]*<[^>]a>/g;
                var regExAH = /(<a[^>]*>)|(<[^>]a>)/g;
                var maxThumbNail = result.data.last_page >= 5 ? 5 : result.data.last_page;
                self.posts = [];
                self.eachPage = [];

                self.current_page = result.data.current_page;
                self.next_page_url = result.data.next_page_url;
                self.prev_page_url = result.data.prev_page_url;

                result.data.data.forEach(function (item) {
                    self.posts.push({
                        guid: item.guid,
                        content: item.content.replace(regExHtml, "").replace(regExA, "").replace(regExAH, "").replace(/&nbsp;/g, " ").substr(0, 100) + '.....',
                        featureImage: item.featureImage,
                        created_at: item.created_at.split(' ')[0],
                        title: item.title
                    });
                });

                if (self.current_page >= 4 && result.data.last_page > 5) {
                    if (self.current_page + 2 >= result.data.last_page) {
                        for (var i = 0; i < maxThumbNail; i++) {
                            self.eachPage.push({
                                pageNumber: result.data.last_page - 4 + i,
                                isBrowsing: result.data.last_page - 4 + i === self.current_page ? true : false
                            });
                        }
                    } else {
                        for (var i = 0; i < maxThumbNail; i++) {
                            self.eachPage.push({
                                pageNumber: self.current_page - 2 + i,
                                isBrowsing: self.current_page - 2 + i === self.current_page ? true : false
                            });
                        }
                    }
                } else {
                    for (var i = 0; i < maxThumbNail; i++) {
                        self.eachPage.push({
                            pageNumber: i + 1,
                            isBrowsing: i + 1 === self.current_page ? true : false
                        });
                    }
                }
            }).always(function () {});
        }
    }
});

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _c(
        "table",
        { staticClass: "table-field" },
        _vm._l(_vm.posts, function(item) {
          return _c("tr", [
            _c("td", [
              _c("h4", [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        _vm.goPostPage(item.guid)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.title))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("td", { attrs: { align: "right" } }, [
              _vm._v(
                "\n                    " +
                  _vm._s(item.created_at) +
                  "\n                "
              )
            ])
          ])
        })
      ),
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
              item.isBrowsing
                ? _c(
                    "a",
                    {
                      staticStyle: { background: "#eee" },
                      on: {
                        click: function($event) {
                          _vm.gotoPage(item)
                        }
                      }
                    },
                    [_vm._v(_vm._s(item.pageNumber))]
                  )
                : _c(
                    "a",
                    {
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
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f8c20bc2", module.exports)
  }
}

/***/ })

/******/ });