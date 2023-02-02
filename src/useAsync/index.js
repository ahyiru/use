(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ use_useCancelablePromise; }
});

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isObject.js

const isObject = (value) => utils_getType(value) === "object";
/* harmony default export */ var utils_isObject = (isObject);

;// CONCATENATED MODULE: ../huxy/utils/isFunction.js

const isFunction = (value) => utils_getType(value) === "function";
/* harmony default export */ var utils_isFunction = (isFunction);

;// CONCATENATED MODULE: ../huxy/utils/isAsync.js



const isAsync = (value) => utils_getType(value) === "promise" || utils_isObject(value) && utils_isFunction(value.then);
/* harmony default export */ var utils_isAsync = (isAsync);

;// CONCATENATED MODULE: ../huxy/utils/cancelablePromise.js

const cancelablePromise = (promise, delay = 12e4, msg = "\u8BF7\u6C42\u8D85\u65F6\uFF01") => {
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
/* harmony default export */ var utils_cancelablePromise = (cancelablePromise);

;// CONCATENATED MODULE: ../huxy/use/useCancelablePromise/index.jsx


const useCancelablePromise = () => {
  const promises = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)([]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(
    () => () => {
      promises.current.map((fn) => fn.cancelFn());
      promises.current = [];
    },
    []
  );
  const cancelablePromise = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((fn, delay = true) => {
    const wrapPromise = utils_cancelablePromise(fn, delay);
    if (promises.current.indexOf(wrapPromise) === -1) {
      promises.current.push(wrapPromise);
    }
    return wrapPromise.promiseFn;
  }, []);
  return { cancelablePromise };
};
/* harmony default export */ var use_useCancelablePromise = (useCancelablePromise);


/***/ }),

/***/ 899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(899);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCancelablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);


const useAsync = (initState = {}) => {
  const { cancelablePromise } = (0,_useCancelablePromise__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
/* harmony default export */ __webpack_exports__["default"] = (useAsync);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});