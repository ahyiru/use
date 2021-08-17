## 常用Hooks

<!--![useClickAway](./useClickAway.png)-->


### useAsync

[useAsync](./useAsync.md)

### useUpdate

```javascript
const incrementParameter=num=>++num;
const useUpdate=()=>{
  const [,setState]=useState(0);
  return useCallback(()=>setState(incrementParameter),[]);
};

```

### useCancelablePromise

```javascript
const useCancelablePromise=(deps=[])=>{
  const promises=useRef([]);
  useEffect(()=>{
    return ()=>{
      promises.current.map(fn=>fn.cancelFn());
      promises.current=[];
    };
  },deps);
  const cancellablePromise=(fn,delay=true)=>{
    const wrapPromise=cancelablePromise(fn,delay);
    if(promises.current.indexOf(wrapPromise)===-1){
      promises.current.push(wrapPromise);
    }
    return wrapPromise.promiseFn;
  };
  return {cancellablePromise};
};

```

### useRaf

```javascript
const useRaf=initialState=>{
  const frame=useRef(0);
  const [state,setState]=useState(initialState);
  const setRaf=useCallback(value=>{
    cancelAnimationFrame(frame.current);
    frame.current=requestAnimationFrame(()=>{
      setState(value);
    });
  },[]);
  useEffect(()=>{
    return ()=>cancelAnimationFrame(frame.current);
  },[]);
  return [state,setRaf];
};

```

### useScroll

```javascript
const useScroll=(element=null)=>{
  const [state,setRaf]=useRaf(getOffset(element));
  const handler=useCallback(()=>setRaf(getOffset(element)),[element]);
  useEffect(()=>{
    const listener=isElement(element)?element:window;
    listener.addEventListener('scroll',handler,{capture:false,passive:true});
    return ()=>listener.removeEventListener('scroll',handler);
  },[handler]);
  return state;
};

```

### useSearch

[useSearch](./useSearch.md)

```javascript
const useSearch=(initState,hlResult=toDom)=>{
  const [state,setState]=useState(initState);
  const setList=useCallback((...args)=>{
    const [data,keyword,...rest]=args;
    if(!keyword){
      setState(null);
    }else{
      args=[data,keyword,hlResult,...rest];
      const newList=filterList(...args);
      setState(newList);
    }
  },[]);
  return [state,setList];
};

```

### useWinResize

```javascript
const useWinResize=()=>{
  const [state,setRaf]=useRaf(getViewportSize());
  const handler=useCallback(()=>setRaf(getViewportSize()),[]);
  useEffect(()=>{
    window.addEventListener('resize',handler,false);
    return ()=>window.removeEventListener('resize',handler,false);
  },[handler]);
  return state;
};

```

### useEleResize

[useViewSize](./useViewSize.md)

```javascript
const useEleResize=(element=null)=>{
  const {bind,destroy}=resize(element);
  const [state,setRaf]=useRaf(getViewportSize(element));
  const handler=useCallback(()=>setRaf(getViewportSize(element)),[element]);
  useEffect(()=>{
    bind(handler);
    return ()=>destroy();
  },[handler]);
  return state;
};

```

### useClickAway

```javascript
const useClickAway=(ref,handleEvent,events='click')=>{
  const handler=useCallback(event=>{
    const el=ref?.current??ref;
    if(el&&!el.contains(event.target)){
      handleEvent(event);
    }
  },[ref,handleEvent]);
  useEffect(()=>{
    document.addEventListener(events,handler,false);
    return ()=>{
      document.removeEventListener(events,handler,false);
    };
  },[events,handler]);
};

```

### useDebounce

```javascript
const useDebounce=(fn,delay)=>useMemo(()=>debounce(fn,delay),[delay]);

```

[md文档](http://ihuxy.com:8010/)