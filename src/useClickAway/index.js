!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("use",["react"],t):"object"==typeof exports?exports.use=t(require("react")):e.use=t(e.React)}(this,(function(e){return function(){"use strict";var t={3899:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){r.r(o),r.d(o,{default:function(){return u}});var e=r(3899),t=function(e,t){return Object.prototype.hasOwnProperty.call(null!=e?e:{},t)},n=function(e){return t(e,"current")},u=function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click";(0,e.useEffect)((function(){var e=function(e){var o=n(t)?t.current:t;null!=o&&o.contains&&!o.contains(e.target)&&r(e)};return document.addEventListener(o,e,!1),function(){return document.removeEventListener(o,e,!1)}}),[t,r,o])}}(),o}()}));