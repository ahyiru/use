import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";

;// external "react"

;// ../huxy/use/useUpdate/index.jsx

const incrementParameter = (num) => ++num;
const useUpdate = () => {
  const [, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(0);
  return __WEBPACK_EXTERNAL_MODULE_react_useCallback__(() => setState(incrementParameter), []);
};
/* harmony default export */ const use_useUpdate = (useUpdate);

export { use_useUpdate as default };
