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
/******/ 	return __webpack_require__(__webpack_require__.s = 304);
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

/***/ 10:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(305);


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('cart-panel', __webpack_require__(306));

var app = new Vue({
    el: '#cart-panel'
});

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(307)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(309)
/* template */
var __vue_template__ = __webpack_require__(310)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\frontend\\cart-panel\\cart-panel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c20c26e", Component.options)
  } else {
    hotAPI.reload("data-v-4c20c26e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("3d83aa66", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c20c26e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./cart-panel.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4c20c26e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./cart-panel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, "\n.slide-fade-enter-active {\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n}\n.slide-fade-leave-active {\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n}\n.slide-fade-enter, .slide-fade-leave-to\n    /* .slide-fade-leave-active below version 2.1.8 */ {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n    opacity: 0;\n}\n.fade-enter-active, .fade-leave-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 309:
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

$('.loading-bar').fadeOut('100');
/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            displayPanel: false,
            amount: null,
            cartContent: [],
            isCartEmpty: true
        };
    },

    created: function created() {
        this.getCart(false);
    },
    methods: {
        getCart: function getCart(status) {
            var self = this;

            this.cartContent = [];

            $.ajax({
                url: '/cart/get',
                type: 'GET',
                dataType: 'json'
            }).done(function (response) {
                self.amount = response.amount;
                // console.log(response)

                response.cart.forEach(function (item) {
                    self.cartContent.push({
                        title: item.id.title,
                        guid: item.id.guid,
                        featureImage: item.id.featureImage,
                        qty: item.qty,
                        price: item.price,
                        total: item.total,
                        rowId: item.rowId
                    });
                });

                if (response.cart.length === 0) {
                    self.isCartEmpty = true;
                    $('button.cart').removeClass('full');
                } else {
                    self.isCartEmpty = false;
                    $('button.cart').addClass('full');
                }

                if (status) {
                    self.displayPanel = self.displayPanel ? false : true;
                }
            }).fail(function () {
                // console.log("error");
            }).always(function () {
                // console.log("complete");
            });
        },
        removeProduct: function removeProduct(item) {
            // console.log(item.rowId);
            var self = this;

            // return;
            var removePromise = new Promise(function (resolve, reject) {
                var checkDelete = confirm("確認要移除此商品");

                if (checkDelete) {
                    $.ajax({
                        url: '/cart/delete/single/' + item.rowId,
                        type: 'POST',
                        dataType: 'json',
                        beforeSend: function beforeSend(xhr) {
                            xhr.setRequestHeader('X-CSRF-TOKEN', window.token);
                        }
                    }).done(function (response) {
                        // console.log(response);
                        resolve(response);
                    }).fail(function (error) {
                        // console.log("error");
                        reject(error);
                        toastr["error"]("移除商品失敗");
                    });
                }
            });

            removePromise.then(function (value) {

                $.ajax({
                    url: '/cart/get',
                    type: 'GET',
                    dataType: 'json'
                }).done(function (response) {
                    self.amount = response.amount;
                    self.cartContent = [];
                    // console.log(response)

                    response.cart.forEach(function (item) {
                        self.cartContent.push({
                            title: item.id.title,
                            guid: item.id.guid,
                            featureImage: item.id.featureImage,
                            qty: item.qty,
                            price: item.price,
                            total: item.total,
                            rowId: item.rowId
                        });
                    });

                    if (response.cart.length === 0) {
                        self.isCartEmpty = true;
                        $('button.cart').removeClass('full');
                    } else {
                        self.isCartEmpty = false;
                    }
                });
            });
        },
        goToCart: function goToCart() {
            window.location.href = '/cart';
        },
        thumb: function thumb(url) {
            var urlArray = url.split('/');
            var newUrl = urlArray[0];

            for (var i = 1; i < urlArray.length - 1; i++) {
                newUrl = newUrl + '/' + urlArray[i];
            }

            newUrl = newUrl + '/thumbs/' + urlArray[urlArray.length - 1];

            return newUrl;
        },
        togglePanel: function togglePanel() {
            this.displayPanel = this.displayPanel ? false : true;
        }
    }
});

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "button",
        {
          staticClass: "cart pull-right",
          on: {
            click: function($event) {
              _vm.getCart(true)
            }
          }
        },
        [
          _c("img", {
            attrs: {
              src: _vm.isCartEmpty
                ? "/img/icon/cart-empty.svg"
                : "/img/icon/cart-full.svg",
              alt: "",
              width: "25",
              height: "25"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.displayPanel
          ? _c("div", {
              staticClass: "cart-section",
              on: {
                click: function($event) {
                  _vm.togglePanel()
                }
              }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.displayPanel
          ? _c(
              "div",
              { staticClass: "cart-panel" },
              [
                _c(
                  "button",
                  {
                    staticClass: "close-panel-btn",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.togglePanel()
                      }
                    }
                  },
                  [_c("span"), _vm._v(" "), _c("span")]
                ),
                _vm._v(" "),
                _vm._l(_vm.cartContent, function(item) {
                  return !_vm.isCartEmpty
                    ? _c("table", { staticClass: "cart-panel-table" }, [
                        _c("tr", [
                          _c("td", { attrs: { rowspan: "3" } }, [
                            _c("img", {
                              staticClass: "cart-item-img",
                              attrs: {
                                src: _vm.thumb(item.featureImage),
                                alt: ""
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { align: "right" } }, [
                            _c("strong", [
                              _vm._v(
                                _vm._s(item.title) + " x " + _vm._s(item.qty)
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { align: "right" } }, [
                            _c("strong", [_vm._v("NT$ " + _vm._s(item.total))])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { align: "right" } }, [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    _vm.removeProduct(item)
                                  }
                                }
                              },
                              [_vm._v("刪除商品")]
                            )
                          ])
                        ])
                      ])
                    : _vm._e()
                }),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                !_vm.isCartEmpty
                  ? _c("h4", { staticStyle: { "text-align": "center" } }, [
                      _c("strong", [_vm._v("小計 NT$ " + _vm._s(_vm.amount))])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.isCartEmpty
                  ? _c("h4", { staticStyle: { "text-align": "center" } }, [
                      _c("strong", [_vm._v("購物車還是空的唷!")])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                !_vm.isCartEmpty
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-block btn-lg",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.goToCart()
                          }
                        }
                      },
                      [_vm._v("查看購物車")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default btn-block btn-lg",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.togglePanel()
                      }
                    }
                  },
                  [_vm._v("繼續購物")]
                )
              ],
              2
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c20c26e", module.exports)
  }
}

/***/ })

/******/ });