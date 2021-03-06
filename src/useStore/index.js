(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__3899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3899__;

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
  "default": function() { return /* binding */ use_useStore; },
  "store": function() { return /* binding */ store; },
  "useStore": function() { return /* binding */ useStore; }
});

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
;// CONCATENATED MODULE: ../huxy/utils/isArray.js


const isArray = value => utils_getType(value) === 'array';

/* harmony default export */ var utils_isArray = (isArray);
;// CONCATENATED MODULE: ../huxy/utils/isReactEle.js
const isReactEle = value => (value == null ? void 0 : value['$$typeof']) && typeof value['$$typeof'] === 'symbol' && value['$$typeof']['description'] === 'react.element';

/* harmony default export */ var utils_isReactEle = (isReactEle);
;// CONCATENATED MODULE: ../huxy/utils/isVueEle.js
const isVueEle = value => value == null ? void 0 : value.__v_isVNode;

/* harmony default export */ var utils_isVueEle = (isVueEle);
;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);

/* harmony default export */ var utils_hasProp = (hasProp);
;// CONCATENATED MODULE: ../huxy/utils/clone.js






const clone = obj => {
  if (!utils_isArray(obj) && !utils_isObject(obj)) {
    return obj;
  }

  const newobj = utils_isArray(obj) ? [] : {};

  for (const i in obj) {
    if (utils_hasProp(obj, i)) {
      const item = obj[i]; // newobj[i]=typeof item==='object'?item!==obj?clone(item):'cyclic':item;

      newobj[i] = utils_isReactEle(item) || utils_isVueEle(item) || typeof item !== 'object' ? item : item !== obj ? clone(item) : 'cyclic';
    } else {
      Object.setPrototypeOf(newobj, {
        [i]: obj[i]
      });
    }
  }

  return newobj;
};

/* harmony default export */ var utils_clone = (clone);
;// CONCATENATED MODULE: ../huxy/utils/emitter.js
const emitter = () => {
  const hub = {};

  const on = (name, cb) => {
    var _hub$name;

    hub[name] = (_hub$name = hub[name]) != null ? _hub$name : [];

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
;// CONCATENATED MODULE: ../huxy/utils/createStore.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const createStore = () => {
  const {
    on,
    emit,
    off
  } = utils_emitter();
  const store = {};

  const getState = key => utils_clone(store[key]);

  const setState = function (state) {
    let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof state === 'function') {
      state = state(utils_clone(store));
    }

    if (!utils_isObject(state)) {
      throw TypeError('????????????object?????????');
    }

    const newState = utils_clone(state);
    Object.keys(newState).map(key => {
      const oldItem = store[key];
      const newItem = newState[key];
      const item = utils_isObject(newItem) && utils_isObject(oldItem) ? _objectSpread(_objectSpread({}, oldItem), newItem) : newItem;
      !init && emit(key, item);
      store[key] = item;
    }); // return off;
  };

  const subscribe = (key, cb) => {
    on(key, cb);
    /* const value=getState(key);
    if(value!==undefined){
      cb(value);
    } */

    return off;
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
    clean
  };
};

/* harmony default export */ var utils_createStore = (createStore);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(3899);
;// CONCATENATED MODULE: ../huxy/use/useStore/createContainer.jsx


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

/* harmony default export */ var useStore_createContainer = (createContainer);
;// CONCATENATED MODULE: ../huxy/use/useStore/index.jsx


const store = utils_createStore();
const useStore = useStore_createContainer(store);
/* harmony default export */ var use_useStore = (useStore);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});