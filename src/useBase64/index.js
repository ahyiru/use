import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ // The require scope
/******/ var __webpack_require__ = {};
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

;// external "react"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_namespaceObject = x({ ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });
;// ../huxy/utils/isUrl.js
const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ const utils_isUrl = (isUrl);

;// ../huxy/utils/loadBase64.js
const loadBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => resolve(reader.result));
  reader.addEventListener("error", (error) => reject(error));
});
/* harmony default export */ const utils_loadBase64 = (loadBase64);

;// ../huxy/utils/loadBase64ByUrl.js


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

;// ../huxy/use/useBase64/index.jsx


const useBase64 = (url) => {
  const [dataUrl, setDataUrl] = (0,external_react_namespaceObject.useState)(url);
  (0,external_react_namespaceObject.useEffect)(() => {
    const getBase64 = async (url2) => {
      const base64 = await utils_loadBase64ByUrl(url2);
      setDataUrl(base64);
    };
    getBase64(url);
  }, [url]);
  return dataUrl;
};
/* harmony default export */ const use_useBase64 = (useBase64);

export { use_useBase64 as default };
