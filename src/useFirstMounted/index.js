import { useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__ } from "react";

;// external "react"

;// ../huxy/use/useFirstMounted/index.jsx

const useFirstMounted = () => {
  const isFirst = __WEBPACK_EXTERNAL_MODULE_react_useRef__(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
};
/* harmony default export */ const use_useFirstMounted = (useFirstMounted);

export { use_useFirstMounted as default };
