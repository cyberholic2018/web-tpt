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
/******/ 	return __webpack_require__(__webpack_require__.s = 317);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
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

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('success', __webpack_require__(319));

var app = new Vue({
    el: '#success'
});

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(321),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Work Station\\Project\\server\\web-tpt_20180421\\resources\\assets\\js\\components\\admin\\content\\success\\success.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] success.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21717f96", Component.options)
  } else {
    hotAPI.reload("data-v-21717f96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 320:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            mode: $('input[name="edit-mode"]').val(),
            id: $('input[name="id"]').val(),
            content: {
                title: null,
                link: null,
                featureImage: null
            },
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    created: function created() {
        $('.loading-bar').fadeOut('100');
        if (this.mode === 'edit') {
            this.getContent();
        }
    },
    methods: {
        saveContent: function saveContent() {
            var self = this;
            var token = this.token;

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: self.mode === 'add' ? '/success/add' : '/success/edit/' + self.id,
                type: 'POST',
                dataType: 'json',
                data: self.content,
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function () {
                self.showMessage('success', '編輯成功');
                window.location.href = '/cyberholic-system/partner/successList';
                console.log("success");
            }).fail(function () {
                self.showMessage('error', '編輯失敗');
                console.log("error");
            }).always(function () {
                $('.loading-bar').fadeOut('100');
                console.log("complete");
            });
        },
        getContent: function getContent() {
            var self = this;

            $.ajax({
                url: '/success/get/' + self.id,
                type: 'GET',
                dataType: 'json'
            }).done(function (result) {
                self.content.title = result.title;
                self.content.link = result.customField1;
                self.content.featureImage = result.content;
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        },
        addImage: function addImage() {
            var self = this;

            window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
            window.SetUrl = function (url, file_path) {
                self.content.featureImage = file_path;
            };
        },
        showMessage: function showMessage(type, string) {
            toastr[type](string);
        }
    }
});

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-5"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.saveContent($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "success-title"
    }
  }, [_vm._v("合作夥伴名稱")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content.title),
      expression: "content.title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "success-title",
      "name": "",
      "value": "",
      "required": ""
    },
    domProps: {
      "value": (_vm.content.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "success-link"
    }
  }, [_vm._v("合作夥伴連結")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content.link),
      expression: "content.link"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "success-link",
      "name": "",
      "value": ""
    },
    domProps: {
      "value": (_vm.content.link)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content.link = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button",
      "name": "button"
    },
    on: {
      "click": function($event) {
        _vm.addImage()
      }
    }
  }, [_vm._v("編輯代表圖片")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.content.featureImage,
      "width": "300"
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "name": "button"
    }
  }, [_vm._v("儲存合作夥伴")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-21717f96", module.exports)
  }
}

/***/ })

/******/ });