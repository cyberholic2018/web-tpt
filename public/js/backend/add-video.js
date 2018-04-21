!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=302)}({1:function(e,t){e.exports=function(e,t,n,i,r){var o,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,a=e.default);var d="function"==typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),i&&(d._scopeId=i);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):n&&(c=n),c){var u=d.functional,l=u?d.render:d.beforeCreate;u?d.render=function(e,t){return c.call(t),l(e,t)}:d.beforeCreate=l?[].concat(l,c):[c]}return{esModule:o,exports:a,options:d}}},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(new Date).getTime();t.default={name:"vue-ckeditor",props:{name:{type:String,default:function(){return"editor-"+ ++i}},value:{type:String},id:{type:String,default:function(){return"editor-"+i}},types:{type:String,default:function(){return"classic"}},config:{type:Object,default:function(){}}},data:function(){return{destroyed:!1}},computed:{instance:function(){return CKEDITOR.instances[this.id]}},watch:{value:function(e){this.instance&&this.update(e)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()},methods:{create:function(){"undefined"==typeof CKEDITOR||("inline"===this.types?CKEDITOR.inline(this.id,this.config):CKEDITOR.replace(this.id,this.config),this.instance.setData(this.value),this.instance.on("change",this.onChange),this.instance.on("blur",this.onBlur),this.instance.on("focus",this.onFocus))},update:function(e){this.instance.getData()!==e&&this.instance.setData(e)},destroy:function(){this.destroyed||(this.instance.focusManager.blur(!0),this.instance.removeAllListeners(),this.instance.destroy(),this.destroyed=!0)},onChange:function(){var e=this.instance.getData();e!==this.value&&this.$emit("input",e)},onBlur:function(){this.$emit("blur",this.instance)},onFocus:function(){this.$emit("focus",this.instance)}}}},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ckeditor"},[n("textarea",{attrs:{name:e.name,id:e.id,types:e.types,config:e.config},domProps:{value:e.value}})])},staticRenderFns:[]}},302:function(e,t,n){e.exports=n(303)},303:function(e,t,n){Vue.component("add-video",n(304));new Vue({el:"#add-video"})},304:function(e,t,n){var i=n(1)(n(305),n(306),null,null,null);e.exports=i.exports},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),r=n.n(i);$(".loading-bar").fadeOut("100"),t.default={components:{Ckeditor:r.a},data:function(){return{isEdit:!1,token:$('meta[name="csrf-token"]').attr("content"),id:$("#row-id").val(),videoMeta:{title:null,url:null,description:null},ckConfig:{height:300,filebrowserImageBrowseUrl:"/laravel-filemanager?type=Images",filebrowserImageUploadUrl:"/laravel-filemanager/upload?type=Images&_token="+$('meta[name="csrf-token"]').attr("content"),filebrowserBrowseUrl:"/laravel-filemanager?type=Files",filebrowserUploadUrl:"/laravel-filemanager/upload?type=Files&_token="+$('meta[name="csrf-token"]').attr("content")}}},created:function(){this.id?(this.getVideo(this.id),this.isEdit=!0):self.isLoaded=!0},methods:{addVideo:function(){var e=this,t=this.token;return this.videoMeta.title?""===this.videoMeta.title.trim()?void this.showMessage("warning","名稱欄位不可為空"):this.videoMeta.url?""===this.videoMeta.url.trim()?void this.showMessage("warning","網址欄位不可為空"):this.videoMeta.description?""===this.videoMeta.description.trim()?void this.showMessage("warning","內容欄位不可為空"):void $.ajax({url:e.isEdit?"/admin/video/update/"+e.id:"/admin/video/add",type:"POST",dataType:"json",data:{title:e.videoMeta.title,url:e.previewVideo(e.videoMeta.url),description:e.videoMeta.description},beforeSend:function(e){e.setRequestHeader("X-CSRF-TOKEN",t)}}).done(function(){window.location.href="/cyberholic-system/video/managment"}).fail(function(){}).always(function(){}):void this.showMessage("warning","內容欄位不可為空"):void this.showMessage("warning","網址欄位不可為空"):void this.showMessage("warning","名稱欄位不可為空")},getVideo:function(e){var t=this;$.ajax({url:"/admin/video/get/"+e,type:"GET",dataType:"json"}).done(function(e){t.videoMeta.title=e.title,t.videoMeta.url=e.url,t.videoMeta.description=e.description}).fail(function(){}).always(function(){})},previewVideo:function(e){return this.videoMeta.url?this.videoMeta.url.match("https")?this.videoMeta.url.match("embed/")?e:e.replace("watch?v=","embed/"):void 0:null},showMessage:function(e,t){toastr[e](t)}}}},306:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("table",{staticClass:"field-table"},[e._m(0),e._v(" "),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.videoMeta.title,expression:"videoMeta.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"影像名稱"},domProps:{value:e.videoMeta.title},on:{input:function(t){t.target.composing||(e.videoMeta.title=t.target.value)}}})])]),e._v(" "),e._m(1),e._v(" "),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.videoMeta.url,expression:"videoMeta.url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Youtube url"},domProps:{value:e.videoMeta.url},on:{input:function(t){t.target.composing||(e.videoMeta.url=t.target.value)}}})])])]),e._v(" "),n("br"),e._v(" "),n("ckeditor",{staticClass:"ch-product-description",attrs:{id:"short-description",config:e.ckConfig},model:{value:e.videoMeta.description,callback:function(t){e.videoMeta.description=t},expression:"videoMeta.description"}})],1),e._v(" "),n("div",{staticClass:"col-md-4"},[n("table",{staticClass:"field-table"},[e.previewVideo(e.videoMeta.url)?n("tr",[n("td",[e._v("\n                    預覽\n                ")])]):e._e(),e._v(" "),e.previewVideo(e.videoMeta.url)?n("tr",[n("td",[n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:e.previewVideo(e.videoMeta.url)}})])])]):e._e(),e._v(" "),n("tr",[n("td",[n("button",{staticClass:"btn btn-success btn-block",attrs:{type:"button",name:"button"},on:{click:function(t){e.addVideo()}}},[e._v("儲存影音")])])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v("\n                    影像名稱\n                ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v("\n                    影像網址\n                ")])])}]}},4:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},5:function(e,t,n){function i(e){n(6)}var r=n(1)(n(10),n(11),i,null,null);e.exports=r.exports},6:function(e,t,n){var i=n(7);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(8)("6e4a9600",i,!0)},7:function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,'.ckeditor:after{content:"";display:table;clear:both}',""])},8:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function o(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(m){var o=p++;i=f||(f=r()),t=a.bind(null,i,o,!1),n=a.bind(null,i,o,!0)}else i=r(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function a(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(9),u={},l=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var r=c(e,t);return i(r),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o],s=u[a.id];s.refs--,n.push(s)}t?(r=c(e,t),i(r)):r=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete u[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},9:function(e,t){e.exports=function(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=o[0],s=o[1],d=o[2],c=o[3],u={id:e+":"+r,css:s,media:d,sourceMap:c};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}}});