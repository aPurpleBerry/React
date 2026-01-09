import React, { useState, useContext } from 'react';

interface ThemeContextType {
   theme: string;
   setTheme: (theme: string) => void;
}

// 1 创建全局上下文（想要 App 共享给别人的数据
const ThemeContext = React.createContext({} as ThemeContextType);
// 返回的一个组件 ThemeContext

const Child = () => {
   const theme = useContext(ThemeContext);
   console.log(theme, 'Child');
   const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: theme.theme === 'dark' ? '#000' : '#fff',
      color: theme.theme === 'dark' ? '#fff' : '#000',
      border: '1px solid #f5f5f5',
   }
   return <div>
      <div style={styles}>
         child
      </div>
   </div>
}

const Parent = () => {
   const theme = useContext(ThemeContext);
   console.log(theme, 'Parent');
   const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: theme.theme === 'dark' ? '#000' : '#fff',
      color: theme.theme === 'dark' ? '#fff' : '#000',
      border: '1px solid #f5f5f5',
   }
   return <div>
      <div style={styles}>
         parent
      </div>
      <Child />
   </div>
}

function App() {
   const [theme, setTheme] = useState('light');
   return (
      <div>
         <button onClick={() => setTheme(theme === 'light' ? 'dark': 'light')}>切换</button>
         <ThemeContext value={{ theme, setTheme }}>
            <Parent />
         </ThemeContext>
      </div>
   );
}

export default App;