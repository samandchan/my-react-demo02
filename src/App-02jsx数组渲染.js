import React, {Fragment} from 'react';

function App() {
  let list = [
    {id: 0,name: 'lucy'}, {id: 1,name: 'tom'}, {id: 2,name: 'sam'}
  ]
  return (
    <Fragment>
      <h1>标题h1</h1>
      <h2>标题h2</h2>
      <ul>
        { list.map(v => <li key={v.id}> {v.name} </li>) }
      </ul>
    </Fragment>
  );
}

export default App;
