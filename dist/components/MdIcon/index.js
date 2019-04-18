/*!
 * vue-material v1.0.0-beta-10.2
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var r,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{r=t("object"==typeof exports?require("vue"):e.Vue);for(n in r)("object"==typeof exports?exports:e)[n]=r[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=533)})({0:function(e,t){e.exports=function(e,t,r,n,o,u){var i,a,s,c,l,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(i=e,d=e.default),a="function"==typeof d?d.options:d,t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),r&&(a.functional=!0),o&&(a._scopeId=o),u?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=s):n&&(s=n),s&&(c=a.functional,l=c?a.render:a.beforeCreate,c?(a._injectStyles=s,a.render=function(e,t){return s.call(t),l(e,t)}):a.beforeCreate=l?[].concat(l,s):[s]),{esModule:i,exports:d,options:a}}},1:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,r=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||r(this)):null}}};return(0,a.default)(t,e)},o=r(4),u=n(o),i=r(6),a=n(i)},107:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),o=r(3),u=n(o),i=r(13),a=n(i),t.default=function(e){(0,u.default)(e),e.component(a.default.name,a.default)}},13:function(e,t,r){"use strict";function n(e){r(33)}var o,u,i,a,s,c,l,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=r(20),u=r.n(o);for(i in o)"default"!==i&&(function(e){r.d(t,e,(function(){return o[e]}))})(i);a=r(37),s=r(0),c=!1,l=n,d=null,f=null,m=s(u.a,a.a,c,l,d,f),t.default=m.exports},2:function(t,r){t.exports=e},20:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),o=r(1),u=n(o),i=r(34),a=n(i),t.default=new u.default({name:"MdIcon",components:{MdSvgLoader:a.default},props:{mdSrc:String}})},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};t.default={name:"MdSVGLoader",props:{mdSrc:{type:String,required:!0}},data:function(){return{html:null,error:null}},watch:{mdSrc:function(){this.html=null,this.loadSVG()}},methods:{isSVG:function(e){return"string"==typeof e&&e.indexOf("svg")>=0},setHtml:function(e){var t=this;n[this.mdSrc].then((function(e){return t.html=e,t.$nextTick()})).then((function(){return t.$emit("md-loaded")}))},unexpectedError:function(e){this.error="Something bad happened trying to fetch "+this.mdSrc+".",e(this.error)},loadSVG:function(){var e=this;n.hasOwnProperty(this.mdSrc)?this.setHtml():n[this.mdSrc]=new Promise(function(t,r){var n=new window.XMLHttpRequest;n.open("GET",e.mdSrc,!0),n.onload=function(){var o=n.getResponseHeader("content-type");200===n.status?e.isSVG(o)?(t(n.response),e.setHtml()):(e.error="The file "+e.mdSrc+" is not a valid SVG.",r(e.error)):n.status>=400&&n.status<500?(e.error="The file "+e.mdSrc+" do not exists.",r(e.error)):e.unexpectedError(r)},n.onerror=function(){return e.unexpectedError(r)},n.onabort=function(){return e.unexpectedError(r)},n.send()})}},mounted:function(){this.loadSVG()}}},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a,s;Object.defineProperty(t,"__esModule",{value:!0}),r(7),o=r(5),u=n(o),i=r(4),a=n(i),s=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(e){a.default.metaColors=e}},theme:{get:function(){return a.default.theme},set:function(e){a.default.theme=e}},enabled:{get:function(){return a.default.enabled},set:function(e){a.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},33:function(e,t){},34:function(e,t,r){"use strict";function n(e){r(35)}var o,u,i,a,s,c,l,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=r(21),u=r.n(o);for(i in o)"default"!==i&&(function(e){r.d(t,e,(function(){return o[e]}))})(i);a=r(36),s=r(0),c=!1,l=n,d=null,f=null,m=s(u.a,a.a,c,l,d,f),t.default=m.exports},35:function(e,t){},36:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("i",{staticClass:"md-svg-loader",domProps:{innerHTML:e._s(e.html)}})},o=[],u={render:n,staticRenderFns:o};t.a=u},37:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.mdSrc?r("md-svg-loader",{staticClass:"md-icon md-icon-image",class:[e.$mdActiveTheme],attrs:{"md-src":e.mdSrc},on:{"md-loaded":function(t){return e.$emit("md-loaded")}}}):r("i",{staticClass:"md-icon md-icon-font",class:[e.$mdActiveTheme]},[e._t("default")],2)},o=[],u={render:n,staticRenderFns:o};t.a=u},4:function(e,t,r){"use strict";var n,o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),u=null,i=null,a=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,r=this.enabled;t&&(r?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var r=this.getThemeName,n=this.themeTarget;e=r(e),n.classList.remove(r(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,r=this;return e?(t=e.mdTheme,(function e(n){if(n){var o=n.mdTheme,u=n.$parent;return o&&o!==t?o:e(u)}return r.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){i&&i.setAttribute("content",e)},setMaskColors:function(e){a&&a.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,r="#fff";e&&(t=window.getComputedStyle(document.documentElement),r=t.getPropertyValue("--"+e+"-primary")),r&&(this.setMicrosoftColors(r),this.setThemeColors(r),this.setMaskColors(r))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),i=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n)},533:function(e,t,r){e.exports=r(107)},6:function(e,t,r){"use strict";function n(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||u(e)}function u(e){return e.$$typeof===m}function i(e){return Array.isArray(e)?[]:{}}function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l(i(e),e,t):e}function s(e,t,r){return e.concat(t).map((function(e){return a(e,r)}))}function c(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach((function(t){n[t]=a(e[t],r)})),Object.keys(t).forEach((function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=l(e[o],t[o],r):n[o]=a(t[o],r)})),n}function l(e,t,r){var n,o,u;return r=r||{},r.arrayMerge=r.arrayMerge||s,r.isMergeableObject=r.isMergeableObject||d,n=Array.isArray(t),o=Array.isArray(e),u=n===o,u?n?r.arrayMerge(e,t,r):c(e,t,r):a(t,r)}var d,f,m,h;Object.defineProperty(t,"__esModule",{value:!0}),d=function(e){return n(e)&&!o(e)},f="function"==typeof Symbol&&Symbol.for,m=f?Symbol.for("react.element"):60103,l.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,r){return l(e,r,t)}),{})},h=l,t.default=h},7:function(e,t){}})}));