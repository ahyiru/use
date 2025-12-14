import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
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

;// ../huxy/use/useStateFromProps/index.jsx

const useStateFromProps = (props) => {
  const [state, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(props);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => setState(props), [props]);
  return [state, setState];
};
/* harmony default export */ const use_useStateFromProps = (useStateFromProps);

export { use_useStateFromProps as default };
