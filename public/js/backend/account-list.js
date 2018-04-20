!function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=200)}({1:function(t,e){t.exports=function(t,e,a,n,i){var s,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,o=t.default);var r="function"==typeof o?o.options:o;e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),n&&(r._scopeId=n);var c;if(i?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},r._ssrRegister=c):a&&(c=a),c){var d=r.functional,u=d?r.render:r.beforeCreate;d?r.render=function(t,e){return c.call(e),u(t,e)}:r.beforeCreate=u?[].concat(u,c):[c]}return{esModule:s,exports:o,options:r}}},200:function(t,e,a){t.exports=a(201)},201:function(t,e,a){Vue.component("account-list",a(202));new Vue({el:"#account-list"})},202:function(t,e,a){var n=a(1)(a(203),a(204),null,null,null);t.exports=n.exports},203:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{fieldContent:{name:"",email:"",password:"",confirmPassword:""},fieldValidation:{name:!1,email:!1,password:!1,confirmPassword:!1},accounts:[],token:$('meta[name="csrf-token"]').attr("content"),message:"",next_page_url:null,prev_page_url:null,total:null,current_page:null,eachPage:[],allSelect:!1}},created:function(){this.getUser("/admin/normal/list")},watch:{accounts:{handler:function(t,e){},deep:!0},isAllSelected:{handler:function(t,e){this.allSelect=t}}},computed:{formValidation:function(){return this.fieldValidation.name&&this.fieldValidation.email&&this.fieldValidation.password&&this.fieldValidation.confirmPassword},isAllSelected:function(){var t=!0;return this.accounts.forEach(function(e){e.isSelect||(t=!1)}),t}},methods:{getUser:function(t){var e=this;$.ajax({url:t,type:"GET",dataType:"json",data:{param1:"value1"}}).done(function(t){e.next_page_url=t.next_page_url,e.prev_page_url=t.prev_page_url,e.current_page=t.current_page,e.total=t.total,e.eachPage=[],e.accounts=[];for(var a=0;a<t.last_page;a++)e.eachPage.push({pageNumber:a+1});t.data.forEach(function(t){e.accounts.push({email:t.email,name:t.name,created_at:t.created_at,point:t.point,status:t.status,isSelect:!1})}),$(".loading-bar").fadeOut("100")}).fail(function(){}).always(function(){})},addUser:function(){var t=this.token,e=this.fieldContent,a=this;if(this.fieldContent.password!==this.fieldContent.confirmPassword)return void a.showMessage("warning","密碼欄位不一致，請確認。");this.formValidator(),this.formValidation?($(".loading-bar").fadeIn("100"),$.ajax({url:"/admin/admin/add",type:"POST",cache:!1,data:e,beforeSend:function(e){e.setRequestHeader("X-CSRF-TOKEN",t)}}).done(function(t){a.showMessage("success","管理者帳號建立成功"),e.name="",e.email="",e.password="",e.confirmPassword=""}).fail(function(t){var e=JSON.parse(t.responseText);e.email&&a.showMessage("error","帳號已存在，請重新輸入"),e.password&&a.showMessage("warning","密碼長度必須大於六個字元")}).always(function(){a.getUser(),$(".loading-bar").fadeOut("100")})):a.showMessage("warning","請檢查欄位")},editAdmin:function(t){},deleteAdmin:function(t){var e=this,a=this.token;confirm("是否刪除帳號?")&&$.ajax({url:"/admin/admin/delete",type:"POST",cache:!1,dataType:"json",data:{adminUser:t.guid},beforeSend:function(t){t.setRequestHeader("X-CSRF-TOKEN",a)}}).done(function(t){e.showMessage("success",t.message)}).fail(function(t){e.showMessage("error",t.responseJSON.message)}).always(function(){e.getUser("/admin/normal/list")})},nextPage:function(){this.getUser(this.next_page_url)},prevPage:function(){this.getUser(this.prev_page_url)},gotoPage:function(t){this.getUser("/admin/normal/list?page="+t.pageNumber)},toggleAllSelect:function(){this.isAllSelected?this.accounts.forEach(function(t){t.isSelect=!1}):this.accounts.forEach(function(t){t.isSelect=!0})},formValidator:function(){var t=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;""!==this.fieldContent.name.trim()?this.fieldValidation.name=!0:this.fieldValidation.name=!1,t.test(this.fieldContent.email)?this.fieldValidation.email=!0:this.fieldValidation.email=!1,this.fieldContent.password.trim()!==this.fieldContent.confirmPassword.trim()||""==this.fieldContent.password.trim()||""==this.fieldContent.confirmPassword.trim()?(this.fieldValidation.password=!1,this.fieldValidation.confirmPassword=!1):(this.fieldValidation.password=!0,this.fieldValidation.confirmPassword=!0)},showMessage:function(t,e){toastr[t](e),this.message=e}}}},204:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12",staticStyle:{position:"relative"}},[t._m(0),t._v(" "),a("table",{staticClass:"table field-table"},[a("thead",[a("tr",[a("th",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.allSelect,expression:"allSelect"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allSelect)?t._i(t.allSelect,null)>-1:t.allSelect},on:{change:function(e){t.toggleAllSelect()},__c:function(e){var a=t.allSelect,n=e.target,i=!!n.checked;if(Array.isArray(a)){var s=t._i(a,null);n.checked?s<0&&(t.allSelect=a.concat(null)):s>-1&&(t.allSelect=a.slice(0,s).concat(a.slice(s+1)))}else t.allSelect=i}}})]),t._v(" "),a("th",[t._v("帳號")]),t._v(" "),a("th",[t._v("名稱")]),t._v(" "),a("th",[t._v("建立時間")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"70"}},[t._v("剩餘點數")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"50"}},[t._v("狀態")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"50"}},[t._v("編輯")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"},attrs:{width:"50"}},[t._v("刪除")])])]),t._v(" "),a("tbody",t._l(t.accounts,function(e){return a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelect,expression:"item.isSelect"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isSelect)?t._i(e.isSelect,null)>-1:e.isSelect},on:{__c:function(a){var n=e.isSelect,i=a.target,s=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&(e.isSelect=n.concat(null)):o>-1&&(e.isSelect=n.slice(0,o).concat(n.slice(o+1)))}else e.isSelect=s}}})]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.created_at))]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.point))]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.status))]),t._v(" "),a("td",{attrs:{align:"center"}},[a("span",{staticClass:"glyphicon glyphicon-pencil",on:{click:function(a){t.editAdmin(e)}}})]),t._v(" "),a("td",{attrs:{align:"center"}},[a("span",{staticClass:"glyphicon glyphicon-trash",on:{click:function(a){t.deleteAdmin(e)}}})])])})),t._v(" "),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"8"}},[a("ul",{staticClass:"pagination"},[t.prev_page_url?a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){t.prevPage()}}},[t._v("上一頁")])]):t._e(),t._v(" "),t._l(t.eachPage,function(e){return a("li",[a("a",{attrs:{href:"#"},on:{click:function(a){t.gotoPage(e)}}},[t._v(t._s(e.pageNumber))])])}),t._v(" "),t.next_page_url?a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){t.nextPage()}}},[t._v("下一頁")])]):t._e()],2)])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"createAdminModal",tabindex:"-1",role:"dialog","aria-labelledby":"createAdminModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("table",{staticClass:"field-table"},[a("tr",[a("td",[t._v("顯示名稱")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.name,expression:"fieldContent.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",autofocus:"true"},domProps:{value:t.fieldContent.name},on:{input:function(e){e.target.composing||(t.fieldContent.name=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",[t._v("E-Mail")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.email,expression:"fieldContent.email"}],staticClass:"form-control",attrs:{type:"text",name:"email"},domProps:{value:t.fieldContent.email},on:{input:function(e){e.target.composing||(t.fieldContent.email=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",[t._v("密碼")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.password,expression:"fieldContent.password"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:t.fieldContent.password},on:{input:function(e){e.target.composing||(t.fieldContent.password=e.target.value)}}})])]),t._v(" "),a("tr",[a("td",[t._v("確認密碼")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fieldContent.confirmPassword,expression:"fieldContent.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",name:"check-password"},domProps:{value:t.fieldContent.confirmPassword},on:{input:function(e){e.target.composing||(t.fieldContent.confirmPassword=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.addUser()}}},[t._v("新增")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"messageModal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body message-modal-body"},[t._v("\n                    "+t._s(t.message)+"\n                    ")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-sm btn-primary",staticStyle:{position:"absolute",right:"10px",top:"-52px"},attrs:{type:"button","data-toggle":"modal","data-target":"#createAdminModal"}},[a("span",{staticClass:"glyphicon glyphicon-plus"}),t._v(" 新增帳號\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"createAdminModalLabel"}},[t._v("新增使用者帳號")])])}]}}});