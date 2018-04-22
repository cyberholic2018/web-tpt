!function(t){function e(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=342)}({1:function(t,e){t.exports=function(t,e,a,n,o){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var c="function"==typeof i?i.options:i;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n);var d;if(o?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):a&&(d=a),d){var l=c.functional,u=l?c.render:c.beforeCreate;l?c.render=function(t,e){return d.call(e),u(t,e)}:c.beforeCreate=u?[].concat(u,d):[d]}return{esModule:r,exports:i,options:c}}},342:function(t,e,a){t.exports=a(343)},343:function(t,e,a){Vue.component("category",a(344));new Vue({el:"#categoryElment"})},344:function(t,e,a){var n=a(1)(a(345),a(346),null,null,null);t.exports=n.exports},345:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{addCategoryForm:{categoryName:"",categoryParent:"null",type:"support"},categories:[],token:$('meta[name="csrf-token"]').attr("content")}},created:function(){this.getCategories(),$(".loading-bar").fadeOut("100")},methods:{addCategory:function(){var t=this,e=this.token;if(void 0===t.addCategoryForm.categoryParent&&(t.addCategoryForm.categoryParent=null),""===t.addCategoryForm.categoryName.trim())return void this.showMessage("warning","欄位名稱不可為空白");$(".loading-bar").fadeIn("100"),$.ajax({url:"/admin/category/add",type:"POST",cache:!1,dataType:"json",data:t.addCategoryForm,beforeSend:function(t){t.setRequestHeader("X-CSRF-TOKEN",e)}}).done(function(e){t.showMessage("success","新增類別成功"),t.addCategoryForm.categoryParent="null",t.addCategoryForm.categoryName=""}).fail(function(){}).always(function(){t.getCategories(),$(".loading-bar").fadeOut("100")})},editCategory:function(t){var e=this.token;if(""===t.name.trim())return void this.showMessage("warning","欄位名稱不可為空白");$(".loading-bar").fadeIn("100"),$.ajax({url:"/admin/category/update",type:"POST",dataType:"json",data:{category:t.guid},beforeSend:function(t){t.setRequestHeader("X-CSRF-TOKEN",e)}}).done(function(t){}).fail(function(t){}).always(function(){$(".edit-category-input").blur(),$(".loading-bar").fadeOut("100")})},deleteCategory:function(t){var e=this,a=this.token;confirm("是否刪除類別?")&&$.ajax({url:"/admin/category/delete",type:"POST",dataType:"json",data:{category:t},beforeSend:function(t){t.setRequestHeader("X-CSRF-TOKEN",a)}}).done(function(t){e.showMessage("success",t.message)}).fail(function(t){e.showMessage("error",t.responseJSON.message)}).always(function(){e.getCategories()})},toggleEditMode:function(t){t.isEdit?t.isEdit=!1:(t.isEdit=!0,setTimeout(function(){$(".edit-category-input").focus()},50))},getCategories:function(){var t=this,e=this.token;$.ajax({url:"/admin/category/get",type:"POST",cache:!1,data:{type:"support"},beforeSend:function(t){t.setRequestHeader("X-CSRF-TOKEN",e)}}).done(function(e){t.categories=[],e.forEach(function(e){t.categories.push({name:e.title,guid:e.guid,isEdit:!1})})}).fail(function(){}).always(function(){})},showMessage:function(t,e){toastr[t](e)}}}},346:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"panel panel-default"},[t._m(0),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table field-table"},[t._m(1),t._v(" "),a("tbody",t._l(t.categories,function(e){return a("tr",[a("td",[e.isEdit?a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"edit-category-input",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:e.name},on:{blur:function(a){t.toggleEditMode(e)},keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13))return null;t.editCategory(e)},input:function(t){t.target.composing||(e.name=t.target.value)}}}):a("span",[t._v(t._s(e.name))])]),t._v(" "),a("td",{attrs:{align:"center"}},[a("span",{staticClass:"glyphicon glyphicon-pencil",on:{click:function(a){t.toggleEditMode(e)}}})]),t._v(" "),a("td",{attrs:{align:"center"}},[a("span",{staticClass:"glyphicon glyphicon-trash",on:{click:function(a){t.deleteCategory(e.guid)}}})])])}))])]),t._v(" "),a("div",{staticClass:"panel-footer"})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"panel panel-default"},[t._m(2),t._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("\n                        類別名稱\n                    ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addCategoryForm.categoryName,expression:"addCategoryForm.categoryName"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.addCategoryForm.categoryName},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addCategory()},input:function(e){e.target.composing||(t.addCategoryForm.categoryName=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"panel-footer"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.addCategory()}}},[t._v("\n                    新增\n                ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v("\n                    類別管理\n                ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("類別名稱")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"50"}},[t._v("編輯")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"50"}},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v("\n                    新增類別\n                ")])])}]}}});