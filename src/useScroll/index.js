import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);

const useCustomRef = (initRef = null) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initRef);
  return () => ref;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCustomRef);


/***/ }),

/***/ 630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);
/* harmony import */ var _huxy_use_useCustomRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(121);


const useRaf = (initState = {}) => {
  const frame = (0,_huxy_use_useCustomRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(0)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState);
  const setRaf = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRaf);


/***/ }),

/***/ 649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["useCallback"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useCallback), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useRef), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });

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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ use_useScroll)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(649);
;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ const utils_isElement = (isElement);

;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ const utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/getOffset.js


const getOffset = (element = null) => {
  if (!utils_isBrowser()) {
    return {
      left: 0,
      top: 0
    };
  }
  if (utils_isElement(element)) {
    return {
      left: element.scrollLeft,
      top: element.scrollTop
    };
  }
  return {
    left: window.pageXOffset ?? document.documentElement.scrollLeft ?? document.body.scrollLeft,
    top: window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop
  };
};
/* harmony default export */ const utils_getOffset = (getOffset);

// EXTERNAL MODULE: ../huxy/use/useRaf/index.jsx
var useRaf = __webpack_require__(630);
;// CONCATENATED MODULE: ../huxy/use/useScroll/index.jsx




const useScroll = (element = null) => {
  const [state, setState] = (0,useRaf/* default */.A)(utils_getOffset(element));
  (0,external_react_.useEffect)(() => {
    const handler = () => setState(utils_getOffset(element));
    const listener = utils_isElement(element) ? element : window;
    listener.addEventListener("scroll", handler, { capture: false, passive: true });
    return () => listener.removeEventListener("scroll", handler);
  }, [element]);
  return state;
};
/* harmony default export */ const use_useScroll = (useScroll);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
