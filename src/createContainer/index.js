import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
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

;// ../huxy/use/createContainer/index.jsx

const createContainer = (store) => (name, initState) => {
  const [state, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(() => {
    const prevState = store?.getState(name);
    if (prevState !== void 0) {
      return prevState;
    }
    if (initState !== void 0) {
      store?.setState({ [name]: initState }, true);
    }
    return initState;
  });
  const update = __WEBPACK_EXTERNAL_MODULE_react_useCallback__((result) => store?.setState({ [name]: typeof result === "function" ? result(store?.getState(name)) : result }), []);
  const subscribe = __WEBPACK_EXTERNAL_MODULE_react_useCallback__((callback) => store?.subscribe(name, callback), []);
  const clean = __WEBPACK_EXTERNAL_MODULE_react_useCallback__((name2 = name2) => store?.clean(name2), []);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    store?.subscribe(name, (result) => setState(result));
  }, []);
  return [state, update, subscribe, clean];
};
/* harmony default export */ const use_createContainer = (createContainer);

export { use_createContainer as default };
