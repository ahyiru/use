import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__ } from "react";

;// external "react"

;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/isRef.js

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return utils_hasProp(refObj, "current");
};
/* harmony default export */ const utils_isRef = (isRef);

;// ../huxy/use/useClickAway/index.jsx


const useClickAway = (elRef, handleEvent, events = "click") => {
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    const handler = (event) => {
      const ele = typeof elRef === "function" ? elRef() : elRef;
      const el = utils_isRef(ele) ? ele.current : ele;
      if (el?.contains && !el.contains(event.target)) {
        handleEvent(event);
      }
    };
    const evts = typeof events === "string" ? [events] : events;
    evts.map((evt) => {
      document.addEventListener(evt, handler, false);
    });
    return () => {
      evts.map((evt) => {
        document.removeEventListener(evt, handler, false);
      });
    };
  }, [elRef]);
};
/* harmony default export */ const use_useClickAway = (useClickAway);

export { use_useClickAway as default };
