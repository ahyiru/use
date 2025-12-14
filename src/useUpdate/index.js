import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
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

;// ../huxy/use/useUpdate/index.jsx

const incrementParameter = (num) => ++num;
const useUpdate = () => {
  const [, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(0);
  return __WEBPACK_EXTERNAL_MODULE_react_useCallback__(() => setState(incrementParameter), []);
};
/* harmony default export */ const use_useUpdate = (useUpdate);

export { use_useUpdate as default };
