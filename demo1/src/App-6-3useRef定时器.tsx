import React, { useLayoutEffect, useRef, useState } from 'react';

function App() {
   console.log('render')
   let timer = useRef<null | NodeJS.Timeout>(null)
   let [count, setCount] = useState(0)
   const handleClick = () => {
      timer.current = setInterval(() => {
         setCount(count => count + 1)
      }, 300)
   };
   const handleEnd = () => {
      if (timer.current) {
         clearInterval(timer.current)
         timer.current = null
      }
   };
   return (
      <div>
         <button onClick={handleClick}>开始计数</button>
         <button onClick={handleEnd}>结束计数</button>
         <div>{count}</div>
      </div>
   );
}

export default App;