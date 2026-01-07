import React, { useRef } from 'react';

function App() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDOM = () => {
    console.log(divRef.current)
    console.dir(divRef.current)
    divRef.current!.style.backgroundColor = 'red';
    // 这个感叹号是非空断言操作符，告诉TypeScript我们确定divRef.current不会是null
  }
  return (
    <div>
      <div>app </div>
      <div ref={divRef}>1111111111111111111111111</div>
      <button onClick={handleDOM}>操作按钮</button>
    </div>
  );
}

export default App;

