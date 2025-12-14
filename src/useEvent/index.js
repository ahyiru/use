import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useLayoutEffect as __WEBPACK_EXTERNAL_MODULE_react_useLayoutEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__ } from "react";
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

;// external "react"

;// ../huxy/use/useEvent/index.jsx

const useEvent = (handler) => {
  const handlerRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__(null);
  __WEBPACK_EXTERNAL_MODULE_react_useLayoutEffect__(() => {
    handlerRef.current = handler;
  });
  return __WEBPACK_EXTERNAL_MODULE_react_useCallback__((...args) => handlerRef.current?.(...args), []);
};
/* harmony default export */ const use_useEvent = (useEvent);

export { use_useEvent as default };
