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
/******/ 	return __webpack_require__(__webpack_require__.s = 224);
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

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(136)
/* template */
var __vue_template__ = __webpack_require__(137)
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
Component.options.__file = "node_modules\\vue-ckeditor2\\src\\VCkeditor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ee179e9", Component.options)
  } else {
    hotAPI.reload("data-v-2ee179e9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("b523e162", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ee179e9\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./VCkeditor.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ee179e9\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./VCkeditor.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, "\n.ckeditor::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n", ""]);

// exports


/***/ }),

/***/ 136:
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

var inc = new Date().getTime();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-ckeditor',
  props: {
    name: {
      type: String,
      default: function _default() {
        return 'editor-' + ++inc;
      }
    },
    value: {
      type: String
    },
    id: {
      type: String,
      default: function _default() {
        return 'editor-' + inc;
      }
    },
    types: {
      type: String,
      default: function _default() {
        return 'classic';
      }
    },
    config: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return { destroyed: false };
  },

  computed: {
    instance: function instance() {
      return CKEDITOR.instances[this.id];
    }
  },
  watch: {
    value: function value(val) {
      if (this.instance) {
        this.update(val);
      }
    }
  },
  mounted: function mounted() {
    this.create();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  },

  methods: {
    create: function create() {
      if (typeof CKEDITOR === 'undefined') {
        console.log('CKEDITOR is missing (http://ckeditor.com/)');
      } else {
        if (this.types === 'inline') {
          CKEDITOR.inline(this.id, this.config);
        } else {
          CKEDITOR.replace(this.id, this.config);
        }

        this.instance.setData(this.value);
        this.instance.on('change', this.onChange);
        this.instance.on('blur', this.onBlur);
        this.instance.on('focus', this.onFocus);
      }
    },
    update: function update(val) {
      var html = this.instance.getData();
      if (html !== val) {
        this.instance.setData(val);
      }
    },
    destroy: function destroy() {
      if (!this.destroyed) {
        this.instance.focusManager.blur(true);
        this.instance.removeAllListeners();
        this.instance.destroy();
        this.destroyed = true;
      }
    },
    onChange: function onChange() {
      var html = this.instance.getData();
      if (html !== this.value) {
        this.$emit('input', html);
      }
    },
    onBlur: function onBlur() {
      this.$emit('blur', this.instance);
    },
    onFocus: function onFocus() {
      this.$emit('focus', this.instance);
    }
  }
});

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ckeditor" }, [
    _c("textarea", {
      attrs: {
        name: _vm.name,
        id: _vm.id,
        types: _vm.types,
        config: _vm.config
      },
      domProps: { value: _vm.value }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ee179e9", module.exports)
  }
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(225);


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('product-category', __webpack_require__(226));

var app = new Vue({
    el: '#product-category'
});

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(227)
/* template */
var __vue_template__ = __webpack_require__(228)
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
Component.options.__file = "resources\\assets\\js\\components\\backend\\product\\product-category\\product-category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0623bf20", Component.options)
  } else {
    hotAPI.reload("data-v-0623bf20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_ckeditor2__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_ckeditor2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_ckeditor2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {
        Ckeditor: __WEBPACK_IMPORTED_MODULE_0_vue_ckeditor2___default.a
    },
    data: function data() {
        return {
            addCategoryForm: {
                categoryName: '',
                categoryParent: null,
                type: 'product',
                description: null,
                featureImage: null
            },
            editCategoryForm: {
                guid: null,
                categoryName: null,
                categoryParent: null,
                type: 'product',
                description: null,
                featureImage: null
            },
            ckConfig: {
                height: 300,
                allowedContent: true,
                filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=' + $('meta[name="csrf-token"]').attr('content'),
                filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token=' + $('meta[name="csrf-token"]').attr('content')
            },
            categories: [],
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    created: function created() {
        this.getCategories();
        $('.loading-bar').fadeOut('100');

        console.log(123);

        $.ajax({
            url: 'https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-tree-products.json',
            type: 'GET',
            dataType: 'json'
        }).done(function (response) {
            console.log(response);
            $("#tree").fancytree({
                checkbox: true,
                selectMode: 3,
                source: response,
                lazyLoad: function lazyLoad(event, data) {
                    // data.result = {url: "https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-sub2.json"};
                },

                activate: function activate(event, data) {
                    // $("#statusLine").text(event.type + ": " + data.node);
                },
                select: function select(event, data) {
                    // $("#statusLine").text(
                    //   event.type + ": " + data.node.isSelected() + " " + data.node
                    // );
                }
            });
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });
    },
    methods: {
        addCategory: function addCategory() {
            var self = this;
            var token = this.token;

            if (self.addCategoryForm.categoryParent === undefined) {
                self.addCategoryForm.categoryParent = null;
            }

            if (self.addCategoryForm.categoryName.trim() === '') {
                this.showMessage('warning', '欄位名稱不可為空白');
                return;
            }

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: '/admin/category/add',
                type: 'POST',
                cache: false,
                dataType: 'json',
                data: self.addCategoryForm,
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (result) {
                self.showMessage('success', '新增類別成功');
                self.addCategoryForm.categoryParent = null;
                self.addCategoryForm.categoryName = null;
                self.addCategoryForm.description = null;
                self.addCategoryForm.featureImage = null;
            }).fail(function () {
                console.log("error");
            }).always(function () {
                self.getCategories();
                $('.loading-bar').fadeOut('100');
            });
        },
        addImage: function addImage() {
            var self = this;

            window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=1280,height=1024');
            window.SetUrl = function (url, file_path) {
                self.addCategoryForm.featureImage = file_path;
            };
        },
        editImage: function editImage() {
            var self = this;

            window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=1280,height=1024');
            window.SetUrl = function (url, file_path) {
                self.editCategoryForm.featureImage = file_path;
            };
        },
        editCategory: function editCategory(item) {
            var self = this;
            var token = this.token;

            if (item.categoryName.trim() === '') {
                this.showMessage('warning', '欄位名稱不可為空白');
                return;
            }

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: '/admin/category/update',
                type: 'POST',
                dataType: 'json',
                data: {
                    category: item.guid,
                    name: item.categoryName,
                    parentId: item.categoryParent,
                    description: item.description
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (result) {
                self.getCategories();
                self.showMessage('success', '類別編輯成功');
                $('#myModal').modal('hide');
            }).fail(function (errorData) {
                console.log("error");
            }).always(function () {
                $('.edit-category-input').blur();
                $('.loading-bar').fadeOut('100');
                console.log("complete");
            });
        },
        deleteCategory: function deleteCategory(item) {
            var self = this;
            var token = this.token;
            var checkProperty = confirm("是否刪除類別?");

            if (checkProperty) {
                $.ajax({
                    url: '/admin/category/delete',
                    type: 'POST',
                    dataType: 'json',
                    data: { category: item },
                    beforeSend: function beforeSend(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                }).done(function (result) {
                    self.showMessage('success', result.message);
                }).fail(function (errorData) {
                    self.showMessage('error', errorData.responseJSON.message);
                }).always(function () {
                    self.getCategories();
                });
            }
        },
        openEditModal: function openEditModal(item) {

            this.editCategoryForm.categoryName = item.name;
            this.editCategoryForm.categoryParent = item.categoryParent;
            this.editCategoryForm.description = item.description;
            this.editCategoryForm.guid = item.guid;

            $('#myModal').modal({ backdrop: 'static', keyboard: false });
        },
        toggleEditMode: function toggleEditMode(item) {
            var self = this;
            var isEdit = item.isEdit;

            if (isEdit) {
                item.isEdit = false;
            } else {
                item.isEdit = true;
                setTimeout(function () {
                    $('.edit-category-input').focus();
                }, 50);
            }
        },
        getCategories: function getCategories() {
            var self = this;
            var token = this.token;

            $.ajax({
                url: '/admin/category/get',
                type: 'POST',
                cache: false,
                data: {
                    type: 'product'
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (result) {
                self.categories = [];
                result.forEach(function (item) {
                    self.categories.push({
                        'categoryParent': item.parentId,
                        'name': item.title,
                        'guid': item.guid,
                        'isEdit': false,
                        'description': item.description,
                        'featureImage': item.featureImage
                    });
                });
            }).fail(function () {
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

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "tab-content" }, [
        _c(
          "div",
          {
            staticClass: "tab-pane fade in active",
            attrs: { id: "category-list" }
          },
          [
            _c("div", { staticClass: "panel-body" }, [
              _c("table", { staticClass: "table field-table" }, [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.categories, function(item) {
                    return _c("tr", [
                      _c("td", [
                        _c("img", {
                          attrs: { width: "40", src: item.featureImage }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [_c("span", [_vm._v(_vm._s(item.name))])]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "center" } }, [
                        _c("span", {
                          staticClass: "glyphicon glyphicon-pencil",
                          on: {
                            click: function($event) {
                              _vm.openEditModal(item)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", { attrs: { align: "center" } }, [
                        _c("span", {
                          staticClass: "glyphicon glyphicon-trash",
                          on: {
                            click: function($event) {
                              _vm.deleteCategory(item.guid)
                            }
                          }
                        })
                      ])
                    ])
                  })
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tab-pane fade", attrs: { id: "add-category" } },
          [
            _c("div", { staticClass: "panel-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                  _vm._v(
                    "\n                            類別名稱\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addCategoryForm.categoryName,
                      expression: "addCategoryForm.categoryName"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "email" },
                  domProps: { value: _vm.addCategoryForm.categoryName },
                  on: {
                    keyup: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "enter", 13, $event.key)
                      ) {
                        return null
                      }
                      _vm.addCategory()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.addCategoryForm,
                        "categoryName",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                  _vm._v(
                    "\n                            上層\n                        "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.addCategoryForm.categoryParent,
                        expression: "addCategoryForm.categoryParent"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "parent-select", name: "" },
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
                          _vm.addCategoryForm,
                          "categoryParent",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "null" } }, [
                      _vm._v("--不指定--")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.categories, function(item) {
                      return _c("option", { domProps: { value: item.guid } }, [
                        _vm._v(" " + _vm._s(item.name))
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                    _vm._v(
                      "\n                            類別描述\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("ckeditor", {
                    staticClass: "ch-product-description",
                    attrs: { id: "add-area", config: _vm.ckConfig },
                    model: {
                      value: _vm.addCategoryForm.description,
                      callback: function($$v) {
                        _vm.$set(_vm.addCategoryForm, "description", $$v)
                      },
                      expression: "addCategoryForm.description"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button", name: "button" },
                  on: {
                    click: function($event) {
                      _vm.addImage()
                    }
                  }
                },
                [_vm._v("選擇圖片")]
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { "text-align": "center" } }, [
                _c("img", {
                  attrs: { src: _vm.addCategoryForm.featureImage, width: "50%" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: {
                    click: function($event) {
                      _vm.addCategory()
                    }
                  }
                },
                [_vm._v("\n                        新增\n                    ")]
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "modal fade", attrs: { id: "myModal", role: "dialog" } },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v(
                        "\n                                    類別名稱\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editCategoryForm.categoryName,
                          expression: "editCategoryForm.categoryName"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email" },
                      domProps: { value: _vm.editCategoryForm.categoryName },
                      on: {
                        keyup: function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k($event.keyCode, "enter", 13, $event.key)
                          ) {
                            return null
                          }
                          _vm.addCategory()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editCategoryForm,
                            "categoryName",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                      _vm._v(
                        "\n                                    上層\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.addCategoryForm.categoryParent,
                            expression: "addCategoryForm.categoryParent"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "parent-select", name: "" },
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
                              _vm.addCategoryForm,
                              "categoryParent",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "null" } }, [
                          _vm._v("--不指定--")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.categories, function(item) {
                          return _c(
                            "option",
                            { domProps: { value: item.guid } },
                            [_vm._v(" " + _vm._s(item.name))]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v(
                        "\n                                    代表圖片\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button", name: "button" },
                        on: {
                          click: function($event) {
                            _vm.editImage()
                          }
                        }
                      },
                      [_vm._v("選擇圖片")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticStyle: { "text-align": "center" } }, [
                      _c("img", {
                        staticStyle: { "max-width": "300px" },
                        attrs: { src: _vm.editCategoryForm.featureImage }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                        _vm._v(
                          "\n                                    類別描述\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("ckeditor", {
                        staticClass: "ch-product-description",
                        attrs: { id: "edit-area", config: _vm.ckConfig },
                        model: {
                          value: _vm.editCategoryForm.description,
                          callback: function($$v) {
                            _vm.$set(_vm.editCategoryForm, "description", $$v)
                          },
                          expression: "editCategoryForm.description"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.editCategory(_vm.editCategoryForm)
                    }
                  }
                },
                [_vm._v("儲存類別")]
              )
            ])
          ])
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
    return _c("ul", { staticClass: "nav nav-tabs" }, [
      _c("li", { staticClass: "active" }, [
        _c("a", { attrs: { "data-toggle": "tab", href: "#category-list" } }, [
          _vm._v("類別列表")
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("a", { attrs: { "data-toggle": "tab", href: "#add-category" } }, [
          _vm._v("新增類別")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "50" } }),
        _vm._v(" "),
        _c("th", [_vm._v("類別名稱")]),
        _vm._v(" "),
        _c(
          "th",
          { staticStyle: { "text-align": "center" }, attrs: { width: "50" } },
          [_vm._v("編輯")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticStyle: { "text-align": "center" }, attrs: { width: "50" } },
          [_vm._v("刪除")]
        )
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
      _c("h4", { staticClass: "modal-title" }, [_vm._v("編輯類別")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0623bf20", module.exports)
  }
}

/***/ })

/******/ });