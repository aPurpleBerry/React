import './App.css'
import { useState } from 'react'

function App() {
  let [index, setIndex] = useState(0)
  const handleClick = () => {
    setIndex((prevIndex) => prevIndex + 1)
    setIndex((prevIndex) => prevIndex + 1)
    setIndex((prevIndex) => prevIndex + 1)
    // setIndex(index + 1)
    // setIndex(index + 1)
    console.log('index:', index)
  }
  return (
    <>
      <h1>index: {index}</h1>
      <button onClick={handleClick}>点击</button>
    </>
  )
}

export default App


// 对象
// import './App.css'
// import { useState } from 'react'

// function App() {
//   let [obj, setObj] = useState(() => {
//     const date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(); 
//     return {
//       date,
//       name: 'alice',
//       age: 18
//     }
//   })
//   const handleClick = () => {
//     // setObj({
//     //   ...obj,
//     //   name: 'bob',
//     // })
//     setObj(Object.assign({}, obj, { name: 'bob' }))
//   }
//   return (
//     <>
//       <div>日期:{obj.date}</div>
//       <div>名字:{obj.name}</div>
//       <div>年龄:{obj.age}</div>
//       <button onClick={handleClick}>
//         点击
//       </button>
//     </>
//   )
// }

// export default App

// 复杂数据类型
// import './App.css'
// import { useState } from 'react'

// function App() {
//   let [arr, setArr] = useState([3,2,5,4,1])
//   const handleClick = () => {
//     // 复制一份新的数组
//     let nextList = [...arr];
//     nextList.sort((a, b) => b - a);
//     setArr(nextList)
//   }
//   return (
//     <>
//       <div>{arr}</div>
//       <button onClick={handleClick}>
//         点击
//       </button>
//     </>
//   )
// }

// export default App

// 基本数据类型
// import './App.css'
// import { useState } from 'react'

// function App() {
//   let [str, setStr] = useState('test1')
//   const handleClick = () => {
//     setStr('test2')
//   }
//   return (
//     <>
//       <div>{str}</div>
//       <button onClick={handleClick}>
//         点击
//       </button>
//     </>
//   )
// }

// export default App