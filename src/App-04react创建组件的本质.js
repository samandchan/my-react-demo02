import React from 'react';

function App() {
  return (
    React.createElement('div',{
      className: 'box',
      style: {color: 'yellow'}
    },
      React.createElement('h3',null,'标题')
    )
  );
}

export default App;
