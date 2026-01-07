import './App.css'
import { useEffect, useState } from 'react'

interface UserData {
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState(1);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
  }, [userId])
  return (
    <>
    <div>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)}/>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Name: {userData?.name}</p>
            <p>Email: {userData?.email}</p>
            <p>Username: {userData?.username}</p>
            <p>Phone: {userData?.phone}</p>
            <p>Website: {userData?.website}</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App


// import './App.css'
// import { useEffect, useState } from 'react'

// const Child = (props: any) => {
//   useEffect(() => {
//     console.log('init')
//     let timer = setTimeout(() => {
//       fetch('http://localhost:5173?name=' + props.name)
//     }, 500)
//     return () => {
//       console.log('destroy')
//       clearTimeout(timer)
//     }
//   }, [props.name])
//   return <div>child</div>
// }

// function App() {
//   const [name, setName] = useState('child组件')
//   const [isShow, setIsShow] = useState(true)
//   return (
//     <>
//       <div>
//         <button onClick={() => setIsShow(!isShow)}>111</button>
//         <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
//         {
//           isShow && <Child name={name} />
//         }
//       </div>
//     </>
//   )
// }

// export default App



// import './App.css'
// import { useEffect, useState } from 'react'

// const Child = (props: any) => {
//   useEffect(() => {
//     console.log('child组件被创建了')
//     return () => {
//       console.log('child组件被销毁了')
//     }
//   }, [props.name])
//   return <div>child</div>
// }

// function App() {
//   const [isShow, setIsShow] = useState(true)
//   return (
//     <>
//       <div>
//         <button onClick={() => setIsShow(!isShow)}>111</button>
//         {
//           isShow && <Child name="child组件" />
//         }
//       </div>
//     </>
//   )
// }

// export default App



// import './App.css'
// import { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.log('count变化了', count)
//   }, [count])
//   return (
//     <>
//       <div>
//         <button onClick={() => setCount(count+1)}>111</button>
//       </div>
//     </>
//   )
// }

// export default App