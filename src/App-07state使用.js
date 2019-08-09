import React, {Component,Fragment} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      msg: '哈哈哈123'
    }
  }
  render() { 
    return (  
      <Fragment>
        <h1> {this.state.msg} </h1>
      </Fragment>
    );
  }
}

export default App;
