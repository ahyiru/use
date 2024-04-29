import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ use_useInterval)
});

;// CONCATENATED MODULE: external "react"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_namespaceObject = x({ ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useRef), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });
;// CONCATENATED MODULE: ../huxy/use/useInterval/index.jsx

const useInterval = (callback, delay) => {
  const savedCallback = (0,external_react_namespaceObject.useRef)();
  (0,external_react_namespaceObject.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]);
  (0,external_react_namespaceObject.useEffect)(() => {
    if (delay) {
      const timer = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
};
/* harmony default export */ const use_useInterval = (useInterval);


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ use_useTime)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(649);
;// CONCATENATED MODULE: ../huxy/utils/getTime.js
const addZero = (n) => n < 10 ? "0" + n : n;
const getTime = (day = /* @__PURE__ */ new Date()) => {
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());
  const h = addZero(date.getHours());
  const M = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  return [y, m, d, h, M, s, w];
};
/* harmony default export */ const utils_getTime = (getTime);

;// CONCATENATED MODULE: ../huxy/utils/formatTime.js

const defWeek = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
const formatDelimiter = (str, target, s = "-") => str.replace(new RegExp(s, "g"), target);
const formatTime = (date = /* @__PURE__ */ new Date(), delimiter = ["-", "-", " ", ":", ":", ""], week = defWeek) => {
  const times = utils_getTime(date);
  let s = "";
  delimiter.map((d, i) => s += (i === 6 ? week[times[i]] : times[i] ?? "") + d);
  return s;
};
/* harmony default export */ const utils_formatTime = (formatTime);

// EXTERNAL MODULE: ../huxy/use/useInterval/index.jsx + 1 modules
var useInterval = __webpack_require__(922);
;// CONCATENATED MODULE: ../huxy/use/useTime/index.jsx



const timeWithWeek = () => utils_formatTime(/* @__PURE__ */ new Date(), ["-", "-", " ", ":", ":", " ", ""]);
const useTime = () => {
  const [time, setTime] = (0,external_react_.useState)("");
  (0,useInterval/* default */.A)(() => {
    setTime(timeWithWeek());
  }, 1e3);
  return [time];
};
/* harmony default export */ const use_useTime = (useTime);

})();

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
