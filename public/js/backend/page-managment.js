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
/******/ 	return __webpack_require__(__webpack_require__.s = 272);
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

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(273);


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

Vue.component('page-managment', __webpack_require__(274));

var app = new Vue({
    el: '#page-managment'
});

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(275),
  /* template */
  __webpack_require__(276),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Work Station\\Project\\server\\web-tpt_20180421\\resources\\assets\\js\\components\\admin\\page\\page-managment\\page-managment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] page-managment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ddc264b", Component.options)
  } else {
    hotAPI.reload("data-v-7ddc264b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 275:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            siteMeta: {
                title: null,
                keyword: null,
                description: null,
                shortcut: null,
                index_album: [],
                other: {
                    phone: '',
                    email: '',
                    facebook: '',
                    youtube: '',
                    instagram: ''
                }
            },
            picTitle: null,
            picUrl: null,
            isEdit: false,
            isDirty: false,
            token: $('meta[name="csrf-token"]').attr('content')
        };
    },

    created: function created() {
        this.getMeta();
        $('.loading-bar').fadeOut('100');
    },
    watch: {
        siteMeta: {
            handler: function handler(siteMeta, oldVal) {
                this.isDirty = true;
            },
            deep: true
        }
    },
    methods: {
        getMeta: function getMeta() {
            var self = this;
            $.ajax({
                url: '/admin/page/meta/get',
                type: 'GET',
                cache: false,
                dataType: 'json'
            }).done(function (result) {
                self.siteMeta.title = result.data.title;
                self.siteMeta.keyword = result.data.keyword;
                self.siteMeta.description = result.data.description;
                self.siteMeta.shortcut = result.data.shortcut;
                self.siteMeta.index_album = JSON.parse(result.data.index_album);
                self.siteMeta.other = JSON.parse(result.data.other);

                self.isEdit = true;
                self.isDirty = false;
            }).fail(function () {
                self.isEdit = false;
            });
        },
        addShortCut: function addShortCut() {
            var self = this;

            window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
            window.SetUrl = function (url, file_path) {
                self.siteMeta.shortcut = file_path;
            };
        },
        addImage: function addImage() {
            var self = this;

            window.open('/laravel-filemanager' + '?type=Images', 'FileManager', 'width=900,height=600');
            window.SetUrl = function (url, file_path) {
                self.picUrl = file_path;
            };
        },
        addBanner: function addBanner() {
            var self = this;

            if (this.picUrl) {
                this.siteMeta.index_album.push({
                    title: this.picTitle,
                    url: this.picUrl
                });

                this.picTitle = null;
                this.picUrl = null;
            } else {
                alert('請選擇圖片');
            }
        },
        newMeta: function newMeta() {
            var self = this;
            var token = this.token;

            $.ajax({
                url: '/admin/page/meta/set',
                type: 'POST',
                dataType: 'json',
                data: {
                    title: self.siteMeta.title,
                    keyword: self.siteMeta.keyword,
                    description: self.siteMeta.description,
                    shortcut: self.siteMeta.shortcut,
                    index_album: JSON.stringify(self.siteMeta.index_album),
                    other: JSON.stringify(self.siteMeta.other)
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function () {
                self.getMeta();
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        },
        editMeta: function editMeta() {
            var self = this;
            var token = this.token;

            $.ajax({
                url: '/admin/page/meta/edit',
                type: 'POST',
                dataType: 'json',
                data: {
                    title: self.siteMeta.title,
                    keyword: self.siteMeta.keyword,
                    description: self.siteMeta.description,
                    shortcut: self.siteMeta.shortcut,
                    index_album: JSON.stringify(self.siteMeta.index_album),
                    other: JSON.stringify(self.siteMeta.other)
                },
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            }).done(function () {
                self.getMeta();
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        }
    }
});

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "tabbable ch-tab",
    attrs: {
      "id": "tabs-750563"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tab-content",
    staticStyle: {
      "padding": "10px"
    }
  }, [_c('div', {
    staticClass: "tab-pane active",
    attrs: {
      "id": "panel-508832"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table field-table"
  }, [_vm._m(1), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.title),
      expression: "siteMeta.title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.siteMeta.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.title = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.keyword),
      expression: "siteMeta.keyword"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.siteMeta.keyword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.keyword = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('tr', [_c('td', [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.description),
      expression: "siteMeta.description"
    }],
    staticClass: "form-control",
    staticStyle: {
      "resize": "vertical"
    },
    domProps: {
      "value": (_vm.siteMeta.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.description = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('tr', [_c('td', [((_vm.siteMeta.shortcut === null) || (_vm.siteMeta.shortcut === '')) ? _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addShortCut()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })]) : _c('img', {
    staticStyle: {
      "max-width": "50%"
    },
    attrs: {
      "src": _vm.siteMeta.shortcut
    },
    on: {
      "click": function($event) {
        _vm.addShortCut()
      }
    }
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "id": "panel-937041"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table field-table"
  }, [_c('tr', [_c('td', [_c('label', [_vm._v("圖片標題")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success pull-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addBanner()
      }
    }
  }, [_vm._v("新增至輪播區")])])]), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.picTitle),
      expression: "picTitle"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.picTitle)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.picTitle = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('tr', [_c('td', [_c('label', [_vm._v("圖片")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info pull-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.addImage()
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]), _vm._v(" "), _c('tr', [_c('td', [_c('img', {
    attrs: {
      "width": "100%",
      "src": _vm.picUrl
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, _vm._l((_vm.siteMeta.index_album), function(item, index) {
    return _c('div', {
      staticClass: "panel panel-default"
    }, [_c('div', {
      staticClass: "panel-heading"
    }, [_c('h3', {
      staticClass: "panel-title"
    }, [_vm._v("\n                                        " + _vm._s(item.title) + "\n                                        "), _c('a', {
      staticClass: "pull-right",
      on: {
        "click": function($event) {
          _vm.siteMeta.index_album.splice(index, 1)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times",
      attrs: {
        "aria-hidden": "true"
      }
    })])])]), _vm._v(" "), _c('div', {
      staticClass: "panel-body"
    }, [_c('img', {
      attrs: {
        "width": "100%",
        "src": item.url
      }
    })])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane",
    attrs: {
      "id": "panel-852432"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('table', {
    staticClass: "table field-table"
  }, [_vm._m(5), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.other.phone),
      expression: "siteMeta.other.phone"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.siteMeta.other.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.other.phone = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.other.email),
      expression: "siteMeta.other.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.siteMeta.other.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.other.email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.other.facebook),
      expression: "siteMeta.other.facebook"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.siteMeta.other.facebook)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.other.facebook = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.other.youtube),
      expression: "siteMeta.other.youtube"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.siteMeta.other.youtube)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.other.youtube = $event.target.value
      }
    }
  })])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c('tr', [_c('td', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.siteMeta.other.instagram),
      expression: "siteMeta.other.instagram"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.siteMeta.other.instagram)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.siteMeta.other.instagram = $event.target.value
      }
    }
  })])])])])])])])]), _vm._v(" "), (_vm.isDirty) ? _c('div', [(_vm.isEdit) ? _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.editMeta()
      }
    }
  }, [_vm._v("儲存設定")]) : _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.newMeta()
      }
    }
  }, [_vm._v("新增設定")])]) : _c('div', [(_vm.isEdit) ? _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "disabled": ""
    }
  }, [_vm._v("儲存設定")]) : _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "disabled": ""
    }
  }, [_vm._v("新增設定")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav nav-tabs"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#panel-508832",
      "data-toggle": "tab"
    }
  }, [_vm._v("網站資訊")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#panel-937041",
      "data-toggle": "tab"
    }
  }, [_vm._v("首頁輪播")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#panel-852432",
      "data-toggle": "tab"
    }
  }, [_vm._v("其他資訊")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("網站標題")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("網站關鍵字")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_vm._v("網站描述")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("網站縮圖")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("連絡電話")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("電子郵件")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("Facebook")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("Youtube")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', [_c('td', [_c('label', [_vm._v("Instagram")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ddc264b", module.exports)
  }
}

/***/ })

/******/ });