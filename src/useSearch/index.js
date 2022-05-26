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

/***/ 837:
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

/***/ 322:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(837);
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
  "default": function() { return /* binding */ use_useSearch; }
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
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

/* harmony default export */ var utils_getType = (getType);
;// CONCATENATED MODULE: ../huxy/utils/isArray.js


const isArray = value => utils_getType(value) === 'array';

/* harmony default export */ var utils_isArray = (isArray);
;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js


const isValidArr = value => utils_isArray(value) && value.length;

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
      const match = fieldValue.toString().match(reg); // 高亮

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
;// CONCATENATED MODULE: ../huxy/utils/isObject.js


const isObject = value => utils_getType(value) === 'object';

/* harmony default export */ var utils_isObject = (isObject);
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
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/use/useSearch/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const str2React = (str, props) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread({
  dangerouslySetInnerHTML: {
    __html: str
  }
}, props));

const useSearch = function () {
  let initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let str2Dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : str2React;
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
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});