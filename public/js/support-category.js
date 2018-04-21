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
/******/ 	return __webpack_require__(__webpack_require__.s = 342);
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

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('category', __webpack_require__(344));

var app = new Vue({
    el: '#categoryElment'
});

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(345),
  /* template */
  __webpack_require__(346),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Work Station\\Project\\server\\web-tpt_20180421\\resources\\assets\\js\\components\\admin\\support\\category\\support-category.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] support-category.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f583ec1", Component.options)
  } else {
    hotAPI.reload("data-v-2f583ec1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 345:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            addCategoryForm: {
                categoryName: '',
                categoryParent: 'null',
                type: 'support'
            },
            categories: [],
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    created: function created() {
        this.getCategories();
        $('.loading-bar').fadeOut('100');
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
                self.addCategoryForm.categoryParent = 'null';
                self.addCategoryForm.categoryName = '';
            }).fail(function () {
                console.log("error");
            }).always(function () {
                self.getCategories();
                $('.loading-bar').fadeOut('100');
            });
        },
        editCategory: function editCategory(item) {
            var self = this;
            var token = this.token;

            if (item.name.trim() === '') {
                this.showMessage('warning', '欄位名稱不可為空白');
                return;
            }

            $('.loading-bar').fadeIn('100');

            $.ajax({
                url: '/admin/category/update',
                type: 'POST',
                dataType: 'json',
                data: { category: item.guid },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (result) {
                console.log("success");
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
                    type: 'support'
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function (result) {
                self.categories = [];
                result.forEach(function (item) {
                    self.categories.push({
                        'name': item.title,
                        'guid': item.guid,
                        'isEdit': false
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('table', {
    staticClass: "table field-table"
  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.categories), function(item) {
    return _c('tr', [_c('td', [(item.isEdit) ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.name),
        expression: "item.name"
      }],
      staticClass: "edit-category-input",
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": (item.name)
      },
      on: {
        "blur": function($event) {
          _vm.toggleEditMode(item)
        },
        "keyup": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
          _vm.editCategory(item)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.name = $event.target.value
        }
      }
    }) : _c('span', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('td', {
      attrs: {
        "align": "center"
      }
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-pencil",
      on: {
        "click": function($event) {
          _vm.toggleEditMode(item)
        }
      }
    })]), _vm._v(" "), _c('td', {
      attrs: {
        "align": "center"
      }
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-trash",
      on: {
        "click": function($event) {
          _vm.deleteCategory(item.guid)
        }
      }
    })])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleInputEmail1"
    }
  }, [_vm._v("\n                        類別名稱\n                    ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addCategoryForm.categoryName),
      expression: "addCategoryForm.categoryName"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email"
    },
    domProps: {
      "value": (_vm.addCategoryForm.categoryName)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.addCategory()
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addCategoryForm.categoryName = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function($event) {
        _vm.addCategory()
      }
    }
  }, [_vm._v("\n                    新增\n                ")])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("\n                    類別管理\n                ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("類別名稱")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "width": "50"
    }
  }, [_vm._v("編輯")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "width": "50"
    }
  }, [_vm._v("刪除")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("\n                    新增類別\n                ")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f583ec1", module.exports)
  }
}

/***/ })

/******/ });