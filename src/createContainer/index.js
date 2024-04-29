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
  A: () => (/* binding */ use_createContainer)
});

;// CONCATENATED MODULE: external "react"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_namespaceObject = x({ ["useCallback"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useCallback), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });
;// CONCATENATED MODULE: ../huxy/use/createContainer/index.jsx

const createContainer = (store) => (name, initState) => {
  const [state, setState] = (0,external_react_namespaceObject.useState)(() => {
    const prevState = store?.getState(name);
    if (prevState !== void 0) {
      return prevState;
    }
    if (initState !== void 0) {
      store?.setState({ [name]: initState }, true);
    }
    return initState;
  });
  const update = (0,external_react_namespaceObject.useCallback)((result) => store?.setState({ [name]: typeof result === "function" ? result(store?.getState(name)) : result }), []);
  const subscribe = (0,external_react_namespaceObject.useCallback)((callback) => store?.subscribe(name, callback), []);
  const clean = (0,external_react_namespaceObject.useCallback)((name2 = name2) => store?.clean(name2), []);
  (0,external_react_namespaceObject.useEffect)(() => {
    store?.subscribe(name, (result) => setState(result));
  }, []);
  return [state, update, subscribe, clean];
};
/* harmony default export */ const use_createContainer = (createContainer);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
