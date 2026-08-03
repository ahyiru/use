import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__ } from "react";

;// external "react"

;// ../huxy/use/usePrevious/index.jsx

const usePrevious = (value) => {
  const ref = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    ref.current = value;
  }, [value]);
  return ref;
};
/* harmony default export */ const use_usePrevious = (usePrevious);

export { use_usePrevious as default };
