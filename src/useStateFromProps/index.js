import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";

;// external "react"

;// ../huxy/use/useStateFromProps/index.jsx

const useStateFromProps = (props) => {
  const [state, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(props);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => setState(props), [props]);
  return [state, setState];
};
/* harmony default export */ const use_useStateFromProps = (useStateFromProps);

export { use_useStateFromProps as default };
