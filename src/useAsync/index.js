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

/***/ 674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ use_useCancelablePromise; }
});

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ var utils_getType = (getType);
;// CONCATENATED MODULE: ../huxy/utils/isObject.js


const isObject = value => utils_getType(value) === 'object';

/* harmony default export */ var utils_isObject = (isObject);
;// CONCATENATED MODULE: ../huxy/utils/isFunction.js


const isFunction = value => utils_getType(value) === 'function';

/* harmony default export */ var utils_isFunction = (isFunction);
;// CONCATENATED MODULE: ../huxy/utils/isAsync.js




const isAsync = value => utils_getType(value) === 'promise' || utils_isObject(value) && utils_isFunction(value.then);

/* harmony default export */ var utils_isAsync = (isAsync);
;// CONCATENATED MODULE: ../huxy/utils/cancelablePromise.js


const cancelablePromise = function (promise) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120000;
  let msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '请求超时！';

  if (!utils_isAsync(promise)) {
    return {};
  }

  let cancelFn = null;
  let timer = null;
  const promiseFn = new Promise((resolve, reject) => {
    // let errMsg=false;
    cancelFn = function () {
      let msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'canceled';
      // errMsg=msg;
      clearTimeout(timer);
      resolve({
        canceled: true,
        errMsg: msg
      });
    };

    if (delay) {
      delay = typeof delay !== 'number' ? 120000 : delay;
      timer = setTimeout(() => cancelFn(msg), delay);
    }

    promise.then(result => {
      clearTimeout(timer);
      resolve({
        result,
        errMsg: false
      });
    }).catch(error => {
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
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => {
    promises.current.map(fn => fn.cancelFn());
    promises.current = [];
  }, []);
  const cancelablePromise = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function (fn) {
    let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const wrapPromise = utils_cancelablePromise(fn, delay);

    if (promises.current.indexOf(wrapPromise) === -1) {
      promises.current.push(wrapPromise);
    }

    return wrapPromise.promiseFn;
  }, []);
  return {
    cancelablePromise
  };
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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ use_useAsync; }
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.19.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
// EXTERNAL MODULE: ../huxy/use/useCancelablePromise/index.jsx + 5 modules
var useCancelablePromise = __webpack_require__(674);
;// CONCATENATED MODULE: ../huxy/use/useAsync/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const useAsync = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    cancelablePromise
  } = (0,useCancelablePromise["default"])();
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const resultRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const pendingRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const clearResult = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function () {
    let keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (Array.isArray(keys) && keys.length) {
      keys.map(key => resultRef.current[key] = initState[key]);
    } else {
      resultRef.current = initState; // pendingRef.current={};
    } // setState(resultRef.current);

  }, []);
  const update = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function (asyncFns, handler) {
    let reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    const keys = Object.keys(asyncFns);
    const eventKey = JSON.stringify(keys.sort());

    if (pendingRef.current[eventKey]) {
      return;
    }

    pendingRef.current[eventKey] = true;

    if (reset) {
      clearResult(Array.isArray(reset) ? reset : keys);
    }

    keys.map(key => {
      if (!resultRef.current[key]) {
        resultRef.current[key] = {};
      }

      resultRef.current[key].pending = true;
    });
    setState(_objectSpread({}, resultRef.current));

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];
      cancelablePromise(asyncFns[key]).then(res => {
        let {
          result,
          errMsg
        } = res;

        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }

        if (typeof handler === 'function') {
          result = handler(result) || result;
        }

        resultRef.current[key] = _objectSpread(_objectSpread({}, result), {}, {
          pending: false
        });

        if (errMsg !== false) {
          return;
        }

        setState(_objectSpread({}, resultRef.current));
      }).catch(error => {
        if (i === l - 1) {
          pendingRef.current[eventKey] = false;
        }

        resultRef.current[key] = {
          error,
          pending: false
        };
        setState(_objectSpread({}, resultRef.current));
        throw error;
      });
    }
  }, []);
  return [state, update, clearResult];
};

/* harmony default export */ var use_useAsync = (useAsync);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});