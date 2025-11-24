import './App.css'
import { useReducer } from 'react'

function App() {
  const initData = [
    { name: '苹果', price: 100, count: 1, id: 1, isEdit: false },
    { name: '菠萝', price: 200, count: 1, id: 2, isEdit: false },
    { name: '梨子', price: 300, count: 1, id: 3, isEdit: false }
  ]

  type Data = typeof initData;
  const reducer = (state: Data, action: {type: 'add' | 'sub' | 'delete' | 'edit' |'update_name' | 'blur', id: number, newName?: string}) => {
    const item = state.find(item => item.id === action.id)!
    console.log(item);
    switch(action.type) {
      case 'add':
        item.count += 1
        return [...state]
      case 'sub':
        item.count -= 1
        return [...state]
      case 'delete':
        return state.filter(item => item.id !== action.id)
      case 'edit':
        item.isEdit = !item.isEdit
        return [...state]
      case 'update_name':
        item.name = action.newName!
        return [...state]
      case 'blur':
        item.isEdit = false
        return [...state]
      default:
        return state
    }
  }

  const [data, dispatch] = useReducer(reducer, initData)
  return (
    <>
      <h1>购物车</h1>
      <table border={1} width={600}>
        <thead>
          <tr>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return <tr key = {item.id}>
                <td>{
                    item.isEdit ?
                    <input type='text' value={item.name}
                      onChange={(e) => dispatch({type: 'update_name', id: item.id, newName: e.target.value})}
                      onBlur={() => dispatch({type: 'blur', id: item.id})}>
                    </input>
                     :
                    item.name
                  }
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => dispatch({type: 'add', id: item.id})}>+</button>
                  {item.count}
                  <button onClick={() => dispatch({type: 'sub', id: item.id})}>-</button>
                </td>
                <td>{item.price * item.count}</td>
                <td>
                  <button onClick={() => dispatch({type: 'edit', id: item.id})}>修改</button>
                  <button onClick={() => dispatch({type: 'delete', id: item.id})}>删除</button>
                </td>
              </tr>
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td>总价: {data.reduce((a, b) => a + b.price * b.count, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default App

// import './App.css'
// import { useReducer } from 'react'

// function App() {
//   const initialArg = {count: -1};
//   const init = (state) => {
//     return {
//       count: Math.abs(state.count)
//     }
//   }

//   const reducer = (state, action: {type: 'add' | 'sub'}) => {
//     switch(action.type) {
//       case 'add':
//         return {
//           count: state.count + 1
//         }
//       case 'sub':
//         return {
//           count: state.count - 1
//         }
//       default:
//         return state
//     }

//   }
//   const [state, dispath] = useReducer(reducer, initialArg, init);
//   return (
//     <>
//       <h1>index: {state.count}</h1>
//       <button onClick={() => dispath({type: 'sub'})}>-</button>
//       <button onClick={() => dispath({type: 'add'})}>+</button>
//     </>
//   )
// }

// export default App


// import './App.css'
// import { useReducer } from 'react'

// function App() {
//   // 默认值
//   const initState = {
//     count: -1
//   }

//   // 初始化函数
//   const initFn = (state) => {
//     console.log('init: ', state)
//     return {
//       // 不想让 count 为负数
//       count: Math.abs(state.count)
//     }
//   }

//   const reducer = (state, action: {type: 'add' | 'sub'}) => {
//     switch (action.type) {
//       case 'add':
//         // 这里要返回一个新对象
//         return {
//           count: state.count + 1
//         }
//       case 'sub':
//         return {
//           count: state.count - 1
//         }
//       default:
//         return state
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initState, initFn)

//   return (
//     <>
//       <h1>index: {state.count}</h1>
//       <button onClick={() => dispatch({ type: 'sub' })}>-1</button>
//       <button  onClick={() => dispatch({ type: 'add' })}>+1</button>
//     </>
//   )
// }

// export default App
