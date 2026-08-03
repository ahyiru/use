import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";

;// external "react"

;// ../huxy/use/createContainer/index.jsx

const createContainer = (store) => (name, initState) => {
  const [state, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(() => {
    const prevState = store?.getState(name);
    if (prevState !== void 0) {
      return prevState;
    }
    if (initState !== void 0) {
      store?.setState({ [name]: initState }, true);
    }
    return initState;
  });
  const update = __WEBPACK_EXTERNAL_MODULE_react_useCallback__((result) => store?.setState({ [name]: typeof result === "function" ? result(store?.getState(name)) : result }), []);
  const subscribe = __WEBPACK_EXTERNAL_MODULE_react_useCallback__((callback) => store?.subscribe(name, callback), []);
  const clean = __WEBPACK_EXTERNAL_MODULE_react_useCallback__((name2 = name2) => store?.clean(name2), []);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    store?.subscribe(name, (result) => setState(result));
  }, []);
  return [state, update, subscribe, clean];
};
/* harmony default export */ const use_createContainer = (createContainer);

export { use_createContainer as default };
