import './App.css'

function App() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div>
        {
          arr.map(item => {
            return <div key={item}>{item}</div>
          })
        }
      </div>
    </>
  )
}

export default App
///////////////////////////////////////////////////////////////////////////

// import './App.css'

// function App() {
//   const id1 = '123';
//   const cls1 = 'test';
//   const style1 = {color: 'blue', fontSize: '20px'};
//   const htmlString = '<div style="color: GREEN; font-size: 15px;">666: 如何绑定 innerHTML</div>';

//   return (
//     <>
//       <div id = {id1}>111: 如何绑定 id</div>
//       <div className={cls1}>222: 如何绑定 class</div>

//       <div className={`${cls1} aa bb cc`}>333: 如何绑定多个class</div>

//       <div style={style1}>444: 如何绑定 style</div>
//       <div style={{color: 'blue', fontSize: '20px'}}>555: 如何绑定 style</div>

//       <div dangerouslySetInnerHTML={{__html: htmlString}}></div>
//     </>
//   )
// }

// export default App
/////////////////////////////////////////////////////////////////////////////

// import './App.css'

// function App() {
//   const fn = () => 'test';
//   const num = 3.1415926;
//   const obj = {name: 1};
//   const test1 = () => {
//     console.log('test1');
//   }

//   const test2 = (params, e) => {
//     console.log('test2', e);
//   }

//   const test3 = <T,>(params: T) => {
//     console.log('test3');
//   }

//   return (
//     <>
//       <div>
//         {'hahaha' /** 字符串用法 */}
//         {123 /** 变量用法 */}
//         {fn() /** 函数用法 */}
//         {[1,2,3] /** 数组用法 --- 数组元素只能是普通类型*/}
//         { true ? 'true' : 'false' /** 三元表达式用法 */}
//         {num.toFixed(2) /** API 调用：表达式用法 */}
//       </div>

//       <div>
//         {JSON.stringify(obj)}
//       </div>

//       <div onClick={test1}>点击我，普通函数没有传参</div>
//       <div onClick={(e) => test2(123, e)}>点击我，传参函数，用高阶函数</div>
//       <div onClick={() => test3('111')}>点击我，泛型函数</div>


//     </>
//   )
// }

// export default App
