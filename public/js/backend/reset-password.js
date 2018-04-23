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
/******/ 	return __webpack_require__(__webpack_require__.s = 202);
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

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('resetpassword', __webpack_require__(204));

var app = new Vue({
    el: '#resetPassword'
});

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(205),
  /* template */
  __webpack_require__(206),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Work Station\\Project\\server\\web-tpt_20180421\\resources\\assets\\js\\components\\admin\\administrator\\reset-password\\reset-password.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] reset-password.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ae0ede3e", Component.options)
  } else {
    hotAPI.reload("data-v-ae0ede3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 205:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            passwordForm: {
                oldPassword: '',
                newPassword: '',
                confirmedPassword: ''
            },
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    created: function created() {
        $('.loading-bar').fadeOut('100');
    },
    methods: {
        resetPassword: function resetPassword() {
            var self = this;

            $.ajax({
                url: '/admin/admin/reset',
                type: 'POST',
                dataType: 'json',
                data: self.passwordForm,
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', self.token);
                }
            }).done(function (result) {
                self.showMessage('success', result.message);
            }).fail(function (errorData) {
                if (errorData.status === 422) {
                    self.showMessage('error', '請檢察欄位是否輸入齊全');
                } else if (errorData.status === 423) {
                    self.showMessage('error', errorData.responseJSON.message);
                }
            }).always(function () {
                self.passwordForm.oldPassword = '';
                self.passwordForm.newPassword = '';
                self.passwordForm.confirmedPassword = '';
            });
        },
        showMessage: function showMessage(type, string) {
            toastr[type](string);
        }
    }
});

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-4 col-md-offset-4"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "field-table"
  }, [_c('tr', [_c('td', [_c('label', {
    attrs: {
      "for": "oldPassword"
    }
  }, [_vm._v("請輸入舊密碼")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.passwordForm.oldPassword),
      expression: "passwordForm.oldPassword"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "oldPassword"
    },
    domProps: {
      "value": (_vm.passwordForm.oldPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.passwordForm.oldPassword = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('label', {
    attrs: {
      "for": "newPassword"
    }
  }, [_vm._v("請輸入新密碼")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.passwordForm.newPassword),
      expression: "passwordForm.newPassword"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "newPassword"
    },
    domProps: {
      "value": (_vm.passwordForm.newPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.passwordForm.newPassword = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('label', {
    attrs: {
      "for": "confirmedPassword"
    }
  }, [_vm._v("確認密碼")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.passwordForm.confirmedPassword),
      expression: "passwordForm.confirmedPassword"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "confirmedPassword"
    },
    domProps: {
      "value": (_vm.passwordForm.confirmedPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.passwordForm.confirmedPassword = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_c('button', {
    staticClass: "btn btn-success btn-sm btn-block",
    attrs: {
      "type": "button",
      "name": "button"
    },
    on: {
      "click": function($event) {
        _vm.resetPassword()
      }
    }
  }, [_vm._v("Reset")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("\n                重置密碼\n            ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ae0ede3e", module.exports)
  }
}

/***/ })

/******/ });