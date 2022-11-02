(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("use", ["react"], factory);
	else if(typeof exports === 'object')
		exports["use"] = factory(require("react"));
	else
		root["use"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 53:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createContainer": function() { return /* reexport */ use_createContainer; },
  "useAsync": function() { return /* reexport */ use_useAsync; },
  "useCancelablePromise": function() { return /* reexport */ use_useCancelablePromise; },
  "useClickAway": function() { return /* reexport */ use_useClickAway; },
  "useDebounce": function() { return /* reexport */ use_useDebounce; },
  "useDelayState": function() { return /* reexport */ use_useDelayState; },
  "useEleResize": function() { return /* reexport */ use_useEleResize; },
  "useEvent": function() { return /* reexport */ use_useEvent; },
  "useFirstMounted": function() { return /* reexport */ use_useFirstMounted; },
  "useInterval": function() { return /* reexport */ use_useInterval; },
  "usePrevious": function() { return /* reexport */ use_usePrevious; },
  "useRaf": function() { return /* reexport */ use_useRaf; },
  "useScroll": function() { return /* reexport */ use_useScroll; },
  "useSearch": function() { return /* reexport */ use_useSearch; },
  "useStateFromProps": function() { return /* reexport */ use_useStateFromProps; },
  "useStore": function() { return /* reexport */ use_useStore; },
  "useTime": function() { return /* reexport */ use_useTime; },
  "useUpdate": function() { return /* reexport */ use_useUpdate; },
  "useUpdateEffect": function() { return /* reexport */ use_useUpdateEffect; },
  "useWinResize": function() { return /* reexport */ use_useWinResize; }
});

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/use/createContainer/index.jsx

const createContainer = store => (name, initState) => {
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(() => {
    const prevState = store == null ? void 0 : store.getState(name);
    if (prevState !== undefined) {
      return prevState;
    }
    if (initState !== undefined) {
      store == null ? void 0 : store.setState({
        [name]: initState
      }, true);
    }
    return initState;
  });
  const update = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(result => store == null ? void 0 : store.setState({
    [name]: typeof result === 'function' ? result(store == null ? void 0 : store.getState(name)) : result
  }), []);
  const subscribe = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(callback => store == null ? void 0 : store.subscribe(name, callback), []);
  const clean = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function () {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : name;
    return store == null ? void 0 : store.clean(name);
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    store == null ? void 0 : store.subscribe(name, result => setState(result));
  }, []);
  return [state, update, subscribe, clean];
};
/* harmony default export */ var use_createContainer = (createContainer);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
;// CONCATENATED MODULE: ../huxy/use/useAsync/index.jsx

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const useAsync = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    cancelablePromise
  } = use_useCancelablePromise();
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const resultRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const pendingRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const clearResult = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function () {
    let keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (Array.isArray(keys) && keys.length) {
      keys.map(key => resultRef.current[key] = initState[key]);
    } else {
      resultRef.current = initState;
      // pendingRef.current={};
    }
    // setState(resultRef.current);
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
;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ var utils_hasProp = (hasProp);
;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = ref => utils_hasProp(ref, 'current');
/* harmony default export */ var utils_isRef = (isRef);
;// CONCATENATED MODULE: ../huxy/use/useClickAway/index.jsx


const useClickAway = function (elRef, handleEvent) {
  let events = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = event => {
      const el = utils_isRef(elRef) ? elRef.current : elRef;
      if (el != null && el.contains && !el.contains(event.target)) {
        handleEvent(event);
      }
    };
    const evts = typeof events === 'string' ? [events] : events;
    evts.map(evt => {
      document.addEventListener(evt, handler, false);
    });
    return () => {
      evts.map(evt => {
        document.removeEventListener(evt, handler, false);
      });
    };
  }, [elRef, handleEvent, events]);
};
/* harmony default export */ var use_useClickAway = (useClickAway);
;// CONCATENATED MODULE: ../huxy/utils/debounce.js
const debounce = function () {
  let func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  let timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ var utils_debounce = (debounce);
;// CONCATENATED MODULE: ../huxy/use/useDebounce/index.jsx


const useDebounce = function (fn) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  return (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useMemo)(() => utils_debounce(fn, delay), [delay]);
};
// const useDebounce = (fn, delay) => useCallback(debounce(fn, delay), [delay]);
/* harmony default export */ var use_useDebounce = (useDebounce);
;// CONCATENATED MODULE: ../huxy/use/useFirstMounted/index.jsx

const useFirstMounted = () => {
  const isFirst = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
};
/* harmony default export */ var use_useFirstMounted = (useFirstMounted);
;// CONCATENATED MODULE: ../huxy/use/useUpdateEffect/index.jsx


const useUpdateEffect = function (effect) {
  let deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const isFirst = use_useFirstMounted();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};
/* harmony default export */ var use_useUpdateEffect = (useUpdateEffect);
;// CONCATENATED MODULE: ../huxy/use/useDelayState/index.jsx


const useDelayState = function (state) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 450;
  const [delayState, setDelayState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(state);
  use_useUpdateEffect(() => {
    let timer;
    if (state || delay === 0) {
      setDelayState(state);
    } else {
      timer = setTimeout(() => setDelayState(state), delay);
    }
    return () => timer && clearTimeout(timer);
  }, [state]);
  return [delayState, setDelayState];
};
/* harmony default export */ var use_useDelayState = (useDelayState);
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
/* harmony default export */ var utils_isBrowser = (isBrowser);
;// CONCATENATED MODULE: ../huxy/utils/isElement.js

const isElement = value => utils_getType(value).indexOf('element') > -1;
/* harmony default export */ var utils_isElement = (isElement);
;// CONCATENATED MODULE: ../huxy/utils/getViewportSize.js


const getViewportSize = function () {
  var _window$innerWidth, _window$innerHeight;
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (!utils_isBrowser()) {
    return {
      width: 0,
      height: 0
    };
  }
  if (utils_isElement(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }
  return {
    width: (_window$innerWidth = window.innerWidth) != null ? _window$innerWidth : document.documentElement.clientWidth,
    height: (_window$innerHeight = window.innerHeight) != null ? _window$innerHeight : document.documentElement.clientHeight
  };
};
/* harmony default export */ var utils_getViewportSize = (getViewportSize);
;// CONCATENATED MODULE: ../huxy/utils/resize.js



const createObj = (element, resizeListener) => {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }
  const obj = document.createElement('object');
  obj.setAttribute('style', 'display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0');
  obj.setAttribute('class', 'resize-sensor');
  obj.onload = () => {
    obj.contentDocument.defaultView.addEventListener('resize', resizeListener, false);
    resizeListener();
  };
  obj.type = 'text/html';
  element.appendChild(obj);
  obj.data = 'about:blank';
  return obj;
};
const resize = function (element) {
  var _element;
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  if (!utils_isBrowser()) {
    return;
  }
  element = utils_isRef(element) ? element.current : (_element = element) != null ? _element : document.body;
  let domObj = undefined;
  let listeners = [];
  const resizeListener = utils_debounce(() => listeners.map(listener => listener(element)), delay);
  const bind = cb => {
    if (!domObj) {
      domObj = createObj(element, resizeListener);
    }
    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  const unbind = cb => {
    const idx = listeners.indexOf(cb);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
    if (listeners.length === 0 && domObj) {
      destroy();
    }
  };
  const destroy = () => {
    if (domObj && domObj.parentNode) {
      if (domObj.contentDocument) {
        domObj.contentDocument.defaultView.removeEventListener('resize', resizeListener, false);
      }
      domObj.parentNode.removeChild(domObj);
      domObj = undefined;
      listeners = [];
    }
  };
  return {
    element,
    bind,
    unbind,
    destroy
  };
};
/* harmony default export */ var utils_resize = (resize);
;// CONCATENATED MODULE: ../huxy/use/useRaf/index.jsx

const useRaf = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const frame = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(0);
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const setRaf = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(value => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ var use_useRaf = (useRaf);
;// CONCATENATED MODULE: ../huxy/use/useEleResize/index.jsx





const useEleResize = function () {
  let ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  const element = utils_isRef(ref) ? ref.current : ref;
  const {
    bind,
    destroy
  } = utils_resize(element, delay);
  const [state, setState] = use_useRaf(utils_getViewportSize(element));
  // const handler=useCallback(()=>setRaf(getViewportSize(element)),[element]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = () => element && setState(utils_getViewportSize(element));
    bind(handler);
    return () => destroy();
  }, [element]);
  return state;
};
/* harmony default export */ var use_useEleResize = (useEleResize);
;// CONCATENATED MODULE: ../huxy/use/useEvent/index.jsx

const useEvent = handler => {
  const handlerRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(null);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useLayoutEffect)(() => {
    handlerRef.current = handler;
  });
  return (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(handlerRef.current, []);
};
/* harmony default export */ var use_useEvent = (useEvent);
;// CONCATENATED MODULE: ../huxy/use/useInterval/index.jsx

const useInterval = (callback, delay) => {
  const savedCallback = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (delay) {
      const timer = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
};
/* harmony default export */ var use_useInterval = (useInterval);
;// CONCATENATED MODULE: ../huxy/use/usePrevious/index.jsx

const usePrevious = value => {
  const ref = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
/* harmony default export */ var use_usePrevious = (usePrevious);
;// CONCATENATED MODULE: ../huxy/utils/getOffset.js


const getOffset = function () {
  var _ref, _window$pageXOffset, _ref2, _window$pageYOffset;
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (!utils_isBrowser()) {
    return {
      left: 0,
      top: 0
    };
  }
  if (utils_isElement(element)) {
    return {
      left: element.scrollLeft,
      top: element.scrollTop
    };
  }
  return {
    left: (_ref = (_window$pageXOffset = window.pageXOffset) != null ? _window$pageXOffset : document.documentElement.scrollLeft) != null ? _ref : document.body.scrollLeft,
    top: (_ref2 = (_window$pageYOffset = window.pageYOffset) != null ? _window$pageYOffset : document.documentElement.scrollTop) != null ? _ref2 : document.body.scrollTop
  };
};
/* harmony default export */ var utils_getOffset = (getOffset);
;// CONCATENATED MODULE: ../huxy/use/useScroll/index.jsx




const useScroll = function () {
  let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const [state, setState] = use_useRaf(utils_getOffset(element));
  // const handler=useCallback(()=>setRaf(getOffset(element)),[element]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = () => setState(utils_getOffset(element));
    const listener = utils_isElement(element) ? element : window;
    listener.addEventListener('scroll', handler, {
      capture: false,
      passive: true
    });
    return () => listener.removeEventListener('scroll', handler);
  }, [element]);
  return state;
};
/* harmony default export */ var use_useScroll = (useScroll);
;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = value => utils_getType(value) === 'array';
/* harmony default export */ var utils_isArray = (isArray);
;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js

const isValidArr = value => utils_isArray(value) && !!value.length;
/* harmony default export */ var utils_isValidArr = (isValidArr);
;// CONCATENATED MODULE: ../huxy/utils/filter.js

const filter = function (list, keyword) {
  let fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let exact = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let str2Dom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  if (!utils_isValidArr(list)) {
    return [];
  }
  if (!keyword) {
    return list;
  }
  fields = typeof fields === 'string' ? fields.split(',') : fields;
  return list.filter(v => {
    fields = fields.length > 0 ? fields : Object.keys(v);
    const matched = fields.filter(field => {
      const fieldValue = v[field];
      if (fieldValue == null) {
        return false;
      }
      if (exact) {
        return fieldValue === keyword;
      }
      const reg = new RegExp(keyword, 'gi');
      const match = fieldValue.toString().match(reg);
      // 高亮
      if (match && str2Dom) {
        v[field] = str2Dom(fieldValue.toString().replace(reg, `<span style="background-color:yellow">${match[0]}</span>`), {
          display: 'inline-block'
        });
      }
      return match;
    });
    return matched.length;
  });
};
/* harmony default export */ var utils_filter = (filter);
;// CONCATENATED MODULE: ../huxy/utils/unique.js


const unique = function (arr) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  if (!utils_isValidArr(arr)) {
    return arr;
  }
  const newArr = [];
  const keys = [];
  arr.map(item => {
    // const idKey=isObject(item)?item[key]??JSON.stringify(item):item;
    const idKey = utils_isObject(item) ? item[key] : item;
    if (!keys.includes(idKey)) {
      keys.push(idKey);
      newArr.push(item);
    }
  });
  return newArr;
};
/* harmony default export */ var utils_unique = (unique);
;// CONCATENATED MODULE: ../huxy/utils/isReactEle.js
const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';
/* harmony default export */ var utils_isReactEle = (isReactEle);
;// CONCATENATED MODULE: ../huxy/utils/isVueEle.js
const isVueEle = value => value == null ? void 0 : value.__v_isVNode;
/* harmony default export */ var utils_isVueEle = (isVueEle);
;// CONCATENATED MODULE: ../huxy/utils/clone.js





const clone = obj => {
  if (!utils_isArray(obj) && !utils_isObject(obj)) {
    return obj;
  }
  const newObj = utils_isArray(obj) ? [] : {};
  for (const i in obj) {
    if (utils_hasProp(obj, i)) {
      const item = obj[i];
      // newObj[i]=typeof item==='object'?item!==obj?clone(item):'cyclic':item;
      newObj[i] = utils_isReactEle(item) || utils_isVueEle(item) || typeof item !== 'object' ? item : item !== obj ? clone(item) : 'cyclic';
    } else {
      Object.setPrototypeOf(newObj, {
        [i]: obj[i]
      });
    }
  }
  return newObj;
};
/* harmony default export */ var utils_clone = (clone);
;// CONCATENATED MODULE: ../huxy/utils/filterList.js




const getMatched = fn => function (arr) {
  let childKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  if (!Array.isArray(arr)) {
    return arr;
  }
  const list = utils_clone(arr);
  const traver = data => {
    const matchedData = [];
    data.map(v => {
      if (utils_isValidArr(v[childKey])) {
        const matchChildren = traver(v[childKey]) || [];
        v[childKey] = matchChildren;
        if (matchChildren.length > 0) {
          matchedData.push(v);
        }
      }
    });
    return fn(data, matchedData);
  };
  return traver(list);
};
const filterList = function (data, keyword, str2Dom) {
  let fields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
  let idKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'id';
  let childKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'children';
  let exact = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  return getMatched((list, matchedItem) => utils_unique([...utils_filter(list, keyword, fields, exact, str2Dom), ...matchedItem], idKey))(data, childKey);
};
/* harmony default export */ var utils_filterList = (filterList);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
;// CONCATENATED MODULE: ../huxy/components/str2React/index.jsx

function str2React_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function str2React_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? str2React_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : str2React_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const str2React = (str, props) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", str2React_objectSpread({
  dangerouslySetInnerHTML: {
    __html: str
  }
}, props));
/* harmony default export */ var components_str2React = (str2React);
;// CONCATENATED MODULE: ../huxy/use/useSearch/index.jsx



const useSearch = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let str2Dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : components_str2React;
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const setList = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const [data, keyword, ...rest] = args;
    if (!keyword) {
      setState(null);
    } else {
      args = [data, keyword, str2Dom, ...rest];
      const newList = utils_filterList(...args);
      setState(newList);
    }
  }, []);
  return [state, setList];
};
/* harmony default export */ var use_useSearch = (useSearch);
;// CONCATENATED MODULE: ../huxy/use/useStateFromProps/index.jsx

const useStateFromProps = props => {
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(props);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => setState(props), [props]);
  return [state, setState];
};
/* harmony default export */ var use_useStateFromProps = (useStateFromProps);
;// CONCATENATED MODULE: ../huxy/utils/emitter.js
const emitter = () => {
  const hub = {};
  const on = (name, cb) => {
    if (!hub[name]) {
      hub[name] = [];
    }
    if (hub[name].indexOf(cb) === -1) {
      hub[name].push(cb);
    }
  };
  const emit = (name, data) => {
    if (hub[name]) {
      hub[name].map(cb => cb(data));
    }
  };
  const off = function (name) {
    let cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (hub[name]) {
      if (typeof cb !== 'function') {
        return hub[name] = [];
      }
      const index = hub[name].indexOf(cb);
      if (index > -1) {
        hub[name].splice(index, 1);
      }
    }
  };
  return {
    on,
    emit,
    off
  };
};
/* harmony default export */ var utils_emitter = (emitter);
;// CONCATENATED MODULE: ../huxy/utils/mergeOwnProp.js

function mergeOwnProp_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function mergeOwnProp_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? mergeOwnProp_ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : mergeOwnProp_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const getOwnProp = obj => {
  const ownProp = {};
  for (let k in obj) {
    if (!utils_hasProp(obj, k)) {
      ownProp[k] = obj[k];
    }
  }
  return ownProp;
};
const mergeOwnProp = (base, extend) => {
  if (!utils_isObject(base)) {
    return extend;
  }
  if (!utils_isObject(extend)) {
    return base;
  }
  const ownProp = mergeOwnProp_objectSpread(mergeOwnProp_objectSpread({}, getOwnProp(base)), getOwnProp(extend));
  const newObj = mergeOwnProp_objectSpread(mergeOwnProp_objectSpread({}, base), extend);
  Object.keys(ownProp).map(prop => {
    Object.setPrototypeOf(newObj, {
      [prop]: ownProp[prop]
    });
  });
  return newObj;
};
/* harmony default export */ var utils_mergeOwnProp = (mergeOwnProp);
;// CONCATENATED MODULE: ../huxy/utils/createStore.js




const createStore = () => {
  const {
    on,
    emit,
    off
  } = utils_emitter();
  const store = {};
  const getState = name => utils_clone(store[name]);
  const setState = function (state) {
    let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (typeof state === 'function') {
      state = state(utils_clone(store));
    }
    if (!utils_isObject(state)) {
      throw TypeError('必须传入object对象！');
    }
    const newState = utils_clone(state);
    Object.keys(newState).map(key => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = utils_isObject(newItem) && utils_isObject(oldItem) ? utils_mergeOwnProp(oldItem, newItem) : newItem;
      !init && emit(key, item);
      store[key] = item;
    });
    // return off;
  };

  const subscribe = (name, cb) => {
    on(name, cb);
    /* const value = getState(name);
    if(value !== undefined){
      cb(value);
    } */
    return () => off(name, cb);
  };
  const clean = name => {
    if (typeof name === 'string') {
      store[name] = undefined;
    } else if (Array.isArray(name)) {
      name.map(n => store[n] = undefined);
    } else {
      Object.keys(store).map(key => store[key] = undefined);
    }
  };
  return {
    getState,
    setState,
    subscribe,
    unsubscribe: off,
    clean
  };
};
/* harmony default export */ var utils_createStore = (createStore);
;// CONCATENATED MODULE: ../huxy/use/useStore/index.jsx


const store = utils_createStore();
const useStore = use_createContainer(store);
/* harmony default export */ var use_useStore = (useStore);
;// CONCATENATED MODULE: ../huxy/utils/getTime.js
const getTime = function () {
  let day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const M = date.getMinutes();
  const s = date.getSeconds();
  return [y, m, d, h, M, s, w];
};
/* harmony default export */ var utils_getTime = (getTime);
;// CONCATENATED MODULE: ../huxy/use/useTime/index.jsx


const week = ['日', '一', '二', '三', '四', '五', '六'];
const formatTime = () => {
  const arr = utils_getTime();
  let str = '';
  ['-', '-', ' ', ':', ':', ''].map((d, i) => {
    var _arr$i;
    return str += ((_arr$i = arr[i]) != null ? _arr$i : '') + d;
  });
  str += ` 星期${week[arr.slice(-1)[0]]}`;
  return str;
};
const useTime = () => {
  const timeRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const [time, setTime] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)('');
  const clear = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(() => clearInterval(timeRef.current), []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const getFormatTime = () => {
      timeRef.current = setInterval(() => setTime(formatTime()), 1000);
    };
    getFormatTime();
    return clear;
  }, []);
  return [time, clear];
};
/* harmony default export */ var use_useTime = (useTime);
;// CONCATENATED MODULE: ../huxy/use/useUpdate/index.jsx

const incrementParameter = num => ++num;
const useUpdate = () => {
  const [, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(0);
  return (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(() => setState(incrementParameter), []);
};
/* harmony default export */ var use_useUpdate = (useUpdate);
;// CONCATENATED MODULE: ../huxy/use/useWinResize/index.jsx



const useWinResize = () => {
  const [state, setState] = use_useRaf(utils_getViewportSize());
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = () => setState(utils_getViewportSize());
    window.addEventListener('resize', handler, false);
    return () => window.removeEventListener('resize', handler, false);
  }, []);
  return state;
};
/* harmony default export */ var use_useWinResize = (useWinResize);
;// CONCATENATED MODULE: ../huxy/use/index.js




















}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});