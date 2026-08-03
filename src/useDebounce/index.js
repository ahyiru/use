import { useMemo as __WEBPACK_EXTERNAL_MODULE_react_useMemo__ } from "react";

;// external "react"

;// ../huxy/utils/debounce.js
const debounce = (func = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ const utils_debounce = (debounce);

;// ../huxy/use/useDebounce/index.jsx


const useDebounce = (fn, delay = 60) => __WEBPACK_EXTERNAL_MODULE_react_useMemo__(() => utils_debounce(fn, delay), [delay]);
/* harmony default export */ const use_useDebounce = (useDebounce);

export { use_useDebounce as default };
