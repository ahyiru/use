import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ // The require scope
/******/ var __webpack_require__ = {};
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
  "default": () => (/* binding */ use_useUpdate)
});

;// CONCATENATED MODULE: external "react"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_react_namespaceObject = x({ ["useCallback"]: () => __WEBPACK_EXTERNAL_MODULE_react__.useCallback, ["useState"]: () => __WEBPACK_EXTERNAL_MODULE_react__.useState });
;// CONCATENATED MODULE: ../huxy/use/useUpdate/index.jsx

const incrementParameter = (num) => ++num;
const useUpdate = () => {
  const [, setState] = (0,external_react_namespaceObject.useState)(0);
  return (0,external_react_namespaceObject.useCallback)(() => setState(incrementParameter), []);
};
/* harmony default export */ const use_useUpdate = (useUpdate);

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
