import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useLayoutEffect as __WEBPACK_EXTERNAL_MODULE_react_useLayoutEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__ } from "react";

;// external "react"

;// ../huxy/use/useEvent/index.jsx

const useEvent = (handler) => {
  const handlerRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__(null);
  __WEBPACK_EXTERNAL_MODULE_react_useLayoutEffect__(() => {
    handlerRef.current = handler;
  });
  return __WEBPACK_EXTERNAL_MODULE_react_useCallback__((...args) => handlerRef.current?.(...args), []);
};
/* harmony default export */ const use_useEvent = (useEvent);

export { use_useEvent as default };
