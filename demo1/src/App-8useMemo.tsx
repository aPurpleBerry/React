import React, { useState, useCallback } from 'react';

const map = new Map();
let count = 1;

function App() {
   const [input, setInput] = useState('');
   const changeValue = useCallback((e) => {
      setInput(e.target.value);
   }, [])
   // const changeValue = (e) => {
   //    setInput(e.target.value);
   // }

   if(!map.has(changeValue)) {
      // 能测试出来函数被销毁了
      map.set(changeValue, count++);
   }
   console.log(map.get(changeValue));

   return (
      <>
         <input type="text" value={input} onChange={changeValue}/>
      </>
   )
}

export default App;