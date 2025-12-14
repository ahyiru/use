import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
/******/ var __webpack_modules__ = ({

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ use_createContainer)
});

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

;// ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// ../huxy/utils/isObject.js

const isObject = (value) => utils_getType(value) === "object";
/* harmony default export */ const utils_isObject = (isObject);

;// ../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ const utils_isArray = (isArray);

;// ../huxy/utils/isReactEle.js
const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"]?.indexOf("react.") === 0;
/* harmony default export */ const utils_isReactEle = (isReactEle);

;// ../huxy/utils/isVueEle.js
const isVueEle = (value) => value?.__v_isVNode;
/* harmony default export */ const utils_isVueEle = (isVueEle);

;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/clone.js





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

;// ../huxy/utils/emitter.js
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

;// ../huxy/utils/mergeOwnProp.js


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

;// ../huxy/utils/createStore.js




const createStore = (bus = utils_emitter()) => {
  const { on, emit, off } = bus;
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

// EXTERNAL MODULE: ../huxy/use/createContainer/index.jsx + 1 modules
var createContainer = __webpack_require__(559);
;// ../huxy/use/useStore/index.jsx


const store = utils_createStore();
const useStore = (0,createContainer/* default */.A)(store);
/* harmony default export */ const use_useStore = (useStore);

export { use_useStore as default };
