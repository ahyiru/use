import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ use_useCancelablePromise)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(649);
;// ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// ../huxy/utils/isObject.js

const isObject = (value) => utils_getType(value) === "object";
/* harmony default export */ const utils_isObject = (isObject);

;// ../huxy/utils/isFunction.js

const isFunction = (value) => utils_getType(value) === "function";
/* harmony default export */ const utils_isFunction = (isFunction);

;// ../huxy/utils/isAsync.js



const isAsync = (value) => utils_getType(value) === "promise" || utils_isObject(value) && utils_isFunction(value.then);
/* harmony default export */ const utils_isAsync = (isAsync);

;// ../huxy/utils/cancelablePromise.js

const cancelablePromise = (promise, delay = 3e5, msg = "\u8BF7\u6C42\u8D85\u65F6\uFF01") => {
  if (!utils_isAsync(promise)) {
    return {};
  }
  let cancelFn = null;
  let timer = null;
  const promiseFn = new Promise((resolve, reject) => {
    cancelFn = (msg2 = "canceled") => {
      clearTimeout(timer);
      resolve({ canceled: true, errMsg: msg2 });
    };
    if (delay) {
      delay = typeof delay !== "number" ? 12e4 : delay;
      timer = setTimeout(() => cancelFn(msg), delay);
    }
    promise.then((result) => {
      clearTimeout(timer);
      resolve({ result, errMsg: false });
    }).catch((error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
  return {
    promiseFn,
    cancelFn
  };
};
/* harmony default export */ const utils_cancelablePromise = (cancelablePromise);

;// ../huxy/use/useCancelablePromise/index.jsx


const useCancelablePromise = () => {
  const promises = (0,external_react_.useRef)([]);
  (0,external_react_.useEffect)(
    () => () => {
      promises.current.map((fn) => fn.cancelFn());
      promises.current = [];
    },
    []
  );
  return (0,external_react_.useCallback)((fn, delay = true) => {
    const wrapPromise = utils_cancelablePromise(fn, delay);
    if (promises.current.indexOf(wrapPromise) === -1) {
      promises.current.push(wrapPromise);
    }
    return wrapPromise.promiseFn;
  }, []);
};
/* harmony default export */ const use_useCancelablePromise = (useCancelablePromise);


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (use_useAsync)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);
/* harmony import */ var _huxy_use_useCancelablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(175);


const useAsync = (initState = {}) => {
  const cancelablePromise = (0,_huxy_use_useCancelablePromise__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState);
  const resultRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const pendingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const clearResult = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((keys = null) => {
    if (Array.isArray(keys) && keys.length) {
      keys.map((key) => resultRef.current[key] = initState[key]);
    } else {
      resultRef.current = initState;
    }
  }, []);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((asyncFns, handler, reset = false) => {
    const keys = Object.keys(asyncFns);
    const eventKey = JSON.stringify(keys.sort());
    if (pendingRef.current[eventKey]) {
      return;
    }
    pendingRef.current[eventKey] = true;
    if (reset) {
      clearResult(Array.isArray(reset) ? reset : keys);
    }
    keys.map((key) => {
      if (!resultRef.current[key]) {
        resultRef.current[key] = {};
      }
      resultRef.current[key].pending = true;
    });
    setState({ ...resultRef.current });
    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];
      cancelablePromise(asyncFns[key]).then((res) => {
        let { result, errMsg } = res;
        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }
        if (typeof handler === "function") {
          result = handler(result) || result;
        }
        resultRef.current[key] = { ...result, pending: false };
        if (errMsg !== false) {
          return;
        }
        setState({ ...resultRef.current });
      }).catch((error) => {
        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }
        resultRef.current[key] = { error, pending: false };
        setState({ ...resultRef.current });
        throw error;
      });
    }
  }, []);
  return [state, update, clearResult];
};
/* harmony default export */ const use_useAsync = (useAsync);

const __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
