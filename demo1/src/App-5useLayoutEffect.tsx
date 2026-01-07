import React, { useLayoutEffect, useEffect, useState } from 'react';

function App() {
  const scrollHander = (e) => {
    const scrollTop = e.currentTarget.scrollTop
    console.log('scrollTop', scrollTop);
    window.history.replaceState(null, '', `?top=${scrollTop}`)
  }

  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const top = params.get('top')
    if (top) {
      const container = document.getElementById('container')
      container.scrollTop = parseInt(top)
    }
  })

  return (
    <div onScroll={scrollHander} id="container" style={{height: '400px', overflow: 'auto'}}>
      {
        Array.from({length: 500}).map((item, index) => {
          return <div key={index}>item - {index + 1}</div>
        })
      }
    </div>
  );
}

export default App;



// import React, { useLayoutEffect, useEffect, useState } from 'react';

// function App() {
//    const [count, setCount] = useState(0)
//    //不阻塞DOM
//    useEffect(() => {
//       for (let i = 0; i < 10000; i++) {
//          //console.log(i);
//          setCount(count => count + 1)
//       }
//    }, []);
//    //阻塞DOM
//   //  useLayoutEffect(() => {
//   //     for (let i = 0; i < 50000; i++) {
//   //        //console.log(i);
//   //        setCount(count => count + 1)
//   //     }
//   //  }, []);
//    return (
//       <div>
//          <div>app </div>
//          {
//             Array.from({ length: count }).map((_, index) => (
//                <div key={index}>{index}</div>
//             ))
//          }
//       </div>
//    );
// }

// export default App;