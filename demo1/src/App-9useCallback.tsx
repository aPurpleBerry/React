import React, { useState, useCallback } from 'react';

interface Props {
   user: {
      name: string,
      age: number
   }
   callback: () => void
}
const Child = React.memo((props: Props) => {
   console.log('render Child');

   return <>
      <div>姓名：{props.user.name}</div>
      <div>年龄：{props.user.age}</div>
   </>
})

function App() {
   const [input, setInput] = useState('');
   const [user, setUser] = useState({
      name: '张三',
      age: 18
   });

   // const callback = () => {
   //    console.log('callback');
   // }
   const callback = useCallback(() => {
      console.log('callback');
   },[])
   
   return (
      <>
         input在输入的时候child不会重新渲染，因为这里使用了 React.memo
         <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
         <Child user={user} callback={callback}/>
      </>
   )
}

export default App;