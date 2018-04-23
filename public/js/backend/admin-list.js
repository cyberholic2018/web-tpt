!function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=197)}({1:function(t,e){t.exports=function(t,e,a,n,s){var i,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,o=t.default);var d="function"==typeof o?o.options:o;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns),n&&(d._scopeId=n);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=l):a&&(l=a),l){var c=d.functional,f=c?d.render:d.beforeCreate;c?d.render=function(t,e){return l.call(e),f(t,e)}:d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:i,exports:o,options:d}}},197:function(t,e,a){t.exports=a(198)},198:function(t,e,a){Vue.component("adminlist",a(199));new Vue({el:"#addAdminForm"})},199:function(t,e,a){var n=a(1)(a(200),a(201),null,null,null);t.exports=n.exports},200:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{fieldContent:{name:"",email:"",password:"",confirmPassword:""},fieldValidation:{name:!1,email:!1,password:!1,confirmPassword:!1},accounts:[],token:$('meta[name="csrf-token"]').attr("content"),message:""}},created:function(){this.getUser()},computed:{formValidation:function(){return this.fieldValidation.name&&this.fieldValidation.email&&this.fieldValidation.password&&this.fieldValidation.confirmPassword}},methods:{getUser:function(){var t=this;$.ajax({url:"/admin/admin/list",type:"GET",dataType:"json",data:{param1:"value1"}}).done(function(e){t.accounts=e.data,$(".loading-bar").fadeOut("100")}).fail(function(){}).always(function(){})},addUser:function(){var t=this.token,e=this.fieldContent,a=this;if(this.fieldContent.password!==this.fieldContent.confirmPassword)return void a.showMessage("warning","密碼欄位不一致，請確認。");this.formValidator(),this.formValidation?($(".loading-bar").fadeIn("100"),$.ajax({url:"/admin/admin/add",type:"POST",cache:!1,data:e,beforeSend:function(e){e.setRequestHeader("X-CSRF-TOKEN",t)}}).done(function(t){a.showMessage("success","管理者帳號建立成功"),e.name="",e.email="",e.password="",e.confirmPassword=""}).fail(function(t){var e=JSON.parse(t.responseText);e.email&&a.showMessage("error","帳號已存在，請重新輸入"),e.password&&a.showMessage("warning","密碼長度必須大於六個字元")}).always(function(){a.getUser(),$(".loading-bar").fadeOut("100")})):a.showMessage("warning","請檢查欄位")},editAdmin:function(t){},deleteAdmin:function(t){var e=this,a=this.token;confirm("是否刪除帳號?")&&$.ajax({url:"/admin/admin/delete",type:"POST",cache:!1,dataType:"json",data:{adminUser:t.guid},beforeSend:function(t){t.setRequestHeader("X-CSRF-TOKEN",a)}}).done(function(t){e.showMessage("success",t.message)}).fail(function(t){e.showMessage("error",t.responseJSON.message)}).always(function(){e.getUser()})},formValidator:function(){var t=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;""!==this.fieldContent.name.trim()?this.fieldValidation.name=!0:this.fieldValidation.name=!1,t.test(this.fieldContent.email)?this.fieldValidation.email=!0:this.fieldValidation.email=!1,this.fieldContent.password.trim()!==this.fieldContent.confirmPassword.trim()||""==this.fieldContent.password.trim()||""==this.fieldContent.confirmPassword.trim()?(this.fieldValidation.password=!1,this.fieldValidation.confirmPassword=!1):(this.fieldValidation.password=!0,this.fieldValidation.confirmPassword=!0)},showMessage:function(t,e){toastr[t](e),this.message=e}}}},201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12",staticStyle:{position:"relative"}},[t._m(0),t._v(" "),a("table",{staticClass:"table field-table"},[t._m(1),t._v(" "),a("tbody",t._l(t.accounts,function(e){return a("tr",[a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.created_at))]),t._v(" "),a("td",[t._v(t._s(e.status))]),t._v(" "),a("td",{attrs:{align:"center"}},[a("span",{staticClass:"glyphicon glyphicon-pencil",on:{click:function(a){t.editAdmin(e)}}})]),t._v(" "),a("td",{attrs:{align:"center"}},[a("span",{staticClass:"glyphicon glyphicon-trash",on:{click:function(a){t.deleteAdmin(e)}}})])])}))]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"createAdminModal",tabindex:"-1",role:"dialog","aria-labelledby":"createAdminModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[a("table",{staticClass:"field-table"},[a("tr",[a("td",[t._v("顯示名稱")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.name,expression:"fieldContent.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",autofocus:"true"},domProps:{value:t.fieldContent.name},on:{input:function(e){e.target.composing||(t.fieldContent.name=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",[t._v("E-Mail")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.email,expression:"fieldContent.email"}],staticClass:"form-control",attrs:{type:"text",name:"email"},domProps:{value:t.fieldContent.email},on:{input:function(e){e.target.composing||(t.fieldContent.email=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",[t._v("密碼")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.password,expression:"fieldContent.password"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:t.fieldContent.password},on:{input:function(e){e.target.composing||(t.fieldContent.password=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",[t._v("確認密碼")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.confirmPassword,expression:"fieldContent.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",name:"check-password"},domProps:{value:t.fieldContent.confirmPassword},on:{input:function(e){e.target.composing||(t.fieldContent.confirmPassword=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.addUser()}}},[t._v("新增")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"messageModal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body message-modal-body"},[t._v("\n                    "+t._s(t.message)+"\n                    ")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{position:"absolute",right:"10px",top:"-52px"},attrs:{type:"button","data-toggle":"modal","data-target":"#createAdminModal"}},[a("span",{staticClass:"glyphicon glyphicon-plus"}),t._v(" 新增管理者\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("帳號")]),t._v(" "),a("th",[t._v("名稱")]),t._v(" "),a("th",[t._v("建立時間")]),t._v(" "),a("th",{attrs:{width:"50"}},[t._v("狀態")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"50"}},[t._v("編輯")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"50"}},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"createAdminModalLabel"}},[t._v("新增管理者帳號")])])}]}}});