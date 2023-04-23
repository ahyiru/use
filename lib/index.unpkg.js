import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
var f=__webpack_require__(810),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(837);
} else {}


/***/ }),

/***/ 810:
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fH": () => (/* reexport */ use_createContainer),
  "r5": () => (/* reexport */ use_useAsync),
  "Nd": () => (/* reexport */ use_useBase64),
  "KY": () => (/* reexport */ use_useCancelablePromise),
  "Vd": () => (/* reexport */ use_useClickAway),
  "Nr": () => (/* reexport */ use_useDebounce),
  "D": () => (/* reexport */ use_useDelayState),
  "Wy": () => (/* reexport */ use_useEleResize),
  "zX": () => (/* reexport */ use_useEvent),
  "Cd": () => (/* reexport */ use_useFirstMounted),
  "Yz": () => (/* reexport */ use_useInterval),
  "D9": () => (/* reexport */ use_usePrevious),
  "cb": () => (/* reexport */ use_useRaf),
  "vO": () => (/* reexport */ use_useScroll),
  "Rx": () => (/* reexport */ use_useSearch),
  "OH": () => (/* reexport */ use_useStateFromProps),
  "oR": () => (/* reexport */ use_useStore),
  "rE": () => (/* reexport */ use_useTime),
  "PQ": () => (/* reexport */ use_useUpdate),
  "rf": () => (/* reexport */ use_useUpdateEffect),
  "xd": () => (/* reexport */ use_useWinResize)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(810);
;// CONCATENATED MODULE: ../huxy/use/createContainer/index.jsx

const createContainer = (store) => (name, initState) => {
  const [state, setState] = (0,external_react_.useState)(() => {
    const prevState = store?.getState(name);
    if (prevState !== void 0) {
      return prevState;
    }
    if (initState !== void 0) {
      store?.setState({ [name]: initState }, true);
    }
    return initState;
  });
  const update = (0,external_react_.useCallback)((result) => store?.setState({ [name]: typeof result === "function" ? result(store?.getState(name)) : result }), []);
  const subscribe = (0,external_react_.useCallback)((callback) => store?.subscribe(name, callback), []);
  const clean = (0,external_react_.useCallback)((name2 = name2) => store?.clean(name2), []);
  (0,external_react_.useEffect)(() => {
    store?.subscribe(name, (result) => setState(result));
  }, []);
  return [state, update, subscribe, clean];
};
/* harmony default export */ const use_createContainer = (createContainer);

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isObject.js

const isObject = (value) => utils_getType(value) === "object";
/* harmony default export */ const utils_isObject = (isObject);

;// CONCATENATED MODULE: ../huxy/utils/isFunction.js

const isFunction = (value) => utils_getType(value) === "function";
/* harmony default export */ const utils_isFunction = (isFunction);

;// CONCATENATED MODULE: ../huxy/utils/isAsync.js



const isAsync = (value) => utils_getType(value) === "promise" || utils_isObject(value) && utils_isFunction(value.then);
/* harmony default export */ const utils_isAsync = (isAsync);

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
/* harmony default export */ const utils_cancelablePromise = (cancelablePromise);

;// CONCATENATED MODULE: ../huxy/use/useCancelablePromise/index.jsx


const useCancelablePromise = () => {
  const promises = (0,external_react_.useRef)([]);
  (0,external_react_.useEffect)(
    () => () => {
      promises.current.map((fn) => fn.cancelFn());
      promises.current = [];
    },
    []
  );
  const cancelablePromise = (0,external_react_.useCallback)((fn, delay = true) => {
    const wrapPromise = utils_cancelablePromise(fn, delay);
    if (promises.current.indexOf(wrapPromise) === -1) {
      promises.current.push(wrapPromise);
    }
    return wrapPromise.promiseFn;
  }, []);
  return { cancelablePromise };
};
/* harmony default export */ const use_useCancelablePromise = (useCancelablePromise);

;// CONCATENATED MODULE: ../huxy/use/useAsync/index.jsx


const useAsync = (initState = {}) => {
  const { cancelablePromise } = use_useCancelablePromise();
  const [state, setState] = (0,external_react_.useState)(initState);
  const resultRef = (0,external_react_.useRef)({});
  const pendingRef = (0,external_react_.useRef)({});
  const clearResult = (0,external_react_.useCallback)((keys = null) => {
    if (Array.isArray(keys) && keys.length) {
      keys.map((key) => resultRef.current[key] = initState[key]);
    } else {
      resultRef.current = initState;
    }
  }, []);
  const update = (0,external_react_.useCallback)((asyncFns, handler, reset = false) => {
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

;// CONCATENATED MODULE: ../huxy/utils/isUrl.js
const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ const utils_isUrl = (isUrl);

;// CONCATENATED MODULE: ../huxy/utils/loadBase64.js
const loadBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => resolve(reader.result));
  reader.addEventListener("error", (error) => reject(error));
});
/* harmony default export */ const utils_loadBase64 = (loadBase64);

;// CONCATENATED MODULE: ../huxy/utils/loadBase64ByUrl.js


const loadBase64ByUrl = async (url) => {
  if (!utils_isUrl(url)) {
    return url;
  }
  const response = await fetch(decodeURIComponent(url));
  const blob = await response.blob();
  const result = await utils_loadBase64(blob);
  return result;
};
/* harmony default export */ const utils_loadBase64ByUrl = (loadBase64ByUrl);

;// CONCATENATED MODULE: ../huxy/use/useBase64/index.jsx


const useBase64 = (url) => {
  const [dataUrl, setDataUrl] = (0,external_react_.useState)(url);
  (0,external_react_.useEffect)(() => {
    const getBase64 = async (url2) => {
      const base64 = await utils_loadBase64ByUrl(url2);
      setDataUrl(base64);
    };
    getBase64(url);
  }, [url]);
  return dataUrl;
};
/* harmony default export */ const use_useBase64 = (useBase64);

;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ const utils_isRef = (isRef);

;// CONCATENATED MODULE: ../huxy/use/useClickAway/index.jsx


const useClickAway = (elRef, handleEvent, events = "click") => {
  (0,external_react_.useEffect)(() => {
    const handler = (event) => {
      const el = utils_isRef(elRef) ? elRef.current : elRef;
      if (el?.contains && !el.contains(event.target)) {
        handleEvent(event);
      }
    };
    const evts = typeof events === "string" ? [events] : events;
    evts.map((evt) => {
      document.addEventListener(evt, handler, false);
    });
    return () => {
      evts.map((evt) => {
        document.removeEventListener(evt, handler, false);
      });
    };
  }, [elRef, handleEvent, events]);
};
/* harmony default export */ const use_useClickAway = (useClickAway);

;// CONCATENATED MODULE: ../huxy/utils/debounce.js
const debounce = (func = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ const utils_debounce = (debounce);

;// CONCATENATED MODULE: ../huxy/use/useDebounce/index.jsx


const useDebounce = (fn, delay = 60) => (0,external_react_.useMemo)(() => utils_debounce(fn, delay), [delay]);
/* harmony default export */ const use_useDebounce = (useDebounce);

;// CONCATENATED MODULE: ../huxy/use/useFirstMounted/index.jsx

const useFirstMounted = () => {
  const isFirst = (0,external_react_.useRef)(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
};
/* harmony default export */ const use_useFirstMounted = (useFirstMounted);

;// CONCATENATED MODULE: ../huxy/use/useUpdateEffect/index.jsx


const useUpdateEffect = (effect, deps = []) => {
  const isFirst = use_useFirstMounted();
  (0,external_react_.useEffect)(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};
/* harmony default export */ const use_useUpdateEffect = (useUpdateEffect);

;// CONCATENATED MODULE: ../huxy/use/useDelayState/index.jsx


const useDelayState = (state, delay = 450) => {
  const [delayState, setDelayState] = (0,external_react_.useState)(state);
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
/* harmony default export */ const use_useDelayState = (useDelayState);

;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ const utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ const utils_isElement = (isElement);

;// CONCATENATED MODULE: ../huxy/utils/getViewportSize.js


const getViewportSize = (element = null) => {
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
    width: window.innerWidth ?? document.documentElement.clientWidth,
    height: window.innerHeight ?? document.documentElement.clientHeight
  };
};
/* harmony default export */ const utils_getViewportSize = (getViewportSize);

;// CONCATENATED MODULE: ../huxy/utils/findChildEle.js
const findChildEle = (target, cname) => {
  const childrenEle = [];
  const children = target.children ?? [];
  for (let i = 0, l = children.length; i < l; i++) {
    const childEle = children[i];
    if (childEle.className.indexOf(cname) > -1) {
      childrenEle.push(childEle);
    }
  }
  if (childrenEle.length === 0) {
    return null;
  }
  if (childrenEle.length === 1) {
    return childrenEle[0];
  }
  return childrenEle;
};
/* harmony default export */ const utils_findChildEle = (findChildEle);

;// CONCATENATED MODULE: ../huxy/utils/resize.js




const createObj = (element, resizeListener) => {
  if (getComputedStyle(element).position === "static") {
    element.style.position = "relative";
  }
  const obj = document.createElement("object");
  obj.setAttribute("style", "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0");
  obj.setAttribute("class", "resize-sensor");
  obj.onload = () => {
    obj.contentDocument.defaultView.addEventListener("resize", resizeListener, false);
    resizeListener();
  };
  obj.type = "text/html";
  element.appendChild(obj);
  obj.data = "about:blank";
  return obj;
};
const resize = (element, delay = 60) => {
  if (!utils_isBrowser()) {
    return;
  }
  element = utils_isRef(element) ? element.current : element ?? document.body;
  let domObj = utils_findChildEle(element, "resize-sensor");
  let listeners = [];
  const resizeListener = utils_debounce(() => listeners.map((listener) => listener(element)), delay);
  const bind = (cb) => {
    if (!utils_findChildEle(element, "resize-sensor")) {
      domObj = createObj(element, resizeListener);
    }
    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  const unbind = (cb) => {
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
        domObj.contentDocument.defaultView.removeEventListener("resize", resizeListener, false);
      }
      domObj.parentNode.removeChild(domObj);
      domObj = void 0;
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
/* harmony default export */ const utils_resize = (resize);

;// CONCATENATED MODULE: ../huxy/use/useRaf/index.jsx

const useRaf = (initState = {}) => {
  const frame = (0,external_react_.useRef)(0);
  const [state, setState] = (0,external_react_.useState)(initState);
  const setRaf = (0,external_react_.useCallback)((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,external_react_.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ const use_useRaf = (useRaf);

;// CONCATENATED MODULE: ../huxy/use/useEleResize/index.jsx





const useEleResize = (ref = null, delay = 60) => {
  const element = utils_isRef(ref) ? ref.current : ref;
  const { bind, destroy } = utils_resize(element, delay);
  const [state, setState] = use_useRaf(utils_getViewportSize(element));
  (0,external_react_.useEffect)(() => {
    const handler = () => element && setState(utils_getViewportSize(element));
    bind(handler);
    return () => destroy();
  }, [element]);
  return state;
};
/* harmony default export */ const use_useEleResize = (useEleResize);

;// CONCATENATED MODULE: ../huxy/use/useEvent/index.jsx

const useEvent = (handler) => {
  const handlerRef = (0,external_react_.useRef)(null);
  (0,external_react_.useLayoutEffect)(() => {
    handlerRef.current = handler;
  });
  return (0,external_react_.useCallback)(handlerRef.current, []);
};
/* harmony default export */ const use_useEvent = (useEvent);

;// CONCATENATED MODULE: ../huxy/use/useInterval/index.jsx

const useInterval = (callback, delay) => {
  const savedCallback = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]);
  (0,external_react_.useEffect)(() => {
    if (delay) {
      const timer = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
};
/* harmony default export */ const use_useInterval = (useInterval);

;// CONCATENATED MODULE: ../huxy/use/usePrevious/index.jsx

const usePrevious = (value) => {
  const ref = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
/* harmony default export */ const use_usePrevious = (usePrevious);

;// CONCATENATED MODULE: ../huxy/utils/getOffset.js


const getOffset = (element = null) => {
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
    left: window.pageXOffset ?? document.documentElement.scrollLeft ?? document.body.scrollLeft,
    top: window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop
  };
};
/* harmony default export */ const utils_getOffset = (getOffset);

;// CONCATENATED MODULE: ../huxy/use/useScroll/index.jsx




const useScroll = (element = null) => {
  const [state, setState] = use_useRaf(utils_getOffset(element));
  (0,external_react_.useEffect)(() => {
    const handler = () => setState(utils_getOffset(element));
    const listener = utils_isElement(element) ? element : window;
    listener.addEventListener("scroll", handler, { capture: false, passive: true });
    return () => listener.removeEventListener("scroll", handler);
  }, [element]);
  return state;
};
/* harmony default export */ const use_useScroll = (useScroll);

;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ const utils_isArray = (isArray);

;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js

const isValidArr = (value) => utils_isArray(value) && !!value.length;
/* harmony default export */ const utils_isValidArr = (isValidArr);

;// CONCATENATED MODULE: ../huxy/utils/filter.js

const filter = (list, keyword, fields = [], exact = false, str2Dom = null) => {
  if (!utils_isValidArr(list)) {
    return [];
  }
  if (!keyword) {
    return list;
  }
  fields = typeof fields === "string" ? fields.split(",") : fields;
  return list.filter((v) => {
    fields = fields.length > 0 ? fields : Object.keys(v);
    const matched = fields.filter((field) => {
      const fieldValue = v[field];
      if (fieldValue == null) {
        return false;
      }
      if (exact) {
        return fieldValue === keyword;
      }
      const reg = new RegExp(keyword, "gi");
      const match = fieldValue.toString().match(reg);
      if (match && str2Dom) {
        v[field] = str2Dom(fieldValue.toString().replace(reg, `<span style="background-color:yellow">${match[0]}</span>`), { display: "inline-block" });
      }
      return match;
    });
    return matched.length;
  });
};
/* harmony default export */ const utils_filter = (filter);

;// CONCATENATED MODULE: ../huxy/utils/unique.js


const unique = (arr, key = "id") => {
  if (!utils_isValidArr(arr)) {
    return arr;
  }
  const newArr = [];
  const keys = [];
  arr.map((item) => {
    const idKey = utils_isObject(item) ? item[key] : item;
    if (!keys.includes(idKey)) {
      keys.push(idKey);
      newArr.push(item);
    }
  });
  return newArr;
};
/* harmony default export */ const utils_unique = (unique);

;// CONCATENATED MODULE: ../huxy/utils/isReactEle.js
const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"] === "react.element";
/* harmony default export */ const utils_isReactEle = (isReactEle);

;// CONCATENATED MODULE: ../huxy/utils/isVueEle.js
const isVueEle = (value) => value?.__v_isVNode;
/* harmony default export */ const utils_isVueEle = (isVueEle);

;// CONCATENATED MODULE: ../huxy/utils/clone.js





const clone = (obj) => {
  if (!utils_isArray(obj) && !utils_isObject(obj)) {
    return obj;
  }
  const newObj = utils_isArray(obj) ? [] : {};
  for (const i in obj) {
    if (utils_hasProp(obj, i)) {
      const item = obj[i];
      newObj[i] = utils_isReactEle(item) || utils_isVueEle(item) || typeof item !== "object" ? item : item !== obj ? clone(item) : "cyclic";
    } else {
      Object.setPrototypeOf(newObj, { [i]: obj[i] });
    }
  }
  return newObj;
};
/* harmony default export */ const utils_clone = (clone);

;// CONCATENATED MODULE: ../huxy/utils/filterList.js




const getMatched = (fn) => (arr, childKey = "children") => {
  if (!Array.isArray(arr)) {
    return arr;
  }
  const list = utils_clone(arr);
  const traver = (data) => {
    const matchedData = [];
    data.map((v) => {
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
const filterList = (data, keyword, str2Dom, fields = "name", idKey = "id", childKey = "children", exact = false) => getMatched((list, matchedItem) => utils_unique([...utils_filter(list, keyword, fields, exact, str2Dom), ...matchedItem], idKey))(data, childKey);
/* harmony default export */ const utils_filterList = (filterList);

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/components/str2React/index.jsx

const str2React = (str, props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: str }, ...props });
/* harmony default export */ const components_str2React = (str2React);

;// CONCATENATED MODULE: ../huxy/use/useSearch/index.jsx



const useSearch = (initState = null, str2Dom = components_str2React) => {
  const [state, setState] = (0,external_react_.useState)(initState);
  const setList = (0,external_react_.useCallback)((...args) => {
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
/* harmony default export */ const use_useSearch = (useSearch);

;// CONCATENATED MODULE: ../huxy/use/useStateFromProps/index.jsx

const useStateFromProps = (props) => {
  const [state, setState] = (0,external_react_.useState)(props);
  (0,external_react_.useEffect)(() => setState(props), [props]);
  return [state, setState];
};
/* harmony default export */ const use_useStateFromProps = (useStateFromProps);

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
      hub[name].map((cb) => cb(data));
    }
  };
  const off = (name, cb = null) => {
    if (hub[name]) {
      if (typeof cb !== "function") {
        return delete hub[name];
      }
      const index = hub[name].indexOf(cb);
      if (index > -1) {
        hub[name].splice(index, 1);
        if (!hub[name].length) {
          delete hub[name];
        }
      }
    }
  };
  return { on, emit, off };
};
/* harmony default export */ const utils_emitter = (emitter);

;// CONCATENATED MODULE: ../huxy/utils/mergeOwnProp.js


const getOwnProp = (obj) => {
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
  const ownProp = { ...getOwnProp(base), ...getOwnProp(extend) };
  const newObj = { ...base, ...extend };
  Object.keys(ownProp).map((prop) => {
    Object.setPrototypeOf(newObj, { [prop]: ownProp[prop] });
  });
  return newObj;
};
/* harmony default export */ const utils_mergeOwnProp = (mergeOwnProp);

;// CONCATENATED MODULE: ../huxy/utils/createStore.js




const createStore = () => {
  const { on, emit, off } = utils_emitter();
  const store = {};
  const getState = (name) => utils_clone(store[name]);
  const setState = (state, init = false) => {
    if (typeof state === "function") {
      state = state(utils_clone(store));
    }
    if (!utils_isObject(state)) {
      throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");
    }
    const newState = utils_clone(state);
    Object.keys(newState).map((key) => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = utils_isObject(newItem) && utils_isObject(oldItem) ? utils_mergeOwnProp(oldItem, newItem) : newItem;
      !init && emit(key, item);
      store[key] = item;
    });
  };
  const subscribe = (name, cb) => {
    on(name, cb);
    return () => off(name, cb);
  };
  const clean = (name) => {
    if (typeof name === "string") {
      store[name] = void 0;
    } else if (Array.isArray(name)) {
      name.map((n) => store[n] = void 0);
    } else {
      Object.keys(store).map((key) => store[key] = void 0);
    }
  };
  return { getState, setState, subscribe, unsubscribe: off, clean };
};
/* harmony default export */ const utils_createStore = (createStore);

;// CONCATENATED MODULE: ../huxy/use/useStore/index.jsx


const store = utils_createStore();
const useStore = use_createContainer(store);
/* harmony default export */ const use_useStore = (useStore);

;// CONCATENATED MODULE: ../huxy/utils/getTime.js
const addZero = (n) => n < 10 ? "0" + n : n;
const getTime = (day = /* @__PURE__ */ new Date()) => {
  const date = new Date(day);
  const y = date.getFullYear();
  const w = date.getDay();
  const m = addZero(date.getMonth() + 1);
  const d = addZero(date.getDate());
  const h = addZero(date.getHours());
  const M = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  return [y, m, d, h, M, s, w];
};
/* harmony default export */ const utils_getTime = (getTime);

;// CONCATENATED MODULE: ../huxy/utils/formatTime.js

const defWeek = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
const formatDelimiter = (str, target, s = "-") => str.replace(new RegExp(s, "g"), target);
const formatTime = (date = /* @__PURE__ */ new Date(), delimiter = ["-", "-", " ", ":", ":", ""], week = defWeek) => {
  const times = utils_getTime(date);
  let s = "";
  delimiter.map((d, i) => s += (i === 6 ? week[times[i]] : times[i] ?? "") + d);
  return s;
};
/* harmony default export */ const utils_formatTime = (formatTime);

;// CONCATENATED MODULE: ../huxy/use/useTime/index.jsx



const timeWithWeek = () => utils_formatTime(/* @__PURE__ */ new Date(), ["-", "-", " ", ":", ":", " ", ""]);
const useTime = () => {
  const [time, setTime] = (0,external_react_.useState)("");
  use_useInterval(() => {
    setTime(timeWithWeek());
  }, 1e3);
  return [time];
};
/* harmony default export */ const use_useTime = (useTime);

;// CONCATENATED MODULE: ../huxy/use/useUpdate/index.jsx

const incrementParameter = (num) => ++num;
const useUpdate = () => {
  const [, setState] = (0,external_react_.useState)(0);
  return (0,external_react_.useCallback)(() => setState(incrementParameter), []);
};
/* harmony default export */ const use_useUpdate = (useUpdate);

;// CONCATENATED MODULE: ../huxy/use/useWinResize/index.jsx



const useWinResize = () => {
  const [state, setState] = use_useRaf(utils_getViewportSize());
  (0,external_react_.useEffect)(() => {
    const handler = () => setState(utils_getViewportSize());
    window.addEventListener("resize", handler, false);
    return () => window.removeEventListener("resize", handler, false);
  }, []);
  return state;
};
/* harmony default export */ const use_useWinResize = (useWinResize);

;// CONCATENATED MODULE: ../huxy/use/index.js






















})();

var __webpack_exports__createContainer = __webpack_exports__.fH;
var __webpack_exports__useAsync = __webpack_exports__.r5;
var __webpack_exports__useBase64 = __webpack_exports__.Nd;
var __webpack_exports__useCancelablePromise = __webpack_exports__.KY;
var __webpack_exports__useClickAway = __webpack_exports__.Vd;
var __webpack_exports__useDebounce = __webpack_exports__.Nr;
var __webpack_exports__useDelayState = __webpack_exports__.D;
var __webpack_exports__useEleResize = __webpack_exports__.Wy;
var __webpack_exports__useEvent = __webpack_exports__.zX;
var __webpack_exports__useFirstMounted = __webpack_exports__.Cd;
var __webpack_exports__useInterval = __webpack_exports__.Yz;
var __webpack_exports__usePrevious = __webpack_exports__.D9;
var __webpack_exports__useRaf = __webpack_exports__.cb;
var __webpack_exports__useScroll = __webpack_exports__.vO;
var __webpack_exports__useSearch = __webpack_exports__.Rx;
var __webpack_exports__useStateFromProps = __webpack_exports__.OH;
var __webpack_exports__useStore = __webpack_exports__.oR;
var __webpack_exports__useTime = __webpack_exports__.rE;
var __webpack_exports__useUpdate = __webpack_exports__.PQ;
var __webpack_exports__useUpdateEffect = __webpack_exports__.rf;
var __webpack_exports__useWinResize = __webpack_exports__.xd;
export { __webpack_exports__createContainer as createContainer, __webpack_exports__useAsync as useAsync, __webpack_exports__useBase64 as useBase64, __webpack_exports__useCancelablePromise as useCancelablePromise, __webpack_exports__useClickAway as useClickAway, __webpack_exports__useDebounce as useDebounce, __webpack_exports__useDelayState as useDelayState, __webpack_exports__useEleResize as useEleResize, __webpack_exports__useEvent as useEvent, __webpack_exports__useFirstMounted as useFirstMounted, __webpack_exports__useInterval as useInterval, __webpack_exports__usePrevious as usePrevious, __webpack_exports__useRaf as useRaf, __webpack_exports__useScroll as useScroll, __webpack_exports__useSearch as useSearch, __webpack_exports__useStateFromProps as useStateFromProps, __webpack_exports__useStore as useStore, __webpack_exports__useTime as useTime, __webpack_exports__useUpdate as useUpdate, __webpack_exports__useUpdateEffect as useUpdateEffect, __webpack_exports__useWinResize as useWinResize };
