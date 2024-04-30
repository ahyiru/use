import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(649);

const useRaf = (initState = {}) => {
  const frame = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState);
  const setRaf = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRaf);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ use_useEleResize)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(649);
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ const utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

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

;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ const utils_isRef = (isRef);

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

// EXTERNAL MODULE: ../huxy/use/useRaf/index.jsx
var useRaf = __webpack_require__(630);
;// CONCATENATED MODULE: ../huxy/use/useEleResize/index.jsx





const useEleResize = (ref = null, delay = 60) => {
  const element = utils_isRef(ref) ? ref.current : ref;
  const { bind, destroy } = utils_resize(element, delay);
  const [state, setState] = (0,useRaf/* default */.A)(utils_getViewportSize(element));
  (0,external_react_.useEffect)(() => {
    const handler = () => element && setState(utils_getViewportSize(element));
    bind(handler);
    return () => destroy();
  }, [element]);
  return state;
};
/* harmony default export */ const use_useEleResize = (useEleResize);

})();

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
