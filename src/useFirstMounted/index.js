import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 13:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ use_useCustomRef)
});

;// external "react"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_namespaceObject = x({ ["useCallback"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useCallback), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useRef) });
;// ../huxy/use/useCustomRef/index.jsx

const useCustomRef = (initRef = null) => {
  const ref = (0,external_react_namespaceObject.useRef)((val) => ({ current: val }));
  return (0,external_react_namespaceObject.useCallback)((val = initRef) => ref.current(val), []);
};
/* harmony default export */ const use_useCustomRef = (useCustomRef);


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (use_useFirstMounted)
/* harmony export */ });
/* harmony import */ var _huxy_use_useCustomRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

const useFirstMounted = () => {
  const isFirst = (0,_huxy_use_useCustomRef__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(true)();
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
};
/* harmony default export */ const use_useFirstMounted = (useFirstMounted);

var __webpack_exports__default = __webpack_exports__.A
export { __webpack_exports__default as default };
