!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=310)}({1:function(t,e){t.exports=function(t,e,n,r,o){var s,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,i=t.default);var u="function"==typeof i?i.options:i;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?u.render=function(t,e){return c.call(e),f(t,e)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:i,options:u}}},310:function(t,e,n){t.exports=n(311)},311:function(t,e,n){Vue.component("index",n(312));new Vue({el:"#index"})},312:function(t,e,n){var r=n(1)(n(313),n(314),null,null,null);t.exports=r.exports},313:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),$(".loading-bar").fadeOut("100"),e.default={data:function(){return{products:[]}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;$.ajax({url:"/products/popular",type:"GET",cache:!1,dataType:"json"}).done(function(e){e.data.forEach(function(e){t.products.push({guid:e.guid,title:e.title,featureImage:e.featureImage})})}).fail(function(){}).always(function(){})}}}},314:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._m(0),t._v(" "),t._l(t.products,function(e){return n("div",{staticClass:"col-md-3 margin-top-30"},[n("div",{staticClass:"focus-product"},[n("img",{staticClass:"focus-img",attrs:{src:"images/p-01.jpg",src:e.featureImage}}),t._v(" "),n("div",{staticClass:"focus-info"},[n("span",[t._v(t._s(e.title))])])])])})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-12 margin-top-30"},[n("h3",[t._v("焦點商品")])])}]}}});