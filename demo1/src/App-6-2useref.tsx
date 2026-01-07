import React, { useRef, useState } from 'react';

function App() {
  console.log('render');

  let num = useRef(0); // 组件在重新渲染的时候，useRef的值不会被重新初始化。
  // let num = 0; 这样写是不对的，因为每次组件重新渲染时，num都会被重新初始化为0，而useRef创建的ref对象在组件的整个生命周期内是持久的。
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    num.current = count;
  }
  return (
    <div>
      <h1>数据存储</h1>
      <div>{count}: {num.current}</div>
      <button onClick={handleClick}>增加</button>
    </div>
  );
}

export default App;

