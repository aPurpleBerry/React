import React, { useState, useContext } from 'react';

interface User {
   name: string;
   age: number;
   phone: string;
}
// const UserCard = (props: {user: User}) => {
const UserCard = React.memo((props: {user: User}) => {
   console.log('render UserCard');
   const {user} = props;

   const styles = {
      backgroundColor: 'lightblue',
      padding: '20px',
      borderRadius: '10px',
      margin: '10px'
   }

   return <div style={styles}>
      <p>姓名：{user.name}</p>
      <p>年龄：{user.age}</p>
      <p>电话：{user.phone}</p>
   </div>
})

function App() {
   const [input, setInput] = useState('');
   const [user, setUser] = useState({
      name: '张三',
      age: 18,
      phone: '1111111'
   });

   const changeUser = () => {
      setUser({
         ...user,
         name: input
      })
   }

   return (
      <>
         <button onClick={changeUser}>更改user</button>
         <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
         <UserCard user={user}/>
      </>
   );
}

export default App;