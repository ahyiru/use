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
  "default": function() { return /* binding */ use_useBase64; }
});

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/isUrl.js
const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ var utils_isUrl = (isUrl);

;// CONCATENATED MODULE: ../huxy/utils/loadBase64.js
const loadBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => resolve(reader.result));
  reader.addEventListener("error", (error) => reject(error));
});
/* harmony default export */ var utils_loadBase64 = (loadBase64);

;// CONCATENATED MODULE: ../huxy/utils/loadBase64ByUrl.js


const loadBase64ByUrl = async (url) => {
  if (!utils_isUrl(url)) {
    return url;
  }
  const response = await fetch(url);
  const blob = await response.blob();
  const result = await utils_loadBase64(blob);
  return result;
};
/* harmony default export */ var utils_loadBase64ByUrl = (loadBase64ByUrl);

;// CONCATENATED MODULE: ../huxy/use/useBase64/index.jsx


const useBase64 = (url) => {
  const [dataUrl, setDataUrl] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(url);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const getBase64 = async (url2) => {
      const base64 = await utils_loadBase64ByUrl(url2);
      setDataUrl(base64);
    };
    getBase64(url);
  }, []);
  return dataUrl;
};
/* harmony default export */ var use_useBase64 = (useBase64);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});