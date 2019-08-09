import React from 'react';

function App() {
  let name = 'lucy'
  let age = 22
  let girl = {
    name: 'lucy',
    age: 22
  }
  function showMsg(a) {  
    return a
  }
  return (
    <div className="App">
      <h1> {name} </h1>
      <h1> {age} </h1>
      <h1> {true} </h1>
      <h1> {false} </h1>
      <h2> {undefined} </h2>
      <h2> {null} </h2>
      <h2> {NaN} </h2>
      <h3> {girl.name} </h3>
      <h3> {true? '123': '456'} </h3>
      <h4> {showMsg('程序')} </h4>
    </div>
  );
}

export default App;
