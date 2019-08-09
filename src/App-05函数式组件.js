import React from 'react';

// const App = () => <h1>标题h1</h1>
const App = () => {
  let msg = 1000
  setTimeout(() => {
    msg = 2000
    console.log(msg);
  }, 2000);
  return (
    <div className="app">
      {msg}
    </div>
  )
}

export default App;
