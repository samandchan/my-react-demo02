import React, {Fragment} from 'react';

function App() {
  let htmlStr = '<h3>这是一个标题<h3>'
  return (
    <Fragment>
      <label htmlFor="username">姓名</label>
      <input id="username" type="text"/>
      <div className="hh">123</div>
      <div dangerouslySetInnerHTML={ {__html: htmlStr} }></div>
      <div style={ {width: 100, height: 100, backgroundColor: "orange"} }></div>
    </Fragment>
  );
}

export default App;
