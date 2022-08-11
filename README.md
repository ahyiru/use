## use

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ahyiru/router/blob/develop/LICENSE)
[![npm version](https://img.shields.io/npm/v/@huxy/use.svg)](https://www.npmjs.com/package/@huxy/use)
[![Build Status](https://api.travis-ci.com/ahyiru/use.svg?branch=master)](https://app.travis-ci.com/github/ahyiru/use)
[![](https://img.shields.io/badge/blog-ihuxy-blue.svg)](http://ihuxy.com/)

### useAsync

异步处理

```jsx
const [result, updateResult] = useAsync({});
const update = useCallback((params) => updateResult({res: fetchList({...commonParams, ...params})}, handleResult), []);

```

- result：返回结果
- updateResult：更新函数。如：{userList: fetcher()}，userList：存在result里面的字段名，fetcher：自己的请求封装函数
- handleResult：处理返回结果函数

### useCancelablePromise

可取消异步函数

```jsx
const {cancelablePromise}=useCancelablePromise();

cancelablePromise(asyncFn,delay).then(res=>{

}).catch(error=>{
  
});

```

- delay：超时中断，默认true，超时时间2分钟

### useClickAway

点击区域外部时触发的事件

```jsx
useClickAway(liRef, (e) => li.open && itemClick(e, li));

```

第一个参数为区域元素，第二个为点击区域外部时的回调函数。

### useDebounce

```jsx
useDebounce(fn,delay=60)

```

第一个参数为需要防抖的函数，第二个为防抖时间，默认60ms。

### useDelayState

延迟获取state

- delay：延迟时间，默认450ms

```jsx
const [delayOpen]=useDelayState(open,delay);

```

### useFirstMounted

是否为第一次加载

```jsx
const isFirst=useFirstMounted();

```

### usePrevious

上一个state值

```jsx
const prevState=usePrevious(state);

```

### useRaf

requestAnimationFrame

```jsx
const [state,setState]=useRaf({});

```

### useScroll

```jsx
const state=useScroll(element);

```

传入监听滚动的元素，默认window

返回state为滚动位置信息。

### useSearch

搜索函数

```jsx
const [filterTree, setFilterTree] = useSearch(null);

setFilterTree(data, keyword, fields='name', childKey='children', exact=false);

```

- data：列表数据
- keyword：搜索值
- fields：搜索字段，字符串或数组
- childKey：子节点key
- exact：是否为模糊搜索

### useStore

状态管理

```jsx
const [state,update,subscribe,clean] = useStore(name, initState);

```

input：

- name：事件key
- initState：初始化值

output：

- state：状态值
- update：更新状态
- subscribe：监听状态
- clean：清除监听

可以自定义状态管理库：

```jsx
const store=createStore();

const useStore=createContainer(store);

```

### useUpdate

更新

```jsx
const rerender=useUpdate();
rerender();

```

### useUpdateEffect

初次进入不执行，state发生变更时执行。

```jsx
useUpdateEffect(()=>{
  ...
  return ()=>...;
},[state]);

```

### useWinResize/useEleResize

```jsx
const {width} = useWinResize();

// delay：节流时间
const state = useEleResize(ref, delay=250);

```
