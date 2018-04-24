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
/******/ 	return __webpack_require__(__webpack_require__.s = 207);
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

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(208);


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('account-list', __webpack_require__(209));

var app = new Vue({
    el: '#account-list'
});

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(210),
  /* template */
  __webpack_require__(211),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Work Station\\Project\\server\\web-tpt_20180421\\resources\\assets\\js\\components\\admin\\account\\account-list\\account-list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] account-list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0320283e", Component.options)
  } else {
    hotAPI.reload("data-v-0320283e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 210:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            fieldContent: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            fieldValidation: {
                name: false,
                email: false,
                password: false,
                confirmPassword: false
            },
            accounts: [],
            token: $('meta[name="csrf-token"]').attr('content'),
            message: '',
            next_page_url: null,
            prev_page_url: null,
            total: null,
            current_page: null,
            eachPage: [],
            allSelect: false
        };
    },

    created: function created() {
        var self = this;

        this.getUser('/admin/normal/list');
    },
    watch: {
        accounts: {
            handler: function handler(accounts, oldVal) {
                var self = this;
            },
            deep: true
        },
        isAllSelected: {
            handler: function handler(isAllSelected, oldVal) {
                var self = this;

                this.allSelect = isAllSelected;
            }
        }
    },
    computed: {
        formValidation: function formValidation() {
            return this.fieldValidation.name && this.fieldValidation.email && this.fieldValidation.password && this.fieldValidation.confirmPassword;
        },
        isAllSelected: function isAllSelected() {
            var status = true;

            this.accounts.forEach(function (item) {
                if (!item.isSelect) {
                    status = false;
                }
            });

            return status;
        }
    },
    methods: {
        getUser: function getUser(url) {
            var self = this;

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                data: { param1: 'value1' }
            }).done(function (result) {
                self.next_page_url = result.next_page_url;
                self.prev_page_url = result.prev_page_url;
                self.current_page = result.current_page;
                self.total = result.total;
                self.eachPage = [];

                self.accounts = [];

                for (var i = 0; i < result.last_page; i++) {
                    self.eachPage.push({
                        pageNumber: i + 1
                    });
                }

                result.data.forEach(function (item) {
                    self.accounts.push({
                        email: item.email,
                        name: item.name,
                        created_at: item.created_at,
                        point: item.point,
                        status: item.status,
                        isSelect: false
                    });
                });
                $('.loading-bar').fadeOut('100');
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        },
        addUser: function addUser() {
            var token = this.token;
            var fieldContent = this.fieldContent;
            var self = this;

            if (this.fieldContent.password !== this.fieldContent.confirmPassword) {
                self.showMessage('warning', '密碼欄位不一致，請確認。');
                return;
            }

            this.formValidator();
            if (this.formValidation) {
                $('.loading-bar').fadeIn('100');
                $.ajax({
                    url: "/admin/admin/add",
                    type: 'POST',
                    cache: false,
                    data: fieldContent,
                    beforeSend: function beforeSend(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                }).done(function (result) {
                    self.showMessage('success', '管理者帳號建立成功');
                    fieldContent.name = '';
                    fieldContent.email = '';
                    fieldContent.password = '';
                    fieldContent.confirmPassword = '';
                }).fail(function (result) {
                    var errorData = JSON.parse(result.responseText);
                    if (errorData.email) {
                        self.showMessage('error', '帳號已存在，請重新輸入');
                    }
                    if (errorData.password) {
                        self.showMessage('warning', '密碼長度必須大於六個字元');
                    }
                }).always(function () {
                    self.getUser();
                    $('.loading-bar').fadeOut('100');
                });
            } else {
                self.showMessage('warning', '請檢查欄位');
            }
        },
        editAdmin: function editAdmin(item) {
            console.log(item.guid);
        },
        deleteAdmin: function deleteAdmin(item) {
            var self = this;
            var token = this.token;
            var checkProperty = confirm("是否刪除帳號?");

            if (checkProperty) {
                $.ajax({
                    url: '/admin/admin/delete',
                    type: 'POST',
                    cache: false,
                    dataType: 'json',
                    data: {
                        adminUser: item.guid
                    },
                    beforeSend: function beforeSend(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                }).done(function (result) {
                    self.showMessage('success', result.message);
                }).fail(function (errorData) {
                    self.showMessage('error', errorData.responseJSON.message);
                }).always(function () {
                    self.getUser('/admin/normal/list');
                });
            } else {
                return;
            }
        },
        nextPage: function nextPage() {
            this.getUser(this.next_page_url);
        },
        prevPage: function prevPage() {
            this.getUser(this.prev_page_url);
        },
        gotoPage: function gotoPage(item) {
            this.getUser('/admin/normal/list?page=' + item.pageNumber);
        },
        toggleAllSelect: function toggleAllSelect() {
            if (this.isAllSelected) {
                this.accounts.forEach(function (item) {
                    item.isSelect = false;
                });
            } else {
                this.accounts.forEach(function (item) {
                    item.isSelect = true;
                });
            }
        },
        formValidator: function formValidator() {
            var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

            if (this.fieldContent.name.trim() !== '') {
                this.fieldValidation.name = true;
            } else {
                this.fieldValidation.name = false;
            }

            if (emailRule.test(this.fieldContent.email)) {
                this.fieldValidation.email = true;
            } else {
                this.fieldValidation.email = false;
            }

            if (this.fieldContent.password.trim() !== this.fieldContent.confirmPassword.trim() || this.fieldContent.password.trim() == '' || this.fieldContent.confirmPassword.trim() == '') {
                this.fieldValidation.password = false;
                this.fieldValidation.confirmPassword = false;
            } else {
                this.fieldValidation.password = true;
                this.fieldValidation.confirmPassword = true;
            }
        },
        showMessage: function showMessage(type, string) {
            toastr[type](string);
            this.message = string;
        }
    }
});

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12",
    staticStyle: {
      "position": "relative"
    }
  }, [_vm._m(0), _vm._v(" "), _c('table', {
    staticClass: "table field-table"
  }, [_c('thead', [_c('tr', [_c('th', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.allSelect),
      expression: "allSelect"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.allSelect) ? _vm._i(_vm.allSelect, null) > -1 : (_vm.allSelect)
    },
    on: {
      "change": function($event) {
        _vm.toggleAllSelect()
      },
      "__c": function($event) {
        var $$a = _vm.allSelect,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.allSelect = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.allSelect = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.allSelect = $$c
        }
      }
    }
  })]), _vm._v(" "), _c('th', [_vm._v("帳號")]), _vm._v(" "), _c('th', [_vm._v("名稱")]), _vm._v(" "), _c('th', [_vm._v("建立時間")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "width": "70"
    }
  }, [_vm._v("剩餘點數")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "width": "50"
    }
  }, [_vm._v("狀態")]), _vm._v(" "), _c('th', {
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
  }, [_vm._v("刪除")])])]), _vm._v(" "), _c('tbody', _vm._l((_vm.accounts), function(item) {
    return _c('tr', [_c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.isSelect),
        expression: "item.isSelect"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(item.isSelect) ? _vm._i(item.isSelect, null) > -1 : (item.isSelect)
      },
      on: {
        "__c": function($event) {
          var $$a = item.isSelect,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (item.isSelect = $$a.concat($$v))
            } else {
              $$i > -1 && (item.isSelect = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            item.isSelect = $$c
          }
        }
      }
    })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.email))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.created_at))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v(_vm._s(item.point))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v(_vm._s(item.status))]), _vm._v(" "), _c('td', {
      attrs: {
        "align": "center"
      }
    }, [_c('span', {
      staticClass: "glyphicon glyphicon-pencil",
      on: {
        "click": function($event) {
          _vm.editAdmin(item)
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
          _vm.deleteAdmin(item)
        }
      }
    })])])
  })), _vm._v(" "), _c('tfoot', [_c('tr', [_c('td', {
    attrs: {
      "colspan": "8"
    }
  }, [_c('ul', {
    staticClass: "pagination"
  }, [(_vm.prev_page_url) ? _c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.prevPage()
      }
    }
  }, [_vm._v("上一頁")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.eachPage), function(item) {
    return _c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function($event) {
          _vm.gotoPage(item)
        }
      }
    }, [_vm._v(_vm._s(item.pageNumber))])])
  }), _vm._v(" "), (_vm.next_page_url) ? _c('li', [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.nextPage()
      }
    }
  }, [_vm._v("下一頁")])]) : _vm._e()], 2)])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "createAdminModal",
      "tabindex": "-1",
      "role": "dialog",
      "aria-labelledby": "createAdminModalLabel"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('table', {
    staticClass: "field-table"
  }, [_c('tr', [_c('td', [_vm._v("顯示名稱")]), _vm._v(" "), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.fieldContent.name),
      expression: "fieldContent.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "name",
      "autofocus": "true"
    },
    domProps: {
      "value": (_vm.fieldContent.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.fieldContent.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("E-Mail")]), _vm._v(" "), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.fieldContent.email),
      expression: "fieldContent.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "email"
    },
    domProps: {
      "value": (_vm.fieldContent.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.fieldContent.email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("密碼")]), _vm._v(" "), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.fieldContent.password),
      expression: "fieldContent.password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "password"
    },
    domProps: {
      "value": (_vm.fieldContent.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.fieldContent.password = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("確認密碼")]), _vm._v(" "), _c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.fieldContent.confirmPassword),
      expression: "fieldContent.confirmPassword"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "check-password"
    },
    domProps: {
      "value": (_vm.fieldContent.confirmPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.fieldContent.confirmPassword = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("關閉")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addUser()
      }
    }
  }, [_vm._v("新增")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "messageModal"
    }
  }, [_c('div', {
    staticClass: "modal-dialog",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-body message-modal-body"
  }, [_vm._v("\n                    " + _vm._s(_vm.message) + "\n                    ")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn btn-sm btn-primary",
    staticStyle: {
      "position": "absolute",
      "right": "10px",
      "top": "-52px"
    },
    attrs: {
      "type": "button",
      "data-toggle": "modal",
      "data-target": "#createAdminModal"
    }
  }, [_c('span', {
    staticClass: "glyphicon glyphicon-plus"
  }), _vm._v(" 新增帳號\n        ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title",
    attrs: {
      "id": "createAdminModalLabel"
    }
  }, [_vm._v("新增使用者帳號")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0320283e", module.exports)
  }
}

/***/ })

/******/ });