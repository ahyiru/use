!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("use",["react"],n):"object"==typeof exports?exports.use=n(require("react")):t.use=n(t.React)}(this,(function(t){return function(){var n={7111:function(t,n,r){var e=r(9859),o=r(6733),i=r(9821),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},1176:function(t,n,r){var e=r(9859),o=r(5052),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},9540:function(t,n,r){var e=r(905),o=r(3231),i=r(9646),u=function(t){return function(n,r,u){var c,f=e(n),a=i(f),s=o(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},9996:function(t,n,r){var e=r(7636),o=r(5968),i=r(9337),u=r(2991),c=r(9646),f=r(7501),a=o([].push),s=function(t){var n=1==t,r=2==t,o=3==t,s=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,b,g,h){for(var x,d,m=u(y),w=i(m),O=e(b,g),S=c(w),j=0,P=h||f,E=n?P(y,S):r||l?P(y,0):void 0;S>j;j++)if((v||j in w)&&(d=O(x=w[j],j,m),t))if(n)E[j]=d;else if(d)switch(t){case 3:return!0;case 5:return x;case 6:return j;case 2:a(E,x)}else switch(t){case 4:return!1;case 7:a(E,x)}return p?-1:o||s?s:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},1460:function(t,n,r){var e=r(4229),o=r(95),i=r(6358),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},1909:function(t,n,r){var e=r(5968);t.exports=e([].slice)},8760:function(t,n,r){var e=r(9859),o=r(3718),i=r(2359),u=r(5052),c=r(95)("species"),f=e.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(i(n)&&(n===f||o(n.prototype))||u(n)&&null===(n=n[c]))&&(n=void 0)),void 0===n?f:n}},7501:function(t,n,r){var e=r(8760);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},7079:function(t,n,r){var e=r(5968),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},1589:function(t,n,r){var e=r(9859),o=r(1601),i=r(6733),u=r(7079),c=r(95)("toStringTag"),f=e.Object,a="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=f(t),c))?r:a?u(n):"Object"==(e=u(n))&&i(n.callee)?"Arguments":e}},7081:function(t,n,r){var e=r(8270),o=r(4826),i=r(7933),u=r(1787);t.exports=function(t,n,r){for(var c=o(n),f=u.f,a=i.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||f(t,p,a(n,p))}}},5762:function(t,n,r){var e=r(7400),o=r(1787),i=r(5358);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},5358:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},2324:function(t,n,r){"use strict";var e=r(9310),o=r(1787),i=r(5358);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},7400:function(t,n,r){var e=r(4229);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:function(t,n,r){var e=r(9859),o=r(5052),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},598:function(t,n,r){var e=r(1333);t.exports=e("navigator","userAgent")||""},6358:function(t,n,r){var e,o,i=r(9859),u=r(598),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},3837:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:function(t,n,r){var e=r(9859),o=r(7933).f,i=r(5762),u=r(7487),c=r(2079),f=r(7081),a=r(6541);t.exports=function(t,n){var r,s,p,l,v,y=t.target,b=t.global,g=t.stat;if(r=b?e:g?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(b?s:y+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},4229:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7636:function(t,n,r){var e=r(5968),o=r(7111),i=r(7188),u=e(e.bind);t.exports=function(t,n){return o(t),void 0===n?t:i?u(t,n):function(){return t.apply(n,arguments)}}},7188:function(t,n,r){var e=r(4229);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},266:function(t,n,r){var e=r(7188),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},1805:function(t,n,r){var e=r(7400),o=r(8270),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},5968:function(t,n,r){var e=r(7188),o=Function.prototype,i=o.bind,u=o.call,c=e&&i.bind(u,u);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},1333:function(t,n,r){var e=r(9859),o=r(6733),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},5300:function(t,n,r){var e=r(7111);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},9859:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},8270:function(t,n,r){var e=r(5968),o=r(2991),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},5977:function(t){t.exports={}},4394:function(t,n,r){var e=r(7400),o=r(4229),i=r(2635);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:function(t,n,r){var e=r(9859),o=r(5968),i=r(4229),u=r(7079),c=e.Object,f=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?f(t,""):c(t)}:c},8511:function(t,n,r){var e=r(5968),o=r(6733),i=r(5353),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},6407:function(t,n,r){var e,o,i,u=r(8694),c=r(9859),f=r(5968),a=r(5052),s=r(5762),p=r(8270),l=r(5353),v=r(4399),y=r(5977),b="Object already initialized",g=c.TypeError,h=c.WeakMap;if(u||l.state){var x=l.state||(l.state=new h),d=f(x.get),m=f(x.has),w=f(x.set);e=function(t,n){if(m(x,t))throw new g(b);return n.facade=t,w(x,t,n),n},o=function(t){return d(x,t)||{}},i=function(t){return m(x,t)}}else{var O=v("state");y[O]=!0,e=function(t,n){if(p(t,O))throw new g(b);return n.facade=t,s(t,O,n),n},o=function(t){return p(t,O)?t[O]:{}},i=function(t){return p(t,O)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}}}},3718:function(t,n,r){var e=r(7079);t.exports=Array.isArray||function(t){return"Array"==e(t)}},6733:function(t){t.exports=function(t){return"function"==typeof t}},2359:function(t,n,r){var e=r(5968),o=r(4229),i=r(6733),u=r(1589),c=r(1333),f=r(8511),a=function(){},s=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),y=!l.exec(a),b=function(t){if(!i(t))return!1;try{return p(a,s,t),!0}catch(t){return!1}},g=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,f(t))}catch(t){return!0}};g.sham=!0,t.exports=!p||o((function(){var t;return b(b.call)||!b(Object)||!b((function(){t=!0}))||t}))?g:b},6541:function(t,n,r){var e=r(4229),o=r(6733),i=/#|\.prototype\./,u=function(t,n){var r=f[c(t)];return r==s||r!=a&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},f=u.data={},a=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},5052:function(t,n,r){var e=r(6733);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},4231:function(t){t.exports=!1},9395:function(t,n,r){var e=r(9859),o=r(1333),i=r(6733),u=r(1321),c=r(6969),f=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,f(t))}},9646:function(t,n,r){var e=r(4237);t.exports=function(t){return e(t.length)}},3839:function(t,n,r){var e=r(6358),o=r(4229);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8694:function(t,n,r){var e=r(9859),o=r(6733),i=r(8511),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},1787:function(t,n,r){var e=r(9859),o=r(7400),i=r(4394),u=r(7137),c=r(1176),f=r(9310),a=e.TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l="enumerable",v="configurable",y="writable";n.f=o?u?function(t,n,r){if(c(t),n=f(n),c(r),"function"==typeof t&&"prototype"===n&&"value"in r&&y in r&&!r.writable){var e=p(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:v in r?r.configurable:e.configurable,enumerable:l in r?r.enumerable:e.enumerable,writable:!1})}return s(t,n,r)}:s:function(t,n,r){if(c(t),n=f(n),c(r),i)try{return s(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},7933:function(t,n,r){var e=r(7400),o=r(266),i=r(9195),u=r(5358),c=r(905),f=r(9310),a=r(8270),s=r(4394),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=f(n),s)try{return p(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},8151:function(t,n,r){var e=r(140),o=r(3837).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},894:function(t,n){n.f=Object.getOwnPropertySymbols},1321:function(t,n,r){var e=r(5968);t.exports=e({}.isPrototypeOf)},140:function(t,n,r){var e=r(5968),o=r(8270),i=r(905),u=r(9540).indexOf,c=r(5977),f=e([].push);t.exports=function(t,n){var r,e=i(t),a=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&f(s,r);for(;n.length>a;)o(e,r=n[a++])&&(~u(s,r)||f(s,r));return s}},9195:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},2914:function(t,n,r){var e=r(9859),o=r(266),i=r(6733),u=r(5052),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},4826:function(t,n,r){var e=r(1333),o=r(5968),i=r(8151),u=r(894),c=r(1176),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?f(n,r(t)):n}},7487:function(t,n,r){var e=r(9859),o=r(6733),i=r(8270),u=r(5762),c=r(2079),f=r(8511),a=r(6407),s=r(1805).CONFIGURABLE,p=a.get,l=a.enforce,v=String(String).split("String");(t.exports=function(t,n,r,f){var a,p=!!f&&!!f.unsafe,y=!!f&&!!f.enumerable,b=!!f&&!!f.noTargetGet,g=f&&void 0!==f.name?f.name:n;o(r)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||s&&r.name!==g)&&u(r,"name",g),(a=l(r)).source||(a.source=v.join("string"==typeof g?g:""))),t!==e?(p?!b&&t[n]&&(y=!0):delete t[n],y?t[n]=r:u(t,n,r)):y?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||f(this)}))},8885:function(t,n,r){var e=r(9859).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},2079:function(t,n,r){var e=r(9859),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},4399:function(t,n,r){var e=r(3036),o=r(1441),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:function(t,n,r){var e=r(9859),o=r(2079),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},3036:function(t,n,r){var e=r(4231),o=r(5353);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.2",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},3231:function(t,n,r){var e=r(3329),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},905:function(t,n,r){var e=r(9337),o=r(8885);t.exports=function(t){return e(o(t))}},3329:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?r:n)(e)}},4237:function(t,n,r){var e=r(3329),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},2991:function(t,n,r){var e=r(9859),o=r(8885),i=e.Object;t.exports=function(t){return i(o(t))}},2066:function(t,n,r){var e=r(9859),o=r(266),i=r(5052),u=r(9395),c=r(5300),f=r(2914),a=r(95),s=e.TypeError,p=a("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r,e=c(t,p);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!i(r)||u(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),f(t,n)}},9310:function(t,n,r){var e=r(2066),o=r(9395);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},1601:function(t,n,r){var e={};e[r(95)("toStringTag")]="z",t.exports="[object z]"===String(e)},9821:function(t,n,r){var e=r(9859).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},1441:function(t,n,r){var e=r(5968),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},6969:function(t,n,r){var e=r(3839);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7137:function(t,n,r){var e=r(7400),o=r(4229);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},95:function(t,n,r){var e=r(9859),o=r(3036),i=r(8270),u=r(1441),c=r(3839),f=r(6969),a=o("wks"),s=e.Symbol,p=s&&s.for,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&i(s,t)?a[t]=s[t]:a[t]=f&&p?p(n):l(n)}return a[t]}},3450:function(t,n,r){"use strict";var e=r(3103),o=r(9996).map;e({target:"Array",proto:!0,forced:!r(1460)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},2501:function(t,n,r){"use strict";var e=r(3103),o=r(9859),i=r(3718),u=r(2359),c=r(5052),f=r(3231),a=r(9646),s=r(905),p=r(2324),l=r(95),v=r(1460),y=r(1909),b=v("slice"),g=l("species"),h=o.Array,x=Math.max;e({target:"Array",proto:!0,forced:!b},{slice:function(t,n){var r,e,o,l=s(this),v=a(l),b=f(t,v),d=f(void 0===n?v:n,v);if(i(l)&&(r=l.constructor,(u(r)&&(r===h||i(r.prototype))||c(r)&&null===(r=r[g]))&&(r=void 0),r===h||void 0===r))return y(l,b,d);for(e=new(void 0===r?h:r)(x(d-b,0)),o=0;b<d;b++,o++)b in l&&p(e,o,l[b]);return e.length=o,e}})},3899:function(n){"use strict";n.exports=t}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,e),i.exports}e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return function(){"use strict";e.r(o),e.d(o,{default:function(){return i}});e(3450),e(2501);var t=e(3899),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=new Date(t),r=n.getFullYear(),e=n.getDay(),o=n.getMonth()+1,i=n.getDate(),u=n.getHours(),c=n.getMinutes(),f=n.getSeconds();return[r,o,i,u,c,f,e]},r=["日","一","二","三","四","五","六"],i=function(){var e=(0,t.useRef)(),o=(0,t.useState)(""),i=o[0],u=o[1],c=(0,t.useCallback)((function(){return clearInterval(e.current)}),[]);return(0,t.useEffect)((function(){return e.current=setInterval((function(){return u((t=n(),e="",["-","-"," ",":",":",""].map((function(n,r){var o;return e+=(null!=(o=t[r])?o:"")+n})),e+=" 星期".concat(r[t.slice(-1)[0]])));var t,e}),1e3),c}),[]),[i,c]}}(),o}()}));